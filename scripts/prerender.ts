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
 * Fail-safe: if anything blows up, the original dist/index.html stays in
 * place and the site ships as a normal SPA. No deploy is blocked.
 *
 * Routes to prerender are listed in ROUTES below.
 */
import { spawn } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import puppeteer, { type Browser } from "puppeteer";

const PORT = 4173;
const ORIGIN = `http://127.0.0.1:${PORT}`;
const DIST = join(import.meta.dir, "..", "dist");

const ROUTES = [
  "/",
  "/contact",
  "/our-story",
  "/locations/temple",
  "/locations/corpus-christi",
  "/insurance/auto",
  "/insurance/home",
  "/insurance/life",
  "/insurance/business",
  "/insurance/flood-storm",
  "/insurance/umbrella",
  "/insurance/renters",
  "/insurance/motorcycle-boat",
  "/insurance/windstorm-twia",
  "/insurance/hurricane-prep",
  "/insurance/coastal-roof",
  "/privacy-policy",
  "/terms-of-service",
  "/kristin",
  "/bill",
  "/chris",
  "/grace",
  "/kara",
  "/brandon",
  "/jennifer",
  
  "/natalia",
  "/alayna",
  "/angel",
  "/gina",
  "/haley",
  "/lola",
  "/nicole",
  "/salina",
  "/star",
];

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

async function renderRoute(browser: Browser, route: string): Promise<void> {
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(`${ORIGIN}${route}`, {
      waitUntil: "networkidle0",
      timeout: 30_000,
    });
    // Defensive small wait — gives any post-mount animations/effects time
    // to settle before snapshot.
    await new Promise((r) => setTimeout(r, 250));

    const html = await page.content();

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
    for (const route of ROUTES) {
      try {
        await renderRoute(browser, route);
      } catch (err) {
        console.warn(
          `  ✗ ${route} — ${(err as Error).message} (SPA fallback will serve)`,
        );
      }
    }

    console.log(`[prerender] done`);
  } finally {
    if (browser) await browser.close();
    server.kill();
  }
}

main().catch((err) => {
  console.error("[prerender] fatal:", err);
  process.exit(1);
});
