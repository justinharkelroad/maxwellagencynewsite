import { useCallback, useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

/**
 * Vimeo embed that autoplays when it scrolls into view.
 *
 * Browsers only permit autoplay when the video is muted, so the video starts
 * muted and surfaces an unmute control. Clicking anywhere on the video is a
 * user gesture, which is what lets the sound turn on.
 *
 * The iframe is not mounted until the section is near the viewport, so the
 * Vimeo player costs nothing on pages where the visitor never scrolls down.
 */

interface VimeoAutoplayProps {
  /** Numeric Vimeo video id, e.g. "1211738657" */
  videoId: string;
  /** Privacy hash for unlisted videos — the segment after the id in the share URL */
  hash?: string;
  /** Accessible title for the iframe */
  title: string;
  /** Poster image shown before the player mounts */
  posterUrl?: string;
  className?: string;
}

const VimeoAutoplay = ({
  videoId,
  hash,
  title,
  posterUrl,
  className = "",
}: VimeoAutoplayProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [muted, setMuted] = useState(true);

  // Mount the player only once the section approaches the viewport.
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Vimeo Player API over postMessage — no SDK bundle required.
  const post = useCallback((method: string, value?: unknown) => {
    const win = iframeRef.current?.contentWindow;
    if (!win) return;
    win.postMessage(JSON.stringify({ method, value }), "https://player.vimeo.com");
  }, []);

  const toggleSound = useCallback(() => {
    const next = !muted;
    setMuted(next);
    post("setMuted", next);
    // Unmuting is the moment the visitor opted in — make sure it is playing.
    if (!next) post("play");
  }, [muted, post]);

  const params = new URLSearchParams({
    autoplay: "1",
    muted: "1",
    loop: "1",
    autopause: "0",
    playsinline: "1",
    byline: "0",
    portrait: "0",
    title: "0",
    dnt: "1",
  });
  if (hash) params.set("h", hash);

  const src = `https://player.vimeo.com/video/${videoId}?${params.toString()}`;

  return (
    <div
      ref={containerRef}
      className={`relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-black shadow-lg ${className}`}
    >
      {shouldLoad ? (
        <iframe
          ref={iframeRef}
          src={src}
          title={title}
          loading="lazy"
          allow="autoplay; fullscreen; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        posterUrl && (
          <img
            src={posterUrl}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )
      )}

      {shouldLoad && (
        <button
          type="button"
          onClick={toggleSound}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-black/85 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          {muted ? (
            <>
              <VolumeX className="h-4 w-4" />
              Tap for sound
            </>
          ) : (
            <>
              <Volume2 className="h-4 w-4" />
              Mute
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default VimeoAutoplay;
