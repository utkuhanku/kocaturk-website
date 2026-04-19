"use client";

import { useState } from "react";
import { NewsCard } from "@/components/patterns/news-card";
import { Eyebrow } from "@/components/ui/eyebrow";
import { NEWS, NEWS_CATEGORIES, type NewsCategory } from "@/data/news";
import styles from "./haberler.module.css";

type FilterValue = "tumu" | NewsCategory;

const FILTRELER: { value: FilterValue; label: string }[] = [
  { value: "tumu", label: "Tümü" },
  { value: "uluslararasi", label: NEWS_CATEGORIES.uluslararasi },
  { value: "akademik", label: NEWS_CATEGORIES.akademik },
  { value: "proje", label: NEWS_CATEGORIES.proje },
  { value: "duyuru", label: NEWS_CATEGORIES.duyuru },
];

export default function HaberlerPage() {
  const [aktif, setAktif] = useState<FilterValue>("tumu");

  const filtrelenmis = aktif === "tumu" ? NEWS : NEWS.filter((n) => n.category === aktif);

  const [featured, ...rest] = filtrelenmis;

  return (
    <>
      <section className={styles.heroSection}>
        <div className="wrap">
          <Eyebrow>Haberler</Eyebrow>
          <h1 className={styles.heroTitle}>
            Kocatürk'te
            <br />
            <em>bu hafta.</em>
          </h1>
          <p className={styles.heroLede}>
            Uluslararası başarılar, akademik zirve, projeler ve duyurular.
          </p>
          <div className={styles.filterRow}>
            {FILTRELER.map((f) => (
              <button
                key={f.value}
                type="button"
                className={`${styles.filterBtn} ${aktif === f.value ? styles.filterBtnActive : ""}`}
                onClick={() => setAktif(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className="wrap">
          {featured && (
            <div className={styles.featuredGrid}>
              <NewsCard {...featured} size="featured" />
              <div className={styles.sideSlots}>
                {rest.slice(0, 3).map((n) => (
                  <NewsCard key={n.slug} {...n} size="compact" />
                ))}
              </div>
            </div>
          )}
          {rest.length > 3 && (
            <div className={styles.standardGrid}>
              {rest.slice(3).map((n) => (
                <NewsCard key={n.slug} {...n} size="standard" />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
