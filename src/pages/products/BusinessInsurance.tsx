import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Briefcase, CheckCircle, Phone, MapPin, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BusinessInsurance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 sm:py-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Business Insurance in Texas
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive commercial insurance for Texas businesses. General liability, commercial auto, 
                workers' comp, and more for Temple, Corpus Christi, and statewide operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2" asChild>
                  <a href="tel:+12542943311">
                    <Phone className="w-5 h-5" />
                    Get a Quote Now
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/#locations">Find a Location</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Types */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Commercial Insurance Coverage for Texas Businesses
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "General Liability Insurance",
                  description: "Protects your business from third-party claims of bodily injury, property damage, and advertising injury. Essential for every Texas business."
                },
                {
                  title: "Commercial Auto Insurance",
                  description: "Coverage for business vehicles, delivery trucks, and company cars. Serving Temple and Corpus Christi fleets of all sizes."
                },
                {
                  title: "Workers' Compensation",
                  description: "Covers medical expenses and lost wages for employees injured on the job. Required for most Texas employers with employees."
                },
                {
                  title: "Commercial Property Insurance",
                  description: "Protects your building, equipment, inventory, and furniture from fire, theft, and Texas weather damage."
                },
                {
                  title: "Professional Liability (E&O)",
                  description: "Errors and omissions coverage for professionals. Essential for consultants, accountants, and service providers in Bell and Nueces counties."
                },
                {
                  title: "Business Interruption Insurance",
                  description: "Replaces lost income when your business is closed due to a covered event. Critical protection during Texas storm season."
                }
              ].map((coverage, index) => (
                <div key={index} className="card-elevated p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <h3 className="text-xl font-bold text-foreground">{coverage.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{coverage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-16 bg-secondary/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Industries We Serve in Texas
                </h2>
                <p className="text-lg text-muted-foreground">
                  Specialized business insurance for the industries that drive Texas forward.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Restaurants & Food Service",
                  "Retail Stores",
                  "Construction Contractors",
                  "Healthcare & Medical",
                  "Professional Services",
                  "Manufacturing",
                  "Transportation & Trucking",
                  "Real Estate & Property Management",
                  "Technology & IT Services",
                  "Agriculture & Farming",
                  "Oil & Gas Services",
                  "Hospitality & Hotels"
                ].map((industry, index) => (
                  <div key={index} className="flex items-center gap-2 bg-background rounded-lg p-3 shadow-sm">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BOP Section */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="card-elevated p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Business Owner's Policy (BOP)
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    The smart choice for small and medium Texas businesses. Combines general liability 
                    and commercial property coverage in one affordable package.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-foreground mb-3">What's Included:</h3>
                    <ul className="space-y-2">
                      {[
                        "General liability protection",
                        "Business property coverage",
                        "Business interruption insurance",
                        "Equipment breakdown coverage",
                        "Data breach liability"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-3">Ideal For:</h3>
                    <ul className="space-y-2">
                      {[
                        "Small businesses under $5M revenue",
                        "Retail stores and shops",
                        "Professional offices",
                        "Service-based businesses",
                        "Home-based businesses"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Offices */}
        <section className="py-16 bg-secondary/30">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Texas Business Insurance Experts
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="card-elevated p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Temple, TX Office</h3>
                </div>
                <p className="text-muted-foreground">
                  Serving Bell County businesses with tailored commercial insurance solutions. 
                  From downtown Temple retailers to Belton manufacturers, we understand Central Texas business risks.
                </p>
              </div>
              <div className="card-elevated p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Corpus Christi, TX Office</h3>
                </div>
                <p className="text-muted-foreground">
                  Nueces County's trusted commercial insurance provider. 
                  Specialized coverage for coastal businesses, port operations, and the unique risks of Gulf Coast commerce.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">
              Protect Your Texas Business Today
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Get a comprehensive business insurance review from Maxwell Insurance Agency. 
              We'll identify coverage gaps and find competitive rates for your Temple or Corpus Christi business.
            </p>
            <Button size="lg" variant="secondary" className="gap-2" asChild>
              <a href="tel:+12542943311">
                <Phone className="w-5 h-5" />
                Call (254) 294-3311
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BusinessInsurance;
