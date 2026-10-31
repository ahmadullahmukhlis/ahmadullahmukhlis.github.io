import Image from "next/image";
import { SERVICE_IMAGES } from "@/lib/brand";

/** Fixed-ratio service artwork: the full image stays visible, framed by a blurred copy of itself. */
export function ServiceImage({ id, className = "", sizes }: { id: string; className?: string; sizes: string }) {
  const img = SERVICE_IMAGES[id];
  if (!img) return null;
  return (
    <div className={`relative overflow-hidden bg-panel ${className}`}>
      <Image src={img.src} alt="" aria-hidden="true" fill sizes="64px" className="scale-125 object-cover opacity-45 blur-2xl" />
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes={sizes}
        className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
    </div>
  );
}
