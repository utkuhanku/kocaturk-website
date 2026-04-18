"use client";

import { useState } from "react";
import { AchievementCard } from "@/components/patterns/achievement-card";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ACHIEVEMENTS } from "@/data/achievements";
import { cn } from "@/lib/cn";
import styles from "./basarilarimiz.module.css";

type FilterCategory = "tumu" | "uluslararasi" | "akademik" | "sportif" | "sanatsal";

const FILTERS: { value: FilterCategory; label: string }[] = [
  { value: "tumu", label: "Tümü" },
  { value: "uluslararasi", label: "Uluslararası" },
  { value: "akademik", label: "Akademik" },
  { value: "sportif", label: "Sportif" },
  { value: "sanatsal", label: "Sanatsal" },
];

export default function BasarilarimizPage() {
  const [aktifFiltre, setAktifFiltre] = useState<FilterCategory>("tumu");

  const filtreliBasarilar =
    aktifFiltre === "tumu" ? ACHIEVEMENTS : ACHIEVEMENTS.filter((a) => a.category === aktifFiltre);

  return (
    <section className={styles.heroSection}>
      <div className="wrap">
        <Eyebrow>Başarılarımız</Eyebrow>
        <h1 className={styles.heroTitle}>
          Her başarı bir
          <br />
          <em>Kocatürk hikâyesi.</em>
        </h1>
        <p className={styles.heroDesc}>
          Uluslararası robot olimpiyatlarından Türkiye birinciliklere, Avrupa proje ödüllerinden
          ilçe şampiyonluklarına — öğrencilerimizin kazandığı her derece bu sayfada.
        </p>

        <div className={styles.filterBar}>
          {FILTERS.map((f) => (
            <button
              key={f.value}
              type="button"
              className={cn(styles.filterBtn, aktifFiltre === f.value && styles.filterBtnActive)}
              onClick={() => setAktifFiltre(f.value)}
              aria-pressed={aktifFiltre === f.value}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className={styles.achievementsGrid}>
          {filtreliBasarilar.length > 0 ? (
            filtreliBasarilar.map((b) => (
              <AchievementCard
                key={b.slug}
                category={b.category}
                title={b.title}
                studentName={b.ogrenciler.length > 0 ? b.ogrenciler.join(", ") : undefined}
                date={b.tarih}
                location={b.yer}
                position={b.derece}
                href={`/basarilarimiz/${b.slug}`}
                featured={b.featured}
              />
            ))
          ) : (
            <p className={styles.emptyState}>Bu kategoride henüz başarı kaydı bulunmuyor.</p>
          )}
        </div>
      </div>
    </section>
  );
}
