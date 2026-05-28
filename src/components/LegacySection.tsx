const LegacySection = () => {
  return (
    <section className="hero-section section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="animate-fade-in opacity-0">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
              A Legacy of <span className="text-primary">Protection</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The Maxwell family has been protecting Texas families for over three decades.
              What started with a great-grandfather selling life insurance door-to-door is now
              a 20+ person team serving Corpus Christi and Temple.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Maxwell Financial Group continues the work of the{" "}
              <strong className="text-foreground">Laura Harris Agency</strong> —
              the Corpus Christi practice founded by Kristin Maxwell&rsquo;s
              mother and now led, with the same office and the same team,
              by the next generation.{" "}
              <a
                href="/our-story"
                className="text-primary font-semibold hover:underline"
              >
                Read our story
              </a>
              .
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We understand that trust is earned over time. That&rsquo;s why we&rsquo;ve built our
              reputation on clear communication, honest advice, and being there when
              our clients need us most.
            </p>
          </div>

          {/* Right Column - Stats */}
          <div className="flex items-center justify-center animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            <div className="text-center lg:text-left">
              <div className="font-serif text-8xl sm:text-9xl font-bold text-primary leading-none">
                30+
              </div>
              <p className="text-xl sm:text-2xl text-foreground font-medium mt-2">
                Years of Service
              </p>
              <p className="text-muted-foreground mt-4 max-w-sm">
                Four generations of the Maxwell family dedicated to protecting what matters most.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegacySection;
