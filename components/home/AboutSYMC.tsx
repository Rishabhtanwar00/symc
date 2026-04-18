import Image from "next/image";
import Link from "next/link";
import SacredCircle from "../common/SacredCircle";
import { STATS } from "@/lib/data";
import Button from "../ui/Button";

const AboutSYMC = () => {
  const personImage =
    process.env.NEXT_PUBLIC_ABOUT_PERSON_IMAGE ??
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=85";

  return (
    <section className="relative py-28 px-6 overflow-hidden bg-deep" id="about">
      {/* Sacred circle bg decoration */}
      <SacredCircle className="absolute opacity-10 w-[500px] h-[500px] -left-[150px] top-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* ── Left: Image ── */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              {/* Offset gold frames */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-gold-25 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-gold-12 pointer-events-none" />

              <div className="relative w-[300px] h-[400px] md:w-[360px] md:h-[480px] overflow-hidden">
                <Image
                  src={personImage}
                  alt="SYMC Wellness - Rishikesh"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 300px, 360px"
                  priority
                />
                {/* Name plate */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/45 via-black/30 to-transparent px-6 py-6">
                  <p className="font-inter text-gold text-[13px] font-bold tracking-[0.2em]">
                    Shweta Vij
                  </p>
                  <p className="font-inter text-white text-[13px] italic tracking-wide mt-1">
                    Healer · Mentor · Life Coach
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="h-px flex-1 bg-gold-25" />
                    <span className="text-gold text-xs">✦</span>
                    <div className="h-px flex-1 bg-gold-25" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div>
            {/* Eyebrow */}
            <p className="text-[10px] tracking-[0.4em] font-inter text-gold font-semibold mb-5">
              ✦ ABOUT SYMC WELLNESS ✦
            </p>

            <h2
              className="font-playfair text-primary leading-[1.2] mb-6"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)" }}
            >
              Where Spirituality Meets{" "}
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Wellness
              </span>
            </h2>

            {/* Gold rule */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold" />
              <span className="text-gold text-xs">✦</span>
              <div className="h-px flex-1 bg-gold-12" />
            </div>

            <p className="mb-5 text-[1.05rem] leading-[1.9] font-inter text-muted">
              SYMC Wellness brings together Meditation, Astrology, Spiritual
              Products, and Vastu guidance to support your journey toward inner
              balance and higher consciousness.
            </p>

            <p className="mb-8 text-[1rem] leading-[1.85] font-inter text-subtle">
              Based in Rishikesh, we offer authentic spiritual tools and
              holistic services designed to elevate your energy and transform
              your life. Every session, every product, every reading is infused
              with 20+ years of genuine healing experience and deep devotion to
              the path.
            </p>

            {/* Know More CTA */}
            <Link href="/about">
              <Button label="OUR PHILOSOPHY →" size="lg" />
            </Link>
          </div>
        </div>

        {/* ── Stats Row ── */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px border border-gold-10 bg-gold-10">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="bg-surface border border-gold-30 p-8 flex flex-col items-center text-center gap-3 group"
            >
              {/* Icon / emoji */}
              <span
                className="text-3xl leading-none"
                style={{ filter: "sepia(1) saturate(2) hue-rotate(5deg)" }}
              >
                <s.icon size={28} />
              </span>
              <div
                className="font-playfair text-gold leading-none"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
              >
                {s.num}
                <span className="text-gold-dark">{s.suffix}</span>
              </div>
              <div className="text-[11px] tracking-widest font-inter text-subtle font-semibold uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSYMC;
