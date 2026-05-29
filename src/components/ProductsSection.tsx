import ProductCard from "@/components/ProductCard";
import { Car, Home, Key, Heart, Briefcase, CloudRain, Anchor, Umbrella, LucideIcon } from "lucide-react";

interface ProductData {
  icon: LucideIcon;
  title: string;
  description: string;
  slug: string;
}

const products: ProductData[] = [
  {
    icon: Car,
    title: "Auto Insurance",
    description: "Real protection built around how you drive — not just the state minimum. Quote in 60 seconds.",
    slug: "/insurance/auto",
  },
  {
    icon: Home,
    title: "Home Insurance",
    description: "Replacement-cost dwelling, contents, and liability coverage tailored to your home.",
    slug: "/insurance/home",
  },
  {
    icon: Heart,
    title: "Life Insurance",
    description: "Term, whole, and universal life — built around your family and budget.",
    slug: "/insurance/life",
  },
  {
    icon: Briefcase,
    title: "Business Insurance",
    description: "General liability, property, workers' comp, and commercial auto for Texas businesses.",
    slug: "/insurance/business",
  },
  {
    icon: CloudRain,
    title: "Flood & Storm Protection",
    description: "NFIP and private flood options compared side-by-side. Essential for Texas weather.",
    slug: "/insurance/flood-storm",
  },
  {
    icon: Umbrella,
    title: "Umbrella Policies",
    description: "Extra $1M+ liability protection on top of your auto and home limits.",
    slug: "/insurance/umbrella",
  },
  {
    icon: Key,
    title: "Renters Insurance",
    description: "Apartment-friendly contents and liability coverage starting at $5/month.",
    slug: "/insurance/renters",
  },
  {
    icon: Anchor,
    title: "Specialty Coverage",
    description: "Boats, motorcycles, RVs, ATVs, and recreational vehicles — fully covered.",
    slug: "/insurance/motorcycle-boat",
  },
];

const ProductsSection = () => {
  return (
    <section id="services" className="section-light section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in opacity-0">
          <span className="label-uppercase mb-4 block">Our Services</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal mb-4">
            Comprehensive Coverage for <br className="hidden sm:block" />Every Aspect of Life
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            From personal protection to business risk management, we've got you covered.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="animate-fade-in-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard
                icon={product.icon}
                title={product.title}
                description={product.description}
                href={product.slug}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
