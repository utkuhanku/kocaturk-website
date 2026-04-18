import type { Metadata } from "next";
import { PhotoSlot } from "@/components/photo-slot";
import { CtaBand } from "@/components/sections/cta-band";
import { ContentNote } from "@/components/ui/content-note";
import { Eyebrow } from "@/components/ui/eyebrow";
import { YONETIM } from "@/data/yonetim";
import styles from "../kurumsal.module.css";

export const metadata: Metadata = {
  title: "Yönetim Kadrosu | Kocatürk Okulları",
  description: "Kocatürk Okulları yönetim kadrosu. Kurucu Mustafa Kocatürk ve kampüs müdürleri.",
};

const kurucu = YONETIM.find((k) => k.kademe === "kurucu");
const ustYonetim = YONETIM.filter((k) => k.kademe === "ust-yonetim");
const kampusMudurleri = YONETIM.filter((k) => k.kademe === "kampus-muduru");

export default function YonetimPage() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className="wrap">
          <Eyebrow>Yönetim</Eyebrow>
          <h1 className={styles.heroTitle}>
            Kocatürk ailesini
            <br />
            <em>yönetenler.</em>
          </h1>
        </div>
      </section>

      {/* Kurucu */}
      {kurucu && (
        <section className={styles.sectionAlt}>
          <div className="wrap">
            <Eyebrow>Kurucu</Eyebrow>
            <div className={styles.kurucuCard}>
              <div className={styles.kurucuPhoto}>
                <PhotoSlot
                  slotId="kurucu-mustafa-kocaturk"
                  aspectRatio="4:5"
                  category="PORTRAIT"
                  type="photo"
                  title="Mustafa Kocatürk"
                  description="Mustafa Kocatürk — Kocatürk Okulları kurucusu, vesikalık/portre"
                />
              </div>
              <div className={styles.kurucuInfo}>
                <div>
                  <span className={styles.kurucuPozisyon}>{kurucu.pozisyon}</span>
                  <p className={styles.kurucuIsim}>{kurucu.isim}</p>
                </div>
                {kurucu.kisaBio && <p className={styles.felsefeBody}>{kurucu.kisaBio}</p>}
                {kurucu.alinti && (
                  <blockquote className={styles.kurucuAlinti}>"{kurucu.alinti}"</blockquote>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Üst Yönetim */}
      <section className={styles.section}>
        <div className="wrap">
          <Eyebrow>Üst Yönetim</Eyebrow>
          <h2 className={styles.sectionTitle}>
            Yönetim <em>kadrosu</em>
          </h2>
          <ContentNote
            type="data"
            variant="block"
            description="Üst yönetim isimleri Sanity CMS'ten gelecek. Bilgiler güncellendikçe bu alan otomatik yenilenir."
          />
          <div className={styles.kadroGrid} style={{ marginTop: "var(--space-8)" }}>
            {ustYonetim.map((k) => (
              <div key={k.slug} className={styles.kadroCard}>
                <span className={styles.kadroPozisyon}>{k.pozisyon}</span>
                <p className={styles.kadroIsim}>{k.isim}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kampüs Müdürleri */}
      <section className={styles.sectionAlt}>
        <div className="wrap">
          <Eyebrow>Kampüs Müdürleri</Eyebrow>
          <h2 className={styles.sectionTitle}>
            Her kampüste
            <br />
            <em>deneyimli liderlik.</em>
          </h2>
          <ContentNote
            type="data"
            variant="block"
            description="Kampüs müdürü isimleri Sanity CMS'ten gelecek. Bilgiler güncellendikçe bu alan otomatik yenilenir."
          />
          <div className={styles.kadroGrid} style={{ marginTop: "var(--space-8)" }}>
            {kampusMudurleri.map((k) => (
              <div key={k.slug} className={styles.kadroCard}>
                <span className={styles.kadroPozisyon}>{k.pozisyon}</span>
                <p className={styles.kadroIsim}>{k.isim}</p>
                {k.kampus && <p className={styles.kadroKampus}>{k.kampus}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="İletişim"
        title={
          <>
            Yönetimle
            <br />
            <em>iletişime geçin.</em>
          </>
        }
        description="Kurumsal iş birlikleri, medya talepleri veya genel sorularınız için bize ulaşın."
        ctas={[
          { href: "/iletisim", label: "İletişim Formu", variant: "primary" },
          { href: "/kampusler", label: "Kampüs Müdürlükleri", variant: "outline-light" },
        ]}
      />
    </>
  );
}
