import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ContentNote } from "@/components/ui/content-note";
import { Eyebrow } from "@/components/ui/eyebrow";
import styles from "../kayit.module.css";

export const metadata: Metadata = {
  title: "Bursluluk Sınavı | Kocatürk Okulları",
  description:
    "Kocatürk Okulları bursluluk sınavı başvuru şartları, burs oranları ve sınav takvimi.",
};

const BURSLAR = [
  {
    title: "%100 Tam Burs",
    desc: "Sınavda en yüksek puan alan öğrencilere tam burs. Tüm eğitim ücreti karşılanır.",
  },
  {
    title: "%75 Burs",
    desc: "Sınavda üst dilimde yer alan başarılı öğrencilere yönelik burs imkânı.",
  },
  {
    title: "%50 Burs",
    desc: "Orta-üst dilimde yer alan öğrenciler için yarı burs uygulaması.",
  },
  {
    title: "%25 Burs",
    desc: "Belirlenen puanın üzerindeki öğrencilere kısmi burs desteği.",
  },
  {
    title: "Kardeş İndirimi",
    desc: "Aynı anda iki veya daha fazla kardeşin kayıt olması durumunda ek indirim uygulanır.",
  },
  {
    title: "İdareci / Öğretmen Çocuğu",
    desc: "Milli Eğitim Bakanlığı kadrosundaki personelin çocukları için özel indirim.",
  },
];

export default function BurslulukPage() {
  return (
    <section className={styles.burslulukSection}>
      <div className="wrap">
        <Eyebrow>Kayıt</Eyebrow>
        <h1 className={styles.sectionTitle}>Bursluluk Sınavı</h1>

        <ContentNote
          type="data"
          variant="block"
          description="Bursluluk sınavı tarihleri ve başvuru şartları — güncel bilgi için lütfen kampüsünüzle iletişime geçin veya ön kayıt formunu doldurun."
        />

        <div className={styles.burslulukGrid}>
          {BURSLAR.map((burs) => (
            <div key={burs.title} className={styles.burslulukCard}>
              <span className={styles.burslulukCardTitle}>{burs.title}</span>
              <p className={styles.burslulukCardDesc}>{burs.desc}</p>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "var(--space-12)",
            display: "flex",
            gap: "var(--space-4)",
            flexWrap: "wrap",
          }}
        >
          <Button href="/kayit/on-kayit" variant="primary">
            Ön Kayıt Başvurusu
          </Button>
          <Button href="/iletisim" variant="outline">
            Bilgi Al
          </Button>
        </div>
      </div>
    </section>
  );
}
