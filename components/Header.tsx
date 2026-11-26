"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { nav, site, tel } from "@/data/site";
import { CloseIcon, MailIcon, MenuIcon, PhoneIcon, PinIcon } from "./Icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Hide the top strip after scrolling; two thresholds so it does not flicker
    const onScroll = () => setScrolled((s) => (s ? window.scrollY > 10 : window.scrollY > 80));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40">
      <div
        className={`hidden overflow-hidden bg-navy-950 text-[0.8rem] text-steel-200 transition-[max-height] duration-300 md:block ${scrolled ? "max-h-0" : "max-h-9"}`}
      >
        <div className="container-x flex h-9 items-center justify-between">
          <span className="flex items-center gap-1.5">
            <PinIcon className="size-3.5 text-orange-400" /> MIDC Hingna Road, Nagpur, Maharashtra
          </span>
          <div className="flex items-center gap-6">
            <a href={`mailto:${site.emails.business}`} className="flex items-center gap-1.5 hover:text-white">
              <MailIcon className="size-3.5 text-orange-400" /> {site.emails.business}
            </a>
            <a href={tel(site.phones[0])} className="flex items-center gap-1.5 hover:text-white">
              <PhoneIcon className="size-3.5 text-orange-400" /> {site.phones[0]}
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-steel-200 bg-white/95 backdrop-blur">
        {/* Three zones: logo left, links centred, quote button right */}
        <div className="container-x grid h-20 grid-cols-[1fr_auto] items-center md:h-24 lg:grid-cols-[1fr_auto_1fr]">
          <div className="justify-self-start">
            <Logo />
          </div>

          <nav className="hidden items-center gap-7 lg:flex xl:gap-10" aria-label="Main">
            {nav.slice(1).map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-[0.95rem] font-medium text-navy-900 transition-colors hover:text-orange-600"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact#enquiry"
            className="hidden justify-self-end rounded-sm bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600 lg:inline-block"
          >
            Get a Quote
          </Link>

          <button
            type="button"
            className="-mr-2 justify-self-end p-2 text-navy-900 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {open && (
          <nav className="border-t border-steel-200 bg-white lg:hidden" aria-label="Mobile">
            <ul className="container-x py-2">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-steel-100 py-3.5 font-display text-lg font-semibold uppercase tracking-wide text-navy-900"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
              <li className="py-4">
                <Link
                  href="/contact#enquiry"
                  onClick={() => setOpen(false)}
                  className="block rounded-sm bg-orange-500 py-3 text-center font-semibold text-white"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
