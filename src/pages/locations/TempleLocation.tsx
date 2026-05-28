import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import QuoteForm from "@/components/QuoteForm";
import {
  Phone,
  MapPin,
  Clock,
  Car,
  Home as HomeIcon,
  Heart,
  Briefcase,
  CloudRain,
} from "lucide-react";

const TempleLocation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* JSON-LD for this location */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "InsuranceAgency",
            "@id": "https://maxwellinsuranceagency.com/locations/temple#org",
            name: "Maxwell Financial Group - Temple",
            url: "https://maxwellinsuranceagency.com/locations/temple",
            telephone: "+1-254-294-3311",
            image: "https://maxwellinsuranceagency.com/og/homepage.jpg",
            address: {
              "@type": "PostalAddress",
              streetAddress: "201 Clinite Grove Blvd Ste 110",
              addressLocality: "Temple",
              addressRegion: "TX",
              postalCode: "76502",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 31.0821,
              longitude: -97.3428,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "09:00",
              closes: "18:00",
            },
            areaServed: [
              { "@type": "City", name: "Temple" },
              { "@type": "City", name: "Belton" },
              { "@type": "City", name: "Killeen" },
              { "@type": "City", name: "Harker Heights" },
              { "@type": "City", name: "Salado" },
              { "@type": "AdministrativeArea", name: "Bell County, TX" },
            ],
          }),
        }}
      />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-12 sm:py-20">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <p className="label-uppercase mb-3 text-primary">Bell County, TX</p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Insurance in Temple, Texas
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Auto, home, life, business, and flood coverage from a
                fourth-generation Texas family agency. Located on Clinite Grove
                Boulevard — serving Temple, Belton, Killeen, Harker Heights,
                Salado, and all of Bell County.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:2542943311"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-md text-lg hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center"
                >
                  <Phone className="w-5 h-5" />
                  (254) 294-3311
                </a>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="btn-gold w-full sm:w-auto text-base px-6 py-3"
                >
                  Get My Free Quote
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* NAP card + map */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-secondary rounded-xl p-6 md:p-8 border border-border">
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                  Temple Office
                </h2>

                <address className="not-italic space-y-4 text-base">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="text-foreground font-medium">
                        201 Clinite Grove Blvd Ste 110
                      </p>
                      <p className="text-muted-foreground">Temple, TX 76502</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0" />
                    <a
                      href="tel:2542943311"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      (254) 294-3311
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary shrink-0" />
                    <p className="text-muted-foreground">
                      Mon–Fri 9:00 AM – 6:00 PM
                    </p>
                  </div>
                </address>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=201+Clinite+Grove+Blvd+Ste+110%2C+Temple%2C+TX+76502"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  <MapPin className="w-4 h-4" />
                  Get driving directions
                </a>
              </div>

              <div className="rounded-xl overflow-hidden border border-border h-[350px] md:h-full min-h-[350px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.2!2d-97.3428!3d31.0821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8645d3a8f1e8c8c7%3A0x0!2s201%20Clinite%20Grove%20Blvd%20Ste%20110%2C%20Temple%2C%20TX%2076502!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map of Maxwell Financial Group Temple office"
                />
              </div>
            </div>
          </div>
        </section>

        {/* City-specific copy */}
        <section className="py-12 sm:py-16 bg-secondary border-y border-border">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Built for Bell County
              </h2>
              <div className="prose prose-lg max-w-none text-foreground/90 space-y-4">
                <p>
                  Our Temple office sits in the heart of Bell County, with
                  clients across Temple, Belton, Killeen, Harker Heights,
                  Nolanville, Morgan&rsquo;s Point Resort, Salado, Troy, and
                  the surrounding communities along I-35 and US-190. We&rsquo;ve
                  written policies in this region for over three decades.
                </p>
                <p>
                  Central Texas weather is its own underwriting puzzle:
                  hailstorms in the spring, severe wind in the summer, and the
                  ever-present need for proper flood and storm coverage. Our
                  team designs auto, home, and umbrella policies that hold up
                  to what Bell County actually throws at you — not what a
                  national 1-800 call center thinks Texas looks like.
                </p>
                <p>
                  We serve families, ranchers, small business owners,
                  contractors, and commuters driving the I-35 corridor between
                  Temple and Austin. When you call our Temple office, a real
                  human at this address picks up — not an out-of-state queue.
                </p>
              </div>

              <h3 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
                Coverage available from our Temple office
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { icon: Car, label: "Auto Insurance" },
                  { icon: HomeIcon, label: "Home Insurance" },
                  { icon: Heart, label: "Life Insurance" },
                  { icon: Briefcase, label: "Business Insurance" },
                  { icon: CloudRain, label: "Flood & Storm" },
                  { icon: MapPin, label: "Umbrella, Renters, Specialty" },
                ].map((c) => (
                  <div
                    key={c.label}
                    className="flex items-center gap-3 bg-background p-4 rounded-lg border border-border"
                  >
                    <c.icon className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      {c.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready for a Temple quote?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Free, 60-second start. No obligation. A real human follows up
              within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <a
                href="tel:2542943311"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-md text-lg hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center"
              >
                <Phone className="w-5 h-5" />
                Call (254) 294-3311
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-gold w-full sm:w-auto text-base px-6 py-3"
              >
                Get My Free Quote
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Temple Office: Request a Quote"
      >
        <QuoteForm onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default TempleLocation;
