import Image from "next/image";
import Link from "next/link";
import { registrations, site, tel, waLink } from "@/data/site";
import { densityGrades } from "@/data/products";
import { EnquiryForm } from "./EnquiryForm";
import { SectionHeading } from "./SectionHeading";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./Icons";

export function RegistrationsGrid() {
  return (
    <dl className="grid grid-cols-1 border-l border-t border-steel-200 sm:grid-cols-2 lg:grid-cols-4">
      {registrations.map((r) => (
        <div key={r.label} className="border-b border-r border-steel-200 bg-white px-5 py-4">
          <dt className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-orange-600">{r.label}</dt>
          <dd className="mt-1 break-all font-mono text-[0.95rem] font-medium text-navy-900">{r.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function DensityBand() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 text-white">
      <div className="container-x grid items-center gap-7 py-12 md:py-20 lg:grid-cols-[11fr_9fr] lg:gap-16">
        <div>
          <SectionHeading
            light
            eyebrow="Heavy Density Iron Material Supplier"
            title={
              <>
                Filling material that <span className="text-orange-400">hits the weight</span>
              </>
            }
            text="We are a specialised supplier of heavy density material for counterweights. Our material packs more weight into less space, so your counterweight can be smaller and still reach its target weight."
          />
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {densityGrades.map((g) => (
              <div key={g} className="border-t-2 border-orange-500 pt-3">
                <dt className="sr-only">Density grade</dt>
                <dd className="font-display text-4xl font-bold leading-none text-white">{g}</dd>
                <dd className="mt-1.5 text-xs uppercase tracking-wider text-steel-200/80 3xl:text-sm 3xl:font-semibold">kg / litre</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-xs text-steel-200/70 3xl:text-sm 3xl:font-semibold">The exact density depends on the material grade.</p>
          <Link
            href="/heavy-density-material"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-orange-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
          >
            Explore Materials
          </Link>
        </div>

        {/* Box matches the photo shape (3:2), so the photo is never cropped.
            Mobile/tablet: photo comes first so the section ends on the button. */}
        {/* Below lg the photo bleeds edge to edge at the top of the section (cancels the container padding and section top padding) */}
        <div className="order-first -mt-12 mx-[calc(-1*clamp(1.25rem,3.3vw,6rem))] md:-mt-20 lg:order-none lg:mx-0 lg:mt-0">
          <div className="relative aspect-[3/2] overflow-hidden lg:rounded-md lg:shadow-2xl lg:shadow-black/40 lg:ring-1 lg:ring-white/10">
            <Image
              src="/images/mat-filling.webp"
              alt="Steel counterweight shell being filled with heavy density iron material"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection({ defaultProduct, heading = true }: { defaultProduct?: string; heading?: boolean }) {
  return (
    <section className="bg-steel-50">
      <div className="container-x grid gap-12 py-16 md:py-20 lg:grid-cols-[1fr_1.25fr]">
        <div>
          {heading && (
            <SectionHeading
              eyebrow="Get a Quote"
              title="Tell us what you need"
              text="Share the machine, size and weight you need, and we will get back to you with a price and delivery time."
            />
          )}
          <ul className="mt-8 space-y-5">
            <li className="flex gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-sm bg-navy-900 text-orange-400">
                <PinIcon />
              </span>
              <div className="text-[0.95rem] leading-relaxed text-navy-900">
                <strong className="block font-semibold">{site.name}</strong>
                {site.address.lines.map((l) => (
                  <span key={l} className="block text-steel-500">
                    {l}
                  </span>
                ))}
              </div>
            </li>
            <li className="flex gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-sm bg-navy-900 text-orange-400">
                <PhoneIcon />
              </span>
              <div className="grid grid-cols-2 gap-x-5 gap-y-1 text-[0.95rem] font-medium text-navy-900">
                {site.phones.map((p) => (
                  <a key={p} href={tel(p)} className="hover:text-orange-600">
                    {p}
                  </a>
                ))}
              </div>
            </li>
            <li className="flex gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-sm bg-navy-900 text-orange-400">
                <MailIcon />
              </span>
              <div className="text-[0.95rem] text-navy-900">
                <a href={`mailto:${site.emails.business}`} className="block font-medium hover:text-orange-600">
                  {site.emails.business}
                </a>
                <a href={`mailto:${site.emails.personal}`} className="block text-steel-500 hover:text-orange-600">
                  {site.emails.personal}
                </a>
              </div>
            </li>
          </ul>
          <a
            href={waLink("Hello Al Hira Industries, I have an enquiry.")}
            target="_blank"
            rel="noopener"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-[#1f9d55] px-5 py-3 font-semibold text-white hover:bg-[#188247]"
          >
            <WhatsAppIcon /> Chat on WhatsApp
          </a>
        </div>
        <div className="border border-steel-200 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(15,33,64,0.35)] md:p-8">
          <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-navy-900">Send an Enquiry</h3>
          <p className="mb-6 mt-1 text-sm text-steel-500">Your enquiry comes straight to us on WhatsApp or email.</p>
          <EnquiryForm defaultProduct={defaultProduct} />
        </div>
      </div>
    </section>
  );
}
