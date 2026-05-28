/**
 * FamilyPolaroids — a scattered stack of Polaroid snapshots.
 *
 * Replaces the single-photo slot on the Our Story page. Photos sit at
 * playful angles, slightly overlapping, like they were tossed onto a desk.
 * Hovering a photo straightens and lifts it so visitors can look closer.
 * On mobile the stack relaxes into a centered wrap, keeping the tilt.
 *
 * TODO(maxwell): swap captions / add more snapshots as the family album grows.
 */

interface Polaroid {
  src: string;
  alt: string;
  caption: string;
  /** Tailwind classes: rotation (always) + absolute position (md+ only). */
  tilt: string;
  position: string;
  /** Resting stack order so overlaps feel natural. */
  z: string;
}

const POLAROIDS: Polaroid[] = [
  {
    src: "/family-1.jpg",
    alt: "Maxwell Financial Group team — three generations together",
    caption: "family first",
    tilt: "-rotate-6",
    position: "md:left-[4%] md:top-[48px]",
    z: "md:z-10",
  },
  {
    src: "/family-2.jpg",
    alt: "Mother and daughter at an industry event",
    caption: "together",
    tilt: "rotate-3",
    position: "md:left-[27%] md:top-[8px]",
    z: "md:z-20",
  },
  {
    src: "/family-3.jpg",
    alt: "The Maxwell Financial Group family",
    caption: "our people",
    tilt: "-rotate-3",
    position: "md:left-[50%] md:top-[58px]",
    z: "md:z-10",
  },
  {
    src: "/family-4.jpg",
    alt: "Celebrating with the team",
    caption: "the crew",
    tilt: "rotate-6",
    position: "md:left-[71%] md:top-[18px]",
    z: "md:z-20",
  },
];

const FamilyPolaroids = () => {
  return (
    <div className="relative flex flex-wrap justify-center gap-6 md:gap-0 md:block md:h-[500px]">
      {POLAROIDS.map((p) => (
        <figure
          key={p.src}
          className={`group/photo bg-white p-3 pb-12 rounded-[2px] shadow-[0_10px_30px_-8px_rgba(0,0,0,0.55)] w-44 sm:w-52 md:w-60 md:absolute ${p.position} ${p.tilt} ${p.z} transition-all duration-300 ease-out hover:rotate-0 hover:scale-105 hover:z-30 hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.7)]`}
        >
          <div className="aspect-[3/4] overflow-hidden bg-charcoal/5">
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <figcaption className="absolute bottom-3 left-0 right-0 text-center font-serif italic text-charcoal/70 text-lg">
            {p.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default FamilyPolaroids;
