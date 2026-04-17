/**
 * /egitim/programlar/[slug] — Program Detay Şablonu
 *
 * Server component (async). programs.ts'den program verisi çeker.
 * generateStaticParams: robotik-kodlama HARİÇ tüm programlar.
 * (robotik-kodlama kendi özel sayfasına sahip)
 * Havacılık programı slug'ı da HARİÇ — /egitim/havacilik-lisesi'ne yönlendirir.
 *
 * Bölümler:
 * 1. Hero mini: program adı + ikon + açıklama
 * 2. Detay: longDesc + highlights listesi
 * 3. Kademeler: bu programın uygulandığı kademeler
 * 4. CtaBand
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/sections/cta-band";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PROGRAMS } from "@/data/programs";
import { cn } from "@/lib/cn";
import styles from "./program-detay.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

// robotik-kodlama ve havacilik kendi özel sayfalarına sahip — bu şablondan HARİÇ
const EXCLUDED_SLUGS = ["robotik-kodlama", "havacilik"];

export function generateStaticParams() {
  return PROGRAMS.filter((p) => !EXCLUDED_SLUGS.includes(p.slug)).map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = PROGRAMS.find((p) => p.slug === slug);
  if (!program) return { title: "Kocatürk Okulları" };
  return {
    title: `${program.name} | Kocatürk Okulları`,
    description: program.longDesc.slice(0, 155),
  };
}

export default async function ProgramDetayPage({ params }: Props) {
  const { slug } = await params;
  const program = PROGRAMS.find((p) => p.slug === slug);
  if (!program) notFound();

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="wrap">
          <div className={styles.heroInner}>
            <div className={styles.heroIkonWrap} aria-hidden="true">
              <i className={cn(program.icon, styles.heroIkon)} />
            </div>
            <div className={styles.heroContent}>
              <Eyebrow>Pedagoji Programı</Eyebrow>
              <h1 className={styles.heroTitle}>{program.name}</h1>
              <p className={styles.heroDesc}>{program.shortDesc}</p>
              <p className={styles.heroYas}>{program.yasAraligi}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detay */}
      <section className={styles.detaySection}>
        <div className="wrap">
          <div className={styles.detayInner}>
            {/* Sol: longDesc */}
            <div className={styles.detayMetin}>
              <Eyebrow>Program Hakkında</Eyebrow>
              <h2 className={styles.sectionTitle}>{program.name} nedir?</h2>
              <p className={styles.longDesc}>{program.longDesc}</p>
            </div>

            {/* Sağ: Highlights */}
            <div className={styles.detayHighlights}>
              <h3 className={styles.highlightsBaslik}>Öne çıkan özellikler</h3>
              <ul className={styles.highlightsList}>
                {program.highlights.map((item) => (
                  <li key={item} className={styles.highlightItem}>
                    <i className="bx bx-check-circle" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Kademeler */}
      <section className={styles.kademelerSection}>
        <div className="wrap">
          <Eyebrow>Uygulama Kapsamı</Eyebrow>
          <h2 className={styles.sectionTitle}>Hangi kademelerde uygulanıyor?</h2>
          <div className={styles.kademelerList}>
            {program.kademeler.map((kademe) => (
              <span key={kademe} className={styles.kademeTag}>
                {kademe}
              </span>
            ))}
          </div>
          <p className={styles.kademelerAlt}>
            Yaş aralığı: <strong>{program.yasAraligi}</strong>
          </p>
        </div>
      </section>

      <CtaBand
        eyebrow={program.name}
        title={
          <>
            {program.name} programına
            <br />
            <em>kayıt olun.</em>
          </>
        }
        description={`${program.yasAraligi} aralığındaki çocuğunuz için ${program.name} programı hakkında bilgi almak ister misiniz?`}
        ctas={[
          { href: "/kayit/on-kayit", label: "Ön Kayıt Başvurusu", variant: "primary" },
          { href: "/egitim/programlar", label: "Tüm Programlar", variant: "outline-light" },
        ]}
      />
    </>
  );
}
