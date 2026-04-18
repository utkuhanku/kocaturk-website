/**
 * /egitim/havacilik-lisesi — Havacılık Lisesi Özel Sayfa
 *
 * Bölgenin tek Havacılık Lisesi. /egitim/[slug] template'inden ayrı,
 * daha zengin içerikli özel sayfa.
 *
 * Bölümler:
 * 1. Hero: dark-section, büyük başlık + ✈ ikonu + PhotoSlot
 * 2. USP bandı: 3 NumberCell
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
  title: "Havacılık Lisesi | Kocatürk Okulları — Bölgenin Tek Havacılık Lisesi",
  description:
    "Gaziemir kampüsünde, TÜRKKUŞU ve THY iş birliğiyle şekillenen müfredat. Pilot, havacılık mühendisi ve kabin amiri yetiştiren bölgenin tek havacılık lisesi.",
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
      "Uçuş simülatörü uygulamaları",
      "Acil durum prosedürleri",
      "Kalkış ve iniş manevraları",
      "İlet navigasyon senaryoları",
    ],
  },
  {
    icon: "bx bx-time",
    title: "Uçuş Saatleri",
    items: [
      "TÜRKKUŞU tesislerinde gözlem uçuşları",
      "Tanıtım uçuşu programı",
      "Glider ve hafif uçak tanıma",
      "Sertifikasyon süreçleri hakkında bilgilendirme",
    ],
  },
  {
    icon: "bx bx-briefcase",
    title: "Staj ve Saha",
    items: [
      "THY bağlantılı gözlem stajı",
      "Havalimanı operasyonları ziyareti",
      "Hava trafik kontrol merkezi tanıtımı",
      "Teknik bakım atölyesi gözlemi",
    ],
  },
];

const MEZUN_YOLLARI = [
  {
    icon: "bx bx-plane-land",
    title: "Pilot",
    desc: "Ticari pilot lisansına (CPL) giden yolda güçlü bir teorik temel. YKS sonrası havacılık ön lisans ve lisans programlarına hazırlık. SHGM onaylı içeriklerle başlangıç eğitimi.",
  },
  {
    icon: "bx bx-cog",
    title: "Havacılık Mühendisi",
    desc: "Uçak yapısı, aerodinamik ve malzeme bilgisi konularında temel eğitim. YKS-MF puanıyla havacılık ve uzay mühendisliği bölümlerine hazırlık. TÜBİTAK proje altyapısı.",
  },
  {
    icon: "bx bx-user-voice",
    title: "Kabin Görevlisi",
    desc: "Havacılık terminolojisi, yolcu iletişimi ve hizmet protokolleri. İngilizce dil eğitimine ek destek. THY ve diğer havayollarına doğrudan başvuru bilgilendirmesi.",
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
              <Eyebrow variant="light">Gaziemir Kampüsü · İzmir</Eyebrow>
              <div className={styles.heroIcon} aria-hidden="true">
                ✈
              </div>
              <h1 className={styles.heroTitle}>
                Bölgenin Tek
                <br />
                <em>Havacılık Lisesi</em>
              </h1>
              <p className={styles.heroDesc}>
                TÜRKKUŞU Türk Hava Kurumu ve Türk Hava Yolları iş birliğiyle şekillenen müfredat.
                Teorik ders, simülatör eğitimi ve saha stajı ile pilot, havacılık mühendisi veya
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
                title="Havacılık Lisesi"
                description="Havacılık Lisesi hero görseli — simülatör veya uçak önü"
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
              number={1}
              label="BÖLGEDE"
              sublabel="Tek Havacılık Lisesi"
              variant="light"
              size="md"
            />
            <NumberCell
              number={2}
              label="KURUM İŞ BİRLİĞİ"
              sublabel="TÜRKKUŞU · THY"
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
                description="Havacılık Lisesi başvuru görseli"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Galeri */}
      <section className={styles.galeriSection}>
        <div className="wrap">
          <Eyebrow>Kampüs ve Tesis</Eyebrow>
          <h2 className={styles.sectionTitle}>Yerinde gör</h2>
          <div className={styles.galeriGrid}>
            <PhotoSlot
              slotId="havacilik-gal-1"
              aspectRatio="4:3"
              category="GALLERY"
              type="photo"
              title="Simülatör"
              description="Uçuş simülatörü odası"
            />
            <PhotoSlot
              slotId="havacilik-gal-2"
              aspectRatio="4:3"
              category="GALLERY"
              type="photo"
              title="Sınıf"
              description="Havacılık teorisi sınıfı"
            />
            <PhotoSlot
              slotId="havacilik-gal-3"
              aspectRatio="4:3"
              category="GALLERY"
              type="photo"
              title="Saha"
              description="TÜRKKUŞU saha ziyareti"
            />
            <PhotoSlot
              slotId="havacilik-gal-4"
              aspectRatio="4:3"
              category="GALLERY"
              type="photo"
              title="Tören"
              description="Mezuniyet töreni"
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
