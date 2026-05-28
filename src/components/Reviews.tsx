import { useState } from "react";
import { Star } from "lucide-react";
import Modal from "@/components/Modal";

/**
 * Reviews — auto-scrolling marquee of real Google reviews.
 *
 * Sits directly above HowItWorks. Cards drift side-to-side continuously
 * (paused on hover) so visitors catch motion + imagery without waiting.
 * Clicking any card opens the full review in a modal.
 *
 * TODO(maxwell): keep REVIEWS in sync with the live Google Business profile.
 */

interface Review {
  name: string;
  /** Sub-line under the name, e.g. "9 reviews" or "Local Guide · 50 reviews" */
  meta: string;
  /** Tailwind gradient classes for the avatar circle */
  avatar: string;
  /** Initial(s) shown in the avatar */
  initials: string;
  localGuide?: boolean;
  rating: number;
  when: string;
  /** Optional bold one-liner Google shows above the body */
  headline?: string;
  body: string;
  service?: string;
}

const REVIEWS: Review[] = [
  {
    name: "Freddy Martinez",
    meta: "9 reviews · 2 photos",
    avatar: "from-rose-500 to-pink-600",
    initials: "F",
    rating: 5,
    when: "3 months ago",
    headline: "Great price",
    body:
      "I recently switched my homeowners insurance and TWIA policy to Lola Flores, and I couldn't be happier with the experience. From the initial quote to finalizing both policies, everything was smooth, organized, and stress-free.\n\nLola was knowledgeable, responsive, and took the time to explain my coverage options clearly. She made sure I felt confident in the decisions I was making and handled the details efficiently.\n\nIf you're looking for an insurance agent who makes the process easy and truly looks out for you, I highly recommend Lola Flores.",
    service: "Homeowners insurance",
  },
  {
    name: "Joseph Poole",
    meta: "Local Guide · 50 reviews",
    avatar: "from-rose-500 to-pink-600",
    initials: "J",
    localGuide: true,
    rating: 5,
    when: "3 months ago",
    body:
      "We had difficulty getting in touch with the right person, because the automated answering system only understands what's programed and not what it is asked. VERY FRUSTRATING. Haley was a breath of fresh air. She was persistent and it took her twice to get around the automated system. She was very determined to see that we were taken care of. Thanks so much. Ps. The automated guy needs to be fired.",
  },
  {
    name: "Pam Conley",
    meta: "10 reviews",
    avatar: "from-violet-500 to-purple-600",
    initials: "P",
    rating: 5,
    when: "6 months ago",
    body:
      "Thank you Salina!!! Talk about great customer service!! Friendly, knowledgeable, so helpful. I will be sending my friends your way for their insurance needs. I appreciate your professionalism with my needs. Thanks again!!",
  },
  {
    name: "T Fox",
    meta: "4 reviews",
    avatar: "from-amber-500 to-orange-600",
    initials: "T",
    rating: 5,
    when: "9 months ago",
    body:
      "My agent Lola was incredibly helpful. I was in a rush to add a new vehicle to my policy and she found ways to reduce the costs further. She didn't HAVE to do that, but it made THIS client happy. Then she went above and beyond to call my dealer and address an insurance-related issue with the vehicle purchase. Wow!!",
  },
  {
    name: "Rebecca Garcia (Becky)",
    meta: "2 reviews · 1 photo",
    avatar: "from-sky-500 to-blue-600",
    initials: "R",
    rating: 5,
    when: "6 months ago",
    headline: "Great price",
    body:
      "Salina Rodriguez is fantastic. She is quick to answer back any questions as well as try to get everyone the best pricing available. She was my go to when I bought my new car and I will stick with her!!!",
    service: "Full coverage auto insurance",
  },
  {
    name: "Liz",
    meta: "Texas",
    avatar: "from-teal-500 to-emerald-600",
    initials: "L",
    rating: 5,
    when: "5 months ago",
    body:
      "Super friendly service from the start! The team made the whole process easy and walked me through every option without any pressure. Highly recommend Maxwell Financial Group.",
  },
];

/** Inline Google "G" mark — keeps the cards feeling authentically pulled from Google. */
const GoogleG = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <path
      fill="#4285F4"
      d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
    />
    <path
      fill="#34A853"
      d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
    />
    <path
      fill="#FBBC05"
      d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34A21.99 21.99 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"
    />
    <path
      fill="#EA4335"
      d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
    />
  </svg>
);

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex" aria-label={`${rating} out of 5 stars`}>
    {[0, 1, 2, 3, 4].map((i) => (
      <Star
        key={i}
        className={
          i < rating
            ? "w-3.5 h-3.5 text-primary fill-primary"
            : "w-3.5 h-3.5 text-white/20"
        }
        strokeWidth={1.5}
      />
    ))}
  </div>
);

const Avatar = ({ review }: { review: Review }) => (
  <div className="relative shrink-0">
    <div
      className={`w-11 h-11 rounded-full bg-gradient-to-br ${review.avatar} flex items-center justify-center text-white font-semibold text-lg`}
    >
      {review.initials}
    </div>
    {review.localGuide && (
      <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-amber-500 border-2 border-card flex items-center justify-center">
        <Star className="w-2 h-2 text-white fill-white" strokeWidth={2} />
      </span>
    )}
  </div>
);

const ReviewCard = ({
  review,
  onOpen,
}: {
  review: Review;
  onOpen: (r: Review) => void;
}) => (
  <button
    type="button"
    onClick={() => onOpen(review)}
    className="group/card text-left w-[300px] sm:w-[340px] shrink-0 bg-card rounded-xl border border-border p-5 shadow-[var(--card-shadow)] hover:border-primary/40 transition-colors duration-200 cursor-pointer"
    aria-label={`Read full review from ${review.name}`}
  >
    {/* Header row */}
    <div className="flex items-start gap-3">
      <Avatar review={review} />
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-white truncate">{review.name}</p>
        <p className="text-xs text-white/50 truncate">{review.meta}</p>
      </div>
      <GoogleG className="w-5 h-5 shrink-0" />
    </div>

    {/* Stars + time */}
    <div className="flex items-center gap-2 mt-3">
      <Stars rating={review.rating} />
      <span className="text-xs text-white/40">{review.when}</span>
    </div>

    {/* Body */}
    {review.headline && (
      <p className="text-sm font-semibold text-white/90 mt-3">{review.headline}</p>
    )}
    <p className="text-sm text-white/70 leading-relaxed mt-2 line-clamp-4 whitespace-pre-line">
      {review.body}
    </p>

    <span className="inline-block text-xs font-semibold text-primary mt-3 group-hover/card:underline">
      Read more
    </span>
  </button>
);

const Reviews = () => {
  const [active, setActive] = useState<Review | null>(null);

  // Duplicate the list so the marquee can loop seamlessly (-50% == one full set).
  const loop = [...REVIEWS, ...REVIEWS];

  return (
    <section
      id="reviews"
      aria-label="Client reviews"
      className="bg-background py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-12">
        <span className="label-uppercase mb-4 block">Reviews</span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Real Reviews From Real Texans
        </h2>
        <div className="flex items-center justify-center gap-2">
          <div className="flex">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                className="w-5 h-5 text-primary fill-primary"
                strokeWidth={1.5}
              />
            ))}
          </div>
          <p className="text-sm text-white/60">
            <span className="font-bold text-white">4.8</span> from 485 Google reviews
          </p>
        </div>
      </div>

      {/* Marquee track. Pauses on hover; falls back to a static scrollable row
          when the visitor prefers reduced motion. */}
      <div className="group relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-l from-background to-transparent" />

        <div
          className="flex w-max gap-5 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:overflow-x-auto motion-reduce:w-full motion-reduce:px-4"
          style={{ ["--marquee-duration" as string]: "38s" }}
        >
          {loop.map((review, i) => (
            <ReviewCard
              key={`${review.name}-${i}`}
              review={review}
              onOpen={setActive}
            />
          ))}
        </div>
      </div>

      {/* Full-review modal */}
      <Modal
        isOpen={active !== null}
        onClose={() => setActive(null)}
        hideHeader
      >
        {active && (
          <div className="p-6 sm:p-8">
            <div className="flex items-start gap-3 pr-10">
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-br ${active.avatar} flex items-center justify-center text-white font-semibold text-xl shrink-0`}
              >
                {active.initials}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-white">{active.name}</p>
                <p className="text-xs text-white/50">{active.meta}</p>
              </div>
              <GoogleG className="w-6 h-6 shrink-0" />
            </div>

            <div className="flex items-center gap-2 mt-3">
              <Stars rating={active.rating} />
              <span className="text-xs text-white/40">{active.when}</span>
            </div>

            {active.headline && (
              <p className="text-base font-semibold text-white mt-4">
                {active.headline}
              </p>
            )}
            <p className="text-white/75 leading-relaxed mt-2 whitespace-pre-line">
              {active.body}
            </p>

            {active.service && (
              <div className="mt-5 rounded-lg bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">Services</p>
                <p className="text-sm text-white/60">{active.service}</p>
              </div>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Reviews;
