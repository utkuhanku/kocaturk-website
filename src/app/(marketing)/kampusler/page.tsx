/**
 * /kampusler — Kampüs Listesi
 *
 * Server component (async). Sanity'den kampüs listesi çeker;
 * bağlantı yoksa src/data/campuses.ts fallback data kullanır.
 *
 * Bölümler:
 * 1. Mini hero: eyebrow + H1 + lede
 * 2. Harita tam genişlik: CampusMapbox
 * 3. Kampüs grid: ilçeye göre gruplanmış CampusCard'lar
 * 4. CtaBand
 */

import type { Metadata } from "next";
import { CampusMapbox } from "@/components/campus-mapbox";
import { CampusCard } from "@/components/patterns/campus-card";
import { CtaBand } from "@/components/sections/cta-band";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CAMPUSES, type CampusData } from "@/data/campuses";
import { allCampusesQuery } from "@/lib/queries";
import { safeFetch } from "@/lib/sanity";
import styles from "./kampusler.module.css";

export const metadata: Metadata = {
  title: "Kampüslerimiz | Kocatürk Okulları",
  description:
    "Manisa ve İzmir'de 5 kampüs, 4 ilçe, 6 kademe. Size en yakın Kocatürk kampüsünü bulun.",
};

interface SanityCampus {
  _id: string;
  name: string;
  slug: { current: string } | string;
  il: string;
  ilce: string;
  badge?: "ana" | "ikinci-ana";
  kademeler: string[];
  ogrenciSayisi?: number;
  ogretmenSayisi?: number;
  koordinatlar?: { lat: number; lng: number };
  adres?: string;
  telefon?: string;
}

function resolveSlug(slug: { current: string } | string): string {
  return typeof slug === "string" ? slug : slug.current;
}

export default async function KampuslerPage() {
  const sanityCampuses = await safeFetch<SanityCampus[]>(allCampusesQuery);

  const campuses: CampusData[] =
    sanityCampuses && sanityCampuses.length > 0
      ? sanityCampuses.map((c) => ({
          slug: resolveSlug(c.slug),
          name: c.name,
          il: c.il,
          ilce: c.ilce,
          badge: c.badge,
          kademeler: c.kademeler ?? [],
          ogrenciSayisi: c.ogrenciSayisi ?? 0,
          ogretmenSayisi: c.ogretmenSayisi ?? 0,
          koordinatlar: c.koordinatlar ?? { lat: 38.35, lng: 27.4 },
          adres: c.adres ?? "",
          telefon: c.telefon ?? "",
          email: "",
          mudur: { isim: "—", pozisyon: "Kampüs Müdürü" },
          tesisler: [],
          hikaye: "",
        }))
      : CAMPUSES;

  const mapCampuses = campuses.map((c) => ({
    slug: c.slug,
    name: c.name,
    ilce: c.ilce,
    il: c.il,
    badge: c.badge,
    kademeler: c.kademeler,
    koordinatlar: c.koordinatlar,
  }));

  // İlçeye göre grupla
  const manisa = campuses.filter((c) => c.il === "Manisa");
  const izmir = campuses.filter((c) => c.il === "İzmir");

  return (
    <>
      {/* Mini Hero */}
      <section className={styles.hero}>
        <div className="wrap">
          <Eyebrow>5 Kampüs · 4 İlçe · Ege Bölgesi</Eyebrow>
          <h1 className={styles.heroTitle}>Kampüslerimiz</h1>
          <p className={styles.heroLede}>
            1998'den bu yana Ege'nin dört ilçesinde büyüyen bir eğitim ağı. Anaokulu'ndan Havacılık
            Lisesi'ne, size en yakın kampüsü haritada keşfedin.
          </p>
        </div>
      </section>

      {/* Harita */}
      <section className={styles.mapSection}>
        <div className="wrap">
          <CampusMapbox campuses={mapCampuses} className={styles.mapFull} />
        </div>
      </section>

      {/* Kampüs Grid */}
      <section className={styles.gridSection}>
        <div className="wrap">
          {manisa.length > 0 && (
            <div className={styles.group}>
              <h2 className={styles.groupTitle}>Manisa</h2>
              <div className={styles.grid}>
                {manisa.map((c) => (
                  <CampusCard
                    key={c.slug}
                    slug={c.slug}
                    name={c.name}
                    ilce={c.ilce}
                    il={c.il}
                    badge={c.badge}
                    kademeler={c.kademeler}
                    studentCount={c.ogrenciSayisi || undefined}
                    href={`/kampusler/${c.slug}`}
                  />
                ))}
              </div>
            </div>
          )}

          {izmir.length > 0 && (
            <div className={styles.group}>
              <h2 className={styles.groupTitle}>İzmir</h2>
              <div className={styles.grid}>
                {izmir.map((c) => (
                  <CampusCard
                    key={c.slug}
                    slug={c.slug}
                    name={c.name}
                    ilce={c.ilce}
                    il={c.il}
                    badge={c.badge}
                    kademeler={c.kademeler}
                    studentCount={c.ogrenciSayisi || undefined}
                    href={`/kampusler/${c.slug}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CtaBand
        eyebrow="Kampüs Ziyareti"
        title={
          <>
            Yerinde görmek
            <br />
            her şeyi <em>değiştirir.</em>
          </>
        }
        description="Ön kayıt formunu doldurun, size en yakın kampüsten bir günlük ziyaret randevusu ayarlayalım."
        ctas={[
          { href: "/kayit/on-kayit", label: "Ön Kayıt Başvurusu", variant: "primary" },
          { href: "/iletisim", label: "Bize Ulaşın", variant: "outline-light" },
        ]}
      />
    </>
  );
}
