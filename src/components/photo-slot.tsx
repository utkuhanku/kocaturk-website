/**
 * PhotoSlot — Görsel yer tutucu (placeholder until Faz 5)
 *
 * @see src/types/photo-slot.ts — PhotoSlotReplacement (Faz 5 değişim kılavuzu)
 * @see src/styles/utilities.css — .photo-slot, .photo-slot.light
 * @see .docs/06-COMPONENT-LIBRARY.md#31-photoslot
 *
 * Stiller utilities.css'te tanımlı — bu bileşen yeni CSS yazmaz.
 * Inline style SADECE dynamic aspectRatio için kullanılır (09-RULES kabul).
 * data-slot-id ve data-slot-category CI grep'i ile sayılabilir.
 *
 * Faz 5'te her PhotoSlot, PhotoSlotReplacement map'indeki gerçek Next.js
 * Image bileşeniyle değiştirilecek — slotId eşleştirme anahtarıdır.
 *
 * @example
 * <PhotoSlot
 *   slotId="hero-turgutlu"
 *   aspectRatio="16:9"
 *   category="HERO"
 *   type="photo"
 *   title="Manisa Turgutlu kampüsü drone çekimi"
 *   description="Hero görseli — 1920×1080px min."
 * />
 */

import { cn } from "@/lib/cn";

export type AspectRatio = "16:9" | "4:3" | "1:1" | "3:4" | "4:5" | "21:9";
export type SlotCategory = "HERO" | "FEATURED" | "GALLERY" | "PORTRAIT" | "CAMPUS";

interface PhotoSlotProps {
  aspectRatio: AspectRatio;
  slotId: string;
  category: SlotCategory;
  type: "photo" | "video";
  title: string;
  description: string;
  variant?: "dark" | "light";
  className?: string;
}

const ASPECT_RATIOS: Record<AspectRatio, string> = {
  "16:9": "16 / 9",
  "4:3": "4 / 3",
  "1:1": "1 / 1",
  "3:4": "3 / 4",
  "4:5": "4 / 5",
  "21:9": "21 / 9",
};

export function PhotoSlot({
  aspectRatio,
  slotId,
  category,
  type,
  title,
  description,
  variant = "dark",
  className,
}: PhotoSlotProps) {
  const icon = type === "video" ? "bx bx-video" : "bx bx-image";

  return (
    <div
      role="img"
      aria-label={`${category}: ${title}`}
      data-slot-id={slotId}
      data-slot-category={category}
      className={cn("photo-slot", variant === "light" && "light", className)}
      style={{ aspectRatio: ASPECT_RATIOS[aspectRatio] }}
    >
      <div className="photo-slot-meta">
        <span>{category}</span>
        <span>{slotId}</span>
      </div>
      <div className="photo-slot-content">
        <span className="photo-slot-icon">
          <i className={icon} aria-hidden="true" />
        </span>
        <p className="photo-slot-title">{title}</p>
        <p className="photo-slot-desc">{description}</p>
      </div>
    </div>
  );
}
