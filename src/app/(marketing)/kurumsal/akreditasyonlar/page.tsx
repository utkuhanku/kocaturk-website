import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/cta-band";
import { ContentNote } from "@/components/ui/content-note";
import { Eyebrow } from "@/components/ui/eyebrow";
import styles from "../kurumsal.module.css";

export const metadata: Metadata = {
  title: "Akreditasyonlar | Kocatürk Okulları",
  description:
    "Kocatürk Okulları ulusal ve uluslararası akreditasyonları, sertifikaları ve ödülleri.",
};

const AKREDITASYONLAR = [
  {
    ikon: "bx bx-buildings",
    baslik: "MEB Onaylı Özel Okul",
    kurum: "Millî Eğitim Bakanlığı",
    aciklama:
      "Tüm kampüslerimiz Türkiye Millî Eğitim Bakanlığı onaylı özel okul statüsünde faaliyet göstermekte olup devlet müfredatını eksiksiz uygulamaktadır.",
  },
  {
    ikon: "bx bx-award",
    baslik: "eTwinning Avrupa Kalite Etiketi",
    kurum: "Avrupa Komisyonu",
    aciklama:
      "İspanya, Yunanistan ve İtalya ile yürütülen eTwinning ortak projeleri, Avrupa Komisyonu'nun Kalite Etiketi'ne layık görüldü.",
  },
  {
    ikon: "bx bx-code-alt",
    baslik: "Code Week 4 All Sertifikası",
    kurum: "Avrupa Code Week",
    aciklama:
      "Öğretmenimiz Sinem Satıcı koordinatörlüğünde yürütülen Code Week 4 All etkinliği Avrupa çapında tanınan Code Week sertifikası aldı.",
  },
  {
    ikon: "bx bx-trophy",
    baslik: "Fibonacci Uluslararası Robot Olimpiyatı",
    kurum: "Fibonacci Organizasyonu",
    aciklama:
      "2024 Roma Fibonacci International Robot Olympiad'da 4 kategoride dünya derecesi. Lego Sumo 1 kg ve Yapay Zekâ Şarkı kategorilerinde Dünya 1.si.",
  },
  {
    ikon: "bx bx-plane",
    baslik: "SHGM Onaylı Havacılık İçerikleri",
    kurum: "Sivil Havacılık Genel Müdürlüğü",
    aciklama:
      "Havacılık Lisesi müfredat içerikleri SHGM onay süreçlerine uygun olarak hazırlanmış; uçuş teorisi ve simülatör uygulamaları standartlara göre şekillendirilmiştir.",
  },
  {
    ikon: "bx bx-shield-quarter",
    baslik: "TÜBİTAK Proje Onayları",
    kurum: "TÜBİTAK",
    aciklama:
      "STEM ve Fen Lisesi programları kapsamında öğrencilerimizin TÜBİTAK 2204-A proje yarışmasına katılımı desteklenmekte ve onaylı proje altyapısı sunulmaktadır.",
  },
];

export default function AkreditasyonlarPage() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className="wrap">
          <Eyebrow>Akreditasyonlar</Eyebrow>
          <h1 className={styles.heroTitle}>
            Kalitemizi
            <br />
            <em>belgeleyen kurumlar.</em>
          </h1>
          <p className={styles.heroDesc}>
            Ulusal ve uluslararası kuruluşların tanıdığı sertifikalar, ödüller ve akreditasyonlar.
            Kocatürk'ün kalitesi sadece söylemde değil, belgelerde.
          </p>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="wrap">
          <ContentNote
            type="data"
            variant="block"
            description="Akreditasyon ve sertifika belgeleri Sanity CMS'ten gelecek. Belge görselleri ve yıl bilgileri Faz 6'da eklenecek."
          />
          <div className={styles.akreditasyonGrid} style={{ marginTop: "var(--space-8)" }}>
            {AKREDITASYONLAR.map((a) => (
              <div key={a.baslik} className={styles.akreditasyonKart}>
                <i className={`${a.ikon} ${styles.akreditasyonIkon}`} aria-hidden="true" />
                <span className={styles.akreditasyonKurum}>{a.kurum}</span>
                <p className={styles.akreditasyonBaslik}>{a.baslik}</p>
                <p className={styles.akreditasyonAciklama}>{a.aciklama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Güven"
        title={
          <>
            Kanıtlanmış kalite,
            <br />
            <em>güvenilir eğitim.</em>
          </>
        }
        description="Bu akreditasyonlar, Kocatürk'ü tercih etmenizin somut gerekçeleridir."
        ctas={[
          { href: "/kayit/on-kayit", label: "Ön Kayıt Başvurusu", variant: "primary" },
          { href: "/basarilarimiz", label: "Başarılarımız", variant: "outline-light" },
        ]}
      />
    </>
  );
}
