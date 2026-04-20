import Link from "next/link";
import SacredCircle from "../common/SacredCircle";
import Divider from "../common/Divider";
import SectionLabel from "../common/SectionLabel";
import Button from "../ui/Button";

const LINKS = [
  { href: "/services", label: "Our Services", icon: "◎" },
  { href: "/products", label: "Sacred Store", icon: "✦" },
  { href: "/contact", label: "Book a Session", icon: "☽" },
];

const AboutCTA = () => (
  <section className="relative py-24 px-6 text-center overflow-hidden bg-deepest">
    {/* Decorations */}
    <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
    <div className="absolute inset-0 bg-grid-gold bg-[length:60px_60px] pointer-events-none opacity-50" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <SacredCircle className="opacity-10 w-[600px] h-[600px] animate-spin-slow origin-center" />
    </div>

    <div className="relative z-10 max-w-3xl mx-auto">
      <SectionLabel label="BEGIN YOUR JOURNEY" />

      <h2
        className="font-playfair text-primary leading-[1.15] mb-5"
        style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)" }}
      >
        Your Path to{" "}
        <span className="bg-gradient-gold bg-clip-text text-transparent">
          Wholeness
        </span>{" "}
        Starts Here
      </h2>

      <p className="font-inter text-muted italic text-[1.1rem] leading-[1.9] mb-12 max-w-2xl mx-auto">
        Whether you are seeking clarity in your career, harmony in your home,
        healing for your spirit, or simply a sacred product to support your
        practice - SYMC Wellness is here to walk this path with you.
      </p>

      {/* 3 path links */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href}>
            <Button label={l.icon + " " + l.label} size="md" variant="fill" />
          </Link>
        ))}
      </div>

      <Divider />

      {/* Location + shipping strip */}
      <div className="mt-10 flex flex-wrap justify-center gap-8">
        {[
          { icon: "📍", label: "Based in Rishikesh, India" },
          { icon: "🕉", label: "Vedic Traditions since 1999" },
          { icon: "🌍", label: "Serving Seekers Worldwide" },
          { icon: "📦", label: "International Shipping Available" },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <span className="text-lg leading-none">{item.icon}</span>
            <span className="font-inter text-subtle text-[13px] italic tracking-wide">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutCTA;
