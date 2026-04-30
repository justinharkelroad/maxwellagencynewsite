import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import ProductsSection from "@/components/ProductsSection";
import LegacySection from "@/components/LegacySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ValueProposition />
        <ProductsSection />
        <LegacySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
