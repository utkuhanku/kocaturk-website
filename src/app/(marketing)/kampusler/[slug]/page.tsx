/**
 * /kampusler/[slug] — Kampüs Detay Sayfası
 *
 * Server component (async). Sanity'den tek kampüs çeker;
 * yoksa src/data/campuses.ts fallback'ten bulur.
 * generateStaticParams: 5 kampüs SSG.
 *
 * Bölümler:
 * 1. Hero: dark-section, kampüs adı + badge + kademeler
 * 2. Bilgi grid: öğrenci, öğretmen, kademe, tesis sayısı
 * 3. Kademeler listesi
 * 4. Tesisler
 * 5. Müdür kartı
 * 6. İletişim + tek kampüs haritası
 * 7. CtaBand
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CampusMapbox } from "@/components/campus-mapbox";
import { NumberCell } from "@/components/patterns/number-cell";
import { PhotoSlot } from "@/components/photo-slot";
import { CtaBand } from "@/components/sections/cta-band";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CAMPUSES } from "@/data/campuses";
import { cn } from "@/lib/cn";
import { campusSlugsQuery, singleCampusQuery } from "@/lib/queries";
import { safeFetch } from "@/lib/sanity";
import styles from "./kampus-detay.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

interface SanityCampus {
  _id: string;
  name: string;
  slug: { current: string } | string;
  il: string;
  ilce: string;
  badge?: "ana" | "ikinci-ana";
  kademeler?: string[];
  ogrenciSayisi?: number;
  ogretmenSayisi?: number;
  adres?: string;
  telefon?: string;
  email?: string;
  mudur?: { isim?: string; pozisyon?: string };
  tesisler?: string[];
  hikaye?: string;
  koordinatlar?: { lat: number; lng: number };
}

export async function generateStaticParams() {
  const slugs = await safeFetch<Array<{ slug: string }>>(campusSlugsQuery);
  if (slugs && slugs.length > 0) return slugs;
  return CAMPUSES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const fallback = CAMPUSES.find((c) => c.slug === slug);
  const name = fallback?.name ?? "Kampüs";
  return {
    title: `${name} | Kocatürk Okulları`,
    description: `${name} hakkında bilgi alın. Kademeler, tesisler, iletişim ve kampüs haritası.`,
  };
}

export default async function KampusDetayPage({ params }: Props) {
  const { slug } = await params;

  const sanityData = await safeFetch<SanityCampus>(singleCampusQuery, { slug });

  const fallback = CAMPUSES.find((c) => c.slug === slug);

  if (!sanityData && !fallback) notFound();

  const campus = sanityData
    ? {
        slug,
        name: sanityData.name,
        il: sanityData.il,
        ilce: sanityData.ilce,
        badge: sanityData.badge,
        kademeler: sanityData.kademeler ?? [],
        ogrenciSayisi: sanityData.ogrenciSayisi ?? 0,
        ogretmenSayisi: sanityData.ogretmenSayisi ?? 0,
        adres: sanityData.adres ?? "",
        telefon: sanityData.telefon ?? "",
        email: sanityData.email ?? "",
        mudur: sanityData.mudur ?? { isim: "—", pozisyon: "Kampüs Müdürü" },
        tesisler: sanityData.tesisler ?? [],
        hikaye: typeof sanityData.hikaye === "string" ? sanityData.hikaye : "",
        koordinatlar: sanityData.koordinatlar ??
          fallback?.koordinatlar ?? { lat: 38.35, lng: 27.4 },
      }
    : fallback;

  if (!campus) notFound();

  const badgeLabel =
    campus.badge === "ana"
      ? "★ ANA KAMPÜS"
      : campus.badge === "ikinci-ana"
        ? "★ 2. ANA KAMPÜS"
        : null;

  const singleMapCampus = [
    {
      slug: campus.slug,
      name: campus.name,
      ilce: campus.ilce,
      il: campus.il,
      badge: campus.badge,
      kademeler: campus.kademeler,
      koordinatlar: campus.koordinatlar,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className={cn("dark-section", styles.hero)}>
        <div className="wrap">
          <div className={styles.heroInner}>
            <div>
              {badgeLabel && <span className={styles.badge}>{badgeLabel}</span>}
              <Eyebrow variant="light">
                {campus.ilce} · {campus.il}
              </Eyebrow>
              <h1 className={styles.heroTitle}>{campus.name}</h1>
              {campus.hikaye && <p className={styles.heroHikaye}>{campus.hikaye}</p>}
              <ul className={styles.kademelerList} aria-label="Kademeler">
                {campus.kademeler.map((k) => (
                  <li key={k} className={styles.kademeTag}>
                    {k}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.heroPhoto}>
              <PhotoSlot
                slotId={`campus-hero-${campus.slug}`}
                aspectRatio="4:3"
                category="CAMPUS"
                type="photo"
                title={campus.name}
                description={`${campus.ilce} kampüsü hero görseli`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bilgi Grid */}
      <section className={styles.statsSection}>
        <div className="wrap">
          <div className={styles.statsGrid}>
            <NumberCell
              number={campus.ogrenciSayisi || 0}
              label="ÖĞRENCİ"
              sublabel="Aktif kayıt"
              size="md"
            />
            <NumberCell
              number={campus.ogretmenSayisi || 0}
              label="ÖĞRETMEN"
              sublabel="Kadro"
              size="md"
            />
            <NumberCell
              number={campus.kademeler.length}
              label="KADEME"
              sublabel="Okul tipi"
              size="md"
            />
            <NumberCell
              number={campus.tesisler.length || 0}
              label="TESİS"
              sublabel="Donanım"
              size="md"
            />
          </div>
        </div>
      </section>

      {/* Kademeler */}
      {campus.kademeler.length > 0 && (
        <section className={styles.kademelerSection}>
          <div className="wrap">
            <Eyebrow>Kademeler</Eyebrow>
            <h2 className={styles.sectionTitle}>Bu kampüste hangi okullar var?</h2>
            <div className={styles.kademelerGrid}>
              {campus.kademeler.map((k) => (
                <div key={k} className={styles.kademeCard}>
                  <i className="bx bx-graduation" aria-hidden="true" />
                  <span className={styles.kademeCardName}>{k}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tesisler */}
      {campus.tesisler.length > 0 && (
        <section className={styles.tesislerSection}>
          <div className="wrap">
            <Eyebrow>Tesisler</Eyebrow>
            <h2 className={styles.sectionTitle}>Donanım ve imkânlar</h2>
            <ul className={styles.tesislerList}>
              {campus.tesisler.map((t) => (
                <li key={t} className={styles.tesisItem}>
                  <i className="bx bx-check-circle" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Müdür */}
      <section className={styles.mudurSection}>
        <div className="wrap">
          <div className={styles.mudurCard}>
            <div className={styles.mudurPhoto}>
              <PhotoSlot
                slotId={`campus-mudur-${campus.slug}`}
                aspectRatio="1:1"
                category="PORTRAIT"
                type="photo"
                title={campus.mudur.isim ?? "Müdür"}
                description="Kampüs Müdürü fotoğrafı"
              />
            </div>
            <div className={styles.mudurInfo}>
              <Eyebrow>Kampüs Müdürü</Eyebrow>
              <p className={styles.mudurIsim}>{campus.mudur.isim ?? "—"}</p>
              <p className={styles.mudurPozisyon}>{campus.mudur.pozisyon ?? "Kampüs Müdürü"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim + Harita */}
      <section className={styles.iletisimSection}>
        <div className="wrap">
          <Eyebrow>İletişim</Eyebrow>
          <h2 className={styles.sectionTitle}>Bize ulaşın</h2>
          <div className={styles.iletisimInner}>
            <div className={styles.iletisimInfo}>
              {campus.adres && (
                <div className={styles.iletisimRow}>
                  <i className="bx bx-map-pin" aria-hidden="true" />
                  <p>{campus.adres}</p>
                </div>
              )}
              {campus.telefon && (
                <div className={styles.iletisimRow}>
                  <i className="bx bx-phone" aria-hidden="true" />
                  <a href={`tel:${campus.telefon}`} className={styles.iletisimLink}>
                    {campus.telefon}
                  </a>
                </div>
              )}
              {campus.email && (
                <div className={styles.iletisimRow}>
                  <i className="bx bx-envelope" aria-hidden="true" />
                  <a href={`mailto:${campus.email}`} className={styles.iletisimLink}>
                    {campus.email}
                  </a>
                </div>
              )}
              <div className={styles.iletisimCta}>
                <Button variant="primary" href="/kayit/on-kayit">
                  Ön Kayıt Başvurusu
                </Button>
                <Button variant="outline" href="/iletisim">
                  İletişim Formu
                </Button>
              </div>
            </div>
            <div className={styles.iletisimMap}>
              <CampusMapbox campuses={singleMapCampus} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Sonraki Adım"
        title={
          <>
            Bu kampüsü
            <br />
            yerinde <em>görün.</em>
          </>
        }
        description="Ön kayıt formumuzu doldurun, size özel bir ziyaret randevusu ayarlayalım."
        ctas={[
          { href: "/kayit/on-kayit", label: "Ön Kayıt Başvurusu", variant: "primary" },
          { href: "/kampusler", label: "Tüm Kampüsler", variant: "outline-light" },
        ]}
      />
    </>
  );
}
