import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import mfgLogo from "@/assets/mfg-logo-transparent.png";

const leadershipTeam = [
  { name: "Kristin Maxwell", slug: "kristin" },
  { name: "Bill Maxwell", slug: "bill" },
  { name: "Chris Guillen", slug: "chris" },
  { name: "Grace Koch", slug: "grace" },
  { name: "Kara Townsend", slug: "kara" },
];

const salesTeam = [
  { name: "Brandon Foley", slug: "brandon" },
  { name: "Jennifer Boggiano", slug: "jennifer" },
  
  { name: "Natalia Fuentes", slug: "natalia" },
];

const customerServiceTeam = [
  { name: "Alayna Sudduth", slug: "alayna" },
  { name: "Angel Delgadillo", slug: "angel" },
  
  { name: "Gina Oliva", slug: "gina" },
  { name: "Haley Blackmon", slug: "haley" },
  
  { name: "Lola Flores", slug: "lola" },
  { name: "Nicole Tafur", slug: "nicole" },
  { name: "Salina Rodriguez", slug: "salina" },
  { name: "Star Perry", slug: "star" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLeadershipOpen, setIsLeadershipOpen] = useState(false);
  const [isSalesOpen, setIsSalesOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={mfgLogo}
              alt="Maxwell Financial Group"
              className="h-14 sm:h-16 w-auto"
            />
          </Link>

          {/* Desktop nav removed — using hamburger menu only */}


          <div className="flex items-center gap-3">
            {/* Call Now Button */}
            <a
              href="tel:2542943311"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-md text-sm hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">(254) 294-3311</span>
              <span className="sm:hidden">Call</span>
            </a>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Slide-out Menu */}
      {isMenuOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[60] animate-fade-in"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-secondary border-l border-border shadow-2xl z-[70] animate-slide-in-right flex flex-col isolate min-h-0">
              <div className="flex items-center justify-between p-6 border-b border-border shrink-0">
                <span className="font-serif text-xl text-foreground">Menu</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-primary" />
                </button>
              </div>

              <nav className="p-6 overflow-y-auto flex-1 min-h-0 relative z-10 bg-secondary overscroll-contain touch-pan-y" style={{ WebkitOverflowScrolling: "touch" } as React.CSSProperties}>
                {/* Leadership Team Folder */}
                <div className="mb-4">
                  <button
                    onClick={() => setIsLeadershipOpen(!isLeadershipOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-muted transition-colors bg-secondary"
                  >
                    <span className="label-uppercase">Leadership</span>
                    <ChevronDown
                      className={`w-4 h-4 text-primary transition-transform duration-200 ${
                        isLeadershipOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isLeadershipOpen && (
                    <ul className="mt-2 ml-4 space-y-1 border-l border-border pl-4 bg-secondary relative z-10">
                      {leadershipTeam.map((member) => (
                        <li key={member.slug}>
                          <Link
                            to={`/${member.slug}`}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-4 py-2 rounded-lg text-foreground hover:bg-muted hover:text-primary transition-colors font-medium text-sm bg-secondary"
                          >
                            {member.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Sales Team Folder */}
                <div className="mb-4">
                  <button
                    onClick={() => setIsSalesOpen(!isSalesOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-muted transition-colors bg-secondary"
                  >
                    <span className="label-uppercase">Sales Team</span>
                    <ChevronDown
                      className={`w-4 h-4 text-primary transition-transform duration-200 ${
                        isSalesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isSalesOpen && (
                    <ul className="mt-2 ml-4 space-y-1 border-l border-border pl-4 bg-secondary relative z-10">
                      {salesTeam.map((member) => (
                        <li key={member.slug}>
                          <Link
                            to={`/${member.slug}`}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-4 py-2 rounded-lg text-foreground hover:bg-muted hover:text-primary transition-colors font-medium text-sm bg-secondary"
                          >
                            {member.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Customer Service Folder */}
                <div className="mb-4">
                  <button
                    onClick={() => setIsServiceOpen(!isServiceOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-muted transition-colors bg-secondary"
                  >
                    <span className="label-uppercase">Customer Service</span>
                    <ChevronDown
                      className={`w-4 h-4 text-primary transition-transform duration-200 ${
                        isServiceOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isServiceOpen && (
                    <ul className="mt-2 ml-4 space-y-1 border-l border-border pl-4 bg-secondary relative z-10">
                      {customerServiceTeam.map((member) => (
                        <li key={member.slug}>
                          <Link
                            to={`/${member.slug}`}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-4 py-2 rounded-lg text-foreground hover:bg-muted hover:text-primary transition-colors font-medium text-sm bg-secondary"
                          >
                            {member.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Contact Us Link */}
                <div className="mb-4">
                  <Link
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center w-full px-4 py-3 rounded-lg hover:bg-muted transition-colors label-uppercase text-foreground hover:text-primary"
                  >
                    Contact Us
                  </Link>
                </div>
              </nav>
            </div>
          </>,
          document.body,
        )}
    </header>
  );
};

export default Header;
