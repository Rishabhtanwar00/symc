import Image from "next/image";
import Link from "next/link";
import SacredCircle from "../common/SacredCircle";
import SectionLabel from "../common/SectionLabel";
import Button from "../ui/Button";

const PILLARS = [
  { icon: "☽", text: "Shree Vidya Practitioner" },
  { icon: "◎", text: "Intuitive Healer" },
  { icon: "✦", text: "Vedic Astrologer" },
  { icon: "∞", text: "Life Coach & Mentor" },
  { icon: "♫", text: "Sound Healing Expert" },
  { icon: "⬡", text: "Vastu & Numerology" },
];

const AboutMaster = () => {
  const masterImage =
    process.env.NEXT_PUBLIC_ABOUT_PERSON_IMAGE ??
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=85";

  return (
    <section
      className="relative py-28 px-6 overflow-hidden bg-gradient-section-a"
      id="about-master"
    >
      {/* Decorations */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none opacity-60" />
      <SacredCircle className="absolute opacity-[0.07] w-[600px] h-[600px] -right-[180px] top-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* ── Section header ── */}
        <div className="text-center mb-16">
          <SectionLabel label="ABOUT THE MASTER" />
          <h2
            className="font-cinzel-deco text-primary leading-[1.2]"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}
          >
            Meet{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Shweta Vij
            </span>
          </h2>
        </div>

        {/* ── Two column grid ── */}
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* ── Right col on desktop, first on mobile: Content ── */}
          <div className="order-2 lg:order-1">
            {/* Bio */}
            <p className="font-cormorant text-muted italic text-[1.1rem] leading-[1.9] mb-5">
              Shweta Shivanand is a blessed Shree Vidya practitioner, intuitive
              healer and astrologer with over 20 years of experience in guiding
              souls towards clarity and spiritual awakening.
            </p>

            <p className="font-cormorant text-subtle text-[1.05rem] leading-[1.85] mb-5">
              Rooted in ancient spiritual wisdom, her work helps individuals
              release karmic patterns, emotional blocks and energetic
              imbalances. With her divine intuitive abilities, she empowers
              seekers to reconnect with their inner strength, purpose and higher
              consciousness.
            </p>

            <p className="font-cormorant text-subtle text-[1.05rem] leading-[1.85] mb-8">
              Her teachings are simple yet deeply transformative. If you're a
              seeker of truth, self-realization, and spiritual awakening — this
              is your gateway to higher consciousness.
            </p>

            {/* Discover · Awaken · Transform */}
            <div className="flex items-center gap-3 mb-8 flex-wrap">
              {["Discover", "Awaken", "Transform"].map((word, i) => (
                <div key={word} className="flex items-center gap-3">
                  <span className="font-cinzel-deco text-gold text-[15px] tracking-[0.08em]">
                    {word}
                  </span>
                  {i < 2 && (
                    <span className="text-gold-40 text-lg leading-none">·</span>
                  )}
                </div>
              ))}
            </div>

            {/* Gold rule + welcome line */}
            <div className="pl-4 border-l-2 border-gold mb-8">
              <p className="font-cormorant text-primary italic text-[1rem] leading-[1.75]">
                Welcome to Shree Yogmaya Meditation Centre — where{" "}
                <span className="text-gold">Spiritual Science</span> meets{" "}
                <span className="text-gold">Inner Experience.</span>
              </p>
            </div>

            {/* Expertise pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {PILLARS.map((p) => (
                <div
                  key={p.text}
                  className="flex items-center gap-2 px-3 py-2 border border-gold-20 bg-deepest/40 transition-all duration-300 hover:border-gold-40 hover:bg-gold-04"
                >
                  <span className="text-gold text-sm leading-none">
                    {p.icon}
                  </span>
                  <span className="font-cormorant text-subtle text-[13px] italic">
                    {p.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link href="/about">
              <Button label="KNOW MORE →" size="lg" />
            </Link>
          </div>

          {/* ── Left col on desktop: Portrait ── */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative corner frames */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-gold-40 pointer-events-none z-10" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-gold-25 pointer-events-none z-10" />

              {/* Main portrait */}
              <div className="relative w-[300px] h-[420px] md:w-[360px] md:h-[500px] overflow-hidden">
                <Image
                  src={masterImage}
                  alt="Shweta Vij — Shree Vidya Practitioner & Intuitive Healer"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 300px, 360px"
                />
                {/* Gradient overlay bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/30 to-transparent" />

                {/* Floating experience badge — top left */}
                <div className="absolute top-4 left-4 bg-deepest/90 border border-gold-40 px-4 py-3 backdrop-blur-sm">
                  <p className="font-cinzel-deco text-gold text-2xl leading-none font-bold">
                    20+
                  </p>
                  <p className="font-cinzel text-subtle text-[9px] tracking-[0.2em] mt-1">
                    YEARS
                  </p>
                </div>

                {/* Name plate bottom */}
                <div className="absolute bottom-0 left-0 right-0 px-5 py-5">
                  <p className="font-cinzel text-gold text-[13px] font-bold tracking-[0.18em]">
                    SHWETA VIJ
                  </p>
                  <p className="font-cormorant text-white text-[13px] italic mt-0.5">
                    Shree Vidya Practitioner · Healer · Astrologer
                  </p>
                </div>
              </div>

              {/* Floating stat card — bottom right, extends outside image */}
              <div className="absolute -bottom-6 -right-6 bg-deepest border border-gold-25 px-5 py-4 shadow-2xl">
                <p className="font-cinzel-deco text-gold text-2xl leading-none">
                  20K+
                </p>
                <p className="font-cormorant text-subtle text-[12px] italic mt-1">
                  Lives Healed
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-gold-60 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default AboutMaster;
