import Image from "next/image";
import SectionLabel from "../common/SectionLabel";

const STORY_PARAS = [
  "SYMC Wellness is a holistic spiritual wellness brand based in the sacred city of Rishikesh, dedicated to bringing ancient spiritual wisdom into modern life. Rooted in authentic Vedic traditions, we offer a carefully curated range of spiritually energized products - including crystals, consecrated rudraksha malas, Shree Yantra, Narmadeshwar Shivling, hawan cups, hawan kunds, and sacred hawan samagri, along with yoga accessories and wellness supplements to support a balanced lifestyle.",
  "Beyond products, SYMC Wellness is a space for deeper spiritual transformation. We offer guided meditation classes, astrology consultations, and Vastu guidance to help individuals align their energy, understand their life path, and create harmony in their homes and lives.",
  "Every offering at SYMC Wellness is inspired by the sacred energy of Rishikesh and Maa Ganga - designed to help you cultivate inner peace, positive vibrations, and spiritual growth. We proudly ship worldwide, sharing the essence of sacred Indian spirituality with seekers across the globe.",
];

const AboutStory = () => (
  <section className="relative py-24 px-6 overflow-hidden bg-deep">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image collage */}
        <div className="relative">
          {/* Main image */}
          <div className="relative h-[480px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85"
              alt="Rishikesh - The Yoga Capital of the World"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-deep/60 via-transparent to-transparent" />
            {/* Location tag */}
            <div className="absolute bottom-5 left-5 bg-deepest/90 border border-gold-25 px-4 py-2.5">
              <p className="font-inter text-gold text-[10px] tracking-[0.25em] font-semibold">
                RISHIKESH, INDIA
              </p>
              <p className="font-inter text-subtle text-[12px] italic mt-0.5">
                The Yoga Capital of the World
              </p>
            </div>
          </div>

          {/* Small inset image - Ganga */}
          <div className="absolute -bottom-6 -right-4 w-40 h-40 md:w-52 md:h-52 border-2 border-deepest overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&q=85"
              alt="Maa Ganga"
              fill
              className="object-cover"
              sizes="208px"
            />
            <div className="absolute inset-0 bg-deepest/30" />
            <div className="absolute bottom-2 left-0 right-0 text-center">
              <p className="font-inter text-gold text-[9px] tracking-[0.2em]">
                MAA GANGA
              </p>
            </div>
          </div>

          {/* Gold frame accent */}
          <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-gold-40 pointer-events-none" />
        </div>

        {/* Right: Story text */}
        <div>
          <SectionLabel label="OUR STORY" />

          <h2
            className="font-playfair text-primary leading-[1.2] mb-6"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)" }}
          >
            A Sacred Space Born
            <br />
            <span className="text-gold">from Rishikesh's Heart</span>
          </h2>

          <div className="space-y-5">
            {STORY_PARAS.map((p, i) => (
              <p
                key={i}
                className="font-inter text-muted text-[1.05rem] leading-[1.9] italic"
              >
                {p}
              </p>
            ))}
          </div>

          {/* Maa Ganga quote */}
          <div className="mt-8 pl-5 border-l-2 border-gold-40">
            <p className="font-playfair text-primary text-[15px] leading-[1.5] mb-2">
              "From the Ganges to the globe -
              <br />
              sacred wisdom for every seeker."
            </p>
            <p className="font-inter text-gold text-[12px] italic tracking-wide">
              - SYMC Wellness
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutStory;
