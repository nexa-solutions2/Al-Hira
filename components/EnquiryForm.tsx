"use client";

import { useState } from "react";
import { counterweights, densityMaterials } from "@/data/products";
import { site, waLink } from "@/data/site";
import { MailIcon, WhatsAppIcon } from "./Icons";

const options = [
  ...counterweights.map((p) => p.name),
  "Heavy Density Iron Material",
  ...densityMaterials.slice(2).map((m) => m.name),
  "Iron Ore / Raw Material",
  "Magnetic / Non-Magnetic Material",
  "Scrap (Buying / Selling)",
  "Other",
];

const field =
  "w-full rounded-sm border border-steel-200 bg-white px-3.5 py-3 text-[0.95rem] text-ink outline-none transition focus:border-navy-700 focus:ring-2 focus:ring-navy-700/15";

export function EnquiryForm({ defaultProduct = "" }: { defaultProduct?: string }) {
  const [error, setError] = useState("");

  function build(form: HTMLFormElement) {
    const d = Object.fromEntries(new FormData(form)) as Record<string, string>;
    if (!d.name?.trim() || !d.phone?.trim()) {
      setError("Please enter your name and phone number.");
      return null;
    }
    setError("");
    return [
      "*New Enquiry – Al Hira Industries Website*",
      `Name: ${d.name}`,
      d.company && `Company: ${d.company}`,
      `Phone: ${d.phone}`,
      d.city && `City: ${d.city}`,
      d.product && `Requirement: ${d.product}`,
      d.qty && `Weight / Quantity: ${d.qty}`,
      d.message && `Message: ${d.message}`,
    ]
      .filter(Boolean)
      .join("\n");
  }

  return (
    <form
      id="enquiry"
      className="scroll-mt-28"
      onSubmit={(e) => {
        e.preventDefault();
        const text = build(e.currentTarget);
        if (text) window.open(waLink(text), "_blank", "noopener");
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy-900">Your Name *</span>
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy-900">Phone / WhatsApp *</span>
          <input name="phone" required type="tel" autoComplete="tel" className={field} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy-900">Company</span>
          <input name="company" autoComplete="organization" className={field} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy-900">City</span>
          <input name="city" autoComplete="address-level2" className={field} />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm font-medium text-navy-900">Requirement</span>
          <select name="product" defaultValue={defaultProduct} className={field}>
            <option value="">Select a product</option>
            {options.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm font-medium text-navy-900">Weight / Quantity</span>
          <input name="qty" placeholder="e.g. 2,500 kg per piece, 20 pieces" className={field} />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm font-medium text-navy-900">Message</span>
          <textarea
            name="message"
            rows={4}
            placeholder="Machine model, size, drawing details, delivery location…"
            className={field}
          />
        </label>
      </div>

      {error && <p className="mt-3 text-sm font-medium text-red-600">{error}</p>}

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-sm bg-[#1f9d55] px-6 py-3.5 font-semibold text-white transition-colors hover:bg-[#188247]"
        >
          <WhatsAppIcon /> Send on WhatsApp
        </button>
        <button
          type="button"
          onClick={(e) => {
            const text = build(e.currentTarget.form!);
            if (text)
              window.location.href = `mailto:${site.emails.business}?subject=${encodeURIComponent(
                "Website Enquiry",
              )}&body=${encodeURIComponent(text.replace(/\*/g, ""))}`;
          }}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-sm border border-navy-900 px-6 py-3.5 font-semibold text-navy-900 transition-colors hover:bg-navy-900 hover:text-white"
        >
          <MailIcon /> Send by Email
        </button>
      </div>
    </form>
  );
}
