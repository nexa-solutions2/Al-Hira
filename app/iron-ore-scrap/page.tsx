import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/SectionHeading";
import { ContactSection } from "@/components/Sections";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Iron Ore, Magnetic & Non-Magnetic Materials and Industrial Scrap",
  description:
    "Iron ore supplier and manufacturing, magnetic and non-magnetic materials, raw material supply and buying and selling of all types of ferrous and non-ferrous industrial scrap in Nagpur.",
};

const blocks = [
  {
    id: "iron-ore",
    title: "Iron Ore Supplier & Manufacturing",
    text: "We supply iron ore and raw materials, and handle processing and manufacturing for industrial buyers. We are registered with the IBM (Indian Bureau of Mines) and the DGM.",
    points: ["Iron ore lumps & fines", "Raw materials", "Bulk supply"],
    images: ["/images/real-iron-ore-1.webp", "/images/real-iron-ore-hands.webp"],
  },
  {
    id: "magnetic",
    title: "Magnetic & Non-Magnetic Materials",
    text: "We supply, process and trade both magnetic and non-magnetic materials for industrial use.",
    points: ["Supply", "Processing", "Trading"],
    images: ["/images/mat-magnetic.webp", "/images/real-iron-ore-heap.webp"],
  },
  {
    id: "raw-material",
    title: "Raw Material Supply",
    text: "We source industrial raw materials reliably and supply them in bulk, on time.",
    points: ["Reliable sourcing", "Bulk supply", "Competitive prices"],
    images: ["/images/mat-high-density.webp"],
  },
  {
    id: "scrap",
    title: "All Types of Scrap Purchase & Industrial Scrap Dealer",
    text: "We buy and sell all types of industrial scrap, both ferrous and non-ferrous, from factories, workshops and project sites.",
    points: ["Ferrous scrap: steel, iron, beams, plates", "Non-ferrous scrap: copper, aluminium, brass", "Industrial scrap buying & selling"],
    images: ["/images/scrap-ferrous.webp", "/images/scrap-nonferrous.webp"],
  },
];

export default function IronOreScrapPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Business Activities"
        title="Iron Ore, Materials & Scrap"
        text="We supply, process and trade industrial raw materials, iron ore and all types of scrap."
        image="/images/real-iron-ore-1.webp"
      />
      {blocks.map((b, i) => (
        <section key={b.id} id={b.id} className={`scroll-mt-28 py-14 md:py-20 ${i % 2 ? "bg-steel-50" : ""}`}>
          <div className="container-x grid items-center gap-10 lg:grid-cols-2">
            <div className={i % 2 ? "lg:order-2" : ""}>
              <p className="eyebrow">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-2 font-display text-3xl font-bold uppercase leading-[0.95] text-navy-900 md:text-4xl">
                {b.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-steel-500">{b.text}</p>
              <ul className="mt-6 space-y-2.5">
                {b.points.map((pt) => (
                  <li key={pt} className="flex gap-2.5">
                    <CheckIcon className="mt-0.5 size-5 shrink-0 text-orange-500" /> {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`grid gap-3 ${b.images.length > 1 ? "grid-cols-2" : ""}`}>
              {b.images.map((src) => (
                <div key={src} className={`relative overflow-hidden rounded-sm ${b.images.length > 1 ? "aspect-[4/5]" : "aspect-[3/2]"}`}>
                  <Image src={src} alt={b.title} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
      <ContactSection />
    </>
  );
}
