import Image from "next/image";
import Link from "next/link";
// import { SacredCircle, SectionLabel } from '@/components/common/UI';
import { STATS } from "@/lib/data";
import SacredCircle from "../common/SacredCircle";
import Button from "../ui/Button";

const About = () => {
  const personImage =
    process.env.NEXT_PUBLIC_ABOUT_PERSON_IMAGE ??
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80";

  return (
    <section className="relative py-28 px-6 overflow-hidden bg-deep" id="about">
      {/* Background sacred circle */}
      <SacredCircle className="absolute opacity-10 w-[500px] h-[500px] -left-[150px] top-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ── Left: Person image ── */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Gold frame accent */}
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-gold-25" />
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-gold-20" />
              <div className="relative w-[320px] h-[420px] md:w-[380px] md:h-[500px] overflow-hidden">
                <Image
                  src={personImage}
                  alt="Shweta Vij — Healer, Mentor, Life Coach"
                  fill
                  className="object-cover "
                  sizes="(max-width: 768px) 320px, 380px"
                />
                {/* Bottom name plate */}
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/45 via-black/30 to-transparent px-6 py-5">
                  <p className="font-cinzel-deco text-gold text-xl font-bold tracking-[0.15em]">
                    Shweta Vij
                  </p>
                  <p className="font-cormorant text-white text-[14px] italic tracking-wide mt-0.5">
                    Healer · Mentor · Life Coach
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div>
            <p className="mb-5 text-[12px] tracking-[0.3em] font-cinzel text-gold font-semibold">
              ✦ ABOUT SYMC WELLNESS ✦
            </p>

            <h2 className="mb-8 leading-[1.2] font-cinzel-deco text-primary text-[clamp(1.6rem,3.5vw,2.8rem)]">
              Where Spirituality Meets
              <span className="text-gold"> Wellness</span>
            </h2>

            <p className="mb-5 text-[1.05rem] leading-[1.9] font-lora text-muted">
              SYMC Wellness brings together Meditation, Astrology, Spiritual
              Products, and Vastu guidance to support your journey toward inner
              balance and higher consciousness.
            </p>

            <p className="mb-8 text-[1rem] leading-[1.85] font-lora text-subtle">
              Based in Rishikesh, we offer authentic spiritual tools and
              holistic services designed to elevate your energy and transform
              your life. Every session, every product, every reading is infused
              with 20+ years of genuine healing experience and deep devotion to
              the path.
            </p>
            <Link href={"/about"}>
              <Button label="OUR PHILOSOPHY →" size="lg" />
            </Link>
          </div>
        </div>

        {/* ── Stats Row ── */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-2">
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
                className="font-cinzel-deco text-gold leading-none"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
              >
                {s.num}
                <span className="text-gold-dark">{s.suffix}</span>
              </div>
              <div className="text-[11px] tracking-widest font-cinzel text-subtle font-semibold uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
