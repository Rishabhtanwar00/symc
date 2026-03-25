import Image from "next/image";
import Link from "next/link";
// import { SectionLabel } from '@/components/common/UI';
import { PRODUCTS } from "@/lib/data";
import Button from "../ui/Button";

const Products = () => (
  <section
    className="relative py-28 px-6 bg-deep overflow-hidden"
    id="products"
  >
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="mb-5 text-[12px] tracking-[0.3em] font-cinzel text-gold font-semibold">
          ✦ SPIRITUAL STORE ✦
        </p>

        <h2 className="mb-2 leading-[1.2] font-cinzel-deco text-primary text-[clamp(1.6rem,3.5vw,2.8rem)]">
          Sacred
          <span className="text-gold"> Products</span>
        </h2>
        <p className="max-w-xl mx-auto text-[1.05rem] font-cormorant text-subtle">
          Carefully sourced, energetically cleansed and blessed tools to support
          your practice.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {PRODUCTS.map((p) => (
          <div
            key={p.id}
            className="group bg-dark flex flex-col border border-gold-10 overflow-hidden"
          >
            {/* Product image */}
            <div className="relative h-52 overflow-hidden">
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Category badge */}
              <span className="absolute top-3 left-3 bg-black/80 text-gold text-[9px] font-cinzel font-semibold tracking-[0.2em] px-2 py-1 border border-gold-25">
                {p.category.toUpperCase()}
              </span>
            </div>

            {/* Info */}
            <div className="p-5 flex flex-col gap-2 flex-1">
              <h3 className="font-cinzel text-muted font-semibold text-[14px] tracking-[0.05em]">
                {p.name}
              </h3>
              <p className="font-lora text-subtle text-[13px] italic leading-relaxed flex-1">
                {p.desc}
              </p>
              <div className="flex items-center justify-between mt-3">
                <span className="font-cinzel-deco text-gold text-lg">
                  ₹ {p.price.toLocaleString("en-IN")}
                </span>
                {/* <Link
                  href="/products"
                  className="text-[10px] font-cinzel text-gold-dark tracking-[0.15em] border-b-2 border-gold-60 pb-0.5 nav-link transition-colors duration-300"
                >
                  VIEW →
                </Link> */}

                <Link href={"/products"}>
                  <Button
                    label="VIEW →"
                    size="sm"
                    variant="fill"
                    className="px-0 py-0"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href={"/products"}>
          <Button label="BROWSE ALL PRODUCTS →" size="lg" />
        </Link>
      </div>
    </div>
  </section>
);

export default Products;
