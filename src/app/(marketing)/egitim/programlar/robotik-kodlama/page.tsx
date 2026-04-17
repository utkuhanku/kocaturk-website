/**
 * /egitim/programlar/robotik-kodlama — Robotik & Kodlama Özel Sayfa
 *
 * Roma Fibonacci International Robot Olympiad 2024 — 4 kategoride dünya derecesi.
 * /egitim/programlar/[slug] template'inden AYRI ve daha zengin.
 *
 * Bölümler:
 * 1. Hero: dark-section, "Roma'dan Dünya Şampiyonluğuna"
 * 2. Başarı bandı: Fibonacci madalyaları
 * 3. Program yapısı: kademe bazlı içerik
 * 4. Kulüp yapısı: haftalık program + ekipman
 * 5. Yarışmalar: eTwinning, Fibonacci, Code Week
 * 6. Öğretmen kadrosu PhotoSlot
 * 7. CtaBand
 */

import type { Metadata } from "next";
import { PhotoSlot } from "@/components/photo-slot";
import { CtaBand } from "@/components/sections/cta-band";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import styles from "./robotik.module.css";

export const metadata: Metadata = {
  title: "Robotik & Kodlama | Kocatürk Okulları — Roma Dünya Şampiyonu",
  description:
    "2024 Roma Fibonacci International Robot Olympiad'da dört kategoride dünya derecesi. Lego'dan yapay zekâya uzanan kapsamlı robotik ve kodlama eğitimi.",
};

const MADALYALAR = [
  { rank: "1. Derece", kategori: "Lego Sumo 1 kg", sonuc: "DÜNYA 1." },
  { rank: "1. Derece", kategori: "Yapay Zekâ Şarkı", sonuc: "DÜNYA 1." },
  { rank: "2. Derece", kategori: "Otonom Araba", sonuc: "DÜNYA 2." },
  { rank: "4. Derece", kategori: "Çizgi İzleyen Robot", sonuc: "DÜNYA 4." },
];

const KADEME_PROGRAM = [
  {
    kademe: "Anaokulu (3-6 yaş)",
    ikon: "bx bx-smile",
    icerik:
      "Beebot ve Cubetto ile komut dizisi oluşturma. Sebep-sonuç ilişkisi, yönelim ve sıralama kavramları. Kodlama mantığı oyun temelli etkinliklerle.",
  },
  {
    kademe: "İlkokul (6-10 yaş)",
    ikon: "bx bx-pencil",
    icerik:
      "Scratch ile blok tabanlı programlama. Lego WeDo 2.0 ile basit makine ve sensör prensipleri. Animasyon ve mini oyun projesi geliştirme.",
  },
  {
    kademe: "Ortaokul (10-14 yaş)",
    ikon: "bx bx-book",
    icerik:
      "Lego Mindstorms EV3 ve Spike Prime ile robot tasarımı. Python diline giriş. Sumo, çizgi izleyen ve otonom araç kategorilerinde yarışma hazırlığı.",
  },
  {
    kademe: "Lise (14-18 yaş)",
    ikon: "bx bx-graduation",
    icerik:
      "Arduino ve Raspberry Pi ile donanım programlama. Makine öğrenmesi temelleri, görüntü işleme. Uluslararası yarışmalar (Fibonacci, WRO) için takım projeleri.",
  },
];

const YARISMA_LISTESI = [
  {
    isim: "Fibonacci International Robot Olympiad",
    yer: "Roma, İtalya",
    sonuc: "2024 — 4 kategoride dünya derecesi",
  },
  {
    isim: "eTwinning Code Week",
    yer: "Avrupa çapında",
    sonuc: "Süregelen Avrupa proje ortaklığı",
  },
  {
    isim: "WRO World Robot Olympiad",
    yer: "Ulusal eleme katılımı",
    sonuc: "Hedef: uluslararası final",
  },
  {
    isim: "TÜBİTAK 4006 Bilim Fuarı",
    yer: "Ulusal",
    sonuc: "Her yıl proje katılımı",
  },
];

export default function RobotikKodlamaPage() {
  return (
    <>
      {/* Hero */}
      <section className="dark-section" style={{ padding: "var(--section-padding) 0" }}>
        <div className="wrap">
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <Eyebrow variant="light">Pedagoji Programı</Eyebrow>
              <h1 className={styles.heroTitle}>
                Roma'dan
                <br />
                <em>dünya şampiyonluğuna.</em>
              </h1>
              <p className={styles.heroDesc}>
                2024 yılında Roma Fibonacci International Robot Olympiad'da öğrencilerimiz Arda ve
                Alp Gürbüz, dört ayrı kategoride dünya derecesi kazandı. Bu başarı, Kocatürk Robotik
                & Kodlama programının uluslararası kalitesini doğruladı.
              </p>
              <div className={styles.heroCtas}>
                <Button variant="primary" href="/kayit/on-kayit">
                  Ön Kayıt Başvurusu
                </Button>
                <Button variant="outline-light" href="/basarilarimiz">
                  Tüm Başarılar
                </Button>
              </div>
            </div>
            <div className={styles.heroPhoto}>
              <PhotoSlot
                slotId="robotik-hero"
                aspectRatio="4:3"
                category="HERO"
                type="photo"
                title="Robotik & Kodlama"
                description="Arda ve Alp Gürbüz — Roma Fibonacci Robot Olimpiyatı"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Başarı Bandı — Madalyalar */}
      <section className={styles.basariSection}>
        <div className="wrap">
          <Eyebrow>Fibonacci International Robot Olympiad 2024</Eyebrow>
          <h2 className={styles.sectionTitle}>
            Roma'da
            <br />
            <em>dört kategoride dünya.</em>
          </h2>
          <div className={styles.basariInner}>
            <div className={styles.madalyaGrid}>
              {MADALYALAR.map((m) => (
                <div key={m.kategori} className={styles.madalyaKart}>
                  <span className={styles.madalyaRank}>{m.rank}</span>
                  <span className={styles.madalyaKategori}>{m.kategori}</span>
                  <span className={styles.madalyaSonuc}>{m.sonuc}</span>
                </div>
              ))}
            </div>
            <div className={styles.basariPhoto}>
              <PhotoSlot
                slotId="robotik-roma"
                aspectRatio="4:5"
                category="FEATURED"
                type="photo"
                title="Roma Başarısı"
                description="Fibonacci Robot Olimpiyatı madalya töreni — Roma 2024"
              />
            </div>
          </div>
          <p className={styles.basariAlt}>Kasım 2024 · Roma, İtalya · Arda Gürbüz & Alp Gürbüz</p>
        </div>
      </section>

      {/* Kademe Bazlı Program */}
      <section className={styles.kademeProgramSection}>
        <div className="wrap">
          <Eyebrow>Program İçeriği</Eyebrow>
          <h2 className={styles.sectionTitle}>Her kademe için uygun içerik</h2>
          <div className={styles.kademeProgramGrid}>
            {KADEME_PROGRAM.map((kp) => (
              <div key={kp.kademe} className={styles.kademeProgramKart}>
                <div className={styles.kademeProgramIkon}>
                  <i className={kp.ikon} aria-hidden="true" />
                </div>
                <h3 className={styles.kademeProgramAd}>{kp.kademe}</h3>
                <p className={styles.kademeProgramIcerik}>{kp.icerik}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kulüp Yapısı */}
      <section className={styles.kulupSection}>
        <div className="wrap">
          <div className={styles.kulupInner}>
            <div className={styles.kulupInfo}>
              <Eyebrow>Kulüp Yapısı</Eyebrow>
              <h2 className={styles.sectionTitleLight}>Haftalık program ve atölye</h2>
              <ul className={styles.kulupList}>
                <li className={styles.kulupItem}>
                  <i className="bx bx-time" aria-hidden="true" />
                  <div>
                    <strong>Hafta içi — Ders saati entegrasyonu</strong>
                    <p>
                      Teknoloji ve bilgisayar derslerinde kodlama temelleri, STEM derslerinde
                      mühendislik tasarımı.
                    </p>
                  </div>
                </li>
                <li className={styles.kulupItem}>
                  <i className="bx bx-group" aria-hidden="true" />
                  <div>
                    <strong>Hafta içi — Kulüp saatleri</strong>
                    <p>
                      Proje takımları, yarışma hazırlığı, ileri seviye Lego ve Arduino atölyeleri.
                    </p>
                  </div>
                </li>
                <li className={styles.kulupItem}>
                  <i className="bx bx-box" aria-hidden="true" />
                  <div>
                    <strong>Ekipman</strong>
                    <p>
                      Lego Mindstorms, Spike Prime, WeDo 2.0; Arduino Mega ve Nano setleri;
                      Raspberry Pi 4; 3D yazıcı.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className={styles.kulupPhoto}>
              <PhotoSlot
                slotId="robotik-atolye"
                aspectRatio="4:3"
                category="GALLERY"
                type="photo"
                title="Robotik Atölyesi"
                description="Robotik atölyesi — öğrenciler çalışırken"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Yarışmalar */}
      <section className={styles.yarismaSection}>
        <div className="wrap">
          <Eyebrow>Yarışmalar ve Etkinlikler</Eyebrow>
          <h2 className={styles.sectionTitle}>Sahaya çık, dünyada yarış</h2>
          <div className={styles.yarismaGrid}>
            {YARISMA_LISTESI.map((y) => (
              <div key={y.isim} className={styles.yarismaKart}>
                <h3 className={styles.yarismaIsim}>{y.isim}</h3>
                <p className={styles.yarismaYer}>
                  <i className="bx bx-map-pin" aria-hidden="true" />
                  {y.yer}
                </p>
                <p className={styles.yarismaSonuc}>{y.sonuc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Öğretmen */}
      <section className={styles.ogretmenSection}>
        <div className="wrap">
          <Eyebrow>Eğitim Kadrosu</Eyebrow>
          <h2 className={styles.sectionTitle}>Programı kim yürütüyor?</h2>
          <div className={styles.ogretmenGrid}>
            <div className={styles.ogretmenKart}>
              <div className={styles.ogretmenFoto}>
                <PhotoSlot
                  slotId="robotik-ogretmen-1"
                  aspectRatio="1:1"
                  category="PORTRAIT"
                  type="photo"
                  title="Robotik Öğretmeni"
                  description="Robotik & Kodlama programı öğretmeni portresi"
                />
              </div>
              <p className={styles.ogretmenIsim}>—</p>
              <p className={styles.ogretmenUnvan}>Robotik & Kodlama Öğretmeni</p>
            </div>
            <div className={styles.ogretmenKart}>
              <div className={styles.ogretmenFoto}>
                <PhotoSlot
                  slotId="robotik-ogretmen-2"
                  aspectRatio="1:1"
                  category="PORTRAIT"
                  type="photo"
                  title="Bilişim Öğretmeni"
                  description="Bilişim teknolojileri öğretmeni portresi"
                />
              </div>
              <p className={styles.ogretmenIsim}>—</p>
              <p className={styles.ogretmenUnvan}>Bilişim Teknolojileri Öğretmeni</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Programa Katıl"
        title={
          <>
            Kodlamayı öğren,
            <br />
            dünyaya <em>meydan oku.</em>
          </>
        }
        description="Robotik & Kodlama programı hakkında bilgi almak veya ön kayıt başvurusu yapmak için formu doldurun."
        ctas={[
          { href: "/kayit/on-kayit", label: "Ön Kayıt Başvurusu", variant: "primary" },
          { href: "/egitim/programlar", label: "Tüm Programlar", variant: "outline-light" },
        ]}
      />
    </>
  );
}
