import { useState } from "react";
import Modal from "@/components/Modal";
import heroLionBg from "@/assets/hero-lion-bg.png";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="hero-section min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Parallax background image */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat bg-[center_center] md:bg-[center_right]"
        style={{ 
          backgroundImage: `url(${heroLionBg})`,
          backgroundAttachment: 'fixed',
        }} 
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-background/30" />
      
      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
            Protecting What <br className="hidden sm:block" />
            <span className="text-primary">Matters Most</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
            Fourth-generation Texas agency specializing in asset protection 
            and risk mitigation for families and businesses.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.5s" }}>
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-gold text-lg px-8 py-4"
            >
              Get a Quote Now
            </button>
            
            {/* Secondary Link */}
            <div className="mt-6">
              <a 
                href="#services" 
                className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors group"
              >
                Learn About Our Coverage 
                <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        hideHeader
      >
        <div className="w-full overflow-hidden">
          <iframe
            src="https://form.jotform.com/260165498061055"
            title="Request a Quote Form"
            allowTransparency
            allow="geolocation; microphone; camera; fullscreen; payment"
            frameBorder={0}
            style={{
              minWidth: "100%",
              maxWidth: "100%",
              height: "539px",
              border: "none",
            }}
            scrolling="no"
          />
        </div>
      </Modal>
    </section>
  );
};

export default Hero;
