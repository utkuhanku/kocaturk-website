import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PhotoSlot } from "@/components/photo-slot";
import { CtaBand } from "@/components/sections/cta-band";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ACHIEVEMENTS } from "@/data/achievements";
import styles from "../basarilarimiz.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ACHIEVEMENTS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const basari = ACHIEVEMENTS.find((a) => a.slug === slug);
  if (!basari) return {};
  return {
    title: `${basari.title} | Başarılarımız — Kocatürk Okulları`,
    description: basari.kisaAciklama,
  };
}

const CATEGORY_LABELS: Record<string, string> = {
  uluslararasi: "Uluslararası",
  akademik: "Akademik",
  sportif: "Sportif",
  sanatsal: "Sanatsal",
};

export default async function BasariDetayPage({ params }: Props) {
  const { slug } = await params;
  const basari = ACHIEVEMENTS.find((a) => a.slug === slug);
  if (!basari) notFound();

  const formattedDate = new Date(basari.tarih).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <section className={styles.detaySection}>
        <div className="wrap">
          <div className={styles.detayInner}>
            <div className={styles.detayContent}>
              <Eyebrow>{CATEGORY_LABELS[basari.category] ?? basari.category}</Eyebrow>

              <div className={styles.detayMeta}>
                <span className={styles.detayMetaItem}>
                  <i className="bx bx-calendar" aria-hidden="true" />
                  {formattedDate}
                </span>
                <span className={styles.detayMetaItem}>
                  <i className="bx bx-map-pin" aria-hidden="true" />
                  {basari.yer}
                </span>
              </div>

              <h1 className={styles.detayTitle}>{basari.title}</h1>
              <p className={styles.detayDerece}>{basari.derece}</p>
              <p className={styles.detayAciklama}>{basari.uzunAciklama}</p>

              {basari.ogrenciler.length > 0 && (
                <div className={styles.detayOgrenciler}>
                  <span className={styles.detayOgrencilerBaslik}>Öğrenciler</span>
                  <ul className={styles.detayOgrencilerList}>
                    {basari.ogrenciler.map((o) => (
                      <li key={o} className={styles.detayOgrenciItem}>
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <Button variant="outline" href="/basarilarimiz">
                  <i className="bx bx-left-arrow-alt" aria-hidden="true" />
                  Tüm Başarılar
                </Button>
              </div>
            </div>

            <div className={styles.detaySide}>
              <PhotoSlot
                slotId={`basari-${basari.slug}`}
                aspectRatio="4:5"
                category="FEATURED"
                type="photo"
                title={basari.title}
                description={basari.kisaAciklama}
              />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Sıradaki Başarı"
        title={
          <>
            Çocuğunuz da
            <br />
            <em>bu listede olabilir.</em>
          </>
        }
        description="Kocatürk'ün başarı kültürü, her öğrencinin potansiyelini ortaya çıkarır."
        ctas={[
          { href: "/kayit/on-kayit", label: "Ön Kayıt Başvurusu", variant: "primary" },
          { href: "/basarilarimiz", label: "Tüm Başarılar", variant: "outline-light" },
        ]}
      />
    </>
  );
}
