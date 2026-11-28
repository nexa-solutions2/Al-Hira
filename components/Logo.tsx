import Image from "next/image";
import Link from "next/link";

export function Logo({ invert = false }: { invert?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Al Hira Industries – Home">
      <span className={invert ? "rounded-md bg-white p-1.5" : ""}>
        <Image
          src="/images/logo-full.png"
          alt=""
          width={532}
          height={469}
          className="h-14 w-auto md:h-[4.5rem]"
          preload
        />
      </span>
      <span className="leading-none">
        <span
          className={`block font-display text-[1.7rem] font-bold tracking-wide md:text-[2.1rem] ${invert ? "text-white" : "text-navy-900"}`}
        >
          AL HIRA
        </span>
        <span
          className={`mt-0.5 block border-t pt-0.5 font-display text-[0.8rem] font-semibold tracking-[0.32em] md:text-[0.95rem] ${invert ? "border-orange-400 text-steel-200" : "border-orange-500 text-steel-500"}`}
        >
          INDUSTRIES
        </span>
      </span>
    </Link>
  );
}
