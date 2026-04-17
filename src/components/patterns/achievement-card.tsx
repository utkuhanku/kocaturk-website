/**
 * AchievementCard — Başarı kartı (kategori badge + pozisyon + başlık + meta)
 *
 * @see .docs/06-COMPONENT-LIBRARY.md#52-achievementcard
 * @see src/components/patterns/achievement-card.module.css
 *
 * Server component — href opsiyonel: varsa <Link>, yoksa <article>.
 * Tarih: ISO string → toLocaleDateString("tr-TR") — server'da safe.
 * position: Türkçe metin ("1. Derece", "Dünya Şampiyonu") — emoji YASAK (09-RULES).
 * featured: border orange + peach-soft bg — font-size farkı yok.
 * Kategori renkleri: akademik=orange, sportif=success, uluslararasi=peach-soft, sanatsal=warning.
 *
 * @example
 * <AchievementCard
 *   category="uluslararasi"
 *   title="Roma Fibonacci Matematik Yarışması"
 *   position="Türkiye 1.si"
 *   studentName="Ahmet Yıldız"
 *   date="2024-11-15"
 *   location="Roma, İtalya"
 *   featured
 *   href="/basarilar/roma-fibonacci-2024"
 * />
 */

import Link from "next/link";
import { cn } from "@/lib/cn";
import styles from "./achievement-card.module.css";

type AchievementCategory = "akademik" | "sportif" | "uluslararasi" | "sanatsal";

interface AchievementCardProps {
  category: AchievementCategory;
  title: string;
  studentName?: string;
  date: string;
  location?: string;
  position?: string;
  href?: string;
  featured?: boolean;
  className?: string;
}

const CATEGORY_LABELS: Record<AchievementCategory, string> = {
  akademik: "Akademik",
  sportif: "Sportif",
  uluslararasi: "Uluslararası",
  sanatsal: "Sanatsal",
};

export function AchievementCard({
  category,
  title,
  studentName,
  date,
  location,
  position,
  href,
  featured = false,
  className,
}: AchievementCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const cardClassName = cn(styles.card, featured && styles.featured, className);

  const inner = (
    <>
      <span className={cn(styles.categoryBadge, styles[category])}>
        {CATEGORY_LABELS[category]}
      </span>
      {position && <p className={styles.position}>{position}</p>}
      <h3 className={styles.title}>{title}</h3>
      {studentName && <p className={styles.studentName}>{studentName}</p>}
      <div className={styles.meta}>
        <span className={styles.metaItem}>
          <i className="bx bx-calendar" aria-hidden="true" />
          {formattedDate}
        </span>
        {location && (
          <span className={styles.metaItem}>
            <i className="bx bx-map-pin" aria-hidden="true" />
            {location}
          </span>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cardClassName}>
        {inner}
      </Link>
    );
  }

  return <article className={cardClassName}>{inner}</article>;
}
