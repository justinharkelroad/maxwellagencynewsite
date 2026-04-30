import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Bike, CheckCircle, Phone, MapPin, Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MotorcycleBoatInsurance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 sm:py-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Bike className="w-8 h-8 text-primary" />
                </div>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Anchor className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Motorcycle & Boat Insurance in Texas
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Hit the road or the water with coverage built for adventure. Comprehensive motorcycle, 
                boat, and watercraft insurance for Temple, Corpus Christi, and all of Texas.
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

        {/* Motorcycle Insurance */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <Bike className="w-10 h-10 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">
                  Texas Motorcycle Insurance
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    title: "Liability Coverage",
                    description: "Required by Texas law. Covers bodily injury and property damage you cause to others while riding."
                  },
                  {
                    title: "Collision Coverage",
                    description: "Pays for repairs to your motorcycle after an accident, regardless of fault."
                  },
                  {
                    title: "Comprehensive Coverage",
                    description: "Protects against theft, vandalism, fire, and Texas weather damage to your bike."
                  },
                  {
                    title: "Uninsured Motorist",
                    description: "Coverage when you're hit by a driver without adequate insurance. Essential on Texas roads."
                  },
                  {
                    title: "Medical Payments",
                    description: "Covers medical expenses for you and passengers regardless of fault."
                  },
                  {
                    title: "Custom Parts & Equipment",
                    description: "Coverage for aftermarket additions—chrome, custom paint, performance parts, and accessories."
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
              <div className="bg-secondary/30 rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-3">Motorcycles We Insure:</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Harley-Davidson",
                    "Honda",
                    "Kawasaki",
                    "Yamaha",
                    "Suzuki",
                    "BMW",
                    "Indian",
                    "Ducati",
                    "Triumph",
                    "Sport Bikes",
                    "Cruisers",
                    "Touring Bikes",
                    "Dirt Bikes",
                    "Scooters",
                    "Trikes"
                  ].map((type, index) => (
                    <span key={index} className="bg-background px-3 py-1 rounded-full text-sm text-foreground">
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Boat Insurance */}
        <section className="py-16 bg-secondary/30">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <Anchor className="w-10 h-10 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">
                  Texas Boat & Watercraft Insurance
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    title: "Hull Coverage",
                    description: "Protects your boat's structure against damage from accidents, storms, and other covered perils."
                  },
                  {
                    title: "Liability Protection",
                    description: "Covers bodily injury and property damage you cause to others on the water."
                  },
                  {
                    title: "Medical Payments",
                    description: "Covers medical expenses for you and passengers injured while boating."
                  },
                  {
                    title: "Uninsured Boater",
                    description: "Protection when you're involved in an accident with an uninsured watercraft operator."
                  },
                  {
                    title: "Personal Effects",
                    description: "Coverage for fishing gear, electronics, and personal items on board your vessel."
                  },
                  {
                    title: "Towing & Assistance",
                    description: "24/7 on-water towing and emergency assistance for breakdowns on Texas lakes and the Gulf."
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
              <div className="bg-background rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-3">Watercraft We Insure:</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Bass Boats",
                    "Pontoon Boats",
                    "Ski Boats",
                    "Wakeboard Boats",
                    "Center Console",
                    "Fishing Boats",
                    "Sailboats",
                    "Jet Skis/PWC",
                    "Kayaks & Canoes",
                    "Houseboats",
                    "Cabin Cruisers",
                    "Yachts"
                  ].map((type, index) => (
                    <span key={index} className="bg-secondary/30 px-3 py-1 rounded-full text-sm text-foreground">
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Focus */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Local Texas Recreation Insurance
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="card-elevated p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Temple & Central Texas</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Coverage for Bell County riders and boaters. Whether you're cruising the backroads 
                  or fishing at Stillhouse Hollow Lake and Belton Lake, we've got you covered.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Popular spots:</strong> Belton Lake, Stillhouse Hollow, Lake Waco, 
                  scenic Hill Country routes
                </p>
              </div>
              <div className="card-elevated p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Corpus Christi & Gulf Coast</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Specialized watercraft coverage for Nueces County boaters. From Corpus Christi Bay 
                  to the open Gulf, we understand coastal boating risks and requirements.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Popular spots:</strong> Corpus Christi Bay, Padre Island, Port Aransas, 
                  Laguna Madre, Gulf fishing
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">
              Get Coverage for Your Texas Adventures
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Protect your motorcycle, boat, or watercraft with comprehensive coverage from Maxwell Insurance. 
              Competitive rates for Temple, Corpus Christi, and riders and boaters across Texas.
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

export default MotorcycleBoatInsurance;
