import { Star } from "lucide-react";

/**
 * SocialProof — trust strip directly under the Hero.
 *
 * TODO(maxwell): replace placeholders before deploy:
 *   - REVIEW_COUNT      → actual Google review count
 *   - REVIEW_RATING     → actual averaged star rating (e.g. 4.9)
 *   - FAMILIES_PROTECTED→ actual or honest range (e.g. "2,500+")
 *   - TESTIMONIAL_QUOTE → real client quote (12-20 words)
 *   - TESTIMONIAL_NAME  → first name + last initial, city
 */
const REVIEW_COUNT = "485";
const REVIEW_RATING = "4.8";
const FAMILIES_PROTECTED = "254-294-3311";

const TESTIMONIAL_QUOTE =
  "REPLACE_WITH_REAL_CLIENT_QUOTE"; // TODO(maxwell): 12-20 words
const TESTIMONIAL_NAME = "REPLACE_NAME, City"; // TODO(maxwell): e.g. "Sarah M., Temple"

const SocialProof = () => {
  return (
    <section
      aria-label="Client trust signals"
      className="bg-secondary border-y border-border py-6"
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
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

          {/* Families protected */}
          <div className="text-center">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-primary">
              {FAMILIES_PROTECTED}
            </div>
            <div className="text-sm text-muted-foreground">
              Texas families &amp; businesses protected
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
