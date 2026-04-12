import SacredCircle from "../common/SacredCircle";
import SectionLabel from "../common/SectionLabel";

const AboutHero = () => (
  <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-deepest text-center px-6">
    {/* Spinning sacred geometry */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <SacredCircle className="opacity-50 w-[600px] h-[600px] animate-spin-slow origin-center" />
    </div>

    {/* Radial glow */}
    <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

    {/* Grid texture */}
    <div className="absolute inset-0 bg-grid-gold bg-[length:60px_60px] pointer-events-none opacity-70" />

    <div className="relative z-10 max-w-4xl mx-auto py-20">
      <SectionLabel label="RISHIKESH · INDIA · EST. 1999" />

      <h1
        className="font-cinzel-deco text-primary leading-[1.1] mb-6"
        style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
      >
        Where Spirituality
        <br />
        <span className="bg-gradient-gold bg-clip-text text-transparent">
          Meets Wellness
        </span>
      </h1>

      <p
        className="font-cormorant text-muted italic leading-[1.9] max-w-2xl mx-auto mb-10"
        style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}
      >
        Rooted in the sacred energy of Rishikesh and Maa Ganga, SYMC Wellness
        bridges ancient Vedic wisdom with the needs of the modern soul - through
        authentic products, transformative guidance, and 25 years of devoted
        practice.
      </p>

      {/* Stat pills */}
      <div className="flex flex-wrap justify-center gap-4">
        {[
          { val: "25+", label: "Years of Experience" },
          { val: "20K+", label: "Lives Healed" },
          { val: "🌍", label: "Ships Worldwide" },
          { val: "8+", label: "Holistic Services" },
        ].map((s) => (
          <div
            key={s.label}
            className="flex items-center gap-2 px-5 py-2.5 border border-gold-20 bg-deep/40"
          >
            <span className="font-cinzel-deco text-gold text-base leading-none">
              {s.val}
            </span>
            <span className="font-cormorant text-subtle text-[12px] tracking-wide">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-deepest to-transparent pointer-events-none" />
  </section>
);

export default AboutHero;
