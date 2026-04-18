/**
 * /egitim — Eğitim Hub Landing Sayfası
 *
 * Server component. 6 kademe grid + programlar özeti.
 * Sanity entegrasyonu Faz 5'te; tüm veri kademeler.ts + programs.ts'den.
 *
 * Bölümler:
 * 1. Mini hero: eyebrow + H1 + lede
 * 2. Kademe grid: 6 kart (yaş aralığı + adı + açıklama + PhotoSlot + link)
 * 3. Programlar bölümü: ProgramsGrid (mevcut component)
 * 4. CtaBand
 */

import type { Metadata } from "next";
import Link from "next/link";
import { PhotoSlot } from "@/components/photo-slot";
import { CtaBand } from "@/components/sections/cta-band";
import { ProgramsGrid } from "@/components/sections/programs-grid";
import { Eyebrow } from "@/components/ui/eyebrow";
import { KADEMELER } from "@/data/kademeler";
import { PROGRAMS } from "@/data/programs";
import { cn } from "@/lib/cn";
import styles from "./egitim.module.css";

export const metadata: Metadata = {
  title: "Eğitim | Kocatürk Okulları",
  description:
    "Anaokulu'ndan Havacılık Lisesi'ne 6 kademe, 7 pedagoji programı. Kocatürk Okulları eğitim anlayışını keşfedin.",
};

const KADEME_SLOT_IDS: Record<string, string> = {
  anaokulu: "kademe_anaokulu",
  ilkokul: "kademe_ilkokul",
  ortaokul: "kademe_ortaokul",
  "anadolu-lisesi": "kademe_anadolu",
  "fen-lisesi": "kademe_fen",
  "havacilik-lisesi": "kademe_havacilik",
};

export default function EgitimPage() {
  const programCards = PROGRAMS.filter((p) => p.slug !== "havacilik").map((p) => ({
    icon: p.icon,
    name: p.name,
    shortDesc: p.shortDesc,
    href: p.href,
    featured: p.featured,
  }));

  return (
    <>
      {/* Mini Hero */}
      <section className={styles.hero}>
        <div className="wrap">
          <Eyebrow>6 Kademe · 7 Program</Eyebrow>
          <h1 className={styles.heroTitle}>Eğitim Yolculuğu</h1>
          <p className={styles.heroLede}>
            Anaokulu'ndan Havacılık Lisesi'ne, her kademe birbirine bağlı bir sürecin halkası.
            Kocatürk öğrencisi okul değil, eğitim yolculuğu yaşar.
          </p>
        </div>
      </section>

      {/* Kademe Grid */}
      <section className={styles.kademelerSection}>
        <div className="wrap">
          <Eyebrow>Kademeler</Eyebrow>
          <h2 className={styles.sectionTitle}>
            Hangi yaş,
            <br />
            <em>hangi okul?</em>
          </h2>
          <div className={styles.kademelerGrid}>
            {KADEMELER.map((kademe) => {
              const isHavacilik = kademe.slug === "havacilik-lisesi";
              return (
                <Link
                  key={kademe.slug}
                  href={isHavacilik ? "/egitim/havacilik-lisesi" : `/egitim/${kademe.slug}`}
                  className={cn(styles.kademeCard, isHavacilik && styles.kademeCardFeatured)}
                >
                  <div className={styles.kademeImageWrap}>
                    <PhotoSlot
                      slotId={KADEME_SLOT_IDS[kademe.slug] ?? `kademe_${kademe.slug}`}
                      aspectRatio="4:3"
                      category="GALLERY"
                      type="photo"
                      title={kademe.name}
                      description={`${kademe.name} — ${kademe.yasAraligi}`}
                    />
                  </div>
                  <div className={styles.kademeBody}>
                    <span className={styles.kademeYas}>{kademe.yasAraligi}</span>
                    <h3 className={styles.kademeName}>
                      {isHavacilik ? "✈ " : ""}
                      {kademe.name}
                    </h3>
                    <p className={styles.kademeDesc}>{kademe.description.split(".")[0]}.</p>
                    <span className={styles.kademeArrow}>
                      <i className="bx bx-right-arrow-alt" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programlar */}
      <ProgramsGrid
        eyebrow="Pedagoji Programlarımız"
        title={
          <>
            Markalanmış
            <br />
            <em>öğrenme modeli.</em>
          </>
        }
        programs={programCards}
      />

      <CtaBand
        eyebrow="Sonraki Adım"
        title={
          <>
            Çocuğunuza en uygun
            <br />
            kademeyi birlikte <em>belirleyelim.</em>
          </>
        }
        description="Ön kayıt formunu doldurun, eğitim danışmanımız sizi arayarak ihtiyacınıza en uygun kampüs ve kademeyi birlikte değerlendirsin."
        ctas={[
          { href: "/kayit/on-kayit", label: "Ön Kayıt Başvurusu", variant: "primary" },
          { href: "/iletisim", label: "Bize Ulaşın", variant: "outline-light" },
        ]}
      />
    </>
  );
}
