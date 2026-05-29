import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FamilyPolaroids from "@/components/FamilyPolaroids";
import { Phone, MapPin, Users, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

/**
 * Our Story — the entity-bridging anchor page.
 *
 * Track 2 of the SEO/GEO strategy: train search engines and LLM crawlers
 * that Maxwell Financial Group is the SAME entity as Laura Harris Agency
 * by repeated, structured co-occurrence of both names on a high-authority
 * owned page. Schema.org `predecessor` on the InsuranceAgency entity
 * (in index.html and this page) makes the relationship explicit.
 *
 * Page-level Article schema below carries the "Laura Harris Agency"
 * tokens that knowledge-graph crawlers index.
 *
 * TODO(maxwell): replace placeholders before deploy:
 *   - TRANSITION_YEAR     → year Maxwell Financial Group name began
 *   - LAURA_HARRIS_NOTE   → keep / adjust tone re: Laura (retired? advisory? other?)
 *   - LAURA_PHOTO_URL     → add /assets/laura-harris.jpg or similar
 *   - LEGACY_FOUNDED_YEAR → year Laura Harris Agency was founded (currently "early 1990s")
 */

const TRANSITION_YEAR = "2024";
const LEGACY_FOUNDED = "the early 1990s"; // TODO(maxwell): replace with actual founding year

const OurStory = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "@id": "https://maxwellinsuranceagency.com/our-story#page",
            name: "Our Story — From Laura Harris Agency to Maxwell Financial Group",
            url: "https://maxwellinsuranceagency.com/our-story",
            description:
              "The family-continuity story behind Maxwell Financial Group. Founded by Laura Harris in Corpus Christi, now led by her daughter Kristin Maxwell. Same office, same staff continuity, same coastal Texas insurance expertise.",
            mainEntity: {
              "@type": "InsuranceAgency",
              "@id": "https://maxwellinsuranceagency.com/#org",
              name: "Maxwell Financial Group",
              alternateName: [
                "Maxwell Insurance Agency",
                "Maxwell Financial Group LLC",
              ],
              predecessor: {
                "@type": "Organization",
                "@id":
                  "https://maxwellinsuranceagency.com/#predecessor-laura-harris-agency",
                name: "Laura Harris Agency",
                description:
                  "Corpus Christi insurance agency founded by Laura Harris. Continued today as Maxwell Financial Group under second-generation leadership.",
              },
            },
          }),
        }}
      />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 sm:py-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <p className="label-uppercase mb-3 text-primary">Our Story</p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                From the Laura Harris Agency to{" "}
                <span className="text-primary">Maxwell Financial Group</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Same Corpus Christi office. Same staff. Same coastal Texas
                insurance expertise. A second-generation family agency,
                continuing the work Laura Harris built — now under her
                daughter Kristin Maxwell.
              </p>
            </div>
          </div>
        </section>

        {/* Family snapshots */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container-custom max-w-4xl">
            <FamilyPolaroids />
          </div>
        </section>

        {/* Founding story */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container-custom max-w-3xl">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
              The Laura Harris Agency, Corpus Christi
            </h2>
            <div className="prose prose-lg max-w-none text-foreground/90 space-y-4">
              <p>
                In {LEGACY_FOUNDED}, <strong>Laura Harris</strong> opened her
                insurance practice in Corpus Christi, Texas.
                Over the decades that followed, the Laura Harris Agency
                became known across the Coastal Bend for one thing above all
                else: a real person on the phone, calling clients back the
                same day, treating coverage decisions like the financial
                decisions they actually are.
              </p>
              <p>
                The agency wrote auto, home, life, business, flood, and
                windstorm policies for thousands of Corpus Christi, Portland,
                Rockport, Aransas Pass, Port Aransas, Kingsville, and
                Coastal Bend families. It survived the hurricanes,
                navigated the underwriting cycles, and built a reputation
                that compounded across two generations of coastal Texans.
              </p>
            </div>
          </div>
        </section>

        {/* Transition */}
        <section className="py-12 sm:py-16 bg-secondary border-y border-border">
          <div className="container-custom max-w-3xl">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Becoming Maxwell Financial Group
            </h2>
            <div className="prose prose-lg max-w-none text-foreground/90 space-y-4">
              <p>
                <strong>Kristin Maxwell</strong>, Laura&rsquo;s daughter,
                grew up inside the agency. She began her own insurance career
                in 1994 and worked alongside her mother for years before
                stepping into ownership of the practice. In{" "}
                {TRANSITION_YEAR}, the agency took on her name: Maxwell Financial Group.
              </p>
              <p>
                What did <strong>not</strong> change: the office address on
                South Padre Island Drive. The phone number clients had been
                calling for decades. The staff who had been with the agency
                long enough to remember Laura&rsquo;s first hires. The
                deep coastal-Texas expertise in windstorm, TWIA, flood, and
                hurricane claims that takes a generation to build. The
                same client relationships, in some cases now spanning
                three generations of the same family.
              </p>
              <p>
                What did change: the next generation took the reins.
                Kristin&rsquo;s team has since expanded into Bell County
                with a second office in Temple, modernized the agency&rsquo;s
                technology and service operations, and continued the work
                of growing alongside the families and businesses that
                Laura Harris first earned the trust of.
              </p>
            </div>
          </div>
        </section>

        {/* What continues */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container-custom max-w-4xl">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-10 text-center">
              What Carries Forward
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: MapPin,
                  title: "Same office, same address",
                  body: "3837 South Padre Island Drive in Corpus Christi. Same phone, (361) 317-7044, that clients have called for years.",
                },
                {
                  icon: Users,
                  title: "Staff continuity",
                  body: "Many of the team members who worked with Laura are still here. Grace Koch started in Allstate claims back in 1988 and joined the agency in 2002. Decades of Coastal Bend client relationships, unbroken.",
                },
                {
                  icon: Award,
                  title: "Coastal Texas expertise",
                  body: "Windstorm, TWIA, flood, hurricane preparation. The kind of working knowledge a national 1-800 call center cannot replicate.",
                },
                {
                  icon: Heart,
                  title: "Family-led service",
                  body: "Mother to daughter. The agency you call still answers as the agency you knew — only the next generation is now on the phone.",
                },
                {
                  icon: Phone,
                  title: "A real human answers",
                  body: "When you call, you get an Corpus Christi office, not an out-of-state queue. Same as it always was.",
                },
                {
                  icon: Award,
                  title: "Growth into Bell County",
                  body: "Kristin expanded the agency to a second office in Temple, Texas, serving Bell County families and businesses with the same approach.",
                },
              ].map((b) => (
                <div
                  key={b.title}
                  className="bg-secondary p-6 rounded-lg border border-border"
                >
                  <b.icon className="w-7 h-7 text-primary mb-3" />
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                    {b.title}
                  </h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {b.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Returning clients */}
        <section className="py-12 sm:py-16 bg-secondary border-y border-border">
          <div className="container-custom max-w-3xl text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Coming back to the agency?
            </h2>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              If you remember us as the Laura Harris Agency, you&rsquo;re in
              the right place. The name on the sign is now Maxwell Financial
              Group — but the team, the office, the phone number, and the
              way we treat coverage have not changed. Call us. Same number
              as ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <a
                href="tel:3613177044"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-md text-lg hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center"
              >
                <Phone className="w-5 h-5" />
                (361) 317-7044
              </a>
              <Link
                to="/locations/corpus-christi"
                className="btn-gold w-full sm:w-auto text-base px-6 py-3 text-center"
              >
                Corpus Christi Office
              </Link>
            </div>
          </div>
        </section>

        {/* Kristin link */}
        <section className="py-12 bg-background">
          <div className="container-custom max-w-3xl text-center">
            <p className="text-base text-foreground/70 mb-3">
              Meet the leader continuing the agency:
            </p>
            <Button asChild size="lg" variant="outline">
              <Link to="/kristin">Read Kristin Maxwell&rsquo;s story</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OurStory;
