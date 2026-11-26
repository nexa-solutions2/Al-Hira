import Image from "next/image";

export function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
  className = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <p className={`eyebrow ${light ? "!text-orange-400" : ""}`}>{eyebrow}</p>
      <h2
        className={`mt-2 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-5xl ${light ? "text-white" : "text-navy-900"}`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-4 text-base leading-relaxed md:text-lg ${light ? "text-steel-200" : "text-steel-500"}`}>
          {text}
        </p>
      )}
    </div>
  );
}

export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text: string; image: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950">
      <Image src={image} alt="" fill preload sizes="100vw" className="-z-10 object-cover opacity-35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/30" />
      <div className="container-x py-16 md:py-24">
        <p className="eyebrow !text-orange-400">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold uppercase leading-[0.95] text-white md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-steel-200 md:text-lg">{text}</p>
      </div>
    </section>
  );
}
