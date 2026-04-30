import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

const ProductCard = ({ icon: Icon, title, description, href }: ProductCardProps) => {
  const content = (
    <>
      {/* Gold top accent */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary" />
      
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-serif text-xl font-bold text-charcoal mb-2">{title}</h3>
      <p className="text-charcoal/70 text-sm leading-relaxed">{description}</p>
    </>
  );

  if (href) {
    return (
      <Link 
        to={href} 
        className="relative block bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full group"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="relative bg-white p-6 rounded-lg shadow-sm h-full">
      {content}
    </div>
  );
};

export default ProductCard;
