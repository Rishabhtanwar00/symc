// import { SectionLabel } from '@/components/common/UI';
import { YT_SHORTS } from "@/lib/data";
import Link from "next/link";
import Button from "../ui/Button";
import SectionLabel from "../common/SectionLabel";

const Testimonials = () => (
  <section
    className="relative py-28 px-6 bg-gradient-section-b overflow-hidden"
    id="testimonials"
  >
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <SectionLabel label="VOICES FROM THE JOURNEY" />

        <h2 className="mb-2 leading-[1.2] font-cinzel-deco text-primary text-[clamp(1.6rem,3.5vw,2.8rem)]">
          Real
          <span className="text-gold"> Transformations</span>
        </h2>
        <p className="max-w-xl mx-auto text-[1.05rem] font-cormorant text-subtle italic">
          Watch how SYMC Wellness has touched lives - in people's own words.
        </p>
      </div>

      {/* YouTube Shorts grid - vertical 9:16 embeds */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {YT_SHORTS.filter(Boolean).map((id, i) => (
          <div key={id} className="group relative flex flex-col">
            {/* Shorts player - 9:16 aspect */}
            <div
              className="relative w-full overflow-hidden border border-gold-12 group-hover:border-gold-40 transition-all duration-300"
              style={{ paddingBottom: "177.78%" }}
            >
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${id}?loop=1&playlist=${id}&rel=0&modestbranding=1`}
                title={`Testimonial ${i + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            {/* Gold accent bottom */}
            <div className="h-px w-0 bg-gold group-hover:w-full transition-all duration-500" />
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href={process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL ?? "#"}
          target="_blank"
          rel="noreferrer"
        >
          <Button label="SEE MORE ON YOUTUBE" size="lg" variant="fill" />
        </Link>
      </div>
    </div>
  </section>
);

export default Testimonials;
