import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/cta-band";
import { Eyebrow } from "@/components/ui/eyebrow";
import styles from "../kurumsal.module.css";

export const metadata: Metadata = {
  title: "Vizyon & Misyon | Kocatürk Okulları",
  description:
    "Kocatürk Okulları vizyon ve misyonu. Ege'nin eğitim omurgası olma hedefi ve temel değerlerimiz.",
};

const DEGERLER = [
  {
    icon: "bx bx-heart",
    baslik: "Aile Ruhu",
    aciklama:
      "Her öğrenci, her öğretmen ve her veli Kocatürk ailesinin bir parçasıdır. Kuruluşumuzun ilk gününden bu yana bu his değişmedi.",
  },
  {
    icon: "bx bx-book-open",
    baslik: "Öğrenmeye Adanmışlık",
    aciklama:
      "Öğrenme bir hak, öğretme bir sorumluluktur. Tam Öğrenme Modeli ile hiçbir öğrencinin geride kalmamasını güvence altına alıyoruz.",
  },
  {
    icon: "bx bx-globe",
    baslik: "Küresel Bakış",
    aciklama:
      "Ege'de kök sal, dünyaya uzandır. eTwinning, İngiltere Yaz Okulu ve robot olimpiyatları öğrencilerimize küresel ufuk kazandırıyor.",
  },
  {
    icon: "bx bx-bulb",
    baslik: "Yenilikçilik",
    aciklama:
      "Robotik, yapay zekâ, design thinking ve havacılık programlarıyla öğrencilerimizi geleceğin mesleklerine hazırlıyoruz.",
  },
  {
    icon: "bx bx-user",
    baslik: "Bireye Saygı",
    aciklama:
      "Her çocuk benzersizdir. Bireysel ilerleme takibi, kişisel geri bildirim döngüleri ve farklılaştırılmış öğretim bu inancın yansımasıdır.",
  },
  {
    icon: "bx bx-leaf",
    baslik: "Sürdürülebilirlik",
    aciklama:
      "Hem çevre hem de toplum için. Gelecek nesillere daha iyi bir dünya bırakmak, eğitim programlarımıza entegre bir değerdir.",
  },
];

export default function VizyonPage() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className="wrap">
          <Eyebrow>Vizyon & Misyon</Eyebrow>
          <h1 className={styles.heroTitle}>
            Nereye gittiğimiz,
            <br />
            <em>neden buradayız.</em>
          </h1>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="wrap">
          <Eyebrow>Vizyon</Eyebrow>
          <div className={styles.vizyonBlok}>
            <span className={styles.vizyonEtiketi}>Kocatürk Okulları Vizyonu</span>
            <p className={styles.vizyonMetin}>
              Ege'nin eğitim omurgası olarak, her kademede kaliteli, yenilikçi ve bütünsel eğitim
              sunmak; öğrencilerimizi yerel kimliklerini koruyarak küresel vatandaşlar olarak
              yetiştirmek.
            </p>
          </div>

          <Eyebrow>Misyon</Eyebrow>
          <div className={styles.misyonBlok}>
            <p className={styles.misyonMetin}>
              Bloom'un Tam Öğrenme Modeli'nden ilham alan pedagojik yaklaşımımızla, her öğrencinin
              bireysel potansiyelini keşfetmesine ve geliştirmesine zemin hazırlamak. Akademik
              başarıyı, sosyal-duygusal gelişimi ve yaratıcı düşünceyi bir bütün olarak ele almak;
              mezunlarımızı üniversiteye, kariyer hayatına ve yaşama hazırlamak.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="wrap">
          <Eyebrow>Temel Değerler</Eyebrow>
          <h2 className={styles.sectionTitle}>
            Bizi bir arada
            <br />
            <em>tutan değerler.</em>
          </h2>
          <div className={styles.degerlerGrid}>
            {DEGERLER.map((d) => (
              <div key={d.baslik} className={styles.degerKart}>
                <i className={`${d.icon} ${styles.degerIkon}`} aria-hidden="true" />
                <p className={styles.degerBaslik}>{d.baslik}</p>
                <p className={styles.degerAciklama}>{d.aciklama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Birlikte"
        title={
          <>
            Bu değerleri
            <br />
            <em>paylaşıyorsak,</em>
          </>
        }
        description="Kocatürk ailesi sizi bekliyor. Çocuğunuzun potansiyelini birlikte keşfedelim."
        ctas={[
          { href: "/kayit/on-kayit", label: "Ön Kayıt", variant: "primary" },
          {
            href: "/kurumsal/egitim-felsefemiz",
            label: "Eğitim Felsefemiz",
            variant: "outline-light",
          },
        ]}
      />
    </>
  );
}
