import type { Metadata } from "next";
import { PageHero } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { ContactSection } from "@/components/Sections";
import { counterweights } from "@/data/products";

export const metadata: Metadata = {
  title: "Counterweights – Hydra, Tractor, Forklift, Lift, Crane & Excavator",
  description:
    "12 types of counterweights from Al Hira Industries, Nagpur: tractor, hydra, forklift, elevator, excavator, crane, wheel loader, JCB, cast iron, steel fabricated and customized industrial counterweights.",
};

export default function CounterweightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Counterweights"
        text="We make and supply all types of counterweights for hydra, lift and tractor manufacturers and other heavy machinery. Each one is made to your required size and weight."
        image="/images/hero-warehouse.webp"
      />
      <section className="py-14 md:py-20">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {counterweights.map((p, i) => (
              <ProductCard key={p.slug} p={p} index={i} />
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
