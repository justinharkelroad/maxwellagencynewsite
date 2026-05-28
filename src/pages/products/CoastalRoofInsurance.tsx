import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Home as HomeIcon,
  Phone,
  AlertTriangle,
  CheckCircle,
  TrendingDown,
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
    q: "Why does roof age matter so much for coastal Texas insurance?",
    a: "Roofs are the first thing a hurricane attacks. A failed roof lets wind, rain, and pressure cycle into the structure, which turns a contained event into a total loss. Insurers price and underwrite around roof condition because their actuarial data says roof age is the strongest single predictor of catastrophic claim severity in coastal counties.",
  },
  {
    q: "At what age does a roof start affecting my insurance options?",
    a: "It varies by carrier, but the inflection points are roughly: under 10 years — most carriers and TWIA write standard terms; 10-15 years — fewer carriers, sometimes requires roof inspection, full Replacement Cost coverage still common; 15-20 years — many carriers move to Actual Cash Value (ACV) settlement on the roof or non-renew; over 20 years — limited carriers, often ACV or no coverage at all, TWIA may decline.",
  },
  {
    q: "What is the difference between Replacement Cost and Actual Cash Value on a roof?",
    a: "Replacement Cost (RCV) pays what it costs to install a new roof of like kind and quality today. Actual Cash Value (ACV) pays the depreciated value — RCV minus accumulated depreciation. On a 17-year-old shingle roof, an ACV settlement after a total loss might cover 30-50% of the replacement cost. That gap comes out of your pocket.",
  },
  {
    q: "Will an older roof disqualify me from TWIA?",
    a: "TWIA does not automatically decline older roofs but applies underwriting rules around roof age, condition, and material. Roofs over 15-20 years often face stricter terms or require a passing roof inspection. Some private wind carriers are stricter than TWIA on older roofs. We help you understand which markets will write you and at what terms.",
  },
  {
    q: "Should I replace my roof before or after a storm?",
    a: "Before. A replaced roof restores your eligibility for the broadest market of carriers, full Replacement Cost coverage, and often lower premiums. After a storm, supply chains tighten, contractor pricing spikes, and you are at the back of the queue. Pre-storm replacement also reduces the chance that a weakened roof causes a total loss when the storm hits.",
  },
  {
    q: "What roof materials hold up best on the Texas coast?",
    a: "Impact-resistant Class 4 shingles, standing-seam metal, and concrete or clay tile all outperform standard 3-tab asphalt for wind and hail. Many carriers offer impact-resistant roof discounts (sometimes 10-30%) that pay for themselves over the life of the roof. The right choice depends on your home, budget, and how long you plan to stay.",
  },
];

const CoastalRoofInsurance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

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
                <HomeIcon className="w-10 h-10 text-primary" />
              </div>
              <p className="label-uppercase mb-3 text-primary">
                Coastal Texas Underwriting
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Why Coastal Roof Age Matters for Your Insurance
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                The single biggest underwriting factor on a Corpus Christi
                homeowners policy is not your credit score or your zip code —
                it&rsquo;s the age and condition of your roof. Here&rsquo;s
                what the carriers actually look at, and what it means for
                your premium and your protection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2" asChild>
                  <a href="tel:+13613177044">
                    <Phone className="w-5 h-5" />
                    Call (361) 317-7044
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/insurance/home">Home Insurance</Link>
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
                If your roof is over 15 years old and you have not reviewed
                your homeowners policy in the last two years, your carrier
                may already have moved you to Actual Cash Value (ACV)
                settlement on the roof. After a total loss, that can mean
                tens of thousands out of pocket.{" "}
                <strong>Call us to pull your declarations and check.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* The brackets */}
        <section className="py-16 bg-background">
          <div className="container-custom max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              How Carriers Look at Roof Age in Texas
            </h2>
            <div className="prose prose-lg max-w-none text-foreground/90 space-y-4">
              <p>
                Roof age is the strongest single underwriting variable on
                coastal Texas property because the actuarial data is clear:
                older roofs fail more often, more dramatically, and more
                expensively. Carriers use roof age to decide whether they
                will write you at all, how much they will charge, what
                deductible they will require, and how they will settle a
                claim.
              </p>
              <p>The bracket structure most carriers use:</p>
            </div>

            <div className="mt-8 space-y-4">
              {[
                {
                  age: "0-10 years",
                  status: "Open market",
                  color: "bg-primary/10 border-primary/30",
                  body: "Broadest market access. Most carriers and TWIA write standard terms. Full Replacement Cost coverage standard. Best premiums.",
                },
                {
                  age: "10-15 years",
                  status: "Tightening",
                  color: "bg-amber-500/10 border-amber-500/30",
                  body: "Carrier count narrows. Some carriers require a roof inspection or photo. Replacement Cost still common but watch the endorsement language. Premiums creep up.",
                },
                {
                  age: "15-20 years",
                  status: "Restricted",
                  color: "bg-orange-500/10 border-orange-500/30",
                  body: "Many carriers move to Actual Cash Value on the roof. Some non-renew. Inspections often required. TWIA terms may tighten. Premiums rise meaningfully.",
                },
                {
                  age: "Over 20 years",
                  status: "Limited / replace",
                  color: "bg-destructive/10 border-destructive/30",
                  body: "Very few carriers will write. ACV settlement is the norm. TWIA may decline. Best move: replace the roof. Roof replacement restores access to the full market.",
                },
              ].map((b) => (
                <div
                  key={b.age}
                  className={`border-2 rounded-lg p-5 ${b.color}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {b.age}
                    </h3>
                    <span className="text-sm font-semibold uppercase tracking-wide text-foreground/70">
                      {b.status}
                    </span>
                  </div>
                  <p className="text-foreground/80">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RCV vs ACV */}
        <section className="py-16 bg-secondary border-y border-border">
          <div className="container-custom max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              Replacement Cost vs. Actual Cash Value
            </h2>
            <p className="text-center text-foreground/80 mb-10">
              The single most expensive line item on a coastal homeowners
              policy you have probably never read. Here is what it actually
              means after a total loss.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-lg border-2 border-primary/40">
                <CheckCircle className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Replacement Cost (RCV)
                </h3>
                <p className="text-foreground/80 mb-3">
                  Pays what it costs to install a new roof of like kind and
                  quality at <strong>today&rsquo;s prices</strong>, regardless
                  of how old the roof was at the time of the loss.
                </p>
                <p className="text-sm text-foreground/60">
                  Example: 17-year-old shingle roof, total loss after
                  hurricane. RCV pays full cost of new shingle roof — say
                  $22,000.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border-2 border-destructive/40">
                <TrendingDown className="w-8 h-8 text-destructive mb-3" />
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Actual Cash Value (ACV)
                </h3>
                <p className="text-foreground/80 mb-3">
                  Pays the <strong>depreciated value</strong> — RCV minus
                  accumulated depreciation based on the age of the roof.
                </p>
                <p className="text-sm text-foreground/60">
                  Same example: 17-year-old shingle roof, $22,000
                  replacement. With 17 years of depreciation on a 20-year
                  shingle, ACV might pay ~$3,300. The $18,700 gap is yours.
                </p>
              </div>
            </div>

            <p className="text-foreground/80 mt-8 text-center">
              Most Texas homeowners think they have RCV on the roof.{" "}
              <strong>Many have been quietly switched to ACV at
              renewal.</strong> The declaration page tells you which one you
              actually have — we can pull it for you in 60 seconds.
            </p>
          </div>
        </section>

        {/* Impact-resistant discounts */}
        <section className="py-16 bg-background">
          <div className="container-custom max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Impact-Resistant Roofs &amp; Discount Opportunities
            </h2>
            <div className="prose prose-lg max-w-none text-foreground/90 space-y-4">
              <p>
                If your roof is approaching the 15-year mark, the math on a
                proactive replacement often beats the math on waiting. Two
                reasons: (1) replacing while your roof is still in good
                shape locks in the broadest market and the best premiums for
                another 15-20 years, and (2) modern impact-resistant
                materials often qualify for material premium discounts.
              </p>
              <p>Materials that typically qualify for impact-resistant discounts:</p>
              <ul>
                <li>
                  <strong>Class 4 impact-resistant shingles</strong> —
                  often 10-30% premium reduction depending on the carrier
                </li>
                <li>
                  <strong>Standing-seam metal roofing</strong> — durable in
                  high-wind events, often qualifies for discount
                </li>
                <li>
                  <strong>Concrete or clay tile</strong> — extremely
                  long-lived, but heavier and not right for every structure
                </li>
              </ul>
              <p>
                The right material depends on your home&rsquo;s structure,
                your budget, how long you plan to stay, and what the local
                market is paying. We will pull discount comparisons across
                carriers before you replace so you know which material gets
                you the most premium relief on the back end.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-secondary border-y border-border">
          <div className="container-custom max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground text-center mb-10">
              Coastal Roof &amp; Insurance Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((item, i) => (
                <AccordionItem key={i} value={`roof-${i}`}>
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
        <section className="py-16 bg-background">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Find out where you actually stand on your roof.
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              We will pull your homeowners declaration page, check whether
              you have RCV or ACV on the roof, and tell you straight what
              your options are.
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

export default CoastalRoofInsurance;
