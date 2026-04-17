/**
 * CampusMap — 23 kampüs listesi + Mapbox placeholder
 *
 * @see .docs/07-PAGE-SPECIFICATIONS.md#bölüm-8--campus-map
 * @see .docs/06-COMPONENT-LIBRARY.md#310-campusmap
 * @see src/components/sections/campus-map.module.css
 *
 * Server component. Sol: Mapbox placeholder (Faz 3'te entegre edilecek).
 * Sağ: Kampüs satırları listesi — Link + badge + kademe meta.
 *
 * @example
 * <CampusMap
 *   eyebrow="23 Kampüs · 4 İlçe"
 *   title={<>Ege'nin neresindesiniz,<br/>oradayız.</>}
 *   campuses={[{ slug: "turgutlu", name: "...", ilce: "...", il: "...", badge: "ana", kademeler: [...], href: "..." }]}
 * />
 */

import Link from "next/link";
import type { ReactNode } from "react";
import { ContentNote } from "@/components/ui/content-note";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/cn";
import styles from "./campus-map.module.css";

interface CampusSummary {
  slug: string;
  name: string;
  ilce: string;
  il: string;
  badge?: "ana" | "ikinci-ana";
  kademeler: string[];
  href: string;
}

interface CampusMapProps {
  eyebrow?: string;
  title?: ReactNode;
  campuses: CampusSummary[];
  className?: string;
}

export function CampusMap({ eyebrow, title, campuses, className }: CampusMapProps) {
  return (
    <section className={cn(styles.section, className)}>
      <div className="wrap">
        {(eyebrow || title) && (
          <div className={styles.header}>
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            {title && <h2 className={styles.title}>{title}</h2>}
          </div>
        )}

        <div className={styles.inner}>
          {/* Sol: Mapbox placeholder — Faz 3'te entegre edilecek */}
          <div className={styles.mapSide}>
            <ContentNote
              type="data"
              variant="block"
              description="Mapbox interaktif harita — Faz 3'te entegre edilecek. 23 marker, Ege bölgesi."
            />
          </div>

          {/* Sağ: Kampüs listesi */}
          <div className={styles.listSide}>
            {campuses.map((c) => (
              <Link
                key={c.slug}
                href={c.href}
                className={cn(styles.campusRow, c.badge && styles.campusRowFeatured)}
              >
                <div>
                  {c.badge && (
                    <span className={styles.badge}>
                      {c.badge === "ana" ? "★ ANA KAMPÜS" : "★ 2. ANA KAMPÜS"}
                    </span>
                  )}
                  <p className={styles.campusIlce}>{c.ilce}</p>
                  <p className={styles.campusName}>{c.name}</p>
                  <p className={styles.campusMeta}>{c.kademeler.join(" · ")}</p>
                </div>
                <i className={cn("bx bx-chevron-right", styles.arrowIcon)} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
