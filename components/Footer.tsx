import Link from "next/link";
import { Logo } from "./Logo";
import { nav, site, tel, registrations } from "@/data/site";
import { counterweights } from "@/data/products";
import { MailIcon, PhoneIcon, PinIcon } from "./Icons";

/** Mobile: a tap-to-open dropdown (closed by default). Tablet/desktop: an always-open column. */
function FooterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  const heading = "font-display text-lg font-semibold uppercase tracking-wide text-white";
  return (
    <>
      <details className="group border-t border-white/10 md:hidden">
        <summary className={`flex cursor-pointer list-none items-center justify-between py-4 [&::-webkit-details-marker]:hidden ${heading}`}>
          {title}
          <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden className="size-5 text-orange-400 transition-transform group-open:rotate-180">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.25 4.39a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z" clipRule="evenodd" />
          </svg>
        </summary>
        <div className="pb-5">{children}</div>
      </details>
      <div className="hidden md:block">
        <h3 className={heading}>{title}</h3>
        <div className="mt-4">{children}</div>
      </div>
    </>
  );
}

export function Footer() {
  const gst = registrations.find((r) => r.label === "GSTIN")!;
  return (
    <footer className="bg-navy-950 pb-20 text-steel-200 md:pb-0">
      <div className="container-x grid py-14 md:grid-cols-2 md:gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1.3fr]">
        <div className="pb-8 md:pb-0">
          <Logo invert />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-steel-200/80">
            Counterweight manufacturer and supplier of heavy density iron material, iron ore, magnetic and
            non-magnetic materials and industrial scrap.
          </p>
          <p className="mt-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-orange-400">
            {site.tagline}
          </p>
        </div>

        <FooterGroup title="Company">
          <ul className="space-y-2.5 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-orange-400">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </FooterGroup>

        <FooterGroup title="Counterweights">
          <ul className="space-y-2.5 text-sm">
            {counterweights.slice(0, 7).map((p) => (
              <li key={p.slug}>
                <Link href={`/counterweights/${p.slug}`} className="hover:text-orange-400">
                  {p.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/counterweights" className="font-semibold text-orange-400">
                View all 12
              </Link>
            </li>
          </ul>
        </FooterGroup>

        {/* Contact stays open on every screen */}
        <div className="border-t border-white/10 pt-6 md:border-0 md:pt-0">
          <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-white">Contact</h3>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex gap-3">
              <PinIcon className="mt-0.5 size-4 shrink-0 text-orange-400" />
              <span>{site.address.lines.join(" ")}</span>
            </li>
            <li className="flex gap-3">
              <PhoneIcon className="mt-0.5 size-4 shrink-0 text-orange-400" />
              <span className="flex flex-wrap gap-x-2 gap-y-1">
                {site.phones.map((p) => (
                  <a key={p} href={tel(p)} className="hover:text-white">
                    {p}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <MailIcon className="mt-0.5 size-4 shrink-0 text-orange-400" />
              <span className="flex flex-col gap-1">
                <a href={`mailto:${site.emails.business}`} className="hover:text-white">
                  {site.emails.business}
                </a>
                <a href={`mailto:${site.emails.personal}`} className="hover:text-white">
                  {site.emails.personal}
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-5 text-xs text-steel-200/60 md:flex-row md:justify-between">
          <span>© Al Hira Industries, Nagpur. All rights reserved.</span>
          <span>GSTIN: {gst.value}</span>
        </div>
      </div>
    </footer>
  );
}
