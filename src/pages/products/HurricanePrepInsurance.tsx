import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Waves,
  Calendar,
  Phone,
  AlertTriangle,
  ClipboardCheck,
  Camera,
  FileText,
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
    q: "When does Atlantic hurricane season actually start?",
    a: "Atlantic hurricane season officially runs June 1 through November 30, with the peak window for the Texas Gulf coast falling between mid-August and mid-October. Insurance prep happens BEFORE June 1 — once a named storm enters the Gulf, both TWIA and many private wind carriers stop binding new or increased coverage until the storm dissipates.",
  },
  {
    q: "What insurance do I need before hurricane season in Corpus Christi?",
    a: "Three policies, layered: (1) Standard HO-3 homeowners for fire, theft, water, liability; (2) Windstorm coverage — either TWIA or a private wind policy — because HO-3 excludes wind in coastal counties; (3) NFIP or private flood for storm surge and rising water, which neither HO-3 nor wind policies cover. Missing any one of the three leaves a hole.",
  },
  {
    q: "How long does flood insurance take to go into effect?",
    a: "NFIP flood policies have a 30-day waiting period before coverage starts. Translation: if you wait until a storm is forming, the policy will not cover that storm. Private flood may have shorter waiting periods but rarely zero. Bind in spring; do not wait until the cone shows up.",
  },
  {
    q: "Should I document my home for insurance before a hurricane?",
    a: "Yes — a complete photo and video inventory before the storm makes claims far easier. Walk every room, open every closet, video all four exterior sides of the house and roof from the ground. Store the files in cloud storage. After a loss, you would otherwise be trying to reconstruct what you owned from memory.",
  },
  {
    q: "What is a Certificate of Insurance and do I need one for evacuation?",
    a: "Many evacuation centers, hotels, and short-term rentals will ask for proof of insurance. Keep a current declaration page (your policy summary) saved to your phone for every policy: home, wind, flood, auto. We can email a fresh decs page anytime — same business day during hurricane season.",
  },
  {
    q: "Does my auto policy cover hurricane damage?",
    a: "Comprehensive coverage on your auto policy covers wind, flood, falling objects, and named-storm damage. Liability-only does NOT. If you carry liability only and evacuate through a flooded zone, your vehicle is uninsured for storm damage. Many coastal clients add comprehensive specifically for hurricane season.",
  },
];

const checklist = [
  {
    icon: ClipboardCheck,
    title: "Confirm all three policies are in force",
    body: "HO-3 homeowners + TWIA or private wind + NFIP or private flood. Call us to check expiration dates before June 1.",
  },
  {
    icon: Camera,
    title: "Document everything BEFORE the storm",
    body: "Photo + video every room, open closets, exterior all four sides + roof. Cloud-stored. Receipts for big-ticket items.",
  },
  {
    icon: FileText,
    title: "Save current declaration pages to your phone",
    body: "Home, wind, flood, auto. Evacuation centers and adjusters ask for these. We'll email fresh ones same business day.",
  },
  {
    icon: Calendar,
    title: "Plan the deductible math NOW, not during the storm",
    body: "Know your hurricane deductible in dollars (1% of dwelling, 2%, etc.). Set aside the reserve fund. The day after a storm is the wrong time to discover you can't write that check.",
  },
];

const HurricanePrepInsurance = () => {
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
                <Waves className="w-10 h-10 text-primary" />
              </div>
              <p className="label-uppercase mb-3 text-primary">
                Coastal Texas Insurance Prep
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Hurricane Season Insurance Prep for Corpus Christi
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                What every Coastal Bend homeowner should have in place before
                June 1 — and why waiting until the cone shows up is the most
                expensive mistake on the coast.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2" asChild>
                  <a href="tel:+13613177044">
                    <Phone className="w-5 h-5" />
                    Call (361) 317-7044
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/insurance/windstorm-twia">TWIA &amp; Windstorm</Link>
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
                <strong>NFIP flood policies take 30 days to go into
                effect.</strong>{" "}
                If you bind on June 15, your coverage starts July 15. A storm
                in early July would not be covered. Bind in spring, not in
                July.
              </p>
            </div>
          </div>
        </section>

        {/* Stack */}
        <section className="py-16 bg-background">
          <div className="container-custom max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              The Three-Policy Stack Every Coastal Home Needs
            </h2>
            <div className="prose prose-lg max-w-none text-foreground/90 space-y-4">
              <p>
                Hurricane damage almost never comes from one cause. A single
                storm can throw wind, wind-driven rain, storm surge, inland
                flooding, falling trees, and electrical surge at your home —
                and each of those gets settled under a different policy.
                Coastal Bend homeowners need <strong>three policies layered
                together</strong>:
              </p>
              <ol>
                <li>
                  <strong>Standard HO-3 Homeowners</strong> — covers fire,
                  theft, liability, water damage from indoor sources, falling
                  objects. <em>Excludes wind in coastal counties. Excludes
                  flood everywhere.</em>
                </li>
                <li>
                  <strong>Windstorm Coverage</strong> — TWIA (Texas Windstorm
                  Insurance Association) or a qualifying private wind policy.
                  This is the wind &amp; hail layer that fills the gap your
                  HO-3 leaves open.{" "}
                  <Link
                    to="/insurance/windstorm-twia"
                    className="text-primary font-semibold hover:underline"
                  >
                    Read our TWIA &amp; windstorm explainer
                  </Link>
                  .
                </li>
                <li>
                  <strong>Flood Insurance</strong> — NFIP through the federal
                  program or private flood. Storm surge and rising water are
                  flood, not wind, and neither HO-3 nor windstorm covers
                  them.{" "}
                  <Link
                    to="/insurance/flood-storm"
                    className="text-primary font-semibold hover:underline"
                  >
                    Flood &amp; storm coverage
                  </Link>
                  .
                </li>
              </ol>
              <p>
                Miss any one of the three and you have a hole the storm will
                find.
              </p>
            </div>
          </div>
        </section>

        {/* Pre-season checklist */}
        <section className="py-16 bg-secondary border-y border-border">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Before June 1 — Pre-Season Insurance Checklist
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {checklist.map((c) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.title}
                    className="bg-background p-6 rounded-lg border border-border"
                  >
                    <Icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {c.title}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      {c.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Binding moratorium */}
        <section className="py-16 bg-background">
          <div className="container-custom max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Why the Binding Moratorium Matters
            </h2>
            <div className="prose prose-lg max-w-none text-foreground/90 space-y-4">
              <p>
                TWIA and most private wind carriers operate under a{" "}
                <strong>binding moratorium</strong> that closes new and
                increased coverage when a named tropical storm or hurricane
                enters defined Gulf waters. The moratorium can fire days
                before a storm makes landfall and stays in force until the
                threat passes.
              </p>
              <p>
                What that means in practice: if a tropical depression forms
                on a Tuesday and the cone shifts toward Texas on Wednesday,
                you cannot buy or upgrade windstorm coverage Wednesday
                afternoon. Same with flood — NFIP&apos;s 30-day waiting
                period makes a last-minute bind useless against an incoming
                storm.
              </p>
              <p>
                <strong>The rule for the coast is simple:</strong> have every
                policy in force by May. Review limits and deductibles in
                April. Document the property in May. Then enjoy summer
                knowing the prep is done.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-secondary border-y border-border">
          <div className="container-custom max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground text-center mb-10">
              Hurricane Season Insurance Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((item, i) => (
                <AccordionItem key={i} value={`hurricane-${i}`}>
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
              Pre-season insurance review &mdash; before the cone shows up.
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Call our Corpus Christi office. We will pull your declarations,
              review limits and deductibles, and quote any gap in your
              three-policy stack.
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

export default HurricanePrepInsurance;
