import { ClipboardList, Scale, Handshake } from "lucide-react";

const steps = [
  {
    n: "1",
    icon: ClipboardList,
    title: "Tell us about you",
    body: "Share a few details in our 60-second form or call us direct. No long phone tag.",
  },
  {
    n: "2",
    icon: Scale,
    title: "We compare your options",
    body: "Our licensed Texas team puts together the right coverage at the best price we can find.",
  },
  {
    n: "3",
    icon: Handshake,
    title: "You choose — no obligation",
    body: "Review what we put together. Bind today, sleep on it, or walk away. Always your call.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="section-light section-padding"
      aria-label="How the quote process works"
    >
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16">
          <span className="label-uppercase mb-4 block">How It Works</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Insurance, Without the Runaround
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Three simple steps. A real human on every one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.n} className="text-center">
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-5">
                  <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {step.n}
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">{step.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
