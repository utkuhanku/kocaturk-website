/**
 * NewsGrid — Hibrit haber grid: 1 featured sol + 3 compact sağ sütun
 *
 * @see .docs/07-PAGE-SPECIFICATIONS.md#bölüm-10--news-grid
 * @see .docs/06-COMPONENT-LIBRARY.md#312-newsgrid
 * @see src/components/sections/news-grid.module.css
 *
 * Server component. news[0] → featured (sol, 1.5fr).
 * news[1..3] → compact satırlar (sağ, 1fr).
 * Min 4 haber item gereklidir.
 *
 * @example
 * <NewsGrid
 *   eyebrow="Son Haberler"
 *   title="Kocatürk'te bu hafta."
 *   news={[{ slug: "roma-2024", title: "...", category: "...", date: "2024-11-18" }]}
 *   cta={{ href: "/haberler", label: "Tüm Haberler" }}
 * />
 */

import type { ReactNode } from "react";
import { NewsCard, type NewsCardProps } from "@/components/patterns/news-card";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/cn";
import styles from "./news-grid.module.css";

interface NewsGridProps {
  eyebrow?: string;
  title?: ReactNode;
  news: NewsCardProps[];
  cta?: { href: string; label: string };
  className?: string;
}

export function NewsGrid({ eyebrow, title, news, cta, className }: NewsGridProps) {
  const [featured, ...rest] = news;

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
          <div className={styles.featuredSlot}>
            {featured && <NewsCard {...featured} size="featured" />}
          </div>
          <div className={styles.sideSlots}>
            {rest.slice(0, 3).map((n) => (
              <NewsCard key={n.slug} {...n} size="compact" />
            ))}
          </div>
        </div>

        {cta && (
          <div className={styles.footer}>
            <Button
              variant="outline"
              href={cta.href}
              icon={<i className="bx bx-right-arrow-alt" aria-hidden="true" />}
            >
              {cta.label}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
