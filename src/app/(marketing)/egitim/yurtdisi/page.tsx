/**
 * /egitim/yurtdisi — Yurtdışı Eğitim Özel Sayfa
 *
 * İngiltere Yaz Okulu, eTwinning Avrupa proje ortaklıkları,
 * uluslararası yarışmalar.
 *
 * Bölümler:
 * 1. Hero: dark-section, "Sınıfını Dünyada Gez"
 * 2. İngiltere Yaz Okulu: featured kart
 * 3. eTwinning Avrupa projeleri
 * 4. Uluslararası yarışmalar
 * 5. Ülke kartları grid
 * 6. CtaBand
 */

import type { Metadata } from "next";
import { PhotoSlot } from "@/components/photo-slot";
import { CtaBand } from "@/components/sections/cta-band";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import styles from "./yurtdisi.module.css";

export const metadata: Metadata = {
  title: "Yurtdışı Eğitim | Kocatürk Okulları",
  description:
    "İngiltere Yaz Okulu, eTwinning Avrupa proje ortaklıkları ve uluslararası yarışmalar. Kocatürk öğrencisi sınıfını dünyada geziyor.",
};

const ETWINNING_PROJELER = [
  {
    yil: "2024",
    proje: "Digital Voices of Europe",
    ortak: "İspanya, Yunanistan, İtalya",
    aciklama:
      "Öğrenciler dijital medya araçlarıyla Avrupa kültürlerini karşılaştırdı; çok dilli dijital dergi hazırladı.",
  },
  {
    yil: "2023",
    proje: "Green Schools Network",
    ortak: "Almanya, Polonya, Portekiz",
    aciklama:
      "İklim değişikliği ve sürdürülebilirlik temalı proje; Avrupa Kalite Etiketi ile ödüllendirildi.",
  },
  {
    yil: "2023",
    proje: "Code4Europe",
    ortak: "AB üyesi 6 ülke",
    aciklama:
      "eTwinning Code Week kapsamında robotik ve kodlama paylaşım projesi. Her okuldan iki öğrenci takımı.",
  },
];

const YARISMALAR = [
  {
    isim: "Fibonacci International Robot Olympiad",
    tarih: "Kasım 2024",
    yer: "Roma, İtalya",
    sonuc: "4 kategoride dünya derecesi",
    href: "/egitim/programlar/robotik-kodlama",
  },
  {
    isim: "eTwinning Code Week",
    tarih: "Her yıl Ekim",
    yer: "Avrupa çapında",
    sonuc: "Süregelen ortaklık",
    href: null,
  },
  {
    isim: "İngiltere Yaz Okulu Dil Sertifikası",
    tarih: "Her yıl Temmuz",
    yer: "İngiltere",
    sonuc: "Uluslararası dil sertifikası",
    href: null,
  },
];

const ULKE_KARTLARI = [
  { bayrak: "🇬🇧", kod: "İNG", ulke: "İngiltere", program: "Yaz Okulu" },
  { bayrak: "🇮🇹", kod: "İTA", ulke: "İtalya", program: "eTwinning · Fibonacci" },
  { bayrak: "🇪🇸", kod: "İSP", ulke: "İspanya", program: "eTwinning" },
  { bayrak: "🇬🇷", kod: "YUN", ulke: "Yunanistan", program: "eTwinning" },
  { bayrak: "🇩🇪", kod: "ALM", ulke: "Almanya", program: "eTwinning" },
  { bayrak: "🇪🇺", kod: "AB", ulke: "Avrupa", program: "Code Week" },
];

export default function YurtdisiPage() {
  return (
    <>
      {/* Hero */}
      <section className="dark-section" style={{ padding: "var(--section-padding) 0" }}>
        <div className="wrap">
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <Eyebrow variant="light">Yurtdışı Eğitim</Eyebrow>
              <h1 className={styles.heroTitle}>
                Sınıfını
                <br />
                <em>dünyada gez.</em>
              </h1>
              <p className={styles.heroDesc}>
                İngiltere Yaz Okulu, eTwinning Avrupa proje ortaklıkları ve uluslararası yarışmalar.
                Kocatürk öğrencisi dil bariyerini sınıfta değil, gerçek hayatta aşar.
              </p>
              <div className={styles.heroCtas}>
                <Button variant="primary" href="/kayit/on-kayit">
                  Ön Kayıt Başvurusu
                </Button>
                <Button variant="outline-light" href="/iletisim">
                  Bilgi Al
                </Button>
              </div>
            </div>
            <div className={styles.heroPhoto}>
              <PhotoSlot
                slotId="yurtdisi-hero"
                aspectRatio="4:3"
                category="HERO"
                type="photo"
                title="Yurtdışı Eğitim"
                description="İngiltere Yaz Okulu — öğrenciler kampüste"
              />
            </div>
          </div>
        </div>
      </section>

      {/* İngiltere Yaz Okulu */}
      <section className={styles.yazOkuluSection}>
        <div className="wrap">
          <Eyebrow>İngiltere Yaz Okulu</Eyebrow>
          <h2 className={styles.sectionTitle}>
            İngilizceni orada
            <br />
            <em>pratik yap.</em>
          </h2>
          <div className={styles.yazOkuluInner}>
            <div className={styles.yazOkuluInfo}>
              <div className={styles.yazOkuluMeta}>
                <div className={styles.metaItem}>
                  <i className="bx bx-calendar" aria-hidden="true" />
                  <div>
                    <strong>Süre</strong>
                    <p>2 hafta · Her yıl Temmuz</p>
                  </div>
                </div>
                <div className={styles.metaItem}>
                  <i className="bx bx-user" aria-hidden="true" />
                  <div>
                    <strong>Yaş Aralığı</strong>
                    <p>12-17 yaş (ortaokul ve lise)</p>
                  </div>
                </div>
                <div className={styles.metaItem}>
                  <i className="bx bx-book-open" aria-hidden="true" />
                  <div>
                    <strong>İçerik</strong>
                    <p>Dil eğitimi, kültürel turlar, Londra ziyareti, sosyal etkinlikler</p>
                  </div>
                </div>
                <div className={styles.metaItem}>
                  <i className="bx bx-award" aria-hidden="true" />
                  <div>
                    <strong>Sertifika</strong>
                    <p>Uluslararası tanınırlığı olan dil sertifikası</p>
                  </div>
                </div>
              </div>
              <div className={styles.yazOkuluCta}>
                <Button variant="primary" href="/kayit/on-kayit">
                  Yaz Okulu Ön Kaydı
                </Button>
              </div>
            </div>
            <div className={styles.yazOkuluPhoto}>
              <PhotoSlot
                slotId="yurtdisi-yazokulu"
                aspectRatio="4:3"
                category="GALLERY"
                type="photo"
                title="İngiltere Yaz Okulu"
                description="İngiltere Yaz Okulu kampüs görseli"
              />
            </div>
          </div>
        </div>
      </section>

      {/* eTwinning */}
      <section className={styles.etwinningSection}>
        <div className="wrap">
          <Eyebrow>eTwinning Avrupa Projeleri</Eyebrow>
          <h2 className={styles.sectionTitle}>
            Avrupa sınıflarıyla
            <br />
            <em>ortak projeler.</em>
          </h2>
          <div className={styles.etwinningGrid}>
            {ETWINNING_PROJELER.map((proje) => (
              <div key={proje.proje} className={styles.etwinningKart}>
                <span className={styles.etwinningYil}>{proje.yil}</span>
                <h3 className={styles.etwinningProjeAd}>{proje.proje}</h3>
                <p className={styles.etwinningOrtak}>
                  <i className="bx bx-world" aria-hidden="true" />
                  {proje.ortak}
                </p>
                <p className={styles.etwinningAciklama}>{proje.aciklama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yarışmalar */}
      <section className={styles.yarismaSection}>
        <div className="wrap">
          <Eyebrow>Uluslararası Yarışmalar</Eyebrow>
          <h2 className={styles.sectionTitle}>Sahada yarıştık, dereceler kazandık</h2>
          <div className={styles.yarismaGrid}>
            {YARISMALAR.map((y) => (
              <div key={y.isim} className={styles.yarismaKart}>
                <div className={styles.yarismaHeader}>
                  <h3 className={styles.yarismaIsim}>{y.isim}</h3>
                </div>
                <p className={styles.yarismaMeta}>
                  <i className="bx bx-map-pin" aria-hidden="true" />
                  {y.yer}
                </p>
                <p className={styles.yarismaTarih}>{y.tarih}</p>
                <p className={styles.yarismaSonuc}>{y.sonuc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ülke Kartları */}
      <section className={styles.ulkelerSection}>
        <div className="wrap">
          <Eyebrow>Gittiğimiz Ülkeler</Eyebrow>
          <h2 className={styles.sectionTitle}>Ege'de okuyup dünyada düşünmek</h2>
          <div className={styles.ulkelerGrid}>
            {ULKE_KARTLARI.map((u) => (
              <div key={u.kod} className={styles.ulkeKart}>
                <span className={styles.ulkeBayrak}>{u.bayrak}</span>
                <span className={styles.ulkeKod}>{u.kod}</span>
                <span className={styles.ulkeProgram}>{u.program}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Yurtdışı Programları"
        title={
          <>
            Dünyayı keşfetmeye
            <br />
            <em>hazır mısınız?</em>
          </>
        }
        description="Yurtdışı eğitim programları ve İngiltere Yaz Okulu hakkında bilgi almak için bizimle iletişime geçin."
        ctas={[
          { href: "/kayit/on-kayit", label: "Ön Kayıt Başvurusu", variant: "primary" },
          { href: "/iletisim", label: "Bize Ulaşın", variant: "outline-light" },
        ]}
      />
    </>
  );
}
