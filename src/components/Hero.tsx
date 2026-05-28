import { useState, useEffect, useRef } from "react";
import { Car, Home as HomeIcon, Heart, Briefcase, Phone } from "lucide-react";
import Modal from "@/components/Modal";
import QuoteForm from "@/components/QuoteForm";

type InsuranceType = "Auto" | "Home" | "Life" | "Business" | "";

const productTiles: { label: string; type: InsuranceType; icon: typeof Car }[] = [
  { label: "Auto", type: "Auto", icon: Car },
  { label: "Home", type: "Home", icon: HomeIcon },
  { label: "Life", type: "Life", icon: Heart },
  { label: "Business", type: "Business", icon: Briefcase },
];

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preselectedType, setPreselectedType] = useState<InsuranceType>("");
  const imgRef = useRef<HTMLImageElement>(null);

  const openWithType = (type: InsuranceType) => {
    setPreselectedType(type);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 640px) and (prefers-reduced-motion: no-preference)");
    if (!mql.matches) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const el = imgRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;
        const offset = window.scrollY * 0.25;
        el.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="hero-section relative overflow-hidden min-h-[calc(100svh-5rem)] flex items-end sm:items-center">
      <picture>
        <source
          type="image/webp"
          srcSet="/hero/temple-office-800.webp 800w, /hero/temple-office-1200.webp 1200w, /hero/temple-office-1920.webp 1920w"
          sizes="100vw"
        />
        <img
          ref={imgRef}
          src="/hero/temple-office-1920.jpg"
          alt="Maxwell Financial Group Temple, Texas insurance office"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-[115%] object-cover object-bottom sm:object-center will-change-transform"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/65 to-background/30 sm:from-background/70 sm:via-background/45 sm:to-background/20" />

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10 w-full py-10 sm:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] mb-3 sm:mb-5 animate-fade-in opacity-0 [text-shadow:0_2px_16px_hsl(var(--background)/0.9),0_1px_3px_hsl(var(--background))]"
            style={{ animationDelay: "0.1s" }}
          >
            Texas Insurance That <br className="hidden sm:block" />
            <span className="text-primary">Actually Calls You Back</span>
          </h1>

          <p
            className="text-base sm:text-lg lg:text-xl text-foreground/95 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed animate-fade-in opacity-0 [text-shadow:0_2px_12px_hsl(var(--background)/0.9),0_1px_2px_hsl(var(--background))]"
            style={{ animationDelay: "0.25s" }}
          >
            Auto, home, life, business — covered by a fourth-generation Texas family agency.
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>
            Serving Temple, Corpus Christi, and all of Texas.
          </p>

          {/* Visible hero phone CTA */}
          <a
            href="tel:2542943311"
            className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors mb-6 sm:mb-8 animate-fade-in opacity-0 [text-shadow:0_2px_12px_hsl(var(--background)/0.9)]"
            style={{ animationDelay: "0.3s" }}
            aria-label="Call Maxwell Financial Group Temple office at (254) 294-3311"
          >
            <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            <span className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold">
              (254) 294-3311
            </span>
          </a>

          <div
            className="grid grid-cols-2 gap-3 sm:gap-5 max-w-md sm:max-w-2xl mx-auto mb-6 sm:mb-10 animate-fade-in opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            {productTiles.map((tile) => {
              const Icon = tile.icon;
              return (
                <button
                  key={tile.type}
                  type="button"
                  onClick={() => openWithType(tile.type)}
                  className="group relative flex flex-col items-center justify-center gap-2 sm:gap-3 rounded-xl border border-primary/50 bg-background/70 backdrop-blur-md px-3 py-4 sm:py-6 hover:border-primary hover:bg-background/80 transition-all duration-200 hover:-translate-y-0.5 shadow-[0_8px_24px_-4px_hsl(var(--background)/0.8)]"
                  aria-label={`Get a quote for ${tile.label} insurance`}
                >
                  <Icon
                    className="w-8 h-8 sm:w-10 sm:h-10 text-primary group-hover:scale-110 transition-transform duration-200 drop-shadow-[0_2px_6px_hsl(var(--background)/0.8)]"
                    strokeWidth={1.5}
                  />
                  <span className="font-serif text-base sm:text-lg text-foreground">
                    {tile.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            className="max-w-md sm:max-w-xl mx-auto animate-fade-in opacity-0"
            style={{ animationDelay: "0.55s" }}
          >
            <button
              onClick={() => openWithType("")}
              className="btn-gold w-full text-base sm:text-lg py-3 sm:py-4"
            >
              Get My Free Quote
            </button>
            <p className="text-xs sm:text-sm text-foreground/85 mt-3 [text-shadow:0_1px_8px_hsl(var(--background)/0.9)]">
              60-second form &middot; No obligation &middot; We never sell your info
            </p>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Request a Quote"
      >
        <QuoteForm
          initialInsuranceType={preselectedType || undefined}
          onSuccess={() => setIsModalOpen(false)}
        />
      </Modal>
    </section>
  );
};

export default Hero;
