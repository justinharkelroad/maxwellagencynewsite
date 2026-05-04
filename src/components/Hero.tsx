import { useState } from "react";
import { Car, Home as HomeIcon, Heart, Briefcase, Phone } from "lucide-react";
import Modal from "@/components/Modal";
import QuoteForm from "@/components/QuoteForm";

const heroBgUrl =
  "https://lgykkvksbcjulwkbdbtk.supabase.co/storage/v1/object/public/herosection/Temple%20Office.jpg";

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

  const openWithType = (type: InsuranceType) => {
    setPreselectedType(type);
    setIsModalOpen(true);
  };

  return (
    <section className="hero-section relative overflow-hidden min-h-[calc(100svh-5rem)] flex items-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-[center_center] md:bg-[center_right]"
        style={{
          backgroundImage: `url(${heroLionBg})`,
          backgroundAttachment: "fixed",
        }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-background/60 md:bg-background/40" />

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10 w-full py-10 sm:py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] mb-3 sm:mb-5 animate-fade-in opacity-0"
            style={{ animationDelay: "0.1s" }}
          >
            Protecting What <br className="hidden sm:block" />
            <span className="text-primary">Matters Most</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in opacity-0"
            style={{ animationDelay: "0.25s" }}
          >
            Fourth-generation Texas agency.
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>
            Asset protection &amp; risk mitigation.
          </p>

          {/* 2x2 Icon grid */}
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
                  className="group relative flex flex-col items-center justify-center gap-2 sm:gap-3 rounded-xl border border-primary/40 bg-background/40 backdrop-blur-sm px-3 py-4 sm:py-6 hover:border-primary hover:bg-background/60 transition-all duration-200 hover:-translate-y-0.5"
                  aria-label={`Get a quote for ${tile.label} insurance`}
                >
                  <Icon
                    className="w-8 h-8 sm:w-10 sm:h-10 text-primary group-hover:scale-110 transition-transform duration-200"
                    strokeWidth={1.5}
                  />
                  <span className="font-serif text-base sm:text-lg text-foreground">
                    {tile.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Dual CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md sm:max-w-xl mx-auto animate-fade-in opacity-0"
            style={{ animationDelay: "0.55s" }}
          >
            <button
              onClick={() => openWithType("")}
              className="btn-gold flex-1 text-base sm:text-lg py-3 sm:py-4"
            >
              Get a Quote Now
            </button>
            <a
              href="tel:2542943311"
              className="flex-1 inline-flex items-center justify-center gap-2 text-base sm:text-lg font-semibold px-6 py-3 sm:py-4 rounded-md border-2 border-primary text-foreground hover:bg-primary/10 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5 text-primary" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* Quote Modal */}
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
