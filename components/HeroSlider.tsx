"use client";

import { getImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";

type Slide = { name: string; alt: string };

const slides: Slide[] = [
  { name: "hero-workshop", alt: "Welders fabricating a yellow steel counterweight in the workshop" },
  { name: "hero-crane", alt: "Hydra crane with rear counterweight at an industrial site" },
  { name: "hero-dusk", alt: "Finished yellow counterweights stacked in the factory yard" },
];

function ArtDirected({ slide, first }: { slide: Slide; first: boolean }) {
  const common = { alt: slide.alt, sizes: "100vw", fetchPriority: first ? ("high" as const) : undefined };
  const {
    props: { srcSet: desktop },
  } = getImageProps({ ...common, width: 1672, height: 941, src: `/images/${slide.name}.webp` });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({ ...common, width: 720, height: 1280, src: `/images/${slide.name}-m.webp` });

  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desktop} />
      <source media="(max-width: 767px)" srcSet={mobile} />
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img {...rest} draggable={false} className="absolute inset-0 size-full object-cover object-[70%_50%]" />
    </picture>
  );
}

export function HeroSlider() {
  const [i, setI] = useState(0);
  const startX = useRef<number | null>(null);

  // Timer restarts whenever the slide changes (auto or manual), so a swipe never
  // gets followed instantly by an auto-advance.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, [i]);

  const next = () => setI((n) => (n + 1) % slides.length);
  const prev = () => setI((n) => (n - 1 + slides.length) % slides.length);

  const onPointerUp = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (dx < -50) next();
    else if (dx > 50) prev();
  };

  return (
    <div
      className="absolute inset-0 touch-pan-y select-none overflow-hidden"
      aria-hidden={false}
      tabIndex={0}
      onPointerDown={(e) => {
        // Swipe is for touch/pen only; laptops use the arrows
        if (e.pointerType !== "mouse") startX.current = e.clientX;
      }}
      onPointerUp={onPointerUp}
      onPointerCancel={() => (startX.current = null)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") next();
        else if (e.key === "ArrowLeft") prev();
      }}
    >
      {slides.map((s, idx) => (
        <div
          key={s.name}
          className="hero-slide absolute inset-0"
          data-active={idx === i}
          style={{ opacity: idx === i ? 1 : 0 }}
        >
          <ArtDirected slide={s} first={idx === 0} />
        </div>
      ))}
      <div className="absolute bottom-6 right-5 z-10 flex items-center gap-4 md:bottom-10 md:right-8">
        {/* Arrows: laptops only, shown when hovering the hero (or on keyboard focus) */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="hidden size-10 place-items-center rounded-full bg-navy-950/60 text-white opacity-0 transition hover:bg-orange-500 focus-visible:opacity-100 group-hover/hero:opacity-100 md:grid"
        >
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
        </button>
        <div className="flex gap-2">
          {slides.map((s, idx) => (
            <button
              key={s.name}
              type="button"
              onClick={() => setI(idx)}
              aria-label={`Show slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-orange-500" : "w-4 bg-white/60"}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="hidden size-10 place-items-center rounded-full bg-navy-950/60 text-white opacity-0 transition hover:bg-orange-500 focus-visible:opacity-100 group-hover/hero:opacity-100 md:grid"
        >
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
}
