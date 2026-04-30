import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Home, CheckCircle, Phone, MapPin, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomeInsurance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 sm:py-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Home className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Home Insurance in Texas
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Protect your biggest investment with comprehensive homeowners insurance. 
                Serving Temple, Corpus Christi, and all of Texas with coverage for storms, theft, liability, and more.
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
              Texas Homeowners Insurance Coverage
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Dwelling Coverage",
                  description: "Protects the structure of your home against fire, wind, hail, and other covered perils. Essential for Texas homes facing severe weather threats."
                },
                {
                  title: "Personal Property Coverage",
                  description: "Covers your belongings—furniture, electronics, clothing—if damaged or stolen. Inventory protection for Temple and Corpus Christi homeowners."
                },
                {
                  title: "Liability Protection",
                  description: "Covers legal expenses if someone is injured on your property. Protects your assets from lawsuits and medical claims."
                },
                {
                  title: "Additional Living Expenses",
                  description: "Pays for temporary housing if your home becomes uninhabitable after a covered loss. Peace of mind during Texas storm season."
                },
                {
                  title: "Wind & Hail Coverage",
                  description: "Critical protection for Texas homeowners. Covers roof damage and structural repairs from severe thunderstorms and Gulf hurricanes."
                },
                {
                  title: "Water Damage Coverage",
                  description: "Covers sudden water damage from burst pipes or appliance failures. Note: Flood insurance requires separate policy for Texas coastal areas."
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

        {/* Texas-Specific Risks */}
        <section className="py-16 bg-secondary/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Protection Against Texas Weather Risks
              </h2>
              <p className="text-lg text-muted-foreground">
                Texas homes face unique challenges. Our policies are designed for the specific 
                risks in Bell County, Nueces County, and throughout the Lone Star State.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="card-elevated p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Central Texas (Temple)</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Severe thunderstorm and hail protection</li>
                  <li>• Tornado damage coverage</li>
                  <li>• Flash flood considerations</li>
                  <li>• Foundation protection options</li>
                </ul>
              </div>
              <div className="card-elevated p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Gulf Coast (Corpus Christi)</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Hurricane and tropical storm coverage</li>
                  <li>• Wind-driven rain protection</li>
                  <li>• Saltwater corrosion considerations</li>
                  <li>• Flood insurance coordination</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">
              Protect Your Texas Home Today
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Get a personalized homeowners insurance quote from Maxwell Insurance Agency. 
              We compare rates from multiple carriers to find your best coverage in Temple, Corpus Christi, and beyond.
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

export default HomeInsurance;
