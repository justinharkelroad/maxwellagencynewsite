/**
 * Per-route SEO metadata — the single source of truth for <head> content.
 *
 * Why this exists: index.html is a template. Its <head> describes the homepage.
 * scripts/prerender.ts snapshots each route's rendered DOM, so without this map
 * every prerendered page would ship the homepage's canonical, title, and
 * FAQPage schema — telling crawlers all 34 pages are duplicates of "/".
 *
 * Consumers:
 *   - scripts/prerender.ts  (build time; authoritative for crawlers)
 *   - src/hooks/useSeo.ts   (client-side nav; keeps the tab title honest)
 *
 * Keep this module free of React, env vars, and path aliases — prerender.ts
 * imports it from outside the Vite graph.
 */
import { staffMembers } from "../data/staff";

export const ORIGIN = "https://maxwellinsuranceagency.com";

export interface RouteSeo {
  /** <title> — aim for <= 60 chars so it isn't truncated in results. */
  title: string;
  /** <meta name="description"> — aim for <= 160 chars. */
  description: string;
  /** Human label used for the trailing BreadcrumbList item. */
  breadcrumb: string;
}

/** Absolute canonical URL for a route path. Root has no trailing slash. */
export function canonicalFor(route: string): string {
  return route === "/" ? ORIGIN : `${ORIGIN}${route}`;
}

const STATIC_ROUTES: Record<string, RouteSeo> = {
  "/": {
    title: "Insurance in Temple & Corpus Christi TX | Maxwell Financial",
    description:
      "Texas insurance in Temple & Corpus Christi: auto, home, life, business, flood & coastal windstorm (TWIA). Free quote in 60 seconds. Call (254) 294-3311.",
    breadcrumb: "Home",
  },
  "/contact": {
    title: "Contact Maxwell Financial Group | Temple & Corpus Christi",
    description:
      "Reach our Temple (254) 294-3311 or Corpus Christi (361) 317-7044 office. Get a Texas insurance quote or ask a coverage question — we reply within 24 hours.",
    breadcrumb: "Contact",
  },
  "/our-story": {
    title: "Our Story | Laura Harris Agency to Maxwell Financial",
    description:
      "The family story behind Maxwell Financial Group: founded by Laura Harris in Corpus Christi, now led by her daughter Kristin Maxwell. Same office, same team.",
    breadcrumb: "Our Story",
  },
  "/locations/temple": {
    title: "Insurance in Temple, TX | Maxwell Financial Group",
    description:
      "Insurance agency in Temple, Texas serving Bell County — Belton, Killeen, Harker Heights & Salado. Auto, home, life & business coverage. Call (254) 294-3311.",
    breadcrumb: "Temple, TX",
  },
  "/locations/corpus-christi": {
    title: "Insurance in Corpus Christi, TX | Maxwell Financial Group",
    description:
      "Coastal insurance agency in Corpus Christi serving Nueces County — windstorm (TWIA), flood, auto & home. Wind-included policies available. Call (361) 317-7044.",
    breadcrumb: "Corpus Christi, TX",
  },
  "/insurance/auto": {
    title: "Auto Insurance in Temple & Corpus Christi, TX",
    description:
      "Texas auto insurance with liability, collision and full coverage options. Bundle with home to lower your premium. Free quote from Maxwell Financial Group.",
    breadcrumb: "Auto Insurance",
  },
  "/insurance/home": {
    title: "Home Insurance in Temple & Corpus Christi, TX",
    description:
      "Texas homeowners insurance, including full roof replacement cost coverage that few coastal carriers still offer. Get a free quote from Maxwell Financial Group.",
    breadcrumb: "Home Insurance",
  },
  "/insurance/life": {
    title: "Life Insurance in Temple & Corpus Christi, TX",
    description:
      "Term and permanent life insurance for Texas families. Protect income, mortgage and college costs. Free, no-obligation quote from Maxwell Financial Group.",
    breadcrumb: "Life Insurance",
  },
  "/insurance/business": {
    title: "Business Insurance in Temple & Corpus Christi, TX",
    description:
      "Commercial insurance for Texas businesses — liability, property, and workers' coverage. Talk to a local agent at Maxwell Financial Group for a tailored quote.",
    breadcrumb: "Business Insurance",
  },
  "/insurance/flood-storm": {
    title: "Flood & Storm Insurance in Coastal Texas",
    description:
      "Standard home policies do not cover flood. NFIP and private flood coverage for Texas, with a 30-day waiting period. Review before hurricane season, June 1.",
    breadcrumb: "Flood & Storm",
  },
  "/insurance/umbrella": {
    title: "Umbrella Insurance in Temple & Corpus Christi, TX",
    description:
      "Personal umbrella coverage that extends liability limits beyond your auto and home policies. Get a quote from Maxwell Financial Group in Texas.",
    breadcrumb: "Umbrella Insurance",
  },
  "/insurance/renters": {
    title: "Renters Insurance in Temple & Corpus Christi, TX",
    description:
      "Affordable Texas renters insurance covering your belongings, liability and temporary housing. Free quote in 60 seconds from Maxwell Financial Group.",
    breadcrumb: "Renters Insurance",
  },
  "/insurance/motorcycle-boat": {
    title: "Motorcycle & Boat Insurance in Texas",
    description:
      "Coverage for motorcycles, boats, RVs and recreational vehicles across Texas. Talk to a local agent at Maxwell Financial Group for a free quote.",
    breadcrumb: "Motorcycle & Boat",
  },
  "/insurance/windstorm-twia": {
    title: "Windstorm & TWIA Insurance in Corpus Christi, TX",
    description:
      "In Texas first-tier coastal counties, home policies exclude wind and hail. We write wind-included homeowners coverage, often below standalone TWIA cost.",
    breadcrumb: "Windstorm & TWIA",
  },
  "/insurance/hurricane-prep": {
    title: "Hurricane Season Insurance Prep | Coastal Texas",
    description:
      "TWIA stops binding once a named storm enters the Gulf and NFIP flood has a 30-day wait. Review your home, wind and flood stack in April–May, not in the cone.",
    breadcrumb: "Hurricane Prep",
  },
  "/insurance/coastal-roof": {
    title: "Coastal Roof Insurance & Replacement Cost Coverage | TX",
    description:
      "Most carriers switch roofs over 15 years to Actual Cash Value. We write full Replacement Cost roof coverage in coastal Texas. Ask before your next renewal.",
    breadcrumb: "Coastal Roof",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Maxwell Financial Group",
    description:
      "How Maxwell Financial Group collects, uses and protects your personal information across our Texas insurance services.",
    breadcrumb: "Privacy Policy",
  },
  "/terms-of-service": {
    title: "Terms of Service | Maxwell Financial Group",
    description:
      "The terms governing your use of the Maxwell Financial Group website and our Texas insurance services.",
    breadcrumb: "Terms of Service",
  },
};

/**
 * Staff routes are derived from the roster, never hand-typed — adding a person
 * to src/data/staff.ts automatically gives them prerendered, canonicalized
 * metadata. Descriptions are clamped so a long job title can't blow the limit.
 */
function staffSeo(): Record<string, RouteSeo> {
  const entries = staffMembers.map((m) => {
    const description =
      `${m.name}, ${m.title} at Maxwell Financial Group in ${m.location}. ` +
      `Texas insurance guidance for auto, home, life and business coverage.`;
    return [
      `/${m.slug}`,
      {
        title: `${m.name} | ${m.title} | Maxwell Financial Group`.slice(0, 60),
        description: description.slice(0, 160),
        breadcrumb: m.name,
      } satisfies RouteSeo,
    ] as const;
  });
  return Object.fromEntries(entries);
}

export const ROUTE_SEO: Record<string, RouteSeo> = {
  ...STATIC_ROUTES,
  ...staffSeo(),
};

/** Every route the prerenderer should snapshot. Derived, so it cannot drift. */
export const ROUTES: string[] = Object.keys(ROUTE_SEO);

/** Breadcrumb trail for a route: Home → [intermediate] → self. */
export function breadcrumbFor(route: string) {
  if (route === "/") {
    return [{ name: "Home", item: ORIGIN }];
  }
  const trail = [{ name: "Home", item: ORIGIN }];
  const segments = route.split("/").filter(Boolean);

  // Intermediate segments (e.g. /insurance/auto → "Insurance") are labels only;
  // they have no page of their own, so they get no `item` URL.
  if (segments.length > 1) {
    const parentLabel = segments[0] === "insurance" ? "Insurance" : "Locations";
    trail.push({ name: parentLabel, item: "" });
  }

  trail.push({ name: ROUTE_SEO[route].breadcrumb, item: canonicalFor(route) });
  return trail;
}
