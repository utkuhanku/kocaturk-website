/**
 * /egitim/havacilik-lisesi — Havacılık Lisesi Özel Sayfa
 *
 * Bölgenin tek Havacılık Lisesi. /egitim/[slug] template'inden ayrı,
 * daha zengin içerikli özel sayfa.
 *
 * Bölümler:
 * 1. Hero: dark-section, büyük başlık + ✈ ikonu + PhotoSlot
 * 2. USP bandı: 3 NumberCell (2 simülatör · 1 bölgede · 3 kariyer)
 * 3. Müfredat: kart grid
 * 4. Mezun yolları: 3 kariyer kartı
 * 5. Başvuru kriterleri: liste
 * 6. Fotoğraf galerisi: 4 PhotoSlot
 * 7. CtaBand: "Gökyüzü sınırınız olmasın."
 */

import type { Metadata } from "next";
import { NumberCell } from "@/components/patterns/number-cell";
import { PhotoSlot } from "@/components/photo-slot";
import { CtaBand } from "@/components/sections/cta-band";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import styles from "./havacilik.module.css";

export const metadata: Metadata = {
  title:
    "Havacılık Lisesi | Kocatürk Okulları — KCT Flight Center ile Bölgenin Tek Havacılık Lisesi",
  description:
    "Gaziemir kampüsünde, KCT Flight Center Boeing 737 ve F-16 simülatörleriyle uygulamalı eğitim. Pilot, havacılık mühendisi ve kabin görevlisi yetiştiren bölgenin tek havacılık lisesi.",
};

const MUSFREDAT_KARTLARI = [
  {
    icon: "bx bx-book-reader",
    title: "Teorik Dersler",
    items: [
      "Meteoroloji ve atmosfer fiziği",
      "Navigasyon ve kartografya",
      "Uçuş teorisi ve aerodinamik",
      "Havacılık tarihi ve terminolojisi",
    ],
  },
  {
    icon: "bx bx-joystick",
    title: "Simülatör Eğitimi",
    items: [
      "Boeing 737 tam kokpit simülatörü",
      "F-16 savaş uçağı simülatörü",
      "Acil durum prosedürleri senaryoları",
      "Kalkış, iniş ve manevra uygulamaları",
    ],
  },
  {
    icon: "bx bx-time",
    title: "Uçuş Saatleri",
    items: [
      "KCT Flight Center tanıtım uçuşları",
      "Glider ve hafif uçak gözlem programı",
      "Gerçek kokpit deneyimi",
      "Sertifikasyon süreçleri hakkında bilgilendirme",
    ],
  },
  {
    icon: "bx bx-briefcase",
    title: "Staj ve Saha",
    items: [
      "Havalimanı operasyonları ziyareti",
      "Hava trafik kontrol merkezi tanıtımı",
      "Teknik bakım atölyesi gözlemi",
      "Endüstri profesyonelleriyle buluşmalar",
    ],
  },
];

const MEZUN_YOLLARI = [
  {
    icon: "bx bx-plane-land",
    title: "Pilot",
    desc: "Ticari pilot lisansına (CPL) giden yolda güçlü bir teorik temel. YKS sonrası havacılık ön lisans ve lisans programlarına hazırlık. KCT Flight Center simülatör saatleriyle gerçek kokpit deneyimi.",
  },
  {
    icon: "bx bx-cog",
    title: "Havacılık Mühendisi",
    desc: "Uçak yapısı, aerodinamik ve malzeme bilgisi konularında temel eğitim. YKS-MF puanıyla havacılık ve uzay mühendisliği bölümlerine hazırlık. TÜBİTAK proje altyapısı.",
  },
  {
    icon: "bx bx-user-voice",
    title: "Kabin Görevlisi",
    desc: "Havacılık terminolojisi, yolcu iletişimi ve hizmet protokolleri. İngilizce dil eğitimine ek destek. Uluslararası havayollarına doğrudan başvuru için rehberlik ve tanıtım programları.",
  },
];

const BASVURU_KRITERLERI = [
  "14-18 yaş aralığında olmak (9. sınıf başvurusu)",
  "LGS puanı — Anadolu Lisesi başarı koşuluna eşdeğer",
  "Renk körlüğü bulunmadığına dair göz sağlığı raporu (ön kayıt aşamasında istenmez)",
  "Öğrenci ve veli görüşme formunun doldurulması",
  "Kampüs tanıtım gününe katılım (randevu ile)",
  "Ön kayıt başvurusu — kontenjanlar sınırlıdır",
];

export default function HavacılikLisesiPage() {
  return (
    <>
      {/* Hero */}
      <section className="dark-section" style={{ padding: "var(--section-padding) 0" }}>
        <div className="wrap">
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <Eyebrow variant="light">Gaziemir Kampüsü · KCT Flight Center</Eyebrow>
              <div className={styles.heroIcon} aria-hidden="true">
                ✈
              </div>
              <h1 className={styles.heroTitle}>
                Bölgenin Tek
                <br />
                <em>Havacılık Lisesi</em>
              </h1>
              <p className={styles.heroDesc}>
                KCT Flight Center — İzmir'in ilk ve tek uçuş simülatör merkezi. Boeing 737 ve F-16
                simülatörleriyle teorik bilgiden uygulamalı eğitime. Pilot, havacılık mühendisi veya
                kabin görevlisi olmaya giden en doğrudan yol.
              </p>
              <div className={styles.heroCtas}>
                <Button variant="primary" href="/kayit/on-kayit">
                  Başvuru Yap
                </Button>
                <Button variant="outline-light" href="/kampusler/gaziemir">
                  Gaziemir Kampüsü
                </Button>
              </div>
            </div>
            <div className={styles.heroPhoto}>
              <PhotoSlot
                slotId="havacilik-hero"
                aspectRatio="4:3"
                category="HERO"
                type="photo"
                title="KCT Flight Center"
                description="KCT Flight Center — Boeing 737 simülatörü kokpiti"
              />
            </div>
          </div>
        </div>
      </section>

      {/* USP Bandı */}
      <section className={styles.uspSection}>
        <div className="wrap">
          <div className={styles.uspGrid}>
            <NumberCell
              number={2}
              label="SİMÜLATÖR"
              sublabel="Boeing 737 · F-16"
              variant="light"
              size="md"
            />
            <NumberCell
              number={1}
              label="BÖLGEDE"
              sublabel="Tek Havacılık Lisesi"
              variant="light"
              size="md"
            />
            <NumberCell
              number={3}
              label="KARİYER YOLU"
              sublabel="Pilot · Müh. · Kabin"
              variant="light"
              size="md"
            />
          </div>
        </div>
      </section>

      {/* Müfredat */}
      <section className={styles.mufredatSection}>
        <div className="wrap">
          <Eyebrow>Müfredat</Eyebrow>
          <h2 className={styles.sectionTitle}>Dört sütunlu eğitim yapısı</h2>
          <div className={styles.mufredatGrid}>
            {MUSFREDAT_KARTLARI.map((kart) => (
              <div key={kart.title} className={styles.mufredatCard}>
                <div className={styles.mufredatIconWrap}>
                  <i className={kart.icon} aria-hidden="true" />
                </div>
                <h3 className={styles.mufredatTitle}>{kart.title}</h3>
                <ul className={styles.mufredatList}>
                  {kart.items.map((item) => (
                    <li key={item} className={styles.mufredatItem}>
                      <i className="bx bx-check" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mezun Yolları */}
      <section className={styles.mezunSection}>
        <div className="wrap">
          <Eyebrow>Kariyer Yolları</Eyebrow>
          <h2 className={styles.sectionTitle}>Mezunlarımız nereye gidiyor?</h2>
          <div className={styles.mezunGrid}>
            {MEZUN_YOLLARI.map((yol) => (
              <div key={yol.title} className={styles.mezunCard}>
                <div className={styles.mezunIconWrap}>
                  <i className={yol.icon} aria-hidden="true" />
                </div>
                <h3 className={styles.mezunTitle}>{yol.title}</h3>
                <p className={styles.mezunDesc}>{yol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Başvuru Kriterleri */}
      <section className={styles.basvuruSection}>
        <div className="wrap">
          <div className={styles.basvuruInner}>
            <div>
              <Eyebrow>Başvuru Süreci</Eyebrow>
              <h2 className={styles.sectionTitle}>Kimler başvurabilir?</h2>
              <ul className={styles.kriterList}>
                {BASVURU_KRITERLERI.map((kriter) => (
                  <li key={kriter} className={styles.kriterItem}>
                    <i className="bx bx-check-circle" aria-hidden="true" />
                    <span>{kriter}</span>
                  </li>
                ))}
              </ul>
              <div className={styles.basvuruCta}>
                <Button variant="primary" href="/kayit/on-kayit">
                  Ön Kayıt Başvurusu
                </Button>
              </div>
            </div>
            <div className={styles.basvuruPhoto}>
              <PhotoSlot
                slotId="havacilik-basvuru"
                aspectRatio="4:3"
                category="CAMPUS"
                type="photo"
                title="Başvuru"
                description="Havacılık Lisesi başvuru görseli — KCT Flight Center girişi"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Galeri */}
      <section className={styles.galeriSection}>
        <div className="wrap">
          <Eyebrow>KCT Flight Center</Eyebrow>
          <h2 className={styles.sectionTitle}>Yerinde gör</h2>
          <div className={styles.galeriGrid}>
            <PhotoSlot
              slotId="havacilik-gal-1"
              aspectRatio="4:3"
              category="GALLERY"
              type="photo"
              title="Boeing 737 Simülatörü"
              description="KCT Flight Center Boeing 737 tam kokpit simülatörü"
            />
            <PhotoSlot
              slotId="havacilik-gal-2"
              aspectRatio="4:3"
              category="GALLERY"
              type="photo"
              title="F-16 Simülatörü"
              description="KCT Flight Center F-16 simülatörü"
            />
            <PhotoSlot
              slotId="havacilik-gal-3"
              aspectRatio="4:3"
              category="GALLERY"
              type="photo"
              title="Teorik Ders"
              description="Havacılık teorisi sınıfı — meteoroloji ve navigasyon"
            />
            <PhotoSlot
              slotId="havacilik-gal-4"
              aspectRatio="4:3"
              category="GALLERY"
              type="photo"
              title="Mezuniyet"
              description="Havacılık Lisesi mezuniyet töreni"
            />
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Başvuru"
        title={
          <>
            Gökyüzü
            <br />
            sınırınız <em>olmasın.</em>
          </>
        }
        description="Kontenjanlar sınırlıdır. Ön kayıt formunu doldurun, Gaziemir kampüsünden sizi arayalım."
        ctas={[
          { href: "/kayit/on-kayit", label: "Ön Kayıt Başvurusu", variant: "primary" },
          { href: "/kampusler/gaziemir", label: "Kampüs Ziyareti", variant: "outline-light" },
        ]}
      />
    </>
  );
}
