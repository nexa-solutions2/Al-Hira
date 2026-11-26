import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, SectionHeading } from "@/components/SectionHeading";
import { ContactSection } from "@/components/Sections";
import { densityGrades, densityMaterials } from "@/data/products";

export const metadata: Metadata = {
  title: "Heavy Density Iron Material – Counterweight Filling Material",
  description:
    "High density and ultra heavy density iron material for counterweights, from 3.0 to 4.0+ kg per litre. Specialised supplier for tractor, hydra, forklift, elevator and industrial counterweights. Nagpur.",
};

export default function HeavyDensityPage() {
  return (
    <>
      <PageHero
        eyebrow="Specialised Supplier"
        title="Heavy Density Iron Material"
        text="Counterweight raw and filling material for tractor, hydra, forklift, elevator and industrial counterweights. We supply in bulk, in the density grade you need."
        image="/images/hero-ore.webp"
      />

      {/* Density table */}
      <section className="py-14 md:py-20">
        <div className="container-x grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Material Density"
              title="Choose your density"
              text="Higher density means more weight in the same volume. That lets you build a smaller counterweight for the same weight, or a heavier one in the same space."
            />
            <p className="mt-4 text-sm text-steel-500">The exact density depends on the material grade.</p>
          </div>
          <div className="overflow-hidden border border-steel-200">
            <table className="w-full text-left">
              <thead className="bg-navy-900 text-white">
                <tr>
                  <th className="px-5 py-3.5 font-display text-sm font-semibold uppercase tracking-wider">Density (kg / litre)</th>
                  <th className="px-5 py-3.5 font-display text-sm font-semibold uppercase tracking-wider">
                    Weight per m³
                  </th>
                </tr>
              </thead>
              <tbody>
                {densityGrades.map((g) => (
                  <tr key={g} className="border-t border-steel-200 even:bg-steel-50">
                    <td className="px-5 py-4 font-display text-2xl font-bold text-orange-600">{g}</td>
                    <td className="px-5 py-4 text-steel-500">
                      {g.endsWith("+") ? "4,000 kg & above" : `≈ ${(parseFloat(g) * 1000).toLocaleString("en-IN")} kg`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Materials list */}
      <section className="bg-steel-50 py-14 md:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Our Materials" title="What we supply" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { src: "/images/mat-high-density.webp", t: "High Density Iron Material" },
              { src: "/images/mat-ultra-heavy.webp", t: "Ultra Heavy Density Iron Material" },
              { src: "/images/mat-filling.webp", t: "Counterweight Filling" },
            ].map((m) => (
              <figure key={m.t} className="overflow-hidden border border-steel-200 bg-white">
                <div className="relative aspect-[3/2]">
                  <Image src={m.src} alt={m.t} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                </div>
                <figcaption className="p-4 font-display text-lg font-bold uppercase tracking-wide text-navy-900">
                  {m.t}
                </figcaption>
              </figure>
            ))}
          </div>
          <ul className="mt-10 grid gap-px overflow-hidden border border-steel-200 bg-steel-200 sm:grid-cols-2 lg:grid-cols-3">
            {densityMaterials.map((m, i) => (
              <li key={m.name} className="flex gap-4 bg-white p-6">
                <span className="font-display text-2xl font-bold text-orange-500">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide text-navy-900">{m.name}</h3>
                  <p className="mt-1 text-sm text-steel-500">{m.note}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-center font-display text-lg font-semibold uppercase tracking-[0.18em] text-navy-900">
            Quality Material <span className="text-orange-500">•</span> High Density{" "}
            <span className="text-orange-500">•</span> Industrial Supply
          </p>
        </div>
      </section>

      <ContactSection defaultProduct="Heavy Density Iron Material" />
    </>
  );
}
