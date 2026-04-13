"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  Children,
  ReactNode,
} from "react";

// ─── Icons ────────────────────────────────────────────────────────────────────
const PrevIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);
const NextIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);
const PauseIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
    <rect x="6" y="4" width="4" height="16" rx="1" />
    <rect x="14" y="4" width="4" height="16" rx="1" />
  </svg>
);
const PlayIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

// ─── Types ────────────────────────────────────────────────────────────────────
export interface InfiniteSliderProps {
  children: ReactNode;
  slidesPerView?: number | { sm?: number; md?: number; lg?: number };
  gap?: number;
  autoplay?: number | false;
  showArrows?: boolean;
  showDots?: boolean;
  showPlayPause?: boolean;
  arrowStyle?: "outside" | "inside";
  className?: string;
  title?: string;
  label?: string;
}

// ─── Hook: responsive slides-per-view ─────────────────────────────────────────
function useSpv(spv: InfiniteSliderProps["slidesPerView"] = 1) {
  const resolve = () => {
    if (typeof spv === "number") return spv;
    if (typeof window === "undefined") return spv.sm ?? 1;
    const w = window.innerWidth;
    if (w >= 1024 && spv.lg) return spv.lg;
    if (w >= 768 && spv.md) return spv.md;
    return spv.sm ?? 1;
  };

  const [count, setCount] = useState(resolve);

  useEffect(() => {
    const update = () => setCount(resolve());
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(spv)]);

  return count;
}

// ─── InfiniteSlider ───────────────────────────────────────────────────────────
/*
  BOOKEND CLONE PATTERN
  ─────────────────────
  Real slides: [A B C D E]   (total = 5)
  cloneCount  = spv           (e.g. 3 for lg:3)

  Extended:   [C D E | A B C D E | A B C]
               pre     real        post
               ^---cloneCount---^   ^---cloneCount---^

  Current index starts at `cloneCount` so real slide A is visible.

  When transitioning lands in "post" clones → silently jump (no animation)
  back to the matching real slide.
  When transitioning lands in "pre"  clones → jump forward to matching real.

  Result: perfectly seamless infinite loop with zero blank gaps.
*/
const InfiniteSlider = ({
  children,
  slidesPerView = 1,
  gap = 16,
  autoplay = 4000,
  showArrows = true,
  showDots = true,
  showPlayPause = true,
  arrowStyle = "outside",
  className = "",
  title,
  label,
}: InfiniteSliderProps) => {
  const realSlides = Children.toArray(children);
  const total = realSlides.length;
  const spv = useSpv(slidesPerView);
  const clones = Math.max(spv, 1); // how many to clone each side

  // Build the extended slide list
  const extSlides = [
    ...realSlides.slice(-clones), // pre-clones  (end of real, shown before start)
    ...realSlides, // real slides
    ...realSlides.slice(0, clones), // post-clones (start of real, shown after end)
  ];

  // idx points into extSlides; starts at `clones` → shows real slide 0
  const [idx, setIdx] = useState(clones);
  const [doAnim, setDoAnim] = useState(true);
  const [playing, setPlaying] = useState(!!autoplay);
  const [dragDx, setDragDx] = useState(0);
  const [dragging, setDragging] = useState(false);

  const dragStartX = useRef(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const slideWidthRef = useRef(0); // real pixel width of one slide

  // The dot indicator index (0-based into real slides)
  const dotIdx = (((idx - clones) % total) + total) % total;

  // ── Measure slide width via ResizeObserver ──────────────────────────────
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const measure = () => {
      const containerW = el.clientWidth;
      slideWidthRef.current = (containerW - gap * (spv - 1)) / spv;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [gap, spv]);

  // ── translateX in px: -(idx * (slideWidth + gap)) + dragDx ─────────────
  // We store slideWidth in a ref and update it live via ResizeObserver.
  // The transform string uses a CSS custom property --sw (slide-width in px)
  // that we keep updated on the wrapper.
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const containerW = el.clientWidth;
    const sw = (containerW - gap * (spv - 1)) / spv;
    el.style.setProperty("--sw", `${sw}`);
  }, [gap, spv, idx]); // recalc on idx too (though usually stable)

  // Transform string: each step = 1 slide width + 1 gap
  // translateX(calc(idx * -(var(--sw) * 1px + gap * 1px) + dragDx * 1px))
  const tx = `calc(${idx} * calc(var(--sw, 0) * -1px - ${gap}px) + ${dragDx}px)`;

  // ── Autoplay reset key — increments on every MANUAL navigation ──────────
  // Including it in the autoplay useEffect dependency means the interval is
  // torn down and restarted from zero every time the user clicks prev/next
  // or a dot, so the next auto-advance is always a full interval away.
  const [resetKey, setResetKey] = useState(0);
  const bumpReset = useCallback(() => setResetKey((k) => k + 1), []);

  // ── Navigate ─────────────────────────────────────────────────────────────
  const go = useCallback(
    (dir: 1 | -1, manual = false) => {
      setDoAnim(true);
      setIdx((i) => i + dir);
      if (manual) bumpReset(); // reset autoplay timer on user action
    },
    [bumpReset],
  );

  const goTo = useCallback(
    (realIdx: number) => {
      setDoAnim(true);
      setIdx(clones + realIdx);
      bumpReset(); // reset autoplay timer on dot click
    },
    [clones, bumpReset],
  );

  // ── Seamless jump after transition ends ──────────────────────────────────
  const onTransitionEnd = useCallback(() => {
    // Went into post-clones: jump back to real start area
    if (idx >= clones + total) {
      setDoAnim(false);
      setIdx(clones + ((idx - clones) % total));
    }
    // Went into pre-clones: jump forward to real end area
    else if (idx < clones) {
      setDoAnim(false);
      setIdx(clones + total - ((clones - idx) % total));
    }
  }, [idx, clones, total]);

  // Re-enable animation one frame after a jump (so the jump itself has no transition)
  useEffect(() => {
    if (!doAnim) {
      const id = requestAnimationFrame(() => setDoAnim(true));
      return () => cancelAnimationFrame(id);
    }
  }, [doAnim]);

  // ── Autoplay ─────────────────────────────────────────────────────────────
  // Depends on `resetKey` — so every manual navigation cancels the old
  // interval and starts a fresh one, giving the user a full interval of
  // breathing room before the next auto-advance.
  useEffect(() => {
    if (!autoplay || !playing) return;
    const id = setInterval(() => go(1), autoplay as number);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay, playing, resetKey]); // ← resetKey is the key addition

  // ── Drag / Swipe ─────────────────────────────────────────────────────────
  const startDrag = (x: number) => {
    dragStartX.current = x;
    setDragging(true);
    setPlaying(false);
  };
  const moveDrag = (x: number) => {
    if (!dragging) return;
    setDragDx(x - dragStartX.current);
  };
  const endDrag = () => {
    if (!dragging) return;
    setDragging(false);
    if (dragDx < -60)
      go(1, true); // manual — reset timer
    else if (dragDx > 60) go(-1, true); // manual — reset timer
    setDragDx(0);
    if (autoplay) setPlaying(true);
  };

  return (
    <div className={`relative ${className}`}>
      {/* ── Outer shell (provides gutter for outside arrows) ── */}
      <div
        className={arrowStyle === "outside" ? "mx-12 md:mx-16" : "relative"}
        onMouseEnter={() => {
          if (autoplay) setPlaying(false);
        }}
        onMouseLeave={() => {
          if (autoplay) setPlaying(true);
        }}
      >
        {/* Overflow clip + width measurement root */}
        <div ref={wrapperRef} className="overflow-hidden w-full">
          {/* Slide track */}
          <div
            ref={trackRef}
            className="flex"
            style={{
              gap: `${gap}px`,
              transform: `translateX(${tx})`,
              transition:
                doAnim && !dragging
                  ? "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)"
                  : "none",
              willChange: "transform",
              cursor: dragging ? "grabbing" : "grab",
              userSelect: "none",
            }}
            onTransitionEnd={onTransitionEnd}
            onMouseDown={(e) => startDrag(e.clientX)}
            onMouseMove={(e) => moveDrag(e.clientX)}
            onMouseUp={endDrag}
            onMouseLeave={endDrag}
            onTouchStart={(e) => startDrag(e.touches[0].clientX)}
            onTouchMove={(e) => moveDrag(e.touches[0].clientX)}
            onTouchEnd={endDrag}
          >
            {extSlides.map((slide, i) => (
              <div
                key={i}
                style={{
                  /* Each slide = (container - gaps) / spv */
                  flex: `0 0 calc((100% - ${gap * (spv - 1)}px) / ${spv})`,
                  minWidth: 0,
                  /* Override with --sw once measured */
                  width: `calc((var(--sw, 200) * 1px))`,
                  maxWidth: `calc((100% - ${gap * (spv - 1)}px) / ${spv})`,
                }}
              >
                {slide}
              </div>
            ))}
          </div>
        </div>

        {/* Inside arrows */}
        {showArrows && arrowStyle === "inside" && (
          <>
            <button
              onClick={() => go(-1, true)}
              aria-label="Previous"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center border border-gold-25 text-gold btn-ghost transition-all duration-300"
            >
              <PrevIcon />
            </button>
            <button
              onClick={() => go(1, true)}
              aria-label="Next"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center border border-gold-25 text-gold btn-ghost transition-all duration-300"
            >
              <NextIcon />
            </button>
          </>
        )}
      </div>

      {/* Outside arrows — in the mx gutter */}
      {showArrows && arrowStyle === "outside" && (
        <>
          <button
            onClick={() => go(-1, true)}
            aria-label="Previous"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-gold-25 text-gold btn-ghost transition-all duration-300"
          >
            <PrevIcon />
          </button>
          <button
            onClick={() => go(1, true)}
            aria-label="Next"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-gold-25 text-gold btn-ghost transition-all duration-300"
          >
            <NextIcon />
          </button>
        </>
      )}

      {/* ── Controls ── */}
      {(showDots || (showPlayPause && autoplay)) && (
        <div className="flex items-center justify-center gap-4 mt-7">
          {showPlayPause && autoplay && (
            <button
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? "Pause" : "Play"}
              className="w-7 h-7 flex items-center justify-center border border-gold-25 text-gold btn-ghost transition-all duration-300 shrink-0"
            >
              {playing ? <PauseIcon /> : <PlayIcon />}
            </button>
          )}

          {showDots && (
            <div className="flex items-center gap-2">
              {realSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Slide ${i + 1}`}
                  className="border-0 cursor-pointer p-0 transition-all duration-300"
                  style={{
                    width: i === dotIdx ? "22px" : "7px",
                    height: "7px",
                    borderRadius: "9999px",
                    backgroundColor:
                      i === dotIdx
                        ? "var(--color-gold)"
                        : "var(--color-gold-25)",
                  }}
                />
              ))}
            </div>
          )}

          {/* <span
            className="font-cinzel text-[10px] tracking-[0.2em] shrink-0"
            style={{ color: "var(--color-gold-40)" }}
          >
            {String(dotIdx + 1).padStart(2, "0")}&thinsp;/&thinsp;
            {String(total).padStart(2, "0")}
          </span> */}
        </div>
      )}

      {/* ── Autoplay progress bar ── */}
      {/* {autoplay && playing && (
        <div
          className="mt-3 mx-auto overflow-hidden rounded-full"
          style={{
            maxWidth: "180px",
            height: "1px",
            backgroundColor: "var(--color-gold-12)",
          }}
        >
          <div
            key={`${idx}-${resetKey}-play`}
            style={{
              height: "100%",
              backgroundColor: "var(--color-gold)",
              transformOrigin: "left center",
              animation: `sliderBar ${autoplay}ms linear forwards`,
            }}
          />
        </div>
      )} */}

      <style>{`@keyframes sliderBar { from { transform: scaleX(0); } to { transform: scaleX(1); } }`}</style>
    </div>
  );
};

export default InfiniteSlider;
