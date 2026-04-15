/**
 * ContentNote — Placeholder for pending content (TBA / pending / review)
 *
 * @see .docs/06-COMPONENT-LIBRARY.md#14-contentnote-tba-badge
 * @see src/styles/utilities.css — .tba, .tba.dark
 *
 * CI sayacı: grep -r 'data-content-note' src/ ile kalan placeholder sayılır.
 * Lansman öncesi bu sayı sıfıra inmeli veya kabul edilmeli.
 *
 * photo-slot variant: Aşama 3'te <PhotoSlot> delegate edilecek.
 * Şu an block fallback olarak render edilir.
 *
 * @example
 * <ContentNote type="text" status="tba" variant="inline" />
 * <ContentNote type="photo" variant="block" description="Hero drone shot" dark />
 */

import type { ReactNode } from "react";
import type { AspectRatio, SlotCategory } from "@/components/photo-slot";
import { PhotoSlot } from "@/components/photo-slot";
import { cn } from "@/lib/cn";
import styles from "./content-note.module.css";

type ContentNoteType = "text" | "photo" | "video" | "data" | "testimonial";
type ContentNoteStatus = "tba" | "pending" | "review";
type ContentNoteVariant = "inline" | "block" | "photo-slot";

interface ContentNoteProps {
  type: ContentNoteType;
  description?: string;
  status?: ContentNoteStatus;
  variant?: ContentNoteVariant;
  dark?: boolean;
  children?: ReactNode;
  className?: string;
  /* photo-slot variant için — eksikse default'lar devreye girer */
  aspectRatio?: AspectRatio;
  slotId?: string;
  category?: SlotCategory;
}

const TYPE_ICONS: Record<ContentNoteType, string> = {
  text: "bx bx-text",
  photo: "bx bx-image",
  video: "bx bx-video",
  data: "bx bx-data",
  testimonial: "bx bx-chat",
};

const STATUS_LABELS: Record<ContentNoteStatus, string> = {
  tba: "TBA",
  pending: "PENDING",
  review: "REVIEW",
};

export function ContentNote({
  type,
  description,
  status = "tba",
  variant = "inline",
  dark = false,
  children,
  className,
  aspectRatio = "16:9",
  slotId = "PLACEHOLDER",
  category = "GALLERY",
}: ContentNoteProps) {
  /* ── Inline: pill badge (.tba utility class) ── */
  if (variant === "inline") {
    return (
      <span className={cn("tba", dark && "dark", className)} data-content-note={type}>
        {children ?? STATUS_LABELS[status]}
      </span>
    );
  }

  /* ── photo-slot: PhotoSlot'a delegate ── */
  if (variant === "photo-slot") {
    const slotType = type === "video" ? "video" : "photo";
    return (
      <PhotoSlot
        aspectRatio={aspectRatio}
        slotId={slotId}
        category={category}
        type={slotType}
        title={description ?? STATUS_LABELS[status]}
        description={`${type.toUpperCase()} \u00B7 ${STATUS_LABELS[status]}`}
        variant={dark ? "dark" : "light"}
        className={className}
      />
    );
  }

  /* ── Block: dashed border card ── */
  return (
    <div
      data-content-note={type}
      className={cn(styles.block, dark && styles.dark, className)}
      role="img"
      aria-label={`${STATUS_LABELS[status]}: ${type}${description ? ` \u2014 ${description}` : ""}`}
    >
      <i className={cn(TYPE_ICONS[type], styles.blockIcon)} aria-hidden="true" />
      <div className={styles.blockInner}>
        <p className={styles.blockLabel}>
          {type.toUpperCase()} {"\u00B7"} {STATUS_LABELS[status]}
        </p>
        {description && <p className={styles.blockDesc}>{description}</p>}
      </div>
    </div>
  );
}
