import type { Metadata } from "next";
import { PageHero } from "@/components/SectionHeading";
import { ContactSection } from "@/components/Sections";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us – Get a Quote",
  description:
    "Contact Al Hira Industries, Plot No. 7, Mohite Industrial Estate, MIDC Hingna Road, Nagpur. Call +91 9028070000 or send an enquiry for counterweights, heavy density material, iron ore and scrap.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Get a Quote"
        text="For counterweights, heavy density material, bulk orders or business enquiries, call us, message us on WhatsApp or send the form below."
        image="/images/hero-crane.webp"
      />
      <ContactSection heading={false} />
      <section className="h-[23.75rem] w-full bg-steel-100 md:h-[28.75rem]">
        <iframe
          title="Al Hira Industries location"
          src={`https://www.google.com/maps?q=${encodeURIComponent(site.address.mapQuery)}&output=embed`}
          className="size-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
