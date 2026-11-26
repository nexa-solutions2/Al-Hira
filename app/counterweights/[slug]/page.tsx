import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductImage } from "@/components/ProductImage";
import { ProductCard } from "@/components/ProductCard";
import { ContactSection } from "@/components/Sections";
import { CheckIcon, PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import { counterweights, getProduct } from "@/data/products";
import { site, tel, waLink } from "@/data/site";

export function generateStaticParams() {
  return counterweights.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/counterweights/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: `${p.name} Manufacturer & Supplier`,
    description: `${p.short} Manufactured to your size and weight by Al Hira Industries, Nagpur.`,
    openGraph: p.image ? { images: [p.image] } : undefined,
  };
}

const features = [
  "Made to your size and target weight",
  "Steel fabricated or cast iron",
  "Filled with heavy density iron material",
  "Lifting lugs and mounting holes to your drawing",
  "Painted in your colour",
  "Bulk orders and regular supply",
];

export default async function ProductPage(props: PageProps<"/counterweights/[slug]">) {
  const { slug } = await props.params;
  const p = getProduct(slug);
  if (!p) notFound();

  const at = counterweights.indexOf(p);
  const related = [1, 2, 3, 4].map((k) => counterweights[(at + k) % counterweights.length]);
  const waText = `Hello Al Hira Industries, I need a quote for ${p.name}.`;

  return (
    <>
      <div className="border-b border-steel-200 bg-steel-50">
        <nav className="container-x flex flex-wrap items-center gap-2 py-3 text-sm text-steel-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-navy-900">Home</Link>/
          <Link href="/counterweights" className="hover:text-navy-900">Counterweights</Link>/
          <span className="text-navy-900">{p.name}</span>
        </nav>
      </div>

      <section className="py-12 md:py-16">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <ProductImage
              src={p.image}
              alt={p.name}
              className="border border-steel-200"
              sizes="(min-width: 1024px) 50vw, 100vw"
              preload
            />
            {p.gallery && (
              <div className="mt-4">
                <p className="mb-2 text-sm font-semibold text-navy-900">Our actual products</p>
                <div className="grid grid-cols-3 gap-3">
                  {p.gallery.map((g) => (
                    <div key={g} className="relative aspect-square overflow-hidden border border-steel-200">
                      <Image src={g} alt={`${p.name} made by Al Hira Industries`} fill sizes="200px" className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <p className="eyebrow">Counterweights</p>
            <h1 className="mt-2 font-display text-4xl font-bold uppercase leading-[0.95] text-navy-900 md:text-5xl">
              {p.name}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-steel-500">{p.description}</p>

            <h2 className="mt-8 font-display text-lg font-bold uppercase tracking-wide text-navy-900">What we offer</h2>
            <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {features.map((f) => (
                <li key={f} className="flex gap-2.5 text-[0.95rem] text-ink">
                  <CheckIcon className="mt-0.5 size-5 shrink-0 text-orange-500" /> {f}
                </li>
              ))}
            </ul>

            <h2 className="mt-8 font-display text-lg font-bold uppercase tracking-wide text-navy-900">Used by</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.usedIn.map((u) => (
                <span key={u} className="rounded-sm border border-steel-200 bg-steel-50 px-3 py-1.5 text-sm text-navy-900">
                  {u}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink(waText)}
                target="_blank"
                rel="noopener"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-sm bg-[#1f9d55] px-6 py-3.5 font-semibold text-white hover:bg-[#188247]"
              >
                <WhatsAppIcon /> Get Quote on WhatsApp
              </a>
              <a
                href={tel(site.phones[0])}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-sm bg-navy-900 px-6 py-3.5 font-semibold text-white hover:bg-navy-800"
              >
                <PhoneIcon /> {site.phones[0]}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-steel-200 py-14">
        <div className="container-x">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-bold uppercase text-navy-900">Other counterweights</h2>
            <Link href="/counterweights" className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-orange-600">
              View all
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {related.map((r) => (
              <ProductCard key={r.slug} p={r} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection defaultProduct={p.name} />
    </>
  );
}
