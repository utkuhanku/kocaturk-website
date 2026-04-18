import type { Metadata } from "next";
import { Pillar } from "@/components/patterns/pillar";
import { CtaBand } from "@/components/sections/cta-band";
import { Eyebrow } from "@/components/ui/eyebrow";
import styles from "../kurumsal.module.css";

export const metadata: Metadata = {
  title: "Eğitim Felsefemiz | Kocatürk Okulları",
  description:
    "Kocatürk Okulları'nın pedagojik yaklaşımı. Bloom'un Tam Öğrenme Modeli, bireysel ilerleme takibi ve bütünsel gelişim.",
};

const TAM_OGRENME_ADIMLARI = [
  { numara: "01", baslik: "Hedef belirleme — Ne öğreneceğiz?" },
  { numara: "02", baslik: "Öğretim — Çeşitli yöntem ve araçlarla sunuş" },
  { numara: "03", baslik: "Biçimlendirici değerlendirme — Anladı mı?" },
  { numara: "04", baslik: "Düzeltici etkinlik — Anlamayan için alternatif yol" },
  { numara: "05", baslik: "Zenginleştirme — Anlayan için derinleşme" },
  { numara: "06", baslik: "Birikim değerlendirmesi — Öğrenme tamamlandı mı?" },
];

const PILLARLAR = [
  {
    number: "01",
    title: (
      <>
        Tam Öğrenme <em>Modeli</em>
      </>
    ),
    body: "Benjamin Bloom'un araştırmalarından ilham alarak geliştirilen bu model, her öğrencinin konu öğrenmeden bir üst konuya geçmesini sağlar. Hiçbir öğrenci geride kalmaz.",
    link: { href: "/egitim/programlar/tam-ogrenme", label: "Tam Öğrenme Programı" },
  },
  {
    number: "02",
    title: (
      <>
        Bireysel <em>Hız</em>
      </>
    ),
    body: "Her çocuk farklı hızda öğrenir. Bireysel ilerleme takibi ve haftalık geri bildirim döngüleri sayesinde her öğrencinin kendi temposunda ilerlemesi desteklenir.",
  },
  {
    number: "03",
    title: (
      <>
        Bütünsel <em>Gelişim</em>
      </>
    ),
    body: "Akademik başarı tek başına yeterli değildir. Sosyal-duygusal öğrenme, spor, sanat ve kariyer keşfi, müfredatın ayrılmaz parçalarıdır.",
  },
];

export default function EgitimFelsefesiPage() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className="wrap">
          <Eyebrow>Eğitim Felsefemiz</Eyebrow>
          <h1 className={styles.heroTitle}>
            Hiçbir öğrenci
            <br />
            <em>geride kalmaz.</em>
          </h1>
          <p className={styles.heroDesc}>
            Bloom'un Tam Öğrenme Modeli'nden ilham alan pedagojik yaklaşımımız, her çocuğun kendi
            hızında ilerlemesini ve tam kavramasını güvence altına alır.
          </p>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="wrap">
          <Eyebrow>Tam Öğrenme Döngüsü</Eyebrow>
          <h2 className={styles.sectionTitle}>
            Altı adımda
            <br />
            <em>tam kavrama.</em>
          </h2>
          <div className={styles.felsefeGrid}>
            <div className={styles.felsefeContent}>
              <p className={styles.felsefeBody}>
                Geleneksel eğitimde öğrenci ya anlar ya da anlamaz; müfredat ilerler. Tam Öğrenme
                Modeli'nde ise bir konu tam anlaşılmadan bir sonrakine geçilmez. Bu yaklaşım,
                1960'larda Benjamin Bloom ve John Carroll'un araştırmalarıyla şekillendi.
              </p>
              <p className={styles.felsefeBody}>
                Kocatürk'te bu model, düzeltici etkinlikler (remediation) ve zenginleştirme
                çalışmaları (enrichment) ile her sınıf seviyesinde uygulanmaktadır. Bireysel
                ilerleme takip sistemi, öğretmenlere gerçek zamanlı veri sunarak müdahale
                noktalarını belirler.
              </p>
            </div>
            <ul className={styles.adimlarList} aria-label="Tam Öğrenme döngüsü adımları">
              {TAM_OGRENME_ADIMLARI.map((adim) => (
                <li key={adim.numara} className={styles.adimItem}>
                  <span className={styles.adimNumara}>{adim.numara}</span>
                  <span className={styles.adimBaslik}>{adim.baslik}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="wrap">
          <Eyebrow>Temel Prensipler</Eyebrow>
          <h2 className={styles.sectionTitle}>
            Felsefeyi
            <br />
            <em>besleyen üç güç.</em>
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
        eyebrow="Uygulama"
        title={
          <>
            Felsefemizi
            <br />
            <em>yerinde görün.</em>
          </>
        }
        description="Kampüs ziyaretinde sınıflarımızı ve öğretmenlerimizi yakından tanıyabilirsiniz."
        ctas={[
          { href: "/kampusler", label: "Kampüs Ziyareti", variant: "primary" },
          { href: "/egitim", label: "Eğitim Programları", variant: "outline-light" },
        ]}
      />
    </>
  );
}
