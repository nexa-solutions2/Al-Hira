import Image from "next/image";

/** Square box; the whole photo is always shown (never cropped). */
export function ProductImage({
  src,
  alt,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  className = "",
  preload = false,
}: {
  src: string | null;
  alt: string;
  sizes?: string;
  className?: string;
  preload?: boolean;
}) {
  return (
    <div className={`relative aspect-square overflow-hidden bg-white ${className}`}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} preload={preload} className="object-contain" />
      ) : (
        <div className="flex size-full flex-col items-center justify-center gap-3 bg-steel-50 bg-[repeating-linear-gradient(135deg,transparent_0_14px,rgba(15,33,64,0.035)_14px_28px)]">
          <Image src="/images/logo-mark.png" alt="" width={365} height={348} className="h-12 w-auto opacity-30 grayscale" />
          <span className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-steel-500">
            Photo coming soon
          </span>
        </div>
      )}
    </div>
  );
}
