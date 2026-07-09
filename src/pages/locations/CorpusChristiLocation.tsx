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

const CorpusChristiLocation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "InsuranceAgency",
            "@id":
              "https://maxwellinsuranceagency.com/locations/corpus-christi#office",
            name: "Maxwell Financial Group - Corpus Christi",
            url: "https://maxwellinsuranceagency.com/locations/corpus-christi",
            branchOf: { "@id": "https://maxwellinsuranceagency.com/#org" },
            parentOrganization: { "@id": "https://maxwellinsuranceagency.com/#org" },
            telephone: "+1-361-317-7044",
            image: "https://maxwellinsuranceagency.com/og/homepage.jpg",
            address: {
              "@type": "PostalAddress",
              streetAddress: "3837 S Padre Island Dr",
              addressLocality: "Corpus Christi",
              addressRegion: "TX",
              postalCode: "78415",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 27.7006,
              longitude: -97.365,
            },
            openingHoursSpecification: [
              {
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
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Saturday", "Sunday"],
                opens: "00:00",
                closes: "00:00",
              },
            ],
            areaServed: [
              { "@type": "City", name: "Corpus Christi" },
              { "@type": "City", name: "Portland" },
              { "@type": "City", name: "Rockport" },
              { "@type": "City", name: "Aransas Pass" },
              { "@type": "City", name: "Port Aransas" },
              { "@type": "City", name: "Kingsville" },
              { "@type": "AdministrativeArea", name: "Nueces County, TX" },
            ],
          }),
        }}
      />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-12 sm:py-20">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <p className="label-uppercase mb-3 text-primary">
                Nueces County, TX
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Insurance in Corpus Christi, Texas
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Auto, home, life, business, flood, and windstorm coverage from
                a fourth-generation Texas family agency. Located on South Padre
                Island Drive — serving Corpus Christi, Portland, Rockport,
                Aransas Pass, Port Aransas, Kingsville, and the Coastal Bend.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:3613177044"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-md text-lg hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center"
                >
                  <Phone className="w-5 h-5" />
                  (361) 317-7044
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

        <section className="py-12 sm:py-16 bg-background">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-secondary rounded-xl p-6 md:p-8 border border-border">
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                  Corpus Christi Office
                </h2>

                <address className="not-italic space-y-4 text-base">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="text-foreground font-medium">
                        3837 S Padre Island Dr
                      </p>
                      <p className="text-muted-foreground">
                        Corpus Christi, TX 78415
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0" />
                    <a
                      href="tel:3613177044"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      (361) 317-7044
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
                  href="https://www.google.com/maps/dir/?api=1&destination=3837+S+Padre+Island+Dr%2C+Corpus+Christi%2C+TX+78415"
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.5!2d-97.3650!3d27.7006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8668e4c0e0e0e0e0%3A0x0!2s3837%20S%20Padre%20Island%20Dr%2C%20Corpus%20Christi%2C%20TX%2078415!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map of Maxwell Financial Group Corpus Christi office"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-secondary border-y border-border">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Built for the Coastal Bend
              </h2>
              <div className="prose prose-lg max-w-none text-foreground/90 space-y-4">
                <p>
                  Our Corpus Christi office sits on South Padre Island Drive,
                  serving clients across Corpus Christi, Portland, Rockport,
                  Aransas Pass, Port Aransas, Kingsville, Robstown, Calallen,
                  Flour Bluff, and the wider Coastal Bend region. We&rsquo;ve
                  been writing policies for this stretch of Texas coast for
                  decades.
                </p>
                <p>
                  Coastal Texas insurance is a different animal: windstorm and
                  hail (TWIA) coverage, separate flood policies through NFIP
                  or private carriers, hurricane deductibles, and elevation
                  certificates. Our team writes coverage that actually pays
                  out when a Gulf storm rolls through — not policies stitched
                  together by an out-of-state agent who&rsquo;s never seen a
                  named storm.
                </p>
                <p>
                  We serve families along the bayfront, fishermen and boaters
                  on the coast, ranchers in Nueces County, small business
                  owners across the city, and commercial fleets along the
                  Port. When you call our Corpus Christi office, a real human
                  in this office picks up — not a national call center.
                </p>
              </div>

              <h3 className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">
                Coverage available from our Corpus Christi office
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { icon: Car, label: "Auto Insurance" },
                  { icon: HomeIcon, label: "Home Insurance" },
                  { icon: Heart, label: "Life Insurance" },
                  { icon: Briefcase, label: "Business Insurance" },
                  { icon: CloudRain, label: "Flood & Windstorm" },
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

        <section className="py-12 sm:py-16 bg-background">
          <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready for a Corpus Christi quote?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Free, 60-second start. No obligation. A real human follows up
              within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <a
                href="tel:3613177044"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-md text-lg hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center"
              >
                <Phone className="w-5 h-5" />
                Call (361) 317-7044
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
        title="Corpus Christi Office: Request a Quote"
      >
        <QuoteForm onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default CorpusChristiLocation;
