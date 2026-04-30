import { MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import mfgLogo from "@/assets/mfg-logo-transparent.png";

const locations = [
  {
    name: "Temple, TX",
    phone: "254-294-3311",
  },
  {
    name: "Corpus Christi, TX",
    phone: "361-317-7044",
  },
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer */}
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img 
              src={mfgLogo} 
              alt="Maxwell Financial Group" 
              className="h-20 w-auto"
            />
          </div>

          {/* Locations */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12">
            {locations.map((location) => (
              <div key={location.name} className="text-center">
                <p className="text-foreground font-medium mb-1">{location.name}</p>
                <a 
                  href={`tel:${location.phone.replace(/[^0-9]/g, '')}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {location.phone}
                </a>
              </div>
            ))}
          </div>

          {/* Tagline */}
          <div className="text-center md:text-right">
            <p className="text-primary font-medium tracking-wide">
              Asset Protection • Risk Mitigation
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2025 Maxwell Financial Group. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground/70 text-center mt-6">
            Maxwell Insurance Group is a licensed insurance agency in the State of Texas, TDI License #3260189. Coverage is subject to policy terms, conditions, and exclusions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
