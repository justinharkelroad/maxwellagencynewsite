/**
 * Static prerender for the SPA.
 *
 * Why: Vite outputs a CSR shell with an empty <div id="root"></div>.
 * Googlebot eventually renders JS, but AI crawlers (GPTBot, PerplexityBot,
 * ClaudeBot, etc.) typically do NOT. That kneecaps GEO + SEO. This script
 * runs after `vite build`, spins up the built bundle behind a local server,
 * visits each route in a headless browser, captures the fully-rendered HTML,
 * and writes it to dist/<route>/index.html. The runtime hydrate path in
 * main.tsx attaches React to the prerendered DOM with hydrateRoot.
 *
 * Per-route <head> metadata comes from src/lib/seo.ts and is stamped in by
 * rewriteHead() before each file is written. Without it every page would inherit
 * index.html's homepage canonical, title and FAQPage schema.
 *
 * This step is REQUIRED, not best-effort. A prerender failure used to fall back
 * to shipping a plain SPA with a green build — which silently reverts the entire
 * SEO/GEO surface while looking like a successful deploy. Any route that fails
 * now fails the build. Prefer a red deploy over an invisible regression.
 *
 * Routes are derived from ROUTE_SEO — the route list cannot drift from the
 * metadata that describes it.
 */
import { spawn } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import puppeteer, { type Browser } from "puppeteer";
import { NOT_FOUND_ROUTE, ROUTES } from "../src/lib/seo";
import { rewriteHead, rewriteNotFoundHead } from "./seoHead";

const PORT = 4173;
const ORIGIN = `http://127.0.0.1:${PORT}`;
const DIST = join(import.meta.dir, "..", "dist");

async function waitForServer(url: string, timeoutMs = 20_000): Promise<void> {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url, { method: "HEAD" });
      if (res.ok || res.status === 404) return;
    } catch {
      // not ready yet
    }
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error(`Server at ${url} did not become ready within ${timeoutMs}ms`);
}

/**
 * Analytics hosts blocked while prerendering.
 *
 * Without this, every build sends 34 pageviews to GA4, Google Ads and Metricool from the
 * build server — real, indistinguishable traffic in the reports. Blocking the requests also
 * stops gtag.js from executing, so it never injects the extra <script> tags and the stale
 * Ads conversion beacon that would otherwise be frozen into the static HTML.
 */
const ANALYTICS_HOSTS = [
  "googletagmanager.com",
  "google-analytics.com",
  "googleadservices.com",
  "googleads.g.doubleclick.net",
  "googlesyndication.com",
  "tracker.metricool.com",
];

async function blockAnalytics(page: import("puppeteer").Page): Promise<void> {
  await page.setRequestInterception(true);
  page.on("request", (req) => {
    if (ANALYTICS_HOSTS.some((h) => req.url().includes(h))) void req.abort();
    else void req.continue();
  });
}

async function renderRoute(browser: Browser, route: string): Promise<void> {
  const page = await browser.newPage();
  try {
    await blockAnalytics(page);
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(`${ORIGIN}${route}`, {
      waitUntil: "networkidle0",
      timeout: 30_000,
    });
    // Defensive small wait — gives any post-mount animations/effects time
    // to settle before snapshot.
    await new Promise((r) => setTimeout(r, 250));

    const html = rewriteHead(await page.content(), route);

    const target =
      route === "/"
        ? join(DIST, "index.html")
        : join(DIST, route.slice(1), "index.html");

    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, html, "utf8");
    console.log(`  ✓ ${route}`);
  } finally {
    await page.close();
  }
}

async function main(): Promise<void> {
  // Confirm dist exists
  try {
    await readFile(join(DIST, "index.html"), "utf8");
  } catch {
    console.error(`[prerender] dist/index.html missing — run vite build first`);
    process.exit(1);
  }

  // Start the static server
  console.log(`[prerender] starting static server on ${ORIGIN}`);
  const server = spawn(
    "bunx",
    [
      "serve",
      "--single", // SPA fallback so /any/route resolves to index.html
      "--listen",
      String(PORT),
      "--no-clipboard",
      DIST,
    ],
    { stdio: ["ignore", "ignore", "pipe"] },
  );
  server.stderr.on("data", (d) =>
    process.stderr.write(`[serve] ${d.toString()}`),
  );

  let browser: Browser | null = null;
  try {
    await waitForServer(ORIGIN);
    console.log(`[prerender] server ready, launching headless browser`);

    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    console.log(`[prerender] rendering ${ROUTES.length} routes`);
    // Render sequentially — keeps puppeteer memory predictable and avoids
    // overwhelming the dev server. Build time is dominated by Vite, not this.
    const failures: string[] = [];
    for (const route of ROUTES) {
      try {
        await renderRoute(browser, route);
      } catch (err) {
        console.error(`  ✗ ${route} — ${(err as Error).message}`);
        failures.push(route);
      }
    }

    if (failures.length > 0) {
      throw new Error(
        `${failures.length}/${ROUTES.length} routes failed to prerender: ${failures.join(", ")}. ` +
          `Refusing to ship an unprerendered SPA.`,
      );
    }

    // dist/404.html — Vercel serves this for any unmatched URL, with a real 404 status.
    // Without it, a stale link lands the visitor on Vercel's unbranded NOT_FOUND page.
    const page = await browser.newPage();
    try {
      await blockAnalytics(page);
      await page.goto(`${ORIGIN}${NOT_FOUND_ROUTE}`, { waitUntil: "networkidle0", timeout: 30_000 });
      await new Promise((r) => setTimeout(r, 250));
      await writeFile(join(DIST, "404.html"), rewriteNotFoundHead(await page.content()), "utf8");
      console.log("  ✓ 404.html");
    } finally {
      await page.close();
    }

    console.log(`[prerender] done — ${ROUTES.length}/${ROUTES.length} routes + 404.html`);
  } finally {
    if (browser) await browser.close();
    server.kill();
  }
}

main().catch((err) => {
  console.error("[prerender] fatal:", err);
  process.exit(1);
});
