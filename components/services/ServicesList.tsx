import Image from "next/image";
import Link from "next/link";
import { SERVICES_FULL } from "./ServicesData";
import Button from "../ui/Button";

const CheckIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ServicesList = () => (
  <div className="bg-deepest">
    {SERVICES_FULL.map((service, idx) => {
      const isEven = idx % 2 === 0;

      return (
        <section
          key={service.id}
          id={service.id}
          className={`relative overflow-hidden ${idx % 2 === 0 ? "bg-deepest" : "bg-deep"}`}
        >
          {/* Number watermark - large decorative */}
          <div
            className="absolute font-playfair text-gold pointer-events-none select-none leading-none"
            style={{
              fontSize: "clamp(8rem, 18vw, 16rem)",
              opacity: 0.1,
              top: "50%",
              [isEven ? "right" : "left"]: "-2rem",
              transform: "translateY(-50%)",
            }}
          >
            {service.number}
          </div>

          <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
            <div
              className={`grid lg:grid-cols-2 gap-12 xl:gap-20 items-center ${isEven ? "" : "lg:grid-flow-dense"}`}
            >
              {/* ── Image ── */}
              <div className={`relative ${isEven ? "" : "lg:col-start-2"}`}>
                {/* Gold frame offset */}
                <div className="relative">
                  <div
                    className={`absolute border border-gold-12 inset-0 ${isEven ? "translate-x-3 translate-y-3" : "-translate-x-3 translate-y-3"}`}
                  />
                  <div className="relative h-[340px] md:h-[460px] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      loading={idx < 2 ? "eager" : "lazy"}
                    />
                    {/* Gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-${isEven ? "r" : "l"} from-transparent to-deepest/30`}
                    />
                  </div>

                  {/* Service number badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-deepest border border-gold-05 flex items-center justify-center">
                    <span className="font-inter text-gold text-[11px] font-bold tracking-widest">
                      {service.number}
                    </span>
                  </div>
                </div>
              </div>

              {/* ── Content ── */}
              <div className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}>
                {/* Icon + tag */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl text-gold leading-none">
                    {service.icon}
                  </span>
                  <span className="text-[9px] font-inter text-gold-60 tracking-[0.3em] font-semibold">
                    {service.tag}
                  </span>
                </div>

                {/* Title */}
                <h2
                  className="font-playfair text-primary leading-[1.2] mb-3"
                  style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.1rem)" }}
                >
                  {service.title}
                </h2>

                {/* Tagline */}
                <p className="font-inter text-gold text-[12px] tracking-[0.1em] mb-5 italic">
                  {service.tagline}
                </p>

                {/* Gold divider */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-gold" />
                  <span className="text-gold text-xs">✦</span>
                  <div className="h-px flex-1 bg-gold-20" />
                </div>

                {/* Description */}
                <p className="font-inter text-muted text-[1.05rem] leading-[1.9] italic mb-7">
                  {service.desc}
                </p>

                {/* Bullet highlights */}
                <ul className="flex flex-col gap-2.5 mb-8">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="text-gold mt-1 shrink-0">
                        <CheckIcon />
                      </span>
                      <span className="font-inter text-subtle text-[14px] leading-relaxed">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href="/contact">
                  <Button
                    label="BOOK THIS SERVICE →"
                    size="lg"
                    variant="fill"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Section separator line */}
          {idx < SERVICES_FULL.length - 1 && (
            <div className="absolute bottom-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-gold-40 to-transparent" />
          )}
        </section>
      );
    })}

    {/* Chakra row - visual divider between services and next section */}
    {/* <div className="py-10 flex items-center justify-center gap-1 bg-deepest overflow-hidden">
      {CHAKRA_COLORS.map((c, i) => (
        <div
          key={i}
          className="w-2 h-2 rounded-full opacity-60"
          style={{ backgroundColor: c }}
        />
      ))}
      <span className="mx-3 font-inter text-gold text-[9px] tracking-[0.3em] opacity-60">
        SEVEN CHAKRAS
      </span>
      {[...CHAKRA_COLORS].reverse().map((c, i) => (
        <div
          key={i}
          className="w-2 h-2 rounded-full opacity-60"
          style={{ backgroundColor: c }}
        />
      ))}
    </div> */}
  </div>
);

export default ServicesList;
