import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Umbrella, CheckCircle, Phone, MapPin, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const UmbrellaInsurance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 sm:py-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Umbrella className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Umbrella Insurance in Texas
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Extended liability protection beyond your standard policies. Umbrella insurance provides 
                an extra layer of security for Temple, Corpus Christi, and Texas families with assets to protect.
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

        {/* What Is Umbrella Insurance */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  What Is Umbrella Insurance?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Umbrella insurance provides additional liability coverage beyond the limits of your 
                  auto, home, and boat insurance policies. It kicks in when your primary policy limits are exhausted.
                </p>
              </div>
              <div className="card-elevated p-8">
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">How It Works</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-bold text-foreground">You're in a serious car accident</p>
                      <p className="text-muted-foreground">Damages exceed your auto policy's $300,000 liability limit</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Your auto insurance pays its limit</p>
                      <p className="text-muted-foreground">$300,000 is paid, but the lawsuit is for $750,000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Umbrella insurance covers the rest</p>
                      <p className="text-muted-foreground">Your $1 million umbrella policy pays the remaining $450,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What It Covers */}
        <section className="py-16 bg-secondary/30">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              What Texas Umbrella Insurance Covers
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "Auto Accidents",
                  description: "Extended coverage for serious car accidents where damages exceed your auto policy limits."
                },
                {
                  title: "Home Liability",
                  description: "Protection when someone is injured on your property and sues beyond your homeowners limits."
                },
                {
                  title: "Watercraft Liability",
                  description: "Additional coverage for boating accidents on Texas lakes and the Gulf of Mexico."
                },
                {
                  title: "Rental Property",
                  description: "Extended liability for landlords in Temple, Corpus Christi, and across Texas."
                },
                {
                  title: "Defamation Claims",
                  description: "Coverage for libel, slander, and defamation lawsuits—even social media incidents."
                },
                {
                  title: "Legal Defense Costs",
                  description: "Pays for attorneys, court costs, and legal fees even for frivolous lawsuits."
                }
              ].map((coverage, index) => (
                <div key={index} className="card-elevated p-5">
                  <div className="flex items-start gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <h3 className="font-bold text-foreground">{coverage.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{coverage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Needs It */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">
                Who Needs Umbrella Insurance in Texas?
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Homeowners with Assets",
                    description: "If you have savings, investments, or property worth protecting, umbrella insurance shields them from lawsuits."
                  },
                  {
                    title: "Parents of Teen Drivers",
                    description: "Young drivers have higher accident rates. Umbrella coverage protects your family's assets."
                  },
                  {
                    title: "Pool or Trampoline Owners",
                    description: "Attractive nuisances increase liability risk. Extra coverage is essential protection."
                  },
                  {
                    title: "Landlords",
                    description: "Rental property owners in Bell and Nueces counties need extended liability protection."
                  },
                  {
                    title: "Business Owners",
                    description: "Personal umbrella insurance protects assets separate from your business insurance."
                  },
                  {
                    title: "Boat or RV Owners",
                    description: "Recreational vehicles increase your exposure to liability claims."
                  },
                  {
                    title: "Frequent Entertainers",
                    description: "If you host guests often, you have increased risk of someone being injured on your property."
                  },
                  {
                    title: "High-Income Earners",
                    description: "Higher incomes mean you're a bigger target for lawsuits seeking larger settlements."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Affordable Coverage */}
        <section className="py-16 bg-secondary/30">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Surprisingly Affordable Protection
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Umbrella insurance is one of the best values in the insurance industry. 
                A $1 million policy typically costs just <strong>$150-300 per year</strong>—about $15-25/month.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-background rounded-xl p-6 shadow-sm">
                  <p className="text-3xl font-bold text-primary mb-2">$1M</p>
                  <p className="text-sm text-muted-foreground">~$150-300/year</p>
                </div>
                <div className="bg-background rounded-xl p-6 shadow-sm">
                  <p className="text-3xl font-bold text-primary mb-2">$2M</p>
                  <p className="text-sm text-muted-foreground">~$225-400/year</p>
                </div>
                <div className="bg-background rounded-xl p-6 shadow-sm">
                  <p className="text-3xl font-bold text-primary mb-2">$5M</p>
                  <p className="text-sm text-muted-foreground">~$350-600/year</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Offices */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Local Texas Umbrella Insurance Experts
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="card-elevated p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Temple, TX Office</h3>
                </div>
                <p className="text-muted-foreground">
                  Protecting Bell County families with comprehensive umbrella coverage. 
                  Our Temple agents help you determine the right amount of liability protection 
                  based on your assets and risk profile.
                </p>
              </div>
              <div className="card-elevated p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Corpus Christi, TX Office</h3>
                </div>
                <p className="text-muted-foreground">
                  Nueces County's trusted umbrella insurance provider. 
                  With waterfront property and boating common in Corpus Christi, 
                  extended liability protection is especially important.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">
              Protect Your Assets with Umbrella Insurance
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Get a free umbrella insurance quote from Maxwell Insurance Agency. 
              We'll review your current coverage and recommend the right umbrella limits 
              for your Temple, Corpus Christi, or Texas family.
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

export default UmbrellaInsurance;
