import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, CheckCircle, Phone, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LifeInsurance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 sm:py-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Life Insurance in Texas
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Protect your family's financial future with term, whole, and universal life insurance. 
                Serving Temple, Corpus Christi, and all of Texas with personalized life insurance solutions.
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

        {/* Types of Life Insurance */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Life Insurance Options for Texas Families
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="card-elevated p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Term Life Insurance</h3>
                <p className="text-muted-foreground mb-6">
                  Affordable coverage for a specific period—10, 20, or 30 years. 
                  Ideal for young families in Temple and Corpus Christi who need maximum coverage at the lowest cost.
                </p>
                <ul className="text-left space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Lowest monthly premiums
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Coverage during high-need years
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Convertible to permanent coverage
                  </li>
                </ul>
              </div>
              <div className="card-elevated p-8 text-center border-primary/20 border-2">
                <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Whole Life Insurance</h3>
                <p className="text-muted-foreground mb-6">
                  Lifetime protection with guaranteed cash value growth. 
                  A cornerstone of financial planning for Texas families seeking permanent coverage.
                </p>
                <ul className="text-left space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Lifetime coverage guaranteed
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Cash value accumulation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Fixed premium payments
                  </li>
                </ul>
              </div>
              <div className="card-elevated p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Universal Life Insurance</h3>
                <p className="text-muted-foreground mb-6">
                  Flexible coverage with adjustable premiums and death benefits. 
                  Adapts to changing financial needs of Bell County and Nueces County families.
                </p>
                <ul className="text-left space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Flexible premium payments
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Adjustable death benefit
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Cash value with interest
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Life Insurance */}
        <section className="py-16 bg-secondary/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Protect What Matters Most
                </h2>
                <p className="text-lg text-muted-foreground">
                  Life insurance provides financial security for your loved ones when they need it most.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Replace Lost Income",
                    description: "Ensure your family can maintain their lifestyle and pay bills if you're no longer there to provide."
                  },
                  {
                    title: "Pay Off Debts",
                    description: "Cover mortgage payments, car loans, credit cards, and other debts so your family isn't burdened."
                  },
                  {
                    title: "Fund Education",
                    description: "Secure your children's college education with dedicated life insurance benefits."
                  },
                  {
                    title: "Cover Final Expenses",
                    description: "Funeral costs average $10,000-15,000 in Texas. Life insurance ensures these costs are covered."
                  },
                  {
                    title: "Business Continuation",
                    description: "Protect your Temple or Corpus Christi business with key person and buy-sell life insurance."
                  },
                  {
                    title: "Leave a Legacy",
                    description: "Provide an inheritance for your children, grandchildren, or favorite charity."
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

        {/* Local Offices */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Local Life Insurance Agents You Can Trust
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="card-elevated p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Temple, TX Office</h3>
                </div>
                <p className="text-muted-foreground">
                  Serving Bell County families with personalized life insurance planning. 
                  Our Temple agents understand the needs of Central Texas families and can help 
                  you find the right coverage for your situation.
                </p>
              </div>
              <div className="card-elevated p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Corpus Christi, TX Office</h3>
                </div>
                <p className="text-muted-foreground">
                  Nueces County's trusted life insurance advisors. 
                  From young professionals to retirees, we help Corpus Christi residents 
                  protect their families' financial futures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">
              Get Your Free Life Insurance Quote
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              No obligation, no pressure. Our Texas agents will help you find the right life insurance 
              coverage for your family's needs and budget.
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

export default LifeInsurance;
