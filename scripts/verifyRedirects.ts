/**
 * Build gate: every retired URL has a permanent redirect, and no redirect shadows a live page.
 *
 * Runs in `bun run build`. Catches the three ways this breaks:
 *   1. A URL is retired but nobody added the 301  → old page becomes a soft 404.
 *   2. A redirect points at a route that doesn't exist  → 301 into a dead end.
 *   3. A redirect shadows a live route  → Vercel runs redirects before the filesystem,
 *      so a stray entry would 301 a real page away and it would never be reachable.
 */
import { join } from "node:path";
import { ROUTE_SEO } from "../src/lib/seo";
import { RETIRED_URLS } from "../src/data/retiredUrls";

interface VercelRedirect {
  source: string;
  destination: string;
  permanent?: boolean;
}

const config = (await Bun.file(join(import.meta.dir, "..", "vercel.json")).json()) as {
  redirects?: VercelRedirect[];
};
const redirects = config.redirects ?? [];
const failures: string[] = [];

for (const retired of RETIRED_URLS) {
  const hit = redirects.find((r) => r.source === retired.path);
  if (!hit) {
    failures.push(`${retired.path} is retired but has no redirect in vercel.json — it will soft-404`);
    continue;
  }
  if (hit.permanent !== true) {
    failures.push(`${retired.path} redirect is not permanent — a 302 does not pass authority`);
  }
  if (hit.destination !== retired.redirectTo) {
    failures.push(`${retired.path} redirects to ${hit.destination}, but retiredUrls.ts says ${retired.redirectTo}`);
  }
  if (!ROUTE_SEO[retired.redirectTo]) {
    failures.push(`${retired.path} redirects to ${retired.redirectTo}, which is not a live route`);
  }
  if (ROUTE_SEO[retired.path]) {
    failures.push(`${retired.path} is listed as retired but is ALSO a live route — the 301 would hide a real page`);
  }
}

for (const r of redirects) {
  if (ROUTE_SEO[r.source]) {
    failures.push(`vercel.json redirects ${r.source}, which is a live route — Vercel applies redirects before the filesystem, so that page would be unreachable`);
  }
}

console.log(`[verify:redirects] checked ${RETIRED_URLS.length} retired URL(s), ${redirects.length} redirect rule(s)`);
if (failures.length) {
  console.error(`\n[verify:redirects] ${failures.length} FAILURE(S):`);
  failures.forEach((f) => console.error(`  ✗ ${f}`));
  process.exit(1);
}
console.log("[verify:redirects] all assertions passed");
