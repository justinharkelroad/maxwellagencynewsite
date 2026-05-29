import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import CarrierBar from "@/components/CarrierBar";
import Reviews from "@/components/Reviews";
import HowItWorks from "@/components/HowItWorks";
import ValueProposition from "@/components/ValueProposition";
import ProductsSection from "@/components/ProductsSection";
import FAQ from "@/components/FAQ";
import LegacySection from "@/components/LegacySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <CarrierBar />
        <ValueProposition />
        <Reviews />
        <HowItWorks />
        <ProductsSection />
        <LegacySection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
