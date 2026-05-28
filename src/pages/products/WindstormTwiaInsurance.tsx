import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Wind,
  CheckCircle,
  Phone,
  AlertTriangle,
  Shield,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need TWIA windstorm insurance in Corpus Christi?",
    a: "If your home or business is in one of the 14 Texas first-tier coastal counties (Nueces County included), your standard homeowners policy almost certainly excludes windstorm and hail. TWIA — the Texas Windstorm Insurance Association — is the residual market that writes that coverage when private carriers will not. Most Corpus Christi homeowners need either a TWIA policy or a private wind policy on top of their HO-3.",
  },
  {
    q: "What is the difference between TWIA and a private windstorm policy?",
    a: "TWIA is a state-chartered insurer of last resort, funded by member premiums and assessments. It writes wind and hail only, with statutorily-defined limits. Private windstorm carriers can offer higher limits, broader endorsements, and sometimes better pricing for homes that qualify — but availability fluctuates with the market and roof age, claims history, and elevation matter. We quote both side-by-side.",
  },
  {
    q: "What is a named-storm or hurricane deductible?",
    a: "Coastal wind policies almost always carry a separate percentage deductible (typically 1%, 2%, or 5% of the dwelling limit) that applies only when a named storm strikes. On a $400,000 dwelling, a 2% hurricane deductible is $8,000 out-of-pocket before the policy pays. We help you size that deductible against your savings and risk tolerance.",
  },
  {
    q: "Does TWIA cover flood damage from a hurricane?",
    a: "No. TWIA and private windstorm policies cover wind and wind-driven rain. Flood — including hurricane storm surge and rising water — requires a separate NFIP or private flood policy. Hurricanes routinely cause both, which is why coastal homes need both policies in force.",
  },
  {
    q: "When can I buy or change a TWIA policy?",
    a: "TWIA has a binding moratorium that closes new and increased coverage when a named tropical system enters defined Gulf waters. Once the moratorium fires, you cannot bind or increase coverage until it lifts. Translation: buy or upgrade BEFORE hurricane season, not when the storm is on the radar.",
  },
  {
    q: "How does my roof affect windstorm eligibility?",
    a: "Roof age, material, and condition are the single biggest underwriting factor. Roofs over 15-20 years often face higher rates, partial-coverage settlements (Actual Cash Value vs. Replacement Cost), or outright non-renewal. We walk you through which carriers tolerate older roofs, when a roof inspection helps, and when it is time to budget for replacement.",
  },
];

const WindstormTwiaInsurance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page-specific JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 sm:py-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Wind className="w-10 h-10 text-primary" />
              </div>
              <p className="label-uppercase mb-3 text-primary">
                Coastal Texas Coverage
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                TWIA &amp; Windstorm Insurance in Corpus Christi
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Texas Windstorm Insurance Association (TWIA) and private
                windstorm coverage for homes and businesses in Nueces County and
                the Coastal Bend. Quoted side-by-side by an agency that has
                written coastal Texas wind for over three decades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2" asChild>
                  <a href="tel:+13613177044">
                    <Phone className="w-5 h-5" />
                    Call (361) 317-7044
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/locations/corpus-christi">Corpus Christi Office</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Warning */}
        <section className="py-8 bg-destructive/10">
          <div className="container-custom">
            <div className="flex items-start gap-3 max-w-3xl mx-auto">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-foreground">
                <strong>If you live in Nueces County, Aransas, Refugio,
                Kleberg, or any of the 14 first-tier coastal counties:</strong>{" "}
                your standard homeowners policy almost certainly excludes
                wind &amp; hail. You need TWIA or a private windstorm policy
                in force <em>before</em> hurricane season — once a named storm
                enters Gulf waters, TWIA closes binding entirely.
              </p>
            </div>
          </div>
        </section>

        {/* What is TWIA */}
        <section className="py-16 bg-background">
          <div className="container-custom max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              What is TWIA?
            </h2>
            <div className="prose prose-lg max-w-none text-foreground/90 space-y-4">
              <p>
                The <strong>Texas Windstorm Insurance Association</strong> is
                the state-chartered residual market for wind and hail coverage
                in the 14 first-tier coastal counties along the Texas Gulf —
                from Cameron County in the south through Jefferson County to
                the east. It exists because private carriers, after major
                hurricane losses, withdrew from writing primary wind on the
                coast. TWIA fills the gap so that property owners can still
                get a roof over their head insured.
              </p>
              <p>
                TWIA writes <strong>wind and hail only</strong>. It is not a
                substitute for your HO-3 homeowners policy — you still need a
                standard policy for fire, theft, liability, water damage, and
                non-wind perils. TWIA is the wind layer on top.
              </p>
              <p>
                Coverage limits, deductibles (percentage-based for named
                storms), and eligibility are defined by Texas statute and TWIA
                underwriting rules. Roof age and condition, certificate of
                compliance (WPI-8), elevation, and prior claims all factor
                into both eligibility and pricing.
              </p>
            </div>
          </div>
        </section>

        {/* TWIA vs Private */}
        <section className="py-16 bg-secondary border-y border-border">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              TWIA vs. Private Windstorm — How We Quote Both
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-background p-6 rounded-lg border border-border">
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">
                  TWIA Wind &amp; Hail
                </h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>State-chartered insurer of last resort</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Wind &amp; hail only (no fire, theft, water)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Statutory coverage limits ($2M dwelling max)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Named-storm % deductible (1%, 2%, or 5%)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>WPI-8 inspection required for new construction</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Binding closes when storm enters Gulf</span>
                  </li>
                </ul>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border">
                <Wind className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Private Windstorm
                </h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Higher coverage limits possible</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Broader endorsements available</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Better pricing for qualifying homes</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Replacement Cost roof options possible</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Availability fluctuates with the market</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Roof age, claims, elevation all matter</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-center text-foreground/80 mt-10 max-w-3xl mx-auto">
              We quote both — and tell you the trade-offs straight. A
              well-priced private policy can be a better fit; sometimes TWIA
              is the only carrier willing to write. The answer depends on
              your specific roof, location, and history.
            </p>
          </div>
        </section>

        {/* Hurricane deductible */}
        <section className="py-16 bg-background">
          <div className="container-custom max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              How Hurricane Deductibles Actually Work
            </h2>
            <div className="prose prose-lg max-w-none text-foreground/90 space-y-4">
              <p>
                Almost every coastal wind policy carries a{" "}
                <strong>separate named-storm or hurricane deductible</strong>{" "}
                — a percentage of the dwelling limit (not the loss) that
                applies only when a named tropical system causes the damage.
                Typical options are 1%, 2%, or 5%.
              </p>
              <p>
                On a $400,000 dwelling, that means:
              </p>
              <ul>
                <li>1% deductible = $4,000 out of pocket</li>
                <li>2% deductible = $8,000 out of pocket</li>
                <li>5% deductible = $20,000 out of pocket</li>
              </ul>
              <p>
                Every percentage point you raise lowers your premium —
                sometimes significantly. Every percentage point you raise
                also raises your bare-minimum reserve fund. We help you size
                that deductible against what you can actually write a check
                for the day after a storm, not the day you bind the policy.
              </p>
            </div>
          </div>
        </section>

        {/* Areas served */}
        <section className="py-16 bg-secondary border-y border-border">
          <div className="container-custom max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              Coastal Areas We Write
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              {[
                "Corpus Christi",
                "Portland",
                "Rockport",
                "Aransas Pass",
                "Port Aransas",
                "Kingsville",
                "Robstown",
                "Calallen",
                "Flour Bluff",
                "Padre Island",
                "Mustang Island",
                "Nueces County",
              ].map((c) => (
                <div
                  key={c}
                  className="flex items-center gap-2 bg-background p-3 rounded border border-border text-sm"
                >
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-background">
          <div className="container-custom max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground text-center mb-10">
              TWIA &amp; Windstorm Questions, Answered
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((item, i) => (
                <AccordionItem key={i} value={`twia-${i}`}>
                  <AccordionTrigger className="text-left font-serif text-base sm:text-lg text-foreground">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-secondary border-t border-border">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Get a TWIA &amp; private windstorm quote — side by side.
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Tell us about your home, your roof, and your zip. We will quote
              both markets and walk you through the trade-offs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <a
                href="tel:3613177044"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-md text-lg hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center"
              >
                <Phone className="w-5 h-5" />
                Call (361) 317-7044
              </a>
              <Link
                to="/locations/corpus-christi"
                className="btn-gold w-full sm:w-auto text-base px-6 py-3 text-center"
              >
                Visit Corpus Christi Office
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WindstormTwiaInsurance;
