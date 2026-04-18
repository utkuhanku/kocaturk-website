import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/cta-band";
import { Eyebrow } from "@/components/ui/eyebrow";
import { MILESTONES } from "@/data/milestones";
import { cn } from "@/lib/cn";
import styles from "../kurumsal.module.css";

export const metadata: Metadata = {
  title: "Tarihçemiz | Kocatürk Okulları",
  description:
    "1998'den günümüze Kocatürk Okulları'nın büyüme hikâyesi. Önemli dönüm noktaları ve kilometre taşları.",
};

export default function TarihcePage() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className="wrap">
          <Eyebrow>Tarihçe</Eyebrow>
          <h1 className={styles.heroTitle}>
            1998'den bugüne
            <br />
            <em>büyüme hikâyesi.</em>
          </h1>
          <p className={styles.heroDesc}>
            Manisa Turgutlu'da 52 kişiyle başlayan yolculuğun kilometre taşları. Her yıl yeni bir
            adım, her adım daha büyük bir aile.
          </p>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="wrap">
          <nav className={styles.timeline} aria-label="Kocatürk Okulları tarihçesi">
            {MILESTONES.map((m) => (
              <div key={m.yil} className={cn(styles.timelineItem, m.onemli && styles.onemli)}>
                <span className={cn(styles.timelineYil, m.onemli && styles.onemli)}>{m.yil}</span>
                <div className={styles.timelineContent}>
                  <p className={styles.timelineBaslik}>{m.baslik}</p>
                  <p className={styles.timelineAciklama}>{m.aciklama}</p>
                </div>
              </div>
            ))}
          </nav>
        </div>
      </section>

      <CtaBand
        eyebrow="Sıradaki Bölüm"
        title={
          <>
            Hikâyenizin
            <br />
            <em>parçası olun.</em>
          </>
        }
        description="Kocatürk ailesine katılın — çocuğunuzun başarısı bu tarihin bir parçası olsun."
        ctas={[
          { href: "/kayit/on-kayit", label: "Ön Kayıt Başvurusu", variant: "primary" },
          { href: "/kurumsal/hakkimizda", label: "Hakkımızda", variant: "outline-light" },
        ]}
      />
    </>
  );
}
