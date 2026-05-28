import { Star } from "lucide-react";

/**
 * SocialProof — trust strip directly under the Hero.
 *
 * TODO(maxwell): keep these in sync with real data:
 *   - REVIEW_COUNT      → actual Google review count
 *   - REVIEW_RATING     → actual averaged star rating (e.g. 4.9)
 *   - TESTIMONIAL_QUOTE → real client quote (12-20 words)
 *   - TESTIMONIAL_NAME  → first name + last initial, city
 */
const REVIEW_COUNT = "485";
const REVIEW_RATING = "4.8";

const TESTIMONIAL_QUOTE = "Super friendly service from the start!";
const TESTIMONIAL_NAME = "Liz, Texas";


const SocialProof = () => {
  return (
    <section
      aria-label="Client trust signals"
      className="bg-secondary border-y border-border py-6"
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Google rating */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-primary fill-primary"
                  strokeWidth={1.5}
                />
              ))}
            </div>
            <div className="text-sm">
              <span className="font-bold text-foreground">{REVIEW_RATING}</span>
              <span className="text-muted-foreground">
                {" "}
                from {REVIEW_COUNT} Google reviews
              </span>
            </div>
          </div>

          {/* Testimonial */}
          <div className="text-center md:text-right">
            <p className="text-sm italic text-foreground leading-snug">
              &ldquo;{TESTIMONIAL_QUOTE}&rdquo;
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              — {TESTIMONIAL_NAME}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
