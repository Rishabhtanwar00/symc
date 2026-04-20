import SacredCircle from "../common/SacredCircle";
import SectionLabel from "../common/SectionLabel";

const ContactHero = () => (
  <section className="relative py-24 px-6 overflow-hidden bg-deepest text-center">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <SacredCircle className="opacity-50 w-[600px] h-[600px] animate-spin-slow origin-center" />
    </div>
    <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
    <div className="absolute inset-0 bg-grid-gold bg-[length:60px_60px] pointer-events-none opacity-60" />

    <div className="relative z-10 max-w-3xl mx-auto py-12">
      <SectionLabel label="REACH OUT TO US" />
      <h1
        className="font-playfair text-primary leading-[1.15] mb-5"
        style={{ fontSize: "clamp(2rem, 5.5vw, 3.8rem)" }}
      >
        Begin Your{" "}
        <span className="bg-gradient-gold bg-clip-text text-transparent">
          Journey
        </span>
      </h1>
      <p
        className="font-inter text-muted italic leading-[1.85] max-w-xl mx-auto"
        style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)" }}
      >
        Whether you seek clarity in your stars, harmony in your space, or
        healing for your spirit - we are here to listen and guide. Share your
        details and Shweta will personally connect with you.
      </p>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-deepest to-transparent pointer-events-none" />
  </section>
);

export default ContactHero;
