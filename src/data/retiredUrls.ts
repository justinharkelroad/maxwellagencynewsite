/**
 * URLs that existed on the previous (Lovable-hosted) site and no longer exist here.
 *
 * Every entry MUST have a permanent (301) redirect in vercel.json. `bun run verify:redirects`
 * enforces that, and the build fails otherwise.
 *
 * Why this file exists: without a 301, a retired page still resolves — react-router's
 * `/:slug` route matches any single-segment path, StaffPage finds no member, and renders
 * `<Navigate to="/" />`. That is an HTTP 200 with a client-side redirect, which Google
 * treats as a soft 404 and can leave in the index for months. A 301 resolves it in one crawl
 * and passes along whatever authority the URL had accumulated.
 *
 * When someone leaves the agency: remove them from staff.ts, add their URL here, add the
 * redirect to vercel.json. The build will tell you if you forget the third step.
 */
export interface RetiredUrl {
  /** The path as it existed on the old site, e.g. "/jon". */
  path: string;
  /** Where it should permanently redirect to. Must be a live route. */
  redirectTo: string;
  /** Why it was retired — for whoever reads this in two years. */
  reason: string;
}

export const RETIRED_URLS: RetiredUrl[] = [
  {
    path: "/jon",
    redirectTo: "/",
    reason: "Jon Gangale (Licensed Insurance Agent, Corpus Christi) no longer with the agency. Confirmed 2026-07-09.",
  },
];
