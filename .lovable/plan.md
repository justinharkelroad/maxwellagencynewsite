## Why it's slow

The hero background (`Temple Office.jpg`) is served straight from the Supabase storage bucket as a full-size JPG:

- **Unoptimized original.** It's the raw upload — likely several MB, full camera resolution, no WebP/AVIF, no compression pass.
- **Loaded via CSS `background-image`.** Browsers can't discover CSS backgrounds until the stylesheet parses and the element matches, so it starts downloading late and gets no `fetchpriority` boost.
- **No preload hint.** Nothing tells the browser "this is the LCP image, grab it first."
- **`background-attachment: fixed`** forces repaints on scroll and on mobile is often promoted to a large composited layer, making the perceived load worse even after bytes arrive.
- **No responsive sizing.** Mobile phones download the same huge desktop-resolution file.

## Plan

1. **Generate optimized variants of the hero image** and commit them to `public/hero/`:
   - `temple-office-1920.webp` (desktop, ~1920w, quality ~75)
   - `temple-office-1200.webp` (tablet)
   - `temple-office-800.webp` (mobile)
   - `temple-office-1920.jpg` fallback
   Target: each well under 300 KB, mobile variant under 100 KB.
   Source: pull the current file from the Supabase `herosection` bucket, re-encode with `sharp` via a one-off script.

2. **Swap the CSS background for a real `<img>` element** in `src/components/Hero.tsx`:
   - `<picture>` with `<source type="image/webp" srcset=... sizes=...>` + `<img>` fallback
   - `fetchpriority="high"`, `decoding="async"`, no `loading="lazy"` (this is LCP)
   - Position it `absolute inset-0 w-full h-full object-cover` with the existing `object-position` mobile/desktop split done via Tailwind classes
   - Keep the gradient overlay div on top

3. **Add a preload hint** in `index.html` for the WebP so the browser starts fetching during HTML parse:
   ```html
   <link rel="preload" as="image" href="/hero/temple-office-1200.webp"
         imagesrcset="/hero/temple-office-800.webp 800w, /hero/temple-office-1200.webp 1200w, /hero/temple-office-1920.webp 1920w"
         imagesizes="100vw" fetchpriority="high" />
   ```

4. **Drop `background-attachment: fixed`** (it doesn't work on iOS Safari anyway and hurts scroll perf). Re-create the parallax with a lightweight CSS `translate3d` on scroll via a small `useEffect` + `requestAnimationFrame`, or accept a static background on mobile and keep parallax desktop-only with `transform` instead of `fixed`.

5. **Update `mem://style/hero-parallax`** to reflect the new local-asset + transform-based parallax approach.

## Technical notes

- Files in `public/` are served as-is by Vite with long cache headers — perfect for a hero asset that rarely changes.
- The Supabase storage URL can stay as a fallback if you ever want a CMS-swappable image, but for the LCP asset, bundling locally is the right call.
- After the change, expect LCP to drop from multi-second to well under 1s on a decent connection.

Want me to proceed with this approach, or would you rather keep the image in Supabase storage (in which case I can still add WebP variants + preload, just hosted there)?