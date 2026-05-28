import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * FAQ — text MUST stay in sync with the FAQPage JSON-LD schema in index.html.
 * If you change a question or answer here, update the matching mainEntity entry there too.
 */
const faqs = [
  {
    q: "What areas of Texas do you serve?",
    a: "Our two offices are in Temple, TX (Bell County) and Corpus Christi, TX (Nueces County). We write policies for clients throughout Texas.",
  },
  {
    q: "How long does it take to get a quote?",
    a: "Most quote requests take under 60 seconds to start online. Our team typically responds within 24 hours — often the same business day.",
  },
  {
    q: "What types of insurance do you offer?",
    a: "Auto, home, life, business, renters, flood and storm, umbrella, motorcycle, boat, and specialty coverage for RVs and recreational vehicles.",
  },
  {
    q: "Can you bundle auto and home for a discount?",
    a: "Yes. Bundling auto and home is one of the fastest ways to lower your annual premium. Ask for a bundled quote and we will run the numbers both ways.",
  },
  {
    q: "Do I need flood insurance in Texas?",
    a: "Standard home policies do not cover flood. Anywhere along the coast, in a designated flood zone, or near a flood-prone area, separate NFIP or private flood coverage is essential.",
  },
  {
    q: "Do I need TWIA or windstorm insurance in Corpus Christi?",
    a: "If your property is in one of the 14 Texas first-tier coastal counties (Nueces County included), your standard homeowners policy almost certainly excludes wind and hail. You need TWIA — the Texas Windstorm Insurance Association — or a private windstorm policy. We quote both side-by-side.",
  },
  {
    q: "When should I prep my coastal insurance for hurricane season?",
    a: "Before June 1. NFIP flood policies have a 30-day waiting period, and TWIA closes binding entirely once a named storm enters the Gulf. The right window to review limits, deductibles, and gaps in your three-policy stack (home + wind + flood) is April-May, not when the cone shows up.",
  },
  {
    q: "How does my roof age affect my coastal Texas insurance?",
    a: "Roof age is the single biggest underwriting factor on a coastal homeowners policy. Roofs over 15 years often face Actual Cash Value settlement (vs. Replacement Cost), higher premiums, or non-renewal. Many homeowners do not realize their carrier has quietly switched their roof to ACV until they file a claim.",
  },
  {
    q: "How does the quote process work?",
    a: "Tell us about you (60 seconds), we compare options on your behalf, then you choose the coverage that fits. No obligation to bind.",
  },
  {
    q: "Are you licensed in Texas?",
    a: "Yes. Maxwell Financial Group is a licensed Texas insurance agency, TDI License #3260189.",
  },
  {
    q: "How do I file a claim?",
    a: "Call your office directly: Temple (254) 294-3311 or Corpus Christi (361) 317-7044. We will walk you through the claim process step by step.",
  },
];

const FAQ = () => {
  return (
    <section
      id="faq"
      className="section-light section-padding"
      aria-label="Frequently asked questions"
    >
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-10 sm:mb-14">
          <span className="label-uppercase mb-4 block">FAQ</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Texas Insurance, Questions Answered
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            The questions our team hears most from Texas families and businesses.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-serif text-base sm:text-lg text-charcoal">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="text-center text-sm text-charcoal/70 mt-10">
          Don&rsquo;t see your question? Call us at{" "}
          <a
            href="tel:2542943311"
            className="text-primary font-semibold hover:underline"
          >
            (254) 294-3311
          </a>{" "}
          or{" "}
          <a
            href="tel:3613177044"
            className="text-primary font-semibold hover:underline"
          >
            (361) 317-7044
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default FAQ;
