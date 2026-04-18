import SectionLabel from "../common/SectionLabel";

const EXPERTISE = [
  {
    icon: "☽",
    title: "Lal Kitab Astrology",
    years: "25 Years",
    desc: "Traditional Lal Kitab readings combining planetary analysis with practical, everyday remedies - personalized to each individual's birth chart. Guidance that empowers, not frightens.",
  },
  {
    icon: "⬡",
    title: "Vastu Shastra",
    years: "25 Years",
    desc: "Deep expertise in spatial energy alignment for homes, offices, and commercial spaces. Practical remedies that restore harmony without requiring structural changes.",
  },
  {
    icon: "∞",
    title: "Numerology",
    years: "20 Years",
    desc: "The science of numbers as a window into personality, destiny, and timing. Numerology readings help unlock the hidden patterns in your name and birth date.",
  },
  {
    icon: "♫",
    title: "Sound Healing",
    years: "15 Years",
    desc: "Using singing bowls, mantras, and vibrational frequencies to dissolve energy blockages, reduce stress, and restore deep inner calm at the cellular level.",
  },
  {
    icon: "◎",
    title: "Meditation Guidance",
    years: "20 Years",
    desc: "From beginner breathwork to advanced Yoga Nidra - personalised meditation practices for stress, sleep, emotional healing, and spiritual awakening.",
  },
  {
    icon: "✦",
    title: "Life Coaching",
    years: "20 Years",
    desc: "Heart-centred coaching rooted in Vedic philosophy and modern mindset science - helping individuals break through blocks and build lives of clarity and purpose.",
  },
];

const AboutExpertise = () => (
  <section className="relative py-24 px-6 bg-deep overflow-hidden">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <SectionLabel label="DISCIPLINES & MASTERY" />
        <h2
          className="font-cinzel-deco text-primary leading-[1.2]"
          style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}
        >
          25 Years of{" "}
          <span className="bg-gradient-gold bg-clip-text text-transparent">
            Sacred Practice
          </span>
        </h2>
        <p className="mt-4 max-w-xl mx-auto font-cormorant text-subtle italic text-[1.05rem] leading-[1.8]">
          Each discipline is not just a service - it is a lifelong devotion.
          Here's what we bring to every session and every interaction.
        </p>
      </div>

      {/* Vertical timeline */}
      <div className="relative">
        {/* Center spine line */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-25 to-transparent" />

        <div className="space-y-12">
          {EXPERTISE.map((e, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={e.title}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${isLeft ? "" : "md:[&>*:first-child]:order-last"}`}
              >
                {/* Content */}
                <div
                  className={`group p-7 border border-gold-12 bg-deepest/60 hover:border-gold-40 hover:bg-gold-04 transition-all duration-400 ${isLeft ? "md:text-right" : ""}`}
                >
                  <div
                    className={`flex items-center gap-3 mb-3 ${isLeft ? "md:flex-row-reverse" : ""}`}
                  >
                    <span className="text-2xl text-gold leading-none">
                      {e.icon}
                    </span>
                    <div className={isLeft ? "md:text-right" : ""}>
                      <h3 className="font-cinzel text-primary text-[13px] tracking-[0.08em]">
                        {e.title}
                      </h3>
                      <p className="font-cormorant text-gold text-[11px] italic mt-0.5">
                        {e.years} of Experience
                      </p>
                    </div>
                  </div>
                  <p className="font-cormorant text-subtle text-[14px] leading-[1.8] italic">
                    {e.desc}
                  </p>
                </div>

                {/* Center dot - only visible md+ */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-4 h-4 rounded-full bg-deepest border-2 border-gold flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  </div>
                </div>

                {/* Year badge - shown on opposite side */}
                <div
                  className={`hidden md:flex items-center ${isLeft ? "justify-start pl-10" : "justify-end pr-10"}`}
                >
                  <div className="px-4 py-2 border border-gold-25 bg-deepest/40">
                    <p className="font-cinzel-deco text-gold text-[22px] leading-none">
                      {e.years.split(" ")[0]}
                    </p>
                    <p className="font-cormorant text-subtle text-[11px] tracking-wide">
                      Years
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default AboutExpertise;
