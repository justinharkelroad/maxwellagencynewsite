import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Key, CheckCircle, Phone, MapPin, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const RentersInsurance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 sm:py-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Key className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Renters Insurance in Texas
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Affordable renters insurance starting at just $5/month. Protect your belongings in 
                Temple, Corpus Christi, and throughout Texas with comprehensive tenant coverage.
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

        {/* Why Renters Insurance */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Why Texas Renters Need Insurance
              </h2>
              <p className="text-lg text-muted-foreground">
                Your landlord's insurance doesn't cover your personal belongings. 
                Renters insurance protects what's yours—for less than a coffee per week.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Personal Property Protection",
                  description: "Covers furniture, electronics, clothing, and valuables if stolen, damaged by fire, or destroyed by covered events like Texas storms."
                },
                {
                  title: "Liability Coverage",
                  description: "Protects you if someone is injured in your apartment or if you accidentally damage someone else's property. Covers legal fees and medical bills."
                },
                {
                  title: "Additional Living Expenses",
                  description: "Pays for hotel stays and meals if your rental becomes uninhabitable after a covered loss. Essential during Texas storm season."
                },
                {
                  title: "Theft Protection",
                  description: "Covers stolen items whether taken from your apartment, car, or even while traveling. Protection for Temple and Corpus Christi renters."
                },
                {
                  title: "Medical Payments",
                  description: "Covers minor injuries to guests in your rental regardless of fault. Quick claim resolution without lengthy legal processes."
                },
                {
                  title: "Water Damage Coverage",
                  description: "Protects against sudden water damage from burst pipes or upstairs neighbor incidents. Common in Texas apartment complexes."
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

        {/* Affordable Pricing */}
        <section className="py-16 bg-secondary/30">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Surprisingly Affordable Coverage
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Texas renters insurance typically costs just <strong>$15-25 per month</strong>—less than 
                a streaming subscription. Many policies start as low as <strong>$5/month</strong> for basic coverage.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-background rounded-xl p-6 shadow-sm">
                  <p className="text-3xl font-bold text-primary mb-2">$5</p>
                  <p className="text-sm text-muted-foreground">Starting monthly rate</p>
                </div>
                <div className="bg-background rounded-xl p-6 shadow-sm">
                  <p className="text-3xl font-bold text-primary mb-2">$30K</p>
                  <p className="text-sm text-muted-foreground">Typical property coverage</p>
                </div>
                <div className="bg-background rounded-xl p-6 shadow-sm">
                  <p className="text-3xl font-bold text-primary mb-2">$100K</p>
                  <p className="text-sm text-muted-foreground">Liability protection</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Service */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Local Renters Insurance Experts
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="card-elevated p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Temple, TX Renters</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Apartment and house renters in Bell County trust Maxwell Insurance for affordable coverage. 
                  Whether you're near Scott & White or Baylor, we've got you covered.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Serving:</strong> Temple apartments, Bell County rentals, student housing, duplexes
                </p>
              </div>
              <div className="card-elevated p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Corpus Christi, TX Renters</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Nueces County renters need coverage for coastal weather risks. 
                  Our policies protect against wind damage, theft, and liability year-round.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Serving:</strong> Corpus Christi apartments, beach condos, island rentals, student housing
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">
              Get Renters Insurance in Minutes
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Quick quotes, easy enrollment, and affordable rates. Protect your belongings 
              in Temple, Corpus Christi, and anywhere in Texas with Maxwell Insurance Agency.
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

export default RentersInsurance;
