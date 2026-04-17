/**
 * FeaturedStory — Öne çıkarılmış başarı hikâyesi (Roma Robotik gibi)
 *
 * @see .docs/07-PAGE-SPECIFICATIONS.md#bölüm-4--featured-story--roma-robotik
 * @see .docs/06-COMPONENT-LIBRARY.md#37-featuredstory
 * @see src/components/sections/featured-story.module.css
 *
 * Server component. Asimetrik split: 1.05fr içerik / 1fr fotoğraf.
 * Medal grid: 2×2, Türkçe derecelendirme ("1. Derece", "DÜNYA 1.").
 * emoji YASAK — derecelendirme text olarak gösterilir.
 *
 * @example
 * <FeaturedStory
 *   tag="ULUSLARARASI ŞAMPİYONLUK"
 *   counter="01 / 12 BAŞARI"
 *   title={<>Roma'da<br/><em>dünya zirvesi.</em></>}
 *   body="..."
 *   photo={{ slotId: "ph_002", aspectRatio: "4:5", title: "...", description: "..." }}
 *   medals={[{ rank: "1. Derece", category: "Lego Sumo", result: "DÜNYA 1." }]}
 *   cta={{ href: "/basarilarimiz", label: "Tüm Başarıları Gör" }}
 *   meta={{ location: "ROMA, İTALYA", date: "KASIM 2024" }}
 * />
 */

import type { ReactNode } from "react";
import type { AspectRatio } from "@/components/photo-slot";
import { PhotoSlot } from "@/components/photo-slot";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/cn";
import styles from "./featured-story.module.css";

interface MedalItem {
  rank: string;
  category: string;
  result: string;
}

interface FeaturedStoryProps {
  tag: string;
  counter?: string;
  title: ReactNode;
  body: ReactNode;
  photo: { slotId: string; aspectRatio?: AspectRatio; title: string; description: string };
  medals?: MedalItem[];
  cta: { href: string; label: string };
  meta: { location: string; date: string };
  variant?: "light" | "dark";
  className?: string;
}

export function FeaturedStory({
  tag,
  counter,
  title,
  body,
  photo,
  medals,
  cta,
  meta,
  variant = "light",
  className,
}: FeaturedStoryProps) {
  const isDark = variant === "dark";

  return (
    <section className={cn(styles.section, isDark && styles.dark, className)}>
      <div className="wrap">
        <div className={styles.inner}>
          {/* Sol içerik */}
          <div className={styles.content}>
            <div className={styles.tagRow}>
              <Eyebrow variant={isDark ? "light" : "default"}>{tag}</Eyebrow>
              {counter && <span className={styles.counter}>{counter}</span>}
            </div>

            <h2 className={styles.title}>{title}</h2>

            <div className={styles.body}>{body}</div>

            {medals && medals.length > 0 && (
              <ul className={styles.medalsGrid} aria-label="Kazanılan ödüller">
                {medals.map((m) => (
                  <li key={m.category} className={styles.medalItem}>
                    <span className={styles.medalRank}>{m.rank}</span>
                    <span className={styles.medalCategory}>{m.category}</span>
                    <span className={styles.medalResult}>{m.result}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className={styles.ctaRow}>
              <Button
                variant={isDark ? "outline-light" : "primary"}
                href={cta.href}
                icon={<i className="bx bx-right-arrow-alt" aria-hidden="true" />}
              >
                {cta.label}
              </Button>
              <p className={styles.meta}>
                <i className="bx bx-map-pin" aria-hidden="true" />
                {meta.location} · {meta.date}
              </p>
            </div>
          </div>

          {/* Sağ fotoğraf */}
          <div className={styles.photoSide}>
            <PhotoSlot
              aspectRatio={photo.aspectRatio ?? "4:5"}
              slotId={photo.slotId}
              category="FEATURED"
              type="photo"
              title={photo.title}
              description={photo.description}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
