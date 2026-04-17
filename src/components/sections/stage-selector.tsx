/**
 * StageSelector — "Çocuğunuza Uygun Yol" kademe seçici
 *
 * @see .docs/07-PAGE-SPECIFICATIONS.md#bölüm-5--stage-selector
 * @see .docs/06-COMPONENT-LIBRARY.md#36-stageselector
 * @see src/components/sections/stage-selector.module.css
 *
 * Server component. 4 normal kart (4 sütun) + Havacılık tam genişlik horizontal.
 * fullWidth kart: cardHorizontal class — grid-column: 1 / -1, flex-direction: row.
 * hover efektleri pure CSS — client component gerekmez.
 *
 * @example
 * <StageSelector
 *   eyebrow="Çocuğunuza Uygun Yol"
 *   title="Hangi yaş, hangi okul?"
 *   stages={[
 *     { ageRange: "3-6 yaş", name: "Anaokulu", ..., slotId: "stage_001" },
 *     { ..., name: "✈ Havacılık Lisesi", featured: true, fullWidth: true },
 *   ]}
 * />
 */

import Link from "next/link";
import type { ReactNode } from "react";
import { PhotoSlot } from "@/components/photo-slot";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/cn";
import styles from "./stage-selector.module.css";

interface StageItem {
  ageRange: string;
  name: string;
  description: string;
  href: string;
  slotId: string;
  featured?: boolean;
  fullWidth?: boolean;
}

interface StageSelectorProps {
  eyebrow?: string;
  title?: ReactNode;
  stages: StageItem[];
  className?: string;
}

export function StageSelector({ eyebrow, title, stages, className }: StageSelectorProps) {
  return (
    <section className={cn(styles.section, className)}>
      <div className="wrap">
        {(eyebrow || title) && (
          <div className={styles.header}>
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            {title && <h2 className={styles.title}>{title}</h2>}
          </div>
        )}

        <div className={styles.grid}>
          {stages.map((stage) => {
            const isHorizontal = stage.fullWidth === true;

            return (
              <Link
                key={stage.href}
                href={stage.href}
                className={cn(
                  styles.card,
                  stage.featured && styles.cardFeatured,
                  isHorizontal && styles.cardHorizontal,
                )}
              >
                <div className={isHorizontal ? styles.imageWrapHorizontal : styles.imageWrap}>
                  <PhotoSlot
                    aspectRatio={isHorizontal ? "16:9" : "4:3"}
                    slotId={stage.slotId}
                    category="GALLERY"
                    type="photo"
                    title={stage.name}
                    description={stage.ageRange}
                    variant={stage.featured ? "dark" : "light"}
                  />
                </div>
                <div className={styles.body}>
                  <span className={styles.ageRange}>{stage.ageRange}</span>
                  <h3 className={styles.name}>{stage.name}</h3>
                  <p className={styles.desc}>{stage.description}</p>
                  <span className={styles.arrow}>
                    <i
                      className={cn("bx bx-right-arrow-alt", styles.arrowIcon)}
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
