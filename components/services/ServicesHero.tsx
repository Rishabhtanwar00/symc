import Link from "next/link";
import SacredCircle from "../common/SacredCircle";
import { SERVICES_FULL } from "./ServicesData";
import Button from "../ui/Button";
import SectionLabel from "../common/SectionLabel";

const ServicesHero = () => (
  <section className="relative py-28 px-6 overflow-hidden bg-deepest text-center">
    {/* Sacred circle decoration */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <SacredCircle className="opacity-50 w-[600px] h-[600px] animate-spin-slow origin-center" />
    </div>

    {/* Glow */}
    <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

    <div className="relative z-10 max-w-3xl mx-auto">
      <SectionLabel label="SYMC WELLNESS · RISHIKESH" />

      <h1
        className="font-playfair text-primary leading-[1.15] mb-6"
        style={{ fontSize: "clamp(2.2rem, 5.5vw, 4rem)" }}
      >
        Our Sacred{" "}
        <span className="bg-gradient-gold bg-clip-text text-transparent">
          Services
        </span>
      </h1>

      <p className="font-inter text-muted italic text-[1.15rem] leading-[1.85] max-w-2xl mx-auto mb-10">
        Each service is a doorway - into clarity, into healing, into the most
        authentic version of yourself. Rooted in 20+ years of practice, guided
        by ancient wisdom, shaped for the modern soul.
      </p>

      {/* Scroll hint */}
      <div className="flex flex-wrap justify-center gap-3">
        {SERVICES_FULL.map((service, i) => (
          <Link key={service.id} href={`/services#${service.id}`}>
            <Button label={service.title} size="md" className="text-[12px]" />
          </Link>
        ))}
      </div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-deepest to-transparent pointer-events-none" />
  </section>
);

export default ServicesHero;
