import type { Metadata } from "next";
import { NumberCell } from "@/components/patterns/number-cell";
import { CtaBand } from "@/components/sections/cta-band";
import { Eyebrow } from "@/components/ui/eyebrow";
import styles from "../kurumsal.module.css";

export const metadata: Metadata = {
  title: "Sayılarla Kocatürk | Kocatürk Okulları",
  description:
    "Kocatürk Okulları'nın rakamları: 4.000+ öğrenci, 5 kampüs, 28 yıl, 21 Türkiye birincisi.",
};

const SAYILAR_ANA = [
  { number: 4015, label: "ÖĞRENCİ", sublabel: "Aktif kayıt" },
  { number: 5, label: "KAMPÜS", sublabel: "4 ilçede" },
  { number: 246, label: "ÖĞRETMEN", sublabel: "Deneyimli kadro" },
  { number: 28, label: "YIL", sublabel: "1998 – 2026" },
];

const SAYILAR_AKADEMIK = [
  { number: 21, label: "TÜRKİYE BİRİNCİSİ", sublabel: "TEOG / OKS / SBS" },
  { number: 6, label: "KADEME", sublabel: "Anaokulu → Lise" },
  { number: 7, label: "PROGRAM", sublabel: "Pedagoji" },
  { number: 4, label: "İLÇE", sublabel: "Ege bölgesi" },
];

const SAYILAR_ULUSLARARASI = [
  { number: 4, label: "DÜNYA DERECESİ", sublabel: "Roma 2024" },
  { number: 3, label: "ETWINNİNG PROJESİ", sublabel: "Avrupa Kalite Etiketi" },
  { number: 6, label: "ORTAK ÜLKE", sublabel: "İngiltere, İtalya, İspanya…" },
  { number: 1, label: "UÇUŞ MERKEZİ", sublabel: "KCT Flight Center" },
];

export default function SayilarPage() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className="wrap">
          <Eyebrow>Sayılarla Kocatürk</Eyebrow>
          <h1 className={styles.heroTitle}>
            Çeyrek asırda
            <br />
            <em>Ege'nin omurgası.</em>
          </h1>
          <p className={styles.heroDesc}>
            1998'den bu yana büyüyen Kocatürk Okulları'nın rakamsal portresi. Her sayı, bir
            öğrencinin, bir ailenin, bir başarının hikâyesini taşıyor.
          </p>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="wrap">
          <Eyebrow>Genel</Eyebrow>
          <h2 className={styles.sectionTitle}>Temel rakamlar</h2>
          <div className={styles.sayilarGrid}>
            {SAYILAR_ANA.map((s) => (
              <NumberCell
                key={s.label}
                number={s.number}
                label={s.label}
                sublabel={s.sublabel}
                variant="light"
                size="lg"
              />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="wrap">
          <Eyebrow>Akademik</Eyebrow>
          <h2 className={styles.sectionTitle}>
            Eğitimde
            <br />
            <em>derinlik.</em>
          </h2>
          <div className={styles.sayilarGrid}>
            {SAYILAR_AKADEMIK.map((s) => (
              <NumberCell
                key={s.label}
                number={s.number}
                label={s.label}
                sublabel={s.sublabel}
                variant="light"
                size="lg"
              />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="wrap">
          <Eyebrow>Uluslararası</Eyebrow>
          <h2 className={styles.sectionTitle}>
            Dünyaya
            <br />
            <em>açılan pencere.</em>
          </h2>
          <div className={styles.sayilarGrid}>
            {SAYILAR_ULUSLARARASI.map((s) => (
              <NumberCell
                key={s.label}
                number={s.number}
                label={s.label}
                sublabel={s.sublabel}
                variant="light"
                size="lg"
              />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Sonuç"
        title={
          <>
            Rakamların arkasında
            <br />
            <em>çocuklar var.</em>
          </>
        }
        description="Bu sayıların her birinin ardında bir öğrenci, bir aile, bir başarı hikâyesi var. Siz de bu hikâyenin parçası olun."
        ctas={[
          { href: "/kayit/on-kayit", label: "Ön Kayıt Başvurusu", variant: "primary" },
          { href: "/basarilarimiz", label: "Başarılarımız", variant: "outline-light" },
        ]}
      />
    </>
  );
}
