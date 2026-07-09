/**
 * Rewrites a prerendered page's <head> so it describes that page, not the template.
 *
 * Every edit is scoped to the substring before </head>. The <body> is never touched:
 * lucide icons emit <title> elements inside inline SVGs, and a global title regex
 * would eat one.
 *
 * Two rules govern this module, both learned the hard way:
 *
 *   1. FAIL LOUD. Every rewrite is asserted after the fact. A `String.replace` whose
 *      regex misses returns the input unchanged and throws nothing — which would ship
 *      34 pages all claiming to be the homepage, with a green build. That is the exact
 *      disaster this module exists to prevent, so a missed rewrite is a build failure.
 *
 *   2. NEVER ASSUME LAYOUT. By the time puppeteer serializes the DOM, Metricool and
 *      gtag have injected <script> tags into <head>, and the JSON-LD blocks no longer
 *      sit next to the HTML comments that label them. Match by identity, not position.
 *
 * All replacements go through replacer *functions*. A plain string replacement would
 * interpret `$&`, `$1`, `$'` etc. inside a description as a replacement pattern and
 * silently corrupt the output.
 */
import { ROUTE_SEO, NOT_FOUND_SEO, breadcrumbFor, canonicalFor } from "../src/lib/seo";

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Replace with a literal string — never interpreted as a replacement pattern. */
const sub = (html: string, re: RegExp, literal: string) => html.replace(re, () => literal);

/**
 * Set a <meta> tag's content, inserting the tag if absent.
 *
 * Matches the tag by attribute identity rather than by exact attribute order, because
 * a stricter pattern that misses takes the *insert* branch and emits a second, stale
 * tag alongside the first — two conflicting og:url values are worse than none.
 */
function setMeta(head: string, attr: "name" | "property", key: string, content: string): string {
  const re = new RegExp(`<meta[^>]*\\b${escapeRe(attr)}="${escapeRe(key)}"[^>]*>`, "gi");
  const matches = [...head.matchAll(re)];
  if (matches.length > 1) {
    throw new Error(`Duplicate <meta ${attr}="${key}"> in <head> — refusing to guess which to rewrite`);
  }
  const tag = `<meta ${attr}="${key}" content="${escapeHtml(content)}" />`;
  if (matches.length === 1) return sub(head, new RegExp(escapeRe(matches[0][0])), tag);
  return head.replace(/(\s*)<\/head>/i, () => `\n    ${tag}\n  </head>`);
}

interface LdBlock {
  raw: string;
  json: any;
  types: string[];
}

/** Every <script type="application/ld+json"> block in `head`, parsed. */
function ldBlocks(head: string): LdBlock[] {
  const re = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  const out: LdBlock[] = [];
  for (const m of head.matchAll(re)) {
    let json: any;
    try {
      json = JSON.parse(m[1]);
    } catch (e) {
      // Fail loud, never skip. A block we can't parse might be the homepage FAQPage or
      // the org @graph — both of which MUST be stripped from subpages. Skipping it would
      // silently stamp homepage schema onto all 34 pages with a green build.
      throw new Error(
        `Unparseable JSON-LD in <head> — refusing to prerender: ${m[0].slice(0, 120)}… (${(e as Error).message})`,
      );
    }
    const types = new Set<string>();
    const walk = (n: unknown) => {
      if (Array.isArray(n)) return n.forEach(walk);
      if (!n || typeof n !== "object") return;
      const o = n as Record<string, unknown>;
      if (typeof o["@type"] === "string") types.add(o["@type"]);
      Object.values(o).forEach(walk);
    };
    walk(json);
    out.push({ raw: m[0], json, types: [...types] });
  }
  return out;
}

function breadcrumbJsonLd(route: string): string {
  const itemListElement = breadcrumbFor(route).map((crumb, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: crumb.name,
    ...(crumb.item ? { item: crumb.item } : {}),
  }));
  const payload = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement };
  return `<script type="application/ld+json">\n${JSON.stringify(payload, null, 2)}\n</script>`;
}

/**
 * Remove the HTML comment whose body contains `label`, plus its leading indent.
 * `(?:(?!-->)[\s\S])*?` stops the comment body from running past its own terminator —
 * a plain lazy `[\s\S]*?` would swallow everything up to the last `-->` in the document.
 */
function dropComment(head: string, label: string): string {
  const re = new RegExp(
    `[ \\t]*<!--(?:(?!-->)[\\s\\S])*?${escapeRe(label)}(?:(?!-->)[\\s\\S])*?-->\\n?`,
  );
  return sub(head, re, "");
}

/** Count non-overlapping matches. */
const count = (head: string, re: RegExp) => [...head.matchAll(re)].length;

const TRACKING_HOST =
  /googletagmanager\.com|tracker\.metricool\.com|google-analytics\.com|googleads\.g\.doubleclick\.net|googleadservices\.com|googlesyndication\.com/;

/** `src` of every <script> the template's own <head> authors. Everything else is injected. */
const AUTHORED_SCRIPT_SRCS: Set<string> = await (async () => {
  const tpl = await Bun.file(new URL("../index.html", import.meta.url)).text();
  const head = tpl.slice(0, tpl.search(/<\/head>/i));
  return new Set([...head.matchAll(/<script[^>]*\bsrc="([^"]*)"/g)].map((m) => m[1]));
})();

/**
 * Remove analytics <script> elements that the page injected while it was being rendered.
 *
 * puppeteer serializes the DOM *after* gtag.js and Metricool's loader have run, so their
 * dynamically-appended <script> tags get frozen into the static HTML. Left in, they cause:
 *   - Metricool double-counting (baked be.js tag loads, then the inline loader appends another)
 *   - a stale Google Ads conversion beacon whose `url=` param is the build server's localhost
 *   - a gtag loader pinned to whatever container hash existed at build time
 *
 * Only scripts the template itself authors survive. Inline scripts are untouched — the gtag
 * config and Metricool loader must still run in the visitor's browser.
 */
export function stripInjectedTracking(head: string): string {
  for (const m of head.matchAll(/<script\b[^>]*\bsrc="([^"]*)"[^>]*>\s*<\/script>/g)) {
    const src = m[1].replace(/&amp;/g, "&");
    if (!TRACKING_HOST.test(src)) continue;
    if (AUTHORED_SCRIPT_SRCS.has(m[1]) || AUTHORED_SCRIPT_SRCS.has(src)) continue;
    head = sub(head, new RegExp(escapeRe(m[0])), "");
  }
  return head.replace(/[ \t]*\n{3,}/g, "\n\n");
}

/** Every authored tracking script survived; every injected one is gone. */
function assertTracking(head: string, route: string): void {
  const srcs = [...head.matchAll(/<script\b[^>]*\bsrc="([^"]*)"[^>]*>\s*<\/script>/g)]
    .map((m) => m[1].replace(/&amp;/g, "&"))
    .filter((s) => TRACKING_HOST.test(s));

  const unexpected = srcs.filter((s) => !AUTHORED_SCRIPT_SRCS.has(s));
  if (unexpected.length) {
    throw new Error(`[${route}] injected tracking script survived: ${unexpected.join(", ")}`);
  }
  // The inline gtag config and Metricool loader must still be present — stripping a src tag
  // must never take an inline script with it.
  if (!/beTracker\.t\(/.test(head)) throw new Error(`[${route}] Metricool inline loader is missing`);
  if (!/gtag\('config'/.test(head) && !/gtag\("config"/.test(head)) {
    throw new Error(`[${route}] gtag config block is missing`);
  }
  if (count(head, /googletagmanager\.com\/gtag\/js/g) !== 1) {
    throw new Error(`[${route}] expected exactly one gtag loader, found ${count(head, /googletagmanager\.com\/gtag\/js/g)}`);
  }
}

/**
 * @param html full captured page HTML
 * @param route the route this HTML was rendered for, e.g. "/insurance/auto"
 */
export function rewriteHead(html: string, route: string): string {
  const seo = ROUTE_SEO[route];
  if (!seo) throw new Error(`No ROUTE_SEO entry for route "${route}"`);

  const headEnd = html.search(/<\/head>/i);
  if (headEnd === -1) throw new Error(`No </head> found for route "${route}"`);

  let head = html.slice(0, headEnd + "</head>".length);
  const body = html.slice(headEnd + "</head>".length);

  const canonical = canonicalFor(route);
  const titleTag = `<title>${escapeHtml(seo.title)}</title>`;
  const canonicalTag = `<link rel="canonical" href="${escapeHtml(canonical)}" />`;
  const isHome = route === "/";

  // <title> — scoped to head, so inline-SVG <title> elements in body are safe.
  head = sub(head, /<title>[\s\S]*?<\/title>/i, titleTag);

  // canonical — match by identity, tolerant of attribute order and extra attributes.
  head = sub(head, /<link[^>]*\brel="canonical"[^>]*>/i, canonicalTag);

  // description + social mirrors. og:image* stay as the shared brand image, but its alt
  // text is per-page: the template's alt names the Temple office, which is wrong on a
  // Corpus Christi or product page.
  head = setMeta(head, "name", "description", seo.description);
  head = setMeta(head, "property", "og:url", canonical);
  head = setMeta(head, "property", "og:title", seo.title);
  head = setMeta(head, "property", "og:description", seo.description);
  head = setMeta(head, "property", "og:image:alt", seo.title);
  head = setMeta(head, "name", "twitter:title", seo.title);
  head = setMeta(head, "name", "twitter:description", seo.description);

  // Structured data scoping. Match blocks by identity; labels are removed separately
  // because injected analytics scripts have already broken comment↔block adjacency.
  for (const block of ldBlocks(head)) {
    // The org @graph, WebSite/WebPage and homepage FAQ belong to the homepage only.
    // Google wants Organization markup on a single page; product and location pages
    // render their own page-specific schema into <body> and keep it.
    if (block.types.includes("FAQPage") || block.types.includes("InsuranceAgency")) {
      if (!isHome) head = sub(head, new RegExp(escapeRe(block.raw)), "");
      continue;
    }
    // Every page gets a breadcrumb describing its own position in the hierarchy.
    if (block.types.includes("BreadcrumbList")) {
      head = sub(head, new RegExp(escapeRe(block.raw)), breadcrumbJsonLd(route));
    }
  }

  if (!isHome) {
    head = dropComment(head, "Entity graph");
    head = dropComment(head, "FAQPage Schema");
  }
  head = dropComment(head, "BreadcrumbList Schema");

  head = stripInjectedTracking(head);

  // Collapse the blank-line craters left where blocks were removed.
  head = head.replace(/[ \t]*\n{3,}/g, "\n\n");

  assertHead(head, route, { titleTag, canonicalTag, canonical, seo, isHome });
  assertTracking(head, route);

  return head + body;
}

/**
 * Head for dist/404.html. Served with a real HTTP 404, so indexing is already prevented;
 * `noindex` is belt-and-braces. It carries no canonical (a 404 has no canonical URL) and
 * no page-scoped structured data, but keeps the site chrome so the page looks like ours.
 */
export function rewriteNotFoundHead(html: string): string {
  const headEnd = html.search(/<\/head>/i);
  if (headEnd === -1) throw new Error("No </head> found in the 404 capture");

  let head = html.slice(0, headEnd + "</head>".length);
  const body = html.slice(headEnd + "</head>".length);

  head = sub(head, /<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(NOT_FOUND_SEO.title)}</title>`);
  head = sub(head, /<link[^>]*\brel="canonical"[^>]*>/i, "");
  head = setMeta(head, "name", "description", NOT_FOUND_SEO.description);
  head = setMeta(head, "name", "robots", "noindex, follow");

  // Strip every JSON-LD block: none of it describes a 404.
  for (const block of ldBlocks(head)) head = sub(head, new RegExp(escapeRe(block.raw)), "");
  head = dropComment(head, "Entity graph");
  head = dropComment(head, "FAQPage Schema");
  head = dropComment(head, "BreadcrumbList Schema");
  head = stripInjectedTracking(head);
  head = head.replace(/[ \t]*\n{3,}/g, "\n\n");

  if (!head.includes('content="noindex, follow"')) throw new Error("404 page: robots noindex missing");
  if (head.includes('rel="canonical"')) throw new Error("404 page: canonical should be absent");
  assertTracking(head, "404.html");

  return head + body;
}

/**
 * Post-conditions. `String.replace` with a non-matching regex is a silent no-op, so
 * every rewrite above is proven here rather than assumed. A violation fails the build.
 */
function assertHead(
  head: string,
  route: string,
  ctx: { titleTag: string; canonicalTag: string; canonical: string; seo: { title: string; description: string }; isHome: boolean },
): void {
  const bad = (msg: string) => {
    throw new Error(`[${route}] ${msg}`);
  };

  if (!head.includes(ctx.titleTag)) bad(`<title> rewrite missed — head still has the template title`);
  if (count(head, /<title>/gi) !== 1) bad(`expected exactly one <title>, found ${count(head, /<title>/gi)}`);

  if (!head.includes(ctx.canonicalTag)) bad(`canonical rewrite missed — still points elsewhere`);
  if (count(head, /rel="canonical"/gi) !== 1) bad(`expected exactly one canonical link`);

  for (const [attr, key, want] of [
    ["name", "description", ctx.seo.description],
    ["property", "og:url", ctx.canonical],
    ["property", "og:title", ctx.seo.title],
    ["property", "og:description", ctx.seo.description],
    ["name", "twitter:title", ctx.seo.title],
    ["name", "twitter:description", ctx.seo.description],
  ] as const) {
    const tag = `<meta ${attr}="${key}" content="${escapeHtml(want)}" />`;
    if (!head.includes(tag)) bad(`<meta ${attr}="${key}"> rewrite missed`);
    if (count(head, new RegExp(`\\b${escapeRe(attr)}="${escapeRe(key)}"`, "gi")) !== 1) {
      bad(`expected exactly one <meta ${attr}="${key}">`);
    }
  }

  if (!ctx.isHome) {
    if (head.includes("FAQPage")) bad(`homepage FAQPage schema leaked onto subpage`);
    if (head.includes('"@graph"')) bad(`org @graph leaked onto subpage`);
  } else {
    if (!head.includes('"@graph"')) bad(`homepage lost its org @graph`);
    if (!head.includes("FAQPage")) bad(`homepage lost its FAQPage`);
  }

  if (!head.includes("BreadcrumbList")) bad(`breadcrumb missing`);
}
