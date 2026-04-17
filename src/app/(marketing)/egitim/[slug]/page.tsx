/**
 * /egitim/[slug] — Kademe Detay Şablonu
 *
 * Server component (async). kademeler.ts'den kademe verisi çeker.
 * generateStaticParams: 6 kademe slug.
 * Havacılık Lisesi slug'ı bu template'den de erişilebilir
 * ama /egitim/havacilik-lisesi daha zengin özel sayfası vardır.
 *
 * Bölümler:
 * 1. Hero: dark-section, kademe adı + yaş aralığı + açıklama
 * 2. Highlights: 4-6 öne çıkan özellik grid
 * 3. Bu kademedeki programlar: ProgramCard grid
 * 4. Bu kademeyi sunan kampüsler: CampusCard grid
 * 5. CtaBand
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CampusCard } from "@/components/patterns/campus-card";
import { ProgramCard } from "@/components/patterns/program-card";
import { PhotoSlot } from "@/components/photo-slot";
import { CtaBand } from "@/components/sections/cta-band";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CAMPUSES } from "@/data/campuses";
import { KADEMELER } from "@/data/kademeler";
import { PROGRAMS } from "@/data/programs";
import { cn } from "@/lib/cn";
import styles from "./kademe.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return KADEMELER.map((k) => ({ slug: k.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const kademe = KADEMELER.find((k) => k.slug === slug);
  if (!kademe) return { title: "Kocatürk Okulları" };
  return {
    title: `${kademe.name} | Kocatürk Okulları`,
    description: `${kademe.name} (${kademe.yasAraligi}) — ${kademe.description}`,
  };
}

export default async function KademeDetayPage({ params }: Props) {
  const { slug } = await params;
  const kademe = KADEMELER.find((k) => k.slug === slug);
  if (!kademe) notFound();

  const programs = PROGRAMS.filter((p) => kademe.programs.includes(p.slug));
  const kampusler = CAMPUSES.filter((c) => kademe.kampusler.includes(c.slug));

  const isHavacilik = slug === "havacilik-lisesi";

  return (
    <>
      {/* Hero */}
      <section className={cn("dark-section", styles.hero)}>
        <div className="wrap">
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <Eyebrow variant="light">{kademe.yasAraligi}</Eyebrow>
              <h1 className={styles.heroTitle}>
                {isHavacilik ? "✈ " : ""}
                {kademe.name}
              </h1>
              <p className={styles.heroDesc}>{kademe.description}</p>
              <div className={styles.heroCtas}>
                <Button variant="primary" href={kademe.ctaHref}>
                  {kademe.ctaLabel}
                </Button>
                <Button variant="outline-light" href="/egitim">
                  Tüm Kademeler
                </Button>
              </div>
            </div>
            <div className={styles.heroPhoto}>
              <PhotoSlot
                slotId={`kademe-hero-${kademe.slug}`}
                aspectRatio="4:3"
                category="GALLERY"
                type="photo"
                title={kademe.name}
                description={`${kademe.name} hero görseli — ${kademe.yasAraligi}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className={styles.highlightsSection}>
        <div className="wrap">
          <Eyebrow>Öne Çıkanlar</Eyebrow>
          <h2 className={styles.sectionTitle}>{kademe.name}'nda neler var?</h2>
          <div className={styles.highlightsGrid}>
            {kademe.highlights.map((item, index) => (
              <div key={item} className={styles.highlightCard}>
                <span className={styles.highlightNumber}>{String(index + 1).padStart(2, "0")}</span>
                <p className={styles.highlightText}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bu kademedeki programlar */}
      {programs.length > 0 && (
        <section className={styles.programsSection}>
          <div className="wrap">
            <Eyebrow>Pedagoji Programları</Eyebrow>
            <h2 className={styles.sectionTitle}>Bu kademede uygulanan programlar</h2>
            <div className={styles.programsGrid}>
              {programs.map((p) => (
                <ProgramCard
                  key={p.slug}
                  icon={p.icon}
                  name={p.name}
                  shortDesc={p.shortDesc}
                  ageRange={p.yasAraligi}
                  href={p.href}
                  featured={p.featured}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bu kademeyi sunan kampüsler */}
      {kampusler.length > 0 && (
        <section className={styles.kampuslerSection}>
          <div className="wrap">
            <Eyebrow>Kampüsler</Eyebrow>
            <h2 className={styles.sectionTitle}>{kademe.name} sunan kampüslerimiz</h2>
            <div className={styles.kampuslerGrid}>
              {kampusler.map((c) => (
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
        </section>
      )}

      <CtaBand
        eyebrow={kademe.name}
        title={
          <>
            {kademe.ctaLabel.replace(" Ön Kayıt", "").replace(" Başvuru", "")}
            <br />
            için başvurun.
          </>
        }
        description={`${kademe.yasAraligi} aralığındaki çocuğunuz için en uygun kampüsü birlikte belirleyelim.`}
        ctas={[
          { href: kademe.ctaHref, label: kademe.ctaLabel, variant: "primary" },
          { href: "/kampusler", label: "Kampüsleri İncele", variant: "outline-light" },
        ]}
      />
    </>
  );
}
