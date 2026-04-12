import SacredCircle from "../common/SacredCircle";
import SectionLabel from "../common/SectionLabel";

const VALUES = [
  {
    number: "01",
    icon: "◎",
    title: "Authenticity",
    desc: "Every product is carefully sourced and blessed. Every service is delivered with genuine wisdom - never generic, never rushed. We honour the traditions we carry.",
  },
  {
    number: "02",
    icon: "♡",
    title: "Compassion",
    desc: "We meet every individual without judgment, with warmth, and with the sincere intent to serve their highest good. Healing begins in a safe and caring space.",
  },
  {
    number: "03",
    icon: "☽",
    title: "Ancient Wisdom",
    desc: "Our practice is rooted in Vedic sciences refined over thousands of years - Astrology, Vastu, Numerology, Sound Healing - time-tested and deeply effective.",
  },
  {
    number: "04",
    icon: "✦",
    title: "Holistic Well-being",
    desc: "We do not separate body, mind, and spirit. True wellness means harmony across all layers of your being - and we design every offering with this wholeness in mind.",
  },
  {
    number: "05",
    icon: "∿",
    title: "Sacred Energy",
    desc: "Rishikesh is not just our location - it is our source. Everything at SYMC Wellness carries the vibration of this sacred land, Maa Ganga, and the Himalayas.",
  },
  {
    number: "06",
    icon: "⬡",
    title: "Global Reach",
    desc: "We proudly serve seekers worldwide, shipping authentic spiritual products internationally and offering consultations online - so no soul is out of reach.",
  },
];

const AboutValues = () => (
  <section className="relative py-24 px-6 overflow-hidden bg-gradient-section-b">
    <SacredCircle className="absolute opacity-[0.06] w-[500px] h-[500px] -left-[150px] top-1/2 -translate-y-1/2 pointer-events-none" />

    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <SectionLabel label="WHAT WE STAND FOR" />
        <h2
          className="font-cinzel-deco text-primary leading-[1.2]"
          style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}
        >
          Our Core{" "}
          <span className="bg-gradient-gold bg-clip-text text-transparent">
            Values
          </span>
        </h2>
        <p className="mt-4 max-w-xl mx-auto font-cormorant text-subtle italic text-[1.05rem] leading-[1.8]">
          These are not marketing words - they are the living principles that
          guide every product we curate, every session we hold, and every life
          we touch.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px border border-gold-10 bg-gold-10">
        {VALUES.map((v) => (
          <div
            key={v.number}
            className="group relative bg-deepest p-8 flex flex-col gap-4 overflow-hidden transition-all duration-400 hover:bg-gold-04"
          >
            {/* Watermark number */}
            <span className="absolute top-3 right-4 font-cinzel-deco text-gold opacity-[0.07] text-[5rem] leading-none select-none pointer-events-none">
              {v.number}
            </span>

            {/* Corner accent */}
            <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-gold-30 transition-all duration-400 group-hover:w-8 group-hover:h-8" />

            {/* Icon */}
            <span className="text-2xl text-gold leading-none">{v.icon}</span>

            {/* Title */}
            <h3 className="font-cinzel text-primary text-[14px] tracking-[0.08em]">
              {v.title}
            </h3>

            {/* Gold rule */}
            <div className="h-px w-8 bg-gold-40" />

            {/* Description */}
            <p className="font-cormorant text-subtle text-[14px] leading-[1.8] italic flex-1">
              {v.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutValues;
