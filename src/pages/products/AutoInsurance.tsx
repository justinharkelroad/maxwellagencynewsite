import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Car, CheckCircle, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AutoInsurance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 sm:py-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Car className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Auto Insurance in Texas
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive car insurance coverage for Temple, Corpus Christi, and all of Texas. 
                Protect your vehicle with liability, collision, and full coverage options from Maxwell Insurance Agency.
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

        {/* Coverage Options */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Texas Auto Insurance Coverage Options
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Liability Coverage",
                  description: "Texas requires minimum liability insurance. We offer coverage that exceeds state minimums to protect you from costly lawsuits after an accident in Bell County or Nueces County."
                },
                {
                  title: "Collision Coverage",
                  description: "Covers damage to your vehicle from accidents, regardless of fault. Essential for Temple and Corpus Christi drivers navigating busy Texas highways and intersections."
                },
                {
                  title: "Comprehensive Coverage",
                  description: "Protection against theft, vandalism, hail damage, and Texas weather events. Crucial coverage for Gulf Coast storms and Central Texas hailstorms."
                },
                {
                  title: "Uninsured Motorist Coverage",
                  description: "Protects you when at-fault drivers lack adequate insurance. An important safeguard on Texas roads where uninsured drivers are common."
                },
                {
                  title: "Personal Injury Protection",
                  description: "Covers medical expenses for you and your passengers regardless of fault. Peace of mind for Temple and Corpus Christi families."
                },
                {
                  title: "Roadside Assistance",
                  description: "24/7 help for breakdowns, flat tires, and lockouts across Texas. Never be stranded on I-35 or I-37 without support."
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

        {/* Local Focus */}
        <section className="py-16 bg-secondary/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground text-center mb-8">
                Local Texas Auto Insurance Experts
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="card-elevated p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">Temple, TX</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Serving Bell County drivers with affordable auto insurance. Our Temple office understands 
                    the unique driving conditions of Central Texas, from I-35 commutes to rural farm roads.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Keywords:</strong> Temple TX auto insurance, Bell County car insurance, 
                    Central Texas vehicle coverage, I-35 corridor insurance
                  </p>
                </div>
                <div className="card-elevated p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">Corpus Christi, TX</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Nueces County's trusted auto insurance provider. We specialize in coverage for 
                    coastal drivers facing Gulf weather, salt air exposure, and hurricane season risks.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Keywords:</strong> Corpus Christi auto insurance, Nueces County car insurance, 
                    Gulf Coast vehicle coverage, coastal Texas insurance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">
              Get Your Free Texas Auto Insurance Quote Today
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Compare rates from top carriers. Our independent agents find you the best coverage 
              at the lowest price in Temple, Corpus Christi, and throughout Texas.
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

export default AutoInsurance;
