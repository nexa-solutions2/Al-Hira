import Image from "next/image";
import Link from "next/link";
import { HeroSlider } from "@/components/HeroSlider";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactSection, DensityBand, RegistrationsGrid } from "@/components/Sections";
import { CheckIcon } from "@/components/Icons";
import { counterweights, otherBusiness } from "@/data/products";
import { commitments, industries } from "@/data/site";

const steps = [
  { t: "Share your requirement", d: "Machine, drawing or sample, target weight and quantity." },
  { t: "We fabricate & fill", d: "Steel shell or casting, filled with heavy density material to the exact weight." },
  { t: "Paint, check & deliver", d: "Weight checked, painted to your colour and delivered in bulk." },
];

const machines = [
  { name: "Tractor", slug: "tractor-front-counterweights", src: "/images/grid-tractor.webp" },
  { name: "Hydra Crane", slug: "hydra-rear-counterweights", src: "/images/grid-hydra.webp" },
  { name: "Lift", slug: "elevator-lift-counterweights", src: "/images/grid-lift.webp" },
  { name: "Forklift", slug: "forklift-counterweights", src: "/images/grid-forklift.webp" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      {/* Height = screen minus header, so heading, text and buttons always fit on the first screen */}
      <section className="group/hero relative isolate h-[calc(100svh-5rem)] min-h-[35rem] overflow-hidden bg-navy-950 md:h-[calc(100svh-8.25rem)] md:min-h-[31.25rem] md:max-h-[62.5rem]">
        <HeroSlider />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/60 to-transparent md:bg-gradient-to-r md:from-navy-950/95 md:via-navy-950/60 md:to-transparent" />
        <div className="container-x pointer-events-none relative flex h-full flex-col justify-start pt-8 md:justify-center md:py-10">
          {/* Mobile: text sits at the top (over the sky) so the machine in the photo stays visible below */}
          <div className="pointer-events-auto max-w-2xl xl:max-w-3xl">
            {/* Hidden on mobile: the header logo already shows the name */}
            <p className="eyebrow hidden !text-orange-400 sm:block">Al Hira Industries · Nagpur</p>
            {/* On desktop the size follows both screen width and height, so short laptop screens get a smaller heading */}
            <h1 className="font-display text-[2.15rem] font-bold sm:mt-3 uppercase leading-[0.92] text-white sm:text-6xl md:text-[clamp(2.75rem,min(5vw,7.5svh),5.75rem)]">
              Counterweight
              <br />
              Manufacturer &amp;
              <br />
              <span className="text-orange-400">Heavy Density</span>
              <br />
              Iron Material
            </h1>
            {/* Mobile gets one short line so the photo stays visible; full text from sm up */}
            <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-steel-200 sm:mt-5 sm:text-base md:mt-[min(1.25rem,2.5svh)] md:text-lg">
              <span className="sm:hidden">Built to your size and weight. Filling material, iron ore &amp; scrap too.</span>
              <span className="hidden sm:inline">
                Counterweights for hydra cranes, tractors, forklifts, lifts, cranes and excavators, built to your size
                and weight. We also supply counterweight filling material, iron ore and scrap.
              </span>
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-8 sm:flex md:mt-[min(2rem,4svh)]">
              <Link
                href="/counterweights"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-orange-500 px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600 sm:px-7 sm:py-3.5 sm:text-base"
              >
                <span className="sm:hidden">Counterweights</span>
                <span className="hidden sm:inline">View Counterweights</span>
              </Link>
              <Link
                href="/contact#enquiry"
                className="inline-flex items-center justify-center rounded-sm border border-white/70 px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-navy-900 sm:px-7 sm:py-3.5 sm:text-base"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COMMITMENT STRIP */}
      <section className="border-b border-steel-200 bg-white">
        <ul className="container-x grid grid-cols-2 lg:grid-cols-4">
          {commitments.map((c, i) => (
            <li
              key={c}
              className={`flex items-center gap-2 py-4 whitespace-nowrap sm:gap-3 sm:py-5 lg:py-6 ${i % 2 ? "pl-3 sm:pl-4" : ""} ${i > 0 ? "lg:border-l lg:border-steel-200 lg:pl-6" : ""}`}
            >
              <CheckIcon className="size-4 shrink-0 text-orange-500 sm:size-5" />
              <span className="font-display text-[0.8rem] font-semibold uppercase tracking-normal text-navy-900 sm:text-base sm:tracking-wide md:text-lg">
                {c}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* SHOP BY MACHINE */}
      <section className="pt-10 md:pt-14">
        <div className="container-x">
          <SectionHeading
            eyebrow="Counterweights by machine"
            title="Built for the machines you run"
            text="Tell us your machine and weight. We make the counterweight to fit."
          />
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 md:mt-10 lg:grid-cols-4">
            {machines.map((m) => (
              <Link
                key={m.slug}
                href={`/counterweights/${m.slug}`}
                className="group relative isolate block aspect-square overflow-hidden bg-navy-950"
              >
                <Image
                  src={m.src}
                  alt={`${m.name} counterweight made by Al Hira Industries`}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5">
                  <h3 className="font-display text-xl font-bold uppercase leading-none tracking-wide text-white sm:text-3xl">
                    {m.name}
                  </h3>
                  <span className="mt-2 block h-[3px] w-8 bg-orange-500 transition-all duration-300 group-hover:w-16" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COUNTERWEIGHTS */}
      <section className="pt-10 pb-12 md:pt-14 md:pb-24">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Our Products"
              title="Counterweights for every machine"
              text="We make and supply all types of counterweights for hydra, lift, tractor and heavy machinery manufacturers. We can also make them to your size, ready to fit."
            />
            <Link
              href="/counterweights"
              className="inline-flex shrink-0 items-center gap-2 font-semibold text-navy-900 hover:text-orange-600"
            >
              All 12 categories
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {counterweights.filter((p) => p.image).slice(0, 8).map((p, i) => (
              <ProductCard key={p.slug} p={p} index={i} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/counterweights"
              className="inline-flex items-center gap-2 rounded-sm border border-navy-900 px-7 py-3 font-semibold text-navy-900 transition-colors hover:bg-navy-900 hover:text-white"
            >
              View all counterweights
            </Link>
          </div>
        </div>
      </section>

      {/* DENSITY */}
      <DensityBand />

      {/* CUSTOM MANUFACTURING */}
      <section className="py-16 md:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/images/custom-workshop.webp"
                alt="Welder fabricating a yellow steel counterweight in the workshop"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Custom Manufacturing"
              title="Your drawing. Your weight. We build it."
              text="We can manufacture the counterweight for you, or supply the filling material if you make your own. Either way, you get the weight you need."
            />
            <ol className="mt-8 space-y-6">
              {steps.map((s, i) => (
                <li key={s.t} className="flex gap-5">
                  <span className="font-display text-4xl font-bold leading-none text-orange-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold uppercase tracking-wide text-navy-900">{s.t}</h3>
                    <p className="mt-1 text-steel-500">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-steel-50 py-16 md:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Industries We Serve" title="Who we work with" />
          <ul className="mt-10 grid gap-px overflow-hidden border border-steel-200 bg-steel-200 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <li key={ind.name} className="bg-white p-6">
                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-navy-900">{ind.name}</h3>
                <p className="mt-1 text-sm text-steel-500">{ind.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* OTHER BUSINESS */}
      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Also From Al Hira"
              title="Iron ore, materials & scrap"
              text="We are a supplier, processor and trader of industrial raw materials and all types of scrap."
            />
            <Link
              href="/iron-ore-scrap"
              className="inline-flex shrink-0 items-center gap-2 font-semibold text-navy-900 hover:text-orange-600"
            >
              Learn more
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {otherBusiness.map((b) => (
              <Link key={b.name} href="/iron-ore-scrap" className="group relative block aspect-[4/5] overflow-hidden rounded-sm">
                <Image
                  src={b.image}
                  alt={b.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-2xl font-bold uppercase leading-tight text-white">{b.name}</h3>
                  <p className="mt-1 text-sm text-steel-200">{b.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRATIONS */}
      <section className="border-t border-steel-200 py-16 md:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Registered & Compliant"
            title="Business registrations"
            text="Al Hira Industries is a registered business with GST, UDYAM, IEC, IBM and DGM registrations."
          />
          <div className="mt-10">
            <RegistrationsGrid />
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
