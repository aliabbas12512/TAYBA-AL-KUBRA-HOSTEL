import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { hasRealImage } from "@/lib/images";

/**
 * Renders the real photo at /public/images/<id>.jpg when one has been added
 * (see public/images/README.md for the full slot list). Falls back to an
 * elegant branded placeholder for any slot without a photo yet, so no
 * section ever looks empty.
 */
export default function PlaceholderImage({
  id,
  label,
  className = "",
}: {
  id: string;
  label: string;
  className?: string;
}) {
  if (hasRealImage(id)) {
    return (
      <div className={`relative overflow-hidden bg-charcoal-light ${className}`} data-image-slot={id}>
        <Image
          src={`/images/${id}.jpg`}
          alt={label}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden bg-charcoal-light ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 20%, rgba(201,162,39,0.18), transparent 55%), radial-gradient(circle at 85% 75%, rgba(201,162,39,0.12), transparent 50%)",
      }}
      data-image-slot={id}
    >
      <div className="absolute inset-0 border border-gold/15" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #C9A227 0, #C9A227 1px, transparent 1px, transparent 14px)",
        }}
      />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center">
        <ImageIcon className="h-6 w-6 text-gold/60" strokeWidth={1.5} />
        <span className="font-body text-xs uppercase tracking-[0.15em] text-beige/50">{label}</span>
      </div>
    </div>
  );
}
