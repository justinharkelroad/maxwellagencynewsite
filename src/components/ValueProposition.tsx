import { Phone, Clock, ShieldCheck, Award } from "lucide-react";

const stats = [
  { icon: Phone, text: "A real human picks up" },
  { icon: Clock, text: "Quotes in under 60 seconds" },
  { icon: ShieldCheck, text: "Coverage built around your risk" },
  { icon: Award, text: "30+ years, 4 generations strong" },
];

const ValueProposition = () => {
  return (
    <section className="bg-secondary py-6 border-y border-border">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.text}
              className="flex items-center justify-center gap-3 py-2"
            >
              <stat.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm sm:text-base text-foreground font-medium">
                {stat.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
