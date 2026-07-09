import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ROUTE_SEO, canonicalFor } from "@/lib/seo";

/**
 * Keeps <head> honest across client-side navigation.
 *
 * The prerendered HTML already carries correct per-route metadata for the first paint —
 * that is what crawlers read, and it is produced at build time by scripts/seoHead.ts.
 * But react-router swaps pages without a document load, so after the first in-app
 * navigation the tab title, canonical, and og tags would otherwise stay frozen on
 * whatever page the user landed on.
 *
 * This runs after hydration, so it cannot cause a hydration mismatch.
 */
function setTag(selector: string, create: () => HTMLElement, apply: (el: HTMLElement) => void) {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  apply(el);
}

/** Drop-in for the router tree: <RouteSeo /> alongside <ScrollToTop />. */
export function RouteSeo(): null {
  useSeo();
  return null;
}

export function useSeo(): void {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = ROUTE_SEO[pathname];
    if (!seo) return; // unknown route (404) — leave the document alone

    document.title = seo.title;

    setTag(
      'link[rel="canonical"]',
      () => Object.assign(document.createElement("link"), { rel: "canonical" }),
      (el) => el.setAttribute("href", canonicalFor(pathname)),
    );

    const metas: Array<[attr: "name" | "property", key: string, content: string]> = [
      ["name", "description", seo.description],
      ["property", "og:url", canonicalFor(pathname)],
      ["property", "og:title", seo.title],
      ["property", "og:description", seo.description],
      ["name", "twitter:title", seo.title],
      ["name", "twitter:description", seo.description],
    ];

    for (const [attr, key, content] of metas) {
      setTag(
        `meta[${attr}="${key}"]`,
        () => Object.assign(document.createElement("meta"), { [attr]: key }),
        (el) => el.setAttribute("content", content),
      );
    }
  }, [pathname]);
}
