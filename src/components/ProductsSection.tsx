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
    description: "Comprehensive coverage for your vehicles. Drive with confidence.",
    slug: "/insurance/auto",
  },
  {
    icon: Home,
    title: "Home Insurance",
    description: "Protect your most valuable asset from life's uncertainties.",
    slug: "/insurance/home",
  },
  {
    icon: Heart,
    title: "Life Insurance",
    description: "Secure your family's future with term, whole, and universal life policies.",
    slug: "/insurance/life",
  },
  {
    icon: Briefcase,
    title: "Business Insurance",
    description: "Liability, property, workers' comp, and commercial auto for Texas businesses.",
    slug: "/insurance/business",
  },
  {
    icon: CloudRain,
    title: "Flood & Storm Protection",
    description: "Essential coverage for Texas weather. Don't wait until it's too late.",
    slug: "/insurance/flood-storm",
  },
  {
    icon: Umbrella,
    title: "Umbrella Policies",
    description: "Extended liability protection beyond your standard coverage limits.",
    slug: "/insurance/umbrella",
  },
  {
    icon: Key,
    title: "Renters Insurance",
    description: "Affordable protection for your belongings, starting at $5/month.",
    slug: "/insurance/renters",
  },
  {
    icon: Anchor,
    title: "Specialty Coverage",
    description: "Boats, motorcycles, RVs, and recreational vehicles.",
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
