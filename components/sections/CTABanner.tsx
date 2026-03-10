export default function CTABanner() {
  return (
    <section
      className="relative py-32 px-6 text-center overflow-hidden"
      style={{ background: "var(--color-bg-deep)" }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, var(--color-gold-06) 0%, transparent 70%)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-gold-04) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-gold-04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        <p
          className="mb-5 text-[11px] tracking-[0.3em]"
          style={{ color: "var(--color-gold)", fontFamily: "var(--font-cinzel)" }}
        >
          ✦ TAKE THE FIRST STEP ✦
        </p>

        <h2
          className="mb-6 leading-[1.2]"
          style={{
            fontFamily: "var(--font-cinzel-deco)",
            fontSize:   "clamp(1.6rem, 3.5vw, 2.8rem)",
            color:      "var(--color-text-primary)",
          }}
        >
          Your Cosmic Journey Begins Here
        </h2>

        <p
          className="mb-12 italic text-[1.1rem] leading-[1.8]"
          style={{
            fontFamily: "var(--font-cormorant)",
            color:      "var(--color-text-subtle)",
          }}
        >
          Book a personal session with our guide and receive a complimentary birth chart
          reading with your first consultation.
        </p>

        <a
          href="#"
          className="inline-block px-12 py-5 text-[11px] font-bold tracking-[0.2em]
                     transition-opacity duration-300 hover:opacity-85"
          style={{
            background:    "var(--gradient-gold-btn)",
            color:         "var(--color-bg-deep)",
            fontFamily:    "var(--font-cinzel)",
            letterSpacing: "0.2em",
          }}
        >
          BOOK A FREE CONSULTATION
        </a>
      </div>
    </section>
  );
}
