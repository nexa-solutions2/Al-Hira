import Link from "next/link";
import type { Product } from "@/data/products";
import { ProductImage } from "./ProductImage";


export function ProductCard({ p, index }: { p: Product; index?: number }) {
  return (
    <Link
      href={`/counterweights/${p.slug}`}
      className="group flex flex-col overflow-hidden border border-steel-200 bg-white transition-shadow hover:shadow-[0_12px_30px_-12px_rgba(15,33,64,0.25)]"
    >
      <ProductImage src={p.image} alt={p.name} />
      <div className="flex flex-1 flex-col border-t-[3px] border-transparent p-3 transition-colors group-hover:border-orange-500 sm:p-5">
        {index !== undefined && (
          <span className="font-display text-xs font-semibold text-orange-600 sm:text-sm">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
        <h3 className="mt-1 font-display text-[0.95rem] font-bold uppercase sm:text-xl leading-tight tracking-wide text-navy-900">
          {p.name}
        </h3>
        {/* Description and link are hidden on mobile (2-column grid); the whole card is a link */}
        <p className="mt-2 hidden flex-1 text-sm leading-relaxed sm:block text-steel-500 3xl:font-semibold">{p.short}</p>
        <span className="mt-4 hidden items-center sm:inline-flex gap-1.5 text-sm font-semibold text-navy-800 group-hover:text-orange-600">
          View details
        </span>
      </div>
    </Link>
  );
}
