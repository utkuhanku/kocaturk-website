/**
 * /dev/components/patterns-2 — Design System Patterns 2 Demo
 *
 * Gösterilen: CampusCard, AchievementCard, NewsCard, TestimonialCard
 * Production'da erişilemez — Faz 8 lansman öncesi /dev/ klasörü tamamen silinecek.
 */

import { notFound } from "next/navigation";
import { AchievementCard } from "@/components/patterns/achievement-card";
import { CampusCard } from "@/components/patterns/campus-card";
import { NewsCard } from "@/components/patterns/news-card";
import { TestimonialCard } from "@/components/patterns/testimonial-card";
import { ContentNote } from "@/components/ui/content-note";
import { Eyebrow } from "@/components/ui/eyebrow";

/* ── Bölüm başlığı yardımcısı ── */
function DevSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section
      style={{
        padding: "var(--space-16) 0",
        borderBottom: `var(--border-thin) solid var(--color-line)`,
      }}
    >
      <div className="wrap">
        <Eyebrow>{title}</Eyebrow>
        <div style={{ marginTop: "var(--space-8)" }}>{children}</div>
      </div>
    </section>
  );
}

export default function Patterns2Page() {
  const isRealProduction = process.env.VERCEL_ENV === "production";
  if (isRealProduction) notFound();

  return (
    <div style={{ minHeight: "100dvh", backgroundColor: "var(--color-bg)" }}>
      {/* ── PAGE HEADER ── */}
      <header
        style={{
          backgroundColor: "var(--color-anthracite)",
          padding: "var(--space-16) 0 var(--space-20)",
        }}
      >
        <div className="wrap">
          <Eyebrow variant="light">Geliştirici · Design System</Eyebrow>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-display-md)",
              fontWeight: 600,
              color: "var(--color-surface)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              marginTop: "var(--space-6)",
            }}
          >
            Patterns 2
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-xl)",
              color: "var(--color-ink-mute)",
              marginTop: "var(--space-4)",
            }}
          >
            CampusCard · AchievementCard · NewsCard · TestimonialCard
          </p>
        </div>
      </header>

      <main>
        {/* ════════════════════════════════
            CAMPUS CARD — 3 kart (badge'li + badge'siz + PhotoSlot)
        ════════════════════════════════ */}
        <DevSection title="CampusCard — Ana, İkinci Ana, Standart">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "var(--space-6)",
            }}
          >
            <CampusCard
              slug="turgutlu"
              name="Turgutlu Kampüsü"
              ilce="Turgutlu"
              il="Manisa"
              badge="ana"
              kademeler={["İlkokul", "Ortaokul", "Lise"]}
              studentCount={950}
              href="#"
            />
            <CampusCard
              slug="gaziemir"
              name="Gaziemir Kampüsü"
              ilce="Gaziemir"
              il="İzmir"
              badge="ikinci-ana"
              kademeler={["İlkokul", "Ortaokul"]}
              studentCount={620}
              href="#"
            />
            <CampusCard
              slug="kemalpasa"
              name="Kemalpaşa Kampüsü"
              ilce="Kemalpaşa"
              il="İzmir"
              kademeler={["İlkokul"]}
              studentCount={280}
              href="#"
            />
          </div>
        </DevSection>

        {/* ════════════════════════════════
            ACHIEVEMENT CARD — 4 kategori (featured + standart)
        ════════════════════════════════ */}
        <DevSection title="AchievementCard — 4 Kategori (featured + standart)">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "var(--space-6)",
            }}
          >
            <AchievementCard
              category="uluslararasi"
              title="Roma Fibonacci Matematik Yarışması"
              position="Türkiye 1.si"
              studentName="Ahmet Yıldız"
              date="2024-11-15"
              location="Roma, İtalya"
              featured
              href="#"
            />
            <AchievementCard
              category="akademik"
              title="LGS Türkiye Geneli Başarısı"
              position="Türkiye İlk 1000"
              studentName="Elif Kaya"
              date="2024-06-10"
              location="İzmir"
              href="#"
            />
            <AchievementCard
              category="sportif"
              title="Türkiye Jimnastik Şampiyonası"
              position="1. Derece"
              studentName="Beren Baykal"
              date="2024-09-22"
              location="Ankara"
              href="#"
            />
            <AchievementCard
              category="sanatsal"
              title="TÜGVA Ulusal Resim Yarışması"
              position="Birincilik Ödülü"
              studentName="Zeynep Arslan"
              date="2024-04-05"
              location="İstanbul"
              href="#"
            />
          </div>
        </DevSection>

        {/* ════════════════════════════════
            NEWS CARD — featured + standard + compact
        ════════════════════════════════ */}
        <DevSection title="NewsCard — featured / standard / compact">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-8)",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-xs)",
                  color: "var(--color-ink-mute)",
                  marginBottom: "var(--space-4)",
                  textTransform: "uppercase",
                  letterSpacing: "var(--letter-spacing-label)",
                }}
              >
                featured
              </p>
              <div style={{ maxWidth: "540px" }}>
                <NewsCard
                  slug="roma-fibonacci-2024"
                  title="Öğrencimiz Roma Fibonacci'de Türkiye'yi Temsil Etti"
                  excerpt="Turgutlu kampüsümüzden Ahmet Yıldız, dünyanın en prestijli matematik yarışmalarından Roma Fibonacci'de Türkiye adına mücadele etti ve gururumuzu tazeledi."
                  category="Uluslararası"
                  date="2024-11-18"
                  size="featured"
                />
              </div>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-xs)",
                  color: "var(--color-ink-mute)",
                  marginBottom: "var(--space-4)",
                  textTransform: "uppercase",
                  letterSpacing: "var(--letter-spacing-label)",
                }}
              >
                standard
              </p>
              <div style={{ maxWidth: "380px" }}>
                <NewsCard
                  slug="etwinning-projesi-2024"
                  title="eTwinning Projemiz Avrupa Kalite Etiketini Aldı"
                  excerpt="Avrupa genelinde 12 okulla yürüttüğümüz dijital sanat projesi, eTwinning Avrupa Kalite Etiketi'ne layık görüldü."
                  category="Proje"
                  date="2024-10-03"
                  size="standard"
                />
              </div>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-xs)",
                  color: "var(--color-ink-mute)",
                  marginBottom: "var(--space-4)",
                  textTransform: "uppercase",
                  letterSpacing: "var(--letter-spacing-label)",
                }}
              >
                compact
              </p>
              <div style={{ maxWidth: "480px" }}>
                <NewsCard
                  slug="ingiltere-yaz-okulu-2024"
                  title="İngiltere Yaz Okulu Kayıtları Açıldı"
                  category="Duyuru"
                  date="2024-08-01"
                  size="compact"
                />
              </div>
            </div>
          </div>
        </DevSection>

        {/* ════════════════════════════════
            TESTIMONIAL CARD — 3 veli/mezun + KVKK notu
        ════════════════════════════════ */}
        <DevSection title="TestimonialCard — Veli / Mezun / Video Overlay">
          <ContentNote
            type="data"
            variant="block"
            description="Avatar: KVKK onayı alınana kadar tüm veli fotoğrafları gizlenir, initials circle gösterilir. Faz 5'te KVKK belgesi alındıktan sonra gerçek fotoğraflar aktif edilecek."
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "var(--space-6)",
              marginTop: "var(--space-8)",
            }}
          >
            <TestimonialCard
              quote="Çocuğumun bu okulda geçirdiği dört yıl, onu gerçek anlamda dönüştürdü. Öğretmenler sadece ders vermekle kalmıyor, her öğrenciyle bire bir ilgileniyor."
              authorName="Ayşe Çelik"
              authorRole="Veli · Ortaokul 7. sınıf · Turgutlu"
            />
            <TestimonialCard
              quote="Robotik kulübünde geliştirdiğim projeler sayesinde mühendislik hayalimi keşfettim. Üniversite sınavında hedeflediğim bölümü kazandım."
              authorName="Mert Doğan"
              authorRole="Mezun · Lise · 2023 · İzmir"
            />
            <TestimonialCard
              quote="İngiltere yaz okulu programı sayesinde kızım hem dil kazandı hem de uluslararası arkadaşlıklar kurdu. Harika bir deneyimdi."
              authorName="Fatma Şahin"
              authorRole="Veli · İlkokul 5. sınıf · Gaziemir"
              videoUrl="https://example.com/testimonial"
            />
          </div>
        </DevSection>
      </main>
    </div>
  );
}
