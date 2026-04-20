import Image from "next/image";
import Link from "next/link";
import SectionLabel from "../common/SectionLabel";
import Button from "../ui/Button";

const PRODUCT_HIGHLIGHTS = [
  {
    name: "Rudraksha Malas",
    image:
      "https://images.unsplash.com/photo-1615529162924-f8605388461d?w=500&q=80",
    desc: "Consecrated & hand-knotted",
  },
  {
    name: "Crystals & Gemstones",
    image:
      "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?w=500&q=80",
    desc: "Energetically cleansed",
  },
  {
    name: "Shree Yantra",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
    desc: "Copper & brass, blessed",
  },
  {
    name: "Hawan Samagri",
    image:
      "https://images.unsplash.com/photo-1603513492128-ba7bc9b3e143?w=500&q=80",
    desc: "Pure Vedic ritual herbs",
  },
  {
    name: "Singing Bowls",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80",
    desc: "Hand-hammered Tibetan",
  },
];

const AboutProducts = () => (
  <section className="relative py-24 px-6 bg-deep overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left text */}
        <div>
          <SectionLabel label="SPIRITUAL STORE" />

          <h2
            className="font-playfair text-primary leading-[1.2] mb-5"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)" }}
          >
            Authentic Products
            <br />
            <span className="text-gold">From Sacred Rishikesh</span>
          </h2>

          <p className="font-inter text-muted italic text-[1.05rem] leading-[1.9] mb-5">
            Every item in the SYMC Wellness store is carefully sourced from
            trusted artisans and sacred suppliers in Rishikesh and beyond. Each
            product is energetically cleansed and blessed before it reaches you
            - ensuring it carries genuine spiritual intent.
          </p>

          <p className="font-inter text-subtle text-[1.05rem] leading-[1.9] mb-8">
            Our range includes consecrated rudraksha malas, healing crystals,
            Shree Yantra, Narmadeshwar Shivling, hawan cups and kunds, pure
            hawan samagri, yoga accessories, and holistic wellness supplements -
            everything a dedicated seeker needs.
          </p>

          {/* Shipping badge */}
          <div className="flex items-center gap-4 p-5 border border-gold-20 bg-deepest/50 mb-8">
            <span className="text-3xl leading-none">🌍</span>
            <div>
              <p className="font-inter text-gold text-[12px] tracking-[0.15em] font-semibold">
                WORLDWIDE SHIPPING
              </p>
              <p className="font-inter text-subtle text-[13px] italic mt-0.5">
                We proudly ship to seekers across the globe - sharing the sacred
                essence of Indian spirituality with the world.
              </p>
            </div>
          </div>

          <Link href="/products">
            <Button label="EXPLORE THE STORE →" size="lg" variant="fill" />
          </Link>
        </div>

        {/* Right: Product image grid */}
        <div className="grid grid-cols-2 gap-3">
          {PRODUCT_HIGHLIGHTS.map((p, i) => (
            <div
              key={p.name}
              className={`group relative overflow-hidden ${i === 0 ? "col-span-2 h-52" : "h-40"}`}
            >
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes={i === 0 ? "100%" : "50%"}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deepest/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
                <p className="font-inter text-primary text-[11px] tracking-[0.1em]">
                  {p.name}
                </p>
                <p className="font-inter text-gold text-[11px] italic">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutProducts;
