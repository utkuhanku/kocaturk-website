/**
 * TestimonialCard — Veli/mezun görüş kartı (tırnak + alıntı + yazar + opsiyonel video)
 *
 * @see .docs/06-COMPONENT-LIBRARY.md#54-testimonialcard
 * @see src/components/patterns/testimonial-card.module.css
 *
 * Server component — video overlay görsel only, Faz 5'te 'use client' + gerçek player.
 * avatar prop ALINIR AMA HİÇBİR ZAMAN RENDER EDİLMEZ — KVKK (Faz 5 sonrası aktif).
 * Daima initials circle: getInitials(authorName) → "AY" gibi.
 * videoUrl varsa PhotoSlot + div overlay (div role="img" — button click handler yok).
 * quote: font-style: normal ZORUNLU — italic YASAK (09-RULES).
 *
 * @example
 * <TestimonialCard
 *   quote="Çocuğumun bu okulda geçirdiği dört yıl onu gerçek anlamda dönüştürdü."
 *   authorName="Ayşe Çelik"
 *   authorRole="Veli · Ortaokul 7. sınıf · Turgutlu"
 * />
 */

import { PhotoSlot } from "@/components/photo-slot";
import { cn } from "@/lib/cn";
import styles from "./testimonial-card.module.css";

interface TestimonialCardProps {
  quote: string;
  authorName: string;
  authorRole: string;
  avatar?: string;
  videoUrl?: string;
  className?: string;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0] ?? "")
    .join("")
    .toUpperCase();
}

export function TestimonialCard({
  quote,
  authorName,
  authorRole,
  avatar: _avatar,
  videoUrl,
  className,
}: TestimonialCardProps) {
  const slotId = `testimonial-${authorName.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <article className={cn(styles.card, className)}>
      <p className={styles.quoteGlyph} aria-hidden="true">
        "
      </p>
      <blockquote className={styles.quote}>{quote}</blockquote>
      {videoUrl && (
        <div className={styles.videoWrap}>
          <PhotoSlot
            slotId={slotId}
            aspectRatio="16:9"
            category="FEATURED"
            type="video"
            title="Veli görüşü"
            description="Video testimonial — Faz 5'te aktif"
          />
          <div
            className={styles.videoOverlay}
            role="img"
            aria-label="Video önizlemesi — Faz 5'te aktif"
          >
            <span className={styles.playIcon} aria-hidden="true">
              <i className="bx bx-play" aria-hidden="true" />
            </span>
          </div>
        </div>
      )}
      <footer className={styles.author}>
        <div className={styles.avatar} aria-hidden="true">
          {getInitials(authorName)}
        </div>
        <div>
          <p className={styles.authorName}>{authorName}</p>
          <p className={styles.authorRole}>{authorRole}</p>
        </div>
      </footer>
    </article>
  );
}
