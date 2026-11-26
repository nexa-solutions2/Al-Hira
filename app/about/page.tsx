import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, SectionHeading } from "@/components/SectionHeading";
import { ContactSection, RegistrationsGrid } from "@/components/Sections";
import { commitments } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us & Business Registrations",
  description:
    "Al Hira Industries is a Nagpur-based counterweight manufacturer and supplier of heavy density iron material, iron ore, magnetic and non-magnetic materials and industrial scrap. GST, UDYAM, IEC, IBM and DGM registered.",
};

const activities = [
  "Counterweight Material Supplier: all types of counterweight materials",
  "Iron Ore Supplier & Manufacturing: iron ore, raw materials and manufacturing",
  "Magnetic & Non-Magnetic Materials: supply, processing and trading",
  "All Types of Scrap Purchase: ferrous and non-ferrous scrap",
  "Industrial Scrap Dealer: all types of industrial scrap buying and selling",
  "Raw Material Supply: reliable sourcing and bulk supply",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Al Hira Industries"
        text="Your trusted industrial material and scrap partner, based at MIDC Hingna Road, Nagpur."
        image="/images/hero-dusk.webp"
      />

      <section className="py-14 md:py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="Built on weight, quality and trust"
              text="Al Hira Industries manufactures counterweights and supplies heavy density iron material. We make all types of counterweights used by hydra, lift and tractor manufacturers and other heavy machinery. We also supply iron ore and counterweight filling material, and can make counterweights ready to your requirement."
            />
            <ol className="mt-8 space-y-3">
              {activities.map((a, i) => (
                <li key={a} className="flex gap-4 border-b border-steel-200 pb-3">
                  <span className="font-display text-lg font-bold text-orange-500">{i + 1}.</span>
                  <span className="text-ink">{a}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/images/hero-workshop-m.webp"
              alt="Fabrication of a steel counterweight"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-14">
        <div className="container-x">
          <p className="eyebrow !text-orange-400">Our Commitment</p>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((c) => (
              <li
                key={c}
                className="border-l-[3px] border-orange-500 pl-4 font-display text-2xl font-bold uppercase leading-tight text-white"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="registrations" className="scroll-mt-28 py-14 md:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Registered & Compliant" title="Business registrations" />
          <div className="mt-10">
            <RegistrationsGrid />
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
