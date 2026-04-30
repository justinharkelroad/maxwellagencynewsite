import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CloudRain, CheckCircle, Phone, MapPin, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FloodInsurance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 sm:py-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CloudRain className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Flood & Storm Insurance in Texas
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Essential protection for Texas weather. Flood insurance, hurricane coverage, and storm damage 
                protection for Temple, Corpus Christi, and homeowners across the Lone Star State.
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

        {/* Warning Section */}
        <section className="py-8 bg-destructive/10">
          <div className="container-custom">
            <div className="flex items-center justify-center gap-3 text-center">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0" />
              <p className="text-foreground font-medium">
                <strong>Important:</strong> Standard homeowners insurance does NOT cover flood damage. 
                Separate flood insurance is required for full protection.
              </p>
            </div>
          </div>
        </section>

        {/* Coverage Options */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Texas Weather Coverage Options
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "NFIP Flood Insurance",
                  description: "Federal flood insurance through the National Flood Insurance Program. Available to all Texas homeowners, renters, and business owners in participating communities."
                },
                {
                  title: "Private Flood Insurance",
                  description: "Alternative flood coverage that may offer higher limits, better pricing, or faster claims processing than NFIP policies for qualifying Texas properties."
                },
                {
                  title: "Hurricane Coverage",
                  description: "Wind and storm surge protection for Gulf Coast properties. Essential coverage for Corpus Christi and coastal Texas homeowners during hurricane season."
                },
                {
                  title: "Windstorm Insurance (TWIA)",
                  description: "Texas Windstorm Insurance Association coverage for coastal properties. Required coverage for many Nueces County homes and businesses."
                },
                {
                  title: "Hail Damage Coverage",
                  description: "Protection against Texas hailstorms that can devastate roofs and vehicles. Critical coverage for Central Texas and Bell County properties."
                },
                {
                  title: "Storm Surge Protection",
                  description: "Coverage for ocean water pushed inland by hurricanes. Essential for coastal Corpus Christi properties near the Gulf of Mexico."
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

        {/* Regional Risks */}
        <section className="py-16 bg-secondary/30">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Texas Weather Risks by Region
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="card-elevated p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Central Texas (Temple/Bell County)</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CloudRain className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Flash Flooding:</strong> Sudden, intense rainfall can cause dangerous flooding in low-lying areas and near creeks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CloudRain className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Severe Hailstorms:</strong> Large hail can cause significant roof and vehicle damage throughout Bell County</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CloudRain className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Tornadoes:</strong> Central Texas is in Tornado Alley, requiring comprehensive wind coverage</span>
                  </li>
                </ul>
              </div>
              <div className="card-elevated p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Gulf Coast (Corpus Christi/Nueces County)</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CloudRain className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Hurricanes:</strong> Category 1-5 storms bring devastating winds, rain, and storm surge to the Texas coast</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CloudRain className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Tropical Storms:</strong> Even weaker systems can cause significant flooding and wind damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CloudRain className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Storm Surge:</strong> Ocean water pushed inland can devastate coastal properties near Corpus Christi Bay</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Flood Insurance Facts */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">
                Texas Flood Insurance Facts
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">30</p>
                  <p className="text-sm text-muted-foreground">Day waiting period for new NFIP policies</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">40%</p>
                  <p className="text-sm text-muted-foreground">Of flood claims come from low-risk zones</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">$250K</p>
                  <p className="text-sm text-muted-foreground">Maximum NFIP building coverage</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">1"</p>
                  <p className="text-sm text-muted-foreground">Of water can cause $25K+ in damage</p>
                </div>
              </div>
              <div className="card-elevated p-8 text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Don't Wait Until It's Too Late
                </h3>
                <p className="text-muted-foreground mb-6">
                  Flood insurance has a 30-day waiting period before coverage begins. 
                  If a storm is approaching, it's already too late to get protection. 
                  Contact Maxwell Insurance today to secure your flood coverage.
                </p>
                <Button className="gap-2" asChild>
                  <a href="tel:+12542943311">
                    <Phone className="w-5 h-5" />
                    Get Covered Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">
              Protect Your Texas Property from Weather
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Get comprehensive flood and storm coverage before the next Texas weather event. 
              Maxwell Insurance Agency serves Temple, Corpus Christi, and all of Texas.
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

export default FloodInsurance;
