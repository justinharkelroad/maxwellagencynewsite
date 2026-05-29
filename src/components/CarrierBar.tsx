import { Building2 } from "lucide-react";

/**
 * CarrierBar — a bright white band that breaks up the dark run of sections
 * (Hero → SocialProof → ValueProposition) and lands one punchy proof point:
 * the agency shops a wide market on the client's behalf.
 *
 * TODO(maxwell): confirm the exact carrier count before launch (currently 40+).
 */
const CARRIER_COUNT = "40+";

const CarrierBar = () => {
  return (
    <section
      aria-label="Carrier access"
      className="bg-white border-y border-charcoal/10"
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-6 sm:py-7">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 text-center sm:text-left">
          <div className="flex items-center gap-3 shrink-0">
            <Building2 className="w-7 h-7 text-primary" strokeWidth={1.5} />
            <span className="font-serif text-4xl sm:text-5xl font-bold text-primary leading-none">
              {CARRIER_COUNT}
            </span>
          </div>

          <p className="text-base sm:text-lg text-charcoal max-w-xl leading-snug">
            <span className="font-semibold">carriers represented</span> — so we
            shop the market and match you to exactly the coverage you need, never
            a one-size-fits-all policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CarrierBar;
