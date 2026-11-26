"use client";

import { getImageProps } from "next/image";
import { useEffect, useState } from "react";

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
      <img {...rest} className="absolute inset-0 size-full object-cover object-[70%_50%]" />
    </picture>
  );
}

export function HeroSlider() {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden={false}>
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
      <div className="absolute bottom-6 right-5 z-10 flex gap-2 md:bottom-10 md:right-8">
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
    </div>
  );
}
