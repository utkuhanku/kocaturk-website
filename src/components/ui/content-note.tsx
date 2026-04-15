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
import { cn } from "@/lib/cn";

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
}: ContentNoteProps) {
  /* ── Inline: pill badge (.tba utility class) ── */
  if (variant === "inline") {
    return (
      <span className={cn("tba", dark && "dark", className)} data-content-note={type}>
        {children ?? STATUS_LABELS[status]}
      </span>
    );
  }

  /* ── Block + photo-slot: dashed border card ──
     photo-slot → <PhotoSlot> delegate (Aşama 3); şimdilik block fallback */
  const borderColor = dark ? "var(--color-peach)" : "var(--color-orange)";
  const bgColor = dark ? "var(--color-anthracite-soft)" : "var(--color-peach-soft)";
  const accentColor = dark ? "var(--color-peach)" : "var(--color-orange)";
  const mutedColor = dark ? "var(--color-ink-soft)" : "var(--color-ink-mute)";

  return (
    <div
      data-content-note={type}
      className={className}
      role="img"
      aria-label={`${STATUS_LABELS[status]}: ${type}${description ? ` \u2014 ${description}` : ""}`}
      style={{
        border: `var(--border-thin) dashed ${borderColor}`,
        borderRadius: "var(--radius-sm)",
        padding: "var(--space-8)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "var(--space-3)",
        textAlign: "center",
        backgroundColor: bgColor,
        minHeight: "var(--space-32)",
      }}
    >
      <i
        className={TYPE_ICONS[type]}
        aria-hidden="true"
        style={{ fontSize: "var(--text-2xl)", color: accentColor, opacity: 0.7 }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--tba-font-size)",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "var(--letter-spacing-tba)",
            color: accentColor,
          }}
        >
          {type.toUpperCase()} {"\u00B7"} {STATUS_LABELS[status]}
        </p>
        {description && (
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-sm)",
              color: mutedColor,
              lineHeight: 1.5,
            }}
          >
            {description}
          </p>
        )}
        {variant === "photo-slot" && (
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-2xs)",
              color: mutedColor,
              marginTop: "var(--space-2)",
              opacity: 0.7,
            }}
          >
            Photo slot {"\u2014"} A\u015fama 3{"\u2019"}te in\u015fa edilecek
          </p>
        )}
      </div>
    </div>
  );
}
