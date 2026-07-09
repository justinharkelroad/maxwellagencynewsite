/**
 * Post-build gate: asserts the SEO surface of dist/, not of src/.
 *
 * Runs after prerender in `bun run build`. If any prerendered page ships the wrong
 * canonical, a duplicate title, homepage schema, or an over-long tag, the build fails.
 * A green build must mean a correct crawler-facing artifact — that is the whole point.
 */
import { join } from "node:path";
import { ROUTES, ROUTE_SEO, canonicalFor, ORIGIN } from "../src/lib/seo";
import { staffMembers } from "../src/data/staff";

const DIST = join(import.meta.dir, "..", "dist");
const failures: string[] = [];
const ok = (cond: boolean, msg: string) => {
  if (!cond) failures.push(msg);
};

const pageFile = (r: string) => (r === "/" ? join(DIST, "index.html") : join(DIST, r.slice(1), "index.html"));
/** Rendered length: `&amp;` is 5 bytes of source but 1 character to a human or crawler. */
const unesc = (s = "") =>
  s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const one = (re: RegExp, s: string) => (s.match(re) ?? [])[1];
const count = (re: RegExp, s: string) => [...s.matchAll(re)].length;

const TITLE_MAX = 60;
const DESC_MAX = 160;

const titleOwners = new Map<string, string[]>();

for (const route of ROUTES) {
  const html = await Bun.file(pageFile(route)).text();
  const head = html.slice(0, html.search(/<\/head>/i));
  const seo = ROUTE_SEO[route];
  const canonical = canonicalFor(route);
  const at = `[${route}]`;

  const canon = one(/<link rel="canonical" href="([^"]*)"/i, head);
  ok(canon === canonical, `${at} canonical is ${canon}, want ${canonical}`);
  ok(count(/rel="canonical"/gi, head) === 1, `${at} expected exactly one canonical`);
  if (route !== "/") ok(canon !== ORIGIN, `${at} canonical points at the bare origin`);

  const title = one(/<title>([\s\S]*?)<\/title>/i, head);
  ok(!!title, `${at} missing <title>`);
  ok(count(/<title>/gi, head) === 1, `${at} expected exactly one <title>`);
  ok(unesc(title).length <= TITLE_MAX, `${at} title is ${unesc(title).length} chars (max ${TITLE_MAX})`);
  titleOwners.set(title ?? "", [...(titleOwners.get(title ?? "") ?? []), route]);

  const desc = one(/<meta name="description" content="([^"]*)"/i, head);
  ok(!!desc, `${at} missing meta description`);
  ok(count(/name="description"/gi, head) === 1, `${at} expected exactly one meta description`);
  ok(unesc(desc).length <= DESC_MAX, `${at} description is ${unesc(desc).length} chars (max ${DESC_MAX})`);

  ok(one(/property="og:url" content="([^"]*)"/i, head) === canonical, `${at} og:url != canonical`);
  ok(one(/property="og:title" content="([^"]*)"/i, head) === title, `${at} og:title != title`);
  ok(one(/name="twitter:title" content="([^"]*)"/i, head) === title, `${at} twitter:title != title`);
  ok(one(/property="og:description" content="([^"]*)"/i, head) === desc, `${at} og:description != description`);

  const types: string[] = [];
  for (const [i, m] of [...head.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].entries()) {
    try {
      const json = JSON.parse(m[1]);
      const seen = new Set<string>();
      const walk = (n: unknown) => {
        if (Array.isArray(n)) return n.forEach(walk);
        if (!n || typeof n !== "object") return;
        const o = n as Record<string, unknown>;
        if (typeof o["@type"] === "string") seen.add(o["@type"] as string);
        Object.values(o).forEach(walk);
      };
      walk(json);
      types.push(...seen);
      if (seen.has("BreadcrumbList")) {
        const last = (json as { itemListElement: { item?: string }[] }).itemListElement.at(-1);
        ok(last?.item === canonical, `${at} breadcrumb tail is ${last?.item}, want ${canonical}`);
      }
    } catch (e) {
      failures.push(`${at} ld+json block ${i} does not parse: ${(e as Error).message}`);
    }
  }

  // Tracking: exactly the tags the template authors, no prerender-injected leftovers.
  ok(count(/googletagmanager\.com\/gtag\/js/g, head) === 1, `${at} expected exactly one gtag loader`);
  // Match the <script> ELEMENT, not the substring: Metricool's inline loader contains the
  // literal `c.src="https://tracker.metricool.com/resources/be.js"` in its own source.
  ok(
    count(/<script[^>]*\bsrc="https:\/\/tracker\.metricool\.com/g, head) === 0,
    `${at} baked Metricool be.js <script> tag would double-count`,
  );
  ok(
    count(/<script[^>]*\b(?:googleads\.g\.doubleclick\.net|googleadservices\.com)/g, head) === 0,
    `${at} stale Ads conversion beacon baked into HTML`,
  );
  ok(!/127\.0\.0\.1:4173/.test(html), `${at} build-server localhost URL leaked into the page`);
  ok(/beTracker\.t\(/.test(head), `${at} Metricool inline loader missing`);
  ok(/G-73VC1BR2HS/.test(head), `${at} GA4 measurement ID missing`);
  ok(/AW-796676965/.test(head), `${at} Google Ads ID missing`);

  if (route === "/") {
    ok(types.includes("FAQPage"), `${at} homepage lost its FAQPage`);
    ok(types.includes("InsuranceAgency"), `${at} homepage lost its org @graph`);
    ok(head.includes(`"@id": "${ORIGIN}/#org"`), `${at} homepage lost the #org node`);
  } else {
    ok(!types.includes("FAQPage"), `${at} homepage FAQPage leaked onto a subpage`);
    ok(!types.includes("WebSite"), `${at} org @graph leaked onto a subpage`);
    ok(!head.includes("Entity graph"), `${at} orphaned "Entity graph" comment`);
  }
}

// Distinct titles across the non-staff pages. Staff titles are name-derived and unique
// by construction, but two product pages sharing a title means a rewrite silently missed.
const staffSlugs = new Set(staffMembers.map((m) => `/${m.slug}`));
for (const [title, routes] of titleOwners) {
  const nonStaff = routes.filter((r) => !staffSlugs.has(r));
  if (nonStaff.length > 1) failures.push(`duplicate <title> on ${nonStaff.join(", ")}: "${unesc(title)}"`);
}

// Location pages must keep the office node their component renders into <body>.
for (const route of ["/locations/temple", "/locations/corpus-christi"]) {
  const html = await Bun.file(pageFile(route)).text();
  const body = html.slice(html.search(/<\/head>/i));
  ok(body.includes('"@type":"InsuranceAgency"'), `[${route}] lost its body-level office node`);
}

// dist/404.html — branded, noindex, no canonical, no structured data.
{
  const f = Bun.file(join(DIST, "404.html"));
  if (!(await f.exists())) {
    failures.push("dist/404.html missing — Vercel would serve its unbranded NOT_FOUND page");
  } else {
    const html = await f.text();
    const head = html.slice(0, html.search(/<\/head>/i));
    ok(/content="noindex, follow"/.test(head), "[404] missing robots noindex");
    ok(!/rel="canonical"/.test(head), "[404] should carry no canonical");
    ok(!/application\/ld\+json/.test(head), "[404] should carry no structured data");
    ok(/<title>Page Not Found/.test(head), "[404] wrong title");
    ok(/<footer|Maxwell/i.test(html), "[404] lost the site chrome — is it really our page?");
  }
}

console.log(`[verify:seo] checked ${ROUTES.length} prerendered routes + 404.html`);
if (failures.length) {
  console.error(`\n[verify:seo] ${failures.length} FAILURE(S):`);
  failures.forEach((f) => console.error(`  ✗ ${f}`));
  process.exit(1);
}
console.log("[verify:seo] all assertions passed");
