import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/cta-band";
import { Eyebrow } from "@/components/ui/eyebrow";
import styles from "../kurumsal.module.css";

export const metadata: Metadata = {
  title: "Sosyal Sorumluluk | Kocatürk Okulları",
  description:
    "Kocatürk Okulları sosyal sorumluluk projeleri: çevre, toplum, dijital okuryazarlık ve uluslararası dayanışma.",
};

const PROJELER = [
  {
    ikon: "bx bx-leaf",
    baslik: "Yeşil Kampüs Programı",
    body: "Tüm kampüslerde geri dönüşüm, enerji tasarrufu ve çevre bilinci etkinlikleri. Öğrenciler her yıl düzenlenen Dünya Çevre Günü etkinlikleriyle çevre sorumluluğunu pratiğe döküyor.",
  },
  {
    ikon: "bx bx-code-alt",
    baslik: "Dijital Okuryazarlık Atölyeleri",
    body: "Code Week çerçevesinde topluma açık ücretsiz kodlama atölyeleri. Kocatürk öğrencileri, ilkokuldan itibaren edindiği becerileri gönüllü eğitmen olarak aktarıyor.",
  },
  {
    ikon: "bx bx-book-heart",
    baslik: "Kitap Bağışı ve Kütüphane Projesi",
    body: "Her yıl düzenlenen kitap bağışı kampanyasıyla bölgedeki köy okullarına ve toplum kütüphanelerine kitap ulaştırılıyor. 2023'te 1.200'den fazla kitap bağışlandı.",
  },
  {
    ikon: "bx bx-world",
    baslik: "eTwinning — Küresel Dayanışma",
    body: "İspanya, Yunanistan ve İtalya'daki partner okullarla sürdürülebilirlik, dijital medya ve kültürel çeşitlilik temalarında ortak projeler. Avrupa Kalite Etiketi ile ödüllendirildi.",
  },
  {
    ikon: "bx bx-user-plus",
    baslik: "Burs ve Destek Programı",
    body: "Ekonomik güçlük çeken başarılı öğrenciler için burs programı. Her yıl belirlenen burs kontenjanları, Kocatürk ailesinin toplumsal sorumluluğunun somut bir yansımasıdır.",
  },
  {
    ikon: "bx bx-run",
    baslik: "Spor ve Sağlıklı Yaşam",
    body: "Okul sporlarının ötesinde topluma açık spor etkinlikleri ve sağlıklı yaşam farkındalık kampanyaları. Gaziemir Genç Kızlar Voleybol takımı ilçe şampiyonluğunu kazandı.",
  },
];

export default function SosyalSorumlulukPage() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className="wrap">
          <Eyebrow>Sosyal Sorumluluk</Eyebrow>
          <h1 className={styles.heroTitle}>
            Topluma
            <br />
            <em>borçluyuz.</em>
          </h1>
          <p className={styles.heroDesc}>
            Kocatürk Okulları, bulunduğu topluma eğitimin ötesinde değer katmayı sorumluluğu olarak
            görür. Çevre, dijital okuryazarlık ve toplumsal dayanışma alanlarındaki projelerimiz bu
            inancın yansımasıdır.
          </p>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="wrap">
          <Eyebrow>Projelerimiz</Eyebrow>
          <h2 className={styles.sectionTitle}>
            Sınıfın
            <br />
            <em>dışındaki Kocatürk.</em>
          </h2>
          <div className={styles.sorumlulukGrid}>
            {PROJELER.map((p) => (
              <div key={p.baslik} className={styles.sorumlulukKart}>
                <div className={styles.sorumlulukIkonWrap}>
                  <i className={p.ikon} aria-hidden="true" />
                </div>
                <p className={styles.sorumlulukBaslik}>{p.baslik}</p>
                <p className={styles.sorumlulukBody}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Birlikte"
        title={
          <>
            Toplumla birlikte,
            <br />
            <em>geleceği inşa edelim.</em>
          </>
        }
        description="Sosyal sorumluluk projelerimize destek vermek veya iş birliği kurmak ister misiniz?"
        ctas={[
          { href: "/iletisim", label: "İletişime Geçin", variant: "primary" },
          { href: "/kurumsal/hakkimizda", label: "Hakkımızda", variant: "outline-light" },
        ]}
      />
    </>
  );
}
