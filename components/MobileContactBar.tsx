import { site, tel, waLink } from "@/data/site";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

export function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-steel-200 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:hidden">
      <a
        href={tel(site.phones[0])}
        className="flex items-center justify-center gap-2 py-3.5 font-semibold text-navy-900"
      >
        <PhoneIcon /> Call Now
      </a>
      <a
        href={waLink("Hello Al Hira Industries, I have an enquiry.")}
        target="_blank"
        rel="noopener"
        className="flex items-center justify-center gap-2 bg-[#1f9d55] py-3.5 font-semibold text-white"
      >
        <WhatsAppIcon /> WhatsApp
      </a>
    </div>
  );
}
