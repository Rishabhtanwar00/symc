import Image from "next/image";
import Link from "next/link";
import SacredCircle from "../common/SacredCircle";
import SectionLabel from "../common/SectionLabel";
import Button from "../ui/Button";

const CREDENTIALS = [
  { icon: "☽", label: "Lal Kitab Astrology", years: "25 Yrs" },
  { icon: "⬡", label: "Vastu Shastra", years: "25 Yrs" },
  { icon: "∞", label: "Numerology", years: "20 Yrs" },
  { icon: "♫", label: "Sound Healing", years: "15 Yrs" },
  { icon: "◎", label: "Meditation Guidance", years: "20 Yrs" },
  { icon: "✦", label: "Life Coaching", years: "20 Yrs" },
];

const AboutFounder = () => {
  const personImage =
    process.env.NEXT_PUBLIC_ABOUT_PERSON_IMAGE ??
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=85";

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-section-a">
      {/* Faint sacred circle bg */}
      <SacredCircle className="absolute opacity-[0.06] w-[600px] h-[600px] right-[-180px] top-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel label="THE GUIDE BEHIND SYMC" />
          <h2
            className="font-cinzel-deco text-primary leading-[1.2]"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}
          >
            Meet{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Shweta Vij
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-14 items-start">
          {/* ── Portrait ── */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
            <div className="relative w-full max-w-[340px]">
              {/* Decorative corner frames */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t border-l border-gold-40 z-10 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b border-r border-gold-40 z-10 pointer-events-none" />

              <div className="relative h-[420px] overflow-hidden">
                <Image
                  src={personImage}
                  alt="Shweta Vij - Healer, Mentor, Life Coach"
                  fill
                  className="object-cover object-top"
                  sizes="340px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deepest/70 via-transparent to-transparent" />
              </div>

              {/* Name plate */}
              <div className="bg-deepest border border-gold-20 px-6 py-4 text-center">
                <p className="font-cinzel text-gold text-[14px] font-bold tracking-[0.2em]">
                  SHWETA VIJ
                </p>
                <p className="font-cormorant text-subtle text-[13px] italic mt-1 tracking-wide">
                  Healer · Mentor · Life Coach
                </p>
                <div className="h-px w-10 bg-gold-30 mx-auto my-2" />
                <p className="font-cinzel text-gold-dark text-[10px] tracking-[0.2em]">
                  RISHIKESH, INDIA
                </p>
              </div>

              {/* Stat bubbles */}
              <div className="grid grid-cols-2 gap-px border border-gold-10 bg-gold-10 mt-px">
                <div className="bg-deepest p-4 text-center">
                  <p className="font-cinzel-deco text-gold text-xl leading-none">
                    25+
                  </p>
                  <p className="font-cormorant text-subtle text-[11px] tracking-wide mt-1">
                    Years Practice
                  </p>
                </div>
                <div className="bg-deepest p-4 text-center">
                  <p className="font-cinzel-deco text-gold text-xl leading-none">
                    20K+
                  </p>
                  <p className="font-cormorant text-subtle text-[11px] tracking-wide mt-1">
                    Lives Healed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Bio & Credentials ── */}
          <div className="lg:col-span-3">
            <div className="space-y-5 mb-10">
              <p className="font-cormorant text-muted text-[1.1rem] leading-[1.9] italic">
                Shweta Vij is the heart and guiding force behind SYMC Wellness.
                With over 25 years of devoted practice and study in the ancient
                Vedic sciences, she has touched more than 20,000 lives across
                India and around the world - helping individuals find clarity,
                healing, and a renewed sense of purpose.
              </p>
              <p className="font-cormorant text-subtle text-[1.05rem] leading-[1.9]">
                Her journey began in Rishikesh, where the sacred energy of the
                Himalayas and Maa Ganga shaped her understanding of the human
                spirit. Over the decades, she has studied deeply under Vedic
                masters and refined her expertise across multiple healing
                disciplines - always remaining grounded in compassion,
                authenticity, and deep service.
              </p>
              <p className="font-cormorant text-subtle text-[1.05rem] leading-[1.9]">
                Shweta's approach is never one-size-fits-all. Every
                consultation, every recommendation, and every remedy is tailored
                specifically to the individual - reflecting the belief that true
                healing begins when we are truly seen and understood.
              </p>
            </div>

            {/* Credentials grid */}
            <div>
              <p className="font-cinzel text-gold text-[10px] tracking-[0.3em] mb-5 font-semibold">
                AREAS OF MASTERY
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {CREDENTIALS.map((c) => (
                  <div
                    key={c.label}
                    className="group flex items-center gap-3 p-4 border border-gold-12 bg-deepest/50 transition-all duration-300 hover:border-gold-40 hover:bg-gold-04"
                  >
                    <span className="text-xl text-gold leading-none shrink-0">
                      {c.icon}
                    </span>
                    <div>
                      <p className="font-cinzel text-primary text-[11px] tracking-[0.05em] leading-tight">
                        {c.label}
                      </p>
                      <p className="font-cinzel-deco text-gold text-[10px] italic mt-0.5 font-semibold">
                        {c.years}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="mt-8 pl-5 border-l-2 border-gold">
              <p className="font-cinzel-deco text-primary text-[14px] leading-[1.6] mb-2">
                "I do not just offer readings or remedies -<br />I offer a
                mirror to your highest self."
              </p>
              <p className="font-cormorant text-gold text-[12px] italic">
                - Shweta Vij
              </p>
            </div>

            <Link href="/contact">
              <Button
                label="BOOK A SESSION WITH SHWETA →"
                size="lg"
                className="mt-8 px-0 md:px-7 py-0 md:py-3 text-[4px] md:text-[12px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
