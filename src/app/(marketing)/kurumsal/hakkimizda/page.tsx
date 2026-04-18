import type { Metadata } from "next";
import { Pillar } from "@/components/patterns/pillar";
import { PhotoSlot } from "@/components/photo-slot";
import { CtaBand } from "@/components/sections/cta-band";
import { Eyebrow } from "@/components/ui/eyebrow";
import styles from "../kurumsal.module.css";

export const metadata: Metadata = {
  title: "Hakkımızda | Kocatürk Okulları",
  description:
    "1998'de Manisa Turgutlu'da 52 kişiyle başlayan Kocatürk Okulları'nın hikâyesi. Dört ilçede beş kampüs, 4.000+ öğrenci.",
};

const PILLARLAR = [
  {
    number: "01",
    title: (
      <>
        Çeyrek asırlık <em>buralılık</em>
      </>
    ),
    body: "1998'den bu yana Ege'de, aynı topraklarda, aynı değerlerle. Kocatürk, büyüdükçe yerelliğinden uzaklaşmadı — aksine, her kampüsü o ilçenin çocuklarına ev oldu.",
    link: { href: "/kurumsal/tarihce", label: "Tarihçemiz" },
  },
  {
    number: "02",
    title: (
      <>
        Anaokulundan <em>Havacılık</em> Lisesi'ne
      </>
    ),
    body: "Anaokulu, ilkokul, ortaokul, Anadolu Lisesi, Fen Lisesi ve Havacılık Lisesi. Bir ailede çocuğun tüm eğitim yolculuğu tek çatı altında tamamlanabiliyor.",
    link: { href: "/kampusler", label: "Kampüsler" },
  },
  {
    number: "03",
    title: (
      <>
        Roma'dan <em>İngiltere'ye</em> uzanan ufuk
      </>
    ),
    body: "eTwinning Avrupa projeleri, İngiltere Yaz Okulu ve 2024 Roma Robot Olimpiyatı'nda dünya derecesi. Kocatürk öğrencisi yerel kök, küresel kanat ile yetişiyor.",
    link: { href: "/egitim/yurtdisi", label: "Yurtdışı Eğitim" },
  },
];

export default function HakkimizdaPage() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className="wrap">
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <Eyebrow>Hakkımızda</Eyebrow>
              <h1 className={styles.heroTitle}>
                52 kişiyle başladı,
                <br />
                <em>4.000'e ulaştı.</em>
              </h1>
              <p className={styles.heroDesc}>
                1998'de Mustafa Kocatürk öncülüğünde Manisa Turgutlu'da kapılarını açan okul, bugün
                İzmir ve Manisa'da dört ilçeye yayılan bir eğitim ekosistemine dönüştü.
              </p>
            </div>
            <div className={styles.heroPhoto}>
              <PhotoSlot
                slotId="hakkimizda-hero"
                aspectRatio="4:3"
                category="CAMPUS"
                type="photo"
                title="Kocatürk Okulları"
                description="Turgutlu ana kampüs — kuruluş yıllarından veya günümüzden hava fotoğrafı"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="wrap">
          <Eyebrow>Hikâyemiz</Eyebrow>
          <h2 className={styles.sectionTitle}>
            Bir ailenin
            <br />
            <em>eğitim yolculuğu.</em>
          </h2>
          <div className={styles.felsefeGrid}>
            <div className={styles.felsefeContent}>
              <p className={styles.felsefeBody}>
                Kocatürk Okulları, 1998 yılında Manisa Turgutlu'da Mustafa Kocatürk tarafından
                kuruldu. İlk yıl 52 öğrenciyle açılan okul, kaliteli eğitimin sadece büyük şehirlere
                özgü olmadığını kanıtlamak için yola çıktı.
              </p>
              <p className={styles.felsefeBody}>
                İlk yılların ardından büyüme ivmesi Turgutlu sınırlarını aştı. İzmir'in Gaziemir,
                Karabağlar, Kemalpaşa ve Tire ilçelerine açılan kampüslerle Kocatürk, Ege'nin çok
                kampüslü eğitim ağına dönüştü.
              </p>
              <p className={styles.felsefeBody}>
                Bugün anaokulundan Havacılık Lisesi'ne uzanan altı kademe, yedi pedagoji programı ve
                4.000'den fazla öğrenciyle Kocatürk, Ege'nin eğitim omurgasını oluşturmaya devam
                ediyor.
              </p>
            </div>
            <div>
              <PhotoSlot
                slotId="hakkimizda-hikaye"
                aspectRatio="4:5"
                category="CAMPUS"
                type="photo"
                title="Kocatürk Hikâyesi"
                description="Okul koridoru veya sınıf içi — öğrencilerle birlikte"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="wrap">
          <Eyebrow>Üç Temel Güç</Eyebrow>
          <h2 className={styles.sectionTitle}>
            Bizi biz yapan
            <br />
            <em>üç sütun.</em>
          </h2>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "var(--space-8)" }}
          >
            {PILLARLAR.map((p) => (
              <Pillar
                key={p.number}
                number={p.number}
                title={p.title}
                body={p.body}
                link={p.link}
                variant="light"
              />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Ziyaret"
        title={
          <>
            Sizi bekliyoruz,
            <br />
            <em>kapılarımız açık.</em>
          </>
        }
        description="Size en yakın kampüsü ziyaret edin, Kocatürk ailesini yakından tanıyın."
        ctas={[
          { href: "/kampusler", label: "Kampüs Seçin", variant: "primary" },
          { href: "/kayit/on-kayit", label: "Ön Kayıt", variant: "outline-light" },
        ]}
      />
    </>
  );
}
