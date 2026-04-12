"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/common/Icons";
import { HERO_SLIDES } from "@/lib/data";
import SacredCircle from "../common/SacredCircle";
import Button from "../ui/Button";
import SectionLabel from "../common/SectionLabel";

const DURATION = Number(process.env.NEXT_PUBLIC_HERO_SLIDE_DURATION ?? 10000);

const Hero = () => {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);

  const total = HERO_SLIDES.length;

  const goTo = useCallback(
    (idx: number) => {
      setActive((idx + total) % total);
    },
    [total],
  );

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const id = setInterval(() => goTo(active + 1), DURATION);
    return () => clearInterval(id);
  }, [active, goTo]);

  return (
    <section className="relative h-125 flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
        style={{
          width: `${total * 100}%`,
          transform: `translateX(-${active * (100 / total)}%)`,
        }}
      >
        {HERO_SLIDES.map((slide, i) => (
          <div
            key={i}
            className="relative h-full shrink-0"
            style={{ width: `${100 / total}%` }}
          >
            {slide.image && (
              <Image
                src={slide.image}
                alt={`Slide ${i + 1}`}
                fill
                className="object-cover"
                priority={i === 0}
                sizes="100vw"
              />
            )}
            {/* <div
              className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 60%, #000 0%, transparent 70%)",
              }}
            /> */}
            <div
              className={`relative top-[50%] translate-y-[-50%] z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-1200 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <SectionLabel label="SYMC WELLNESS · RISHIKESH" />

              <blockquote className="font-cinzel-deco text-white text-[clamp(1.6rem,4.5vw,3.2rem)] leading-[1.15] mb-8 transition-all duration-500">
                <span className="bg-gradient-gold bg-clip-text text-gold">
                  {HERO_SLIDES[active].quote.split(" ").slice(0, 4).join(" ")}
                </span>{" "}
                {HERO_SLIDES[active].quote.split(" ").slice(4).join(" ")}
              </blockquote>
            </div>

            <div className="absolute inset-0 bg-linear-to-b from-bg-deep/90 via-bg-deep/90 to-bg-deepest/90" />
          </div>
        ))}
      </div>
      <Button
        icon={<ChevronLeftIcon size={18} />}
        iconPosition="left"
        variant="fill"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 px-0 py-0 rounded-full"
        onClick={() => goTo(active - 1)}
      />
      <Button
        icon={<ChevronRightIcon size={18} />}
        iconPosition="left"
        variant="fill"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 px-0 py-0 rounded-full"
        onClick={() => goTo(active + 1)}
      />
      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              i === active ? "w-6 h-1.5 bg-gold" : "w-1.5 h-1.5 bg-gold-25"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
