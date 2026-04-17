/**
 * NewsCard — Haber kartı (image/PhotoSlot + kategori + tarih + başlık + özet)
 *
 * @see .docs/06-COMPONENT-LIBRARY.md#53-newscard
 * @see src/components/patterns/news-card.module.css
 *
 * Server component — <Link href={`/haberler/${slug}`}> wrapper.
 * 3 size variant: "featured" (16:9 büyük, tam özet) | "standard" (16:9 orta, 2 satır clamp) | "compact" (4:3 yatay, özet yok).
 * image varsa <img src>, yoksa PhotoSlot fallback.
 * Tarih: ISO → toLocaleDateString("tr-TR").
 *
 * @example
 * <NewsCard
 *   slug="roma-fibonacci-2024"
 *   title="Öğrencimiz Roma Fibonacci'de Türkiye'yi Temsil Etti"
 *   excerpt="..."
 *   category="Uluslararası"
 *   date="2024-11-18"
 *   size="featured"
 * />
 */

import Image from "next/image";
import Link from "next/link";
import { PhotoSlot } from "@/components/photo-slot";
import { cn } from "@/lib/cn";
import styles from "./news-card.module.css";

type NewsCardSize = "featured" | "standard" | "compact";

export interface NewsCardProps {
  slug: string;
  title: string;
  excerpt?: string;
  category: string;
  date: string;
  image?: string;
  size?: NewsCardSize;
  className?: string;
}

export function NewsCard({
  slug,
  title,
  excerpt,
  category,
  date,
  image,
  size = "standard",
  className,
}: NewsCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imageAspectRatio = size === "compact" ? "4:3" : "16:9";

  return (
    <Link href={`/haberler/${slug}`} className={cn(styles.card, styles[size], className)}>
      <div className={styles.imageWrap}>
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.imageEl}
          />
        ) : (
          <PhotoSlot
            slotId={`news-${slug}`}
            aspectRatio={imageAspectRatio}
            category="FEATURED"
            type="photo"
            title={title}
            description={excerpt ?? ""}
          />
        )}
      </div>
      <div className={styles.body}>
        <div className={styles.header}>
          <span className={styles.category}>{category}</span>
          <span className={styles.date}>{formattedDate}</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        {size !== "compact" && excerpt && <p className={styles.excerpt}>{excerpt}</p>}
      </div>
    </Link>
  );
}
