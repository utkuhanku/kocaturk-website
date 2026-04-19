import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/cta-band";
import { ContentNote } from "@/components/ui/content-note";
import { Eyebrow } from "@/components/ui/eyebrow";
import styles from "./kampus-yasami.module.css";

export const metadata: Metadata = {
  title: "Kampüs Yaşamı",
  description:
    "Kocatürk Okulları'nda ders dışı hayat — kulüpler, etkinlikler, spor, sanat ve sosyal sorumluluk projeleri.",
};

const KARTLAR = [
  {
    icon: "bx bx-trophy",
    baslik: "Kulüpler",
    aciklama:
      "Robotik, satranç, münazara, fotoğrafçılık ve daha fazlası. Her öğrencinin ilgi alanına göre etkinlik.",
  },
  {
    icon: "bx bx-calendar-event",
    baslik: "Etkinlikler",
    aciklama:
      "Yıl boyu düzenlenen bilim fuarları, tiyatro gösterileri, mezuniyet törenleri ve kültürel şenlikler.",
  },
  {
    icon: "bx bx-heart",
    baslik: "Sosyal Sorumluluk",
    aciklama:
      "Bağış kampanyaları, çevre projeleri, topluma katkı etkinlikleri ve gönüllülük faaliyetleri.",
  },
  {
    icon: "bx bx-run",
    baslik: "Spor",
    aciklama:
      "Futbol, basketbol, voleybol, yüzme ve atletizm. İlçe ve il turnuvalarında aktif katılım.",
  },
  {
    icon: "bx bx-palette",
    baslik: "Sanat & Kültür",
    aciklama:
      "Resim atölyesi, müzik odası, drama kulübü ve yaratıcı yazarlık. Her öğrenciye bir sahne.",
  },
  {
    icon: "bx bx-group",
    baslik: "Mezunlar",
    aciklama: "Kocatürk mezunlar ağı — kariyer mentorluk programı, buluşmalar ve staj fırsatları.",
  },
];

export default function KampusYasamiPage() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className="wrap">
          <Eyebrow>Kampüs Yaşamı</Eyebrow>
          <h1 className={styles.heroTitle}>
            Ders zilinden
            <br />
            <em>sonra.</em>
          </h1>
          <p className={styles.heroLede}>
            Kocatürk'te eğitim sınıf duvarlarıyla sınırlı değil. Kulüplerden sahaya, atölyelerden
            sahneye — öğrencilerimiz ders dışında da büyür.
          </p>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className="wrap">
          <ContentNote
            type="data"
            variant="block"
            description="Kampüs yaşamı içerikleri — kulüp listesi, etkinlik takvimi ve fotoğraf galerileri Faz 8'de Sanity CMS'ten çekilecek."
          />
          <div className={styles.grid}>
            {KARTLAR.map((kart) => (
              <div key={kart.baslik} className={styles.card}>
                <i className={`${kart.icon} ${styles.cardIcon}`} aria-hidden="true" />
                <h2 className={styles.cardTitle}>{kart.baslik}</h2>
                <ContentNote
                  type="text"
                  variant="inline"
                  description={`${kart.baslik} içeriği — ${kart.aciklama}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Kampüsü Keşfet"
        title={
          <>
            Çocuğunuz burada
            <br />
            <em>evinde hissedecek.</em>
          </>
        }
        description="Kampüs ziyareti ayarlayın, öğrencilerimizle tanışın, kulüpleri ve olanakları yerinde görün."
        ctas={[
          { href: "/kayit/on-kayit", label: "Ön Kayıt Başvurusu", variant: "primary" },
          { href: "/kampusler", label: "Kampüsleri İncele", variant: "outline-light" },
        ]}
      />
    </>
  );
}
