import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import mfgLogo from "@/assets/mfg-logo-transparent.png";

const locations = [
  {
    name: "Temple, TX",
    streetAddress: "201 Clinite Grove Blvd Ste 110",
    cityLine: "Temple, TX 76502",
    phone: "(254) 294-3311",
    hours: "Mon–Fri 9:00 AM – 6:00 PM",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=201+Clinite+Grove+Blvd+Ste+110%2C+Temple%2C+TX+76502",
  },
  {
    name: "Corpus Christi, TX",
    streetAddress: "3837 S Padre Island Dr",
    cityLine: "Corpus Christi, TX 78415",
    phone: "(361) 317-7044",
    hours: "Mon–Fri 9:00 AM – 6:00 PM",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=3837+S+Padre+Island+Dr%2C+Corpus+Christi%2C+TX+78415",
  },
];

const products = [
  { label: "Auto Insurance", href: "/insurance/auto" },
  { label: "Home Insurance", href: "/insurance/home" },
  { label: "Life Insurance", href: "/insurance/life" },
  { label: "Business Insurance", href: "/insurance/business" },
  { label: "Flood & Storm", href: "/insurance/flood-storm" },
  { label: "Umbrella", href: "/insurance/umbrella" },
  { label: "Renters", href: "/insurance/renters" },
  { label: "Boat / Motorcycle / RV", href: "/insurance/motorcycle-boat" },
];

const company = [
  { label: "Our Story", href: "/our-story" },
  { label: "Temple, TX Office", href: "/locations/temple" },
  { label: "Corpus Christi, TX Office", href: "/locations/corpus-christi" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/#faq" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Sitemap", href: "/sitemap.xml" },
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand + tagline */}
          <div>
            <Link to="/" className="inline-block">
              <img
                src={mfgLogo}
                alt="Maxwell Financial Group"
                className="h-16 w-auto mb-4"
              />
            </Link>
            <p className="text-primary font-medium tracking-wide mb-3">
              Asset Protection • Risk Mitigation
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A fourth-generation Texas insurance agency serving Temple,
              Corpus Christi, and families and businesses statewide.
            </p>
          </div>

          {/* Locations (full NAP) */}
          {locations.map((loc) => (
            <div key={loc.name}>
              <h3 className="font-serif text-lg font-bold text-foreground mb-3">
                {loc.name} Office
              </h3>
              <address className="not-italic space-y-2 text-sm">
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                  <span>
                    {loc.streetAddress}
                    <br />
                    {loc.cityLine}
                  </span>
                </a>
                <a
                  href={`tel:${loc.phone.replace(/[^0-9]/g, "")}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  {loc.phone}
                </a>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                  <span>{loc.hours}</span>
                </div>
              </address>
            </div>
          ))}

          {/* Coverage + Company columns */}
          <div>
            <h3 className="font-serif text-lg font-bold text-foreground mb-3">
              Coverage
            </h3>
            <ul className="space-y-2 text-sm mb-6">
              {products.map((p) => (
                <li key={p.href}>
                  <Link
                    to={p.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-serif text-lg font-bold text-foreground mb-3">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              {company.map((c) => (
                <li key={c.href}>
                  {c.href.startsWith("/#") || c.href.endsWith(".xml") ? (
                    <a
                      href={c.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {c.label}
                    </a>
                  ) : (
                    <Link
                      to={c.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {c.label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <a
                  href="mailto:KristinMaxwell@Allstate.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  Email us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Maxwell Financial Group. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground/70 text-center mt-6">
            Maxwell Financial Group is a licensed insurance agency in the State
            of Texas, TDI License #3260189. Coverage is subject to policy terms,
            conditions, and exclusions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
