import Link from "next/link";
// import { SacredCircle, SectionLabel } from '@/components/common/UI';
import { SERVICES } from "@/lib/data";
import SacredCircle from "../common/SacredCircle";
import Button from "../ui/Button";

const Services = () => (
  <section
    className="relative py-28 px-6 bg-gold-06 overflow-hidden"
    id="services"
  >
    <SacredCircle className="absolute opacity-30 w-100 h-100 -right-[100px] top-20 pointer-events-none animate-spin-slow" />
    <SacredCircle className="absolute opacity-30 w-100 h-100 -left-[20px] top-70 pointer-events-none animate-spin-slow" />

    <SacredCircle className="absolute opacity-30 w-150 h-150 right-[250px] bottom-20 pointer-events-none animate-spin-slow" />

    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="mb-5 text-[12px] tracking-[0.3em] font-cinzel text-gold font-semibold">
          ✦ WHAT WE OFFER ✦
        </p>

        <h2 className="mb-2 leading-[1.2] font-cinzel-deco text-primary text-[clamp(1.6rem,3.5vw,2.8rem)]">
          Sacred
          <span className="text-gold"> Pathways</span>
        </h2>
        <p className="max-w-xl mx-auto text-[1.05rem] font-cormorant text-subtle">
          Doorways to self-discovery, aligned with ancient Yogic and Vedic
          traditions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {SERVICES.map((s, i) => (
          <Link
            key={s.id}
            href={`/services#${s.id}`}
            className={`group relative p-8 flex flex-col gap-4 cursor-pointer bg-surface transition-colors duration-500
							`}
          >
            {/* Hover bg */}
            <div className="absolute inset-0 bg-gold-04 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-gold transition-all duration-500 group-hover:w-9 group-hover:h-9" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-gold transition-all duration-500 group-hover:w-9 group-hover:h-9" />

            <div className="relative z-10">
              <div className="text-[26px] leading-none text-gold mb-3">
                {s.icon}
              </div>
              <h3 className="text-[14px] tracking-[0.06em] font-cinzel font-semibold text-muted mb-2">
                {s.title}
              </h3>
              <p className=" text-[0.95rem] leading-[1.7] font-lora text-subtle flex-1">
                {s.short}
              </p>
              <div className="mt-4 text-[9px] tracking-[0.25em] font-lora font-semibold italic text-gold opacity-80">
                {s.tag}
              </div>
              <div className="mt-3 flex items-center gap-2 text-[10px] tracking-[0.15em] font-cinzel text-gold">
                LEARN MORE{" "}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href={"/services"}>
          <Button label="VIEW ALL SERVICES →" size="lg" variant="fill" />
        </Link>
      </div>
    </div>
  </section>
);

export default Services;
