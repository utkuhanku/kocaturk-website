/**
 * Hero — Ana sayfa hero bölümü
 *
 * @see .docs/07-PAGE-SPECIFICATIONS.md#bölüm-1--hero
 * @see .docs/06-COMPONENT-LIBRARY.md#32-hero
 * @see src/components/sections/hero.module.css
 *
 * Server component — HeroTitleReveal ('use client') title animasyonunu yönetir.
 * Zemin: .dark-section utility class (antrasit + atmosfer glow)
 * Stats: NumberCounter (client) — sayfa yüklenince viewport'a girer, animasyon başlar.
 *
 * @example
 * <Hero
 *   eyebrow="EGE'NİN EĞİTİM OMURGASI"
 *   folio="K · 1998 — 2026"
 *   title={<>Köklerimiz<br/>burada,<br/>ufkumuz<br/><em>dünyada.</em></>}
 *   lede="..."
 *   primaryCta={{ href: "/kayit/on-kayit", label: "Ön Kayıt Başvurusu" }}
 *   photo={{ slotId: "ph_001", title: "Ana Kampüs", description: "..." }}
 *   stats={[...]}
 * />
 */

import type { ReactNode } from "react";
import { NumberCounter } from "@/components/number-counter";
import type { AspectRatio } from "@/components/photo-slot";
import { PhotoSlot } from "@/components/photo-slot";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/cn";
import styles from "./hero.module.css";
import { HeroTitleReveal } from "./hero-title-reveal";

interface HeroStatItem {
  number: number;
  suffix?: string;
  label: string;
}

interface HeroPhotoProps {
  aspectRatio?: AspectRatio;
  slotId: string;
  title: string;
  description: string;
}

interface HeroProps {
  eyebrow: string;
  folio?: string;
  title: ReactNode;
  lede: ReactNode;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  photo?: HeroPhotoProps;
  stats?: HeroStatItem[];
  statsSubline?: string;
  className?: string;
}

export function Hero({
  eyebrow,
  folio,
  title,
  lede,
  primaryCta,
  secondaryCta,
  photo,
  stats,
  statsSubline,
  className,
}: HeroProps) {
  return (
    <section className={cn("dark-section", styles.section, className)}>
      <div className="wrap">
        <div className={styles.inner}>
          {/* Sol içerik */}
          <div className={styles.content}>
            <div className={styles.meta}>
              <Eyebrow variant="light">{eyebrow}</Eyebrow>
              {folio && <span className={styles.folio}>{folio}</span>}
            </div>

            <HeroTitleReveal className={styles.title}>{title}</HeroTitleReveal>

            <p className={styles.lede}>{lede}</p>

            <div className={styles.ctas}>
              <Button
                variant="primary"
                size="lg"
                href={primaryCta.href}
                icon={<i className="bx bx-right-arrow-alt" aria-hidden="true" />}
              >
                {primaryCta.label}
              </Button>
              {secondaryCta && (
                <Button variant="outline-light" size="lg" href={secondaryCta.href}>
                  {secondaryCta.label}
                </Button>
              )}
            </div>

            {stats && stats.length > 0 && (
              <>
                <div className={styles.statsRow}>
                  {stats.map((stat) => (
                    <div key={stat.label} className={styles.statItem}>
                      <span className={styles.statNumber}>
                        <NumberCounter target={stat.number} suffix={stat.suffix} />
                      </span>
                      <span className={styles.statLabel}>{stat.label}</span>
                    </div>
                  ))}
                </div>
                {statsSubline && <p className={styles.statsSubline}>{statsSubline}</p>}
              </>
            )}
          </div>

          {/* Sağ fotoğraf */}
          {photo && (
            <div className={styles.photoSide}>
              <PhotoSlot
                aspectRatio={photo.aspectRatio ?? "16:10"}
                slotId={photo.slotId}
                category="HERO"
                type="photo"
                title={photo.title}
                description={photo.description}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
