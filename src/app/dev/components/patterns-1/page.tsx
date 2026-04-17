/**
 * /dev/components/patterns-1 — Design System Patterns 1 Demo
 *
 * Gösterilen: Pillar, NumberCell, StatCard, ProgramCard
 * Production'da erişilemez — Faz 8 lansman öncesi /dev/ klasörü tamamen silinecek.
 */

import { notFound } from "next/navigation";
import { NumberCell } from "@/components/patterns/number-cell";
import { Pillar } from "@/components/patterns/pillar";
import { ProgramCard } from "@/components/patterns/program-card";
import { StatCard } from "@/components/patterns/stat-card";
import { Reveal } from "@/components/reveal";
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

export default function Patterns1Page() {
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
            Patterns 1
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-xl)",
              color: "var(--color-ink-mute)",
              marginTop: "var(--space-4)",
            }}
          >
            Pillar · NumberCell · StatCard · ProgramCard
          </p>
        </div>
      </header>

      <main>
        {/* ════════════════════════════════
            PILLAR — Açık zemin
        ════════════════════════════════ */}
        <DevSection title="Pillar — Açık Zemin (3 sütun)">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "var(--space-6)",
            }}
          >
            <Reveal delay={1}>
              <Pillar
                number="01"
                title={
                  <>
                    Üstün <em>Akademi</em>
                  </>
                }
                body="Çağdaş öğretmenlerimiz, üstün başarılı öğrencilerimizle Ege'nin ışığında geleceği inşa ediyor."
                link={{ href: "#", label: "Akademi modeli" }}
              />
            </Reveal>
            <Reveal delay={2}>
              <Pillar
                number="02"
                title={
                  <>
                    Uluslararası <em>Vizyon</em>
                  </>
                }
                body="Roma Fibonacci'den eTwinning'e — öğrencilerimiz Avrupa sahnesinde başarılarını taçlandırıyor."
                link={{ href: "#", label: "Yurtdışı programları" }}
              />
            </Reveal>
            <Reveal delay={3}>
              <Pillar
                number="03"
                title={
                  <>
                    Geleceğin <em>Becerileri</em>
                  </>
                }
                body="Robotik, kodlama, havacılık — 21. yüzyıl yetkinlikleri müfredatın çekirdeğinde yer alıyor."
                link={{ href: "#", label: "STEAM atölyeleri" }}
              />
            </Reveal>
          </div>
        </DevSection>

        {/* ════════════════════════════════
            PILLAR — Koyu zemin
        ════════════════════════════════ */}
        <section className="dark-section" style={{ padding: "var(--space-16) 0" }}>
          <div className="wrap">
            <Eyebrow variant="light">Pillar — Koyu Zemin (variant="dark")</Eyebrow>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "var(--space-6)",
                marginTop: "var(--space-8)",
              }}
            >
              <Reveal delay={1}>
                <Pillar
                  number="01"
                  title={
                    <>
                      Üstün <em>Akademi</em>
                    </>
                  }
                  body="Çağdaş öğretmenlerimiz, üstün başarılı öğrencilerimizle Ege'nin ışığında geleceği inşa ediyor."
                  link={{ href: "#", label: "Akademi modeli" }}
                  variant="dark"
                />
              </Reveal>
              <Reveal delay={2}>
                <Pillar
                  number="02"
                  title={
                    <>
                      Uluslararası <em>Vizyon</em>
                    </>
                  }
                  body="Roma Fibonacci'den eTwinning'e — öğrencilerimiz Avrupa sahnesinde başarılarını taçlandırıyor."
                  link={{ href: "#", label: "Yurtdışı programları" }}
                  variant="dark"
                />
              </Reveal>
              <Reveal delay={3}>
                <Pillar
                  number="03"
                  title={
                    <>
                      Geleceğin <em>Becerileri</em>
                    </>
                  }
                  body="Robotik, kodlama, havacılık — 21. yüzyıl yetkinlikleri müfredatın çekirdeğinde yer alıyor."
                  link={{ href: "#", label: "STEAM atölyeleri" }}
                  variant="dark"
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            NUMBER CELL — sm / md / lg
        ════════════════════════════════ */}
        <DevSection title="NumberCell — sm / md / lg Karşılaştırma">
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-sm)",
              color: "var(--color-ink-mute)",
              marginBottom: "var(--space-8)",
            }}
          >
            Açık zemin — border-left turuncu, font-size display-sm/md/lg.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              gap: "var(--space-12)",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-xs)",
                  color: "var(--color-ink-mute)",
                  marginBottom: "var(--space-3)",
                  textTransform: "uppercase",
                  letterSpacing: "var(--letter-spacing-label)",
                }}
              >
                sm
              </p>
              <NumberCell number={23} label="KAMPÜS" sublabel="4 ilçe + Manisa" size="sm" />
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-xs)",
                  color: "var(--color-ink-mute)",
                  marginBottom: "var(--space-3)",
                  textTransform: "uppercase",
                  letterSpacing: "var(--letter-spacing-label)",
                }}
              >
                md (default)
              </p>
              <NumberCell number={23} label="KAMPÜS" sublabel="4 ilçe + Manisa" size="md" />
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-xs)",
                  color: "var(--color-ink-mute)",
                  marginBottom: "var(--space-3)",
                  textTransform: "uppercase",
                  letterSpacing: "var(--letter-spacing-label)",
                }}
              >
                lg
              </p>
              <NumberCell number={23} label="KAMPÜS" sublabel="4 ilçe + Manisa" size="lg" />
            </div>
          </div>

          {/* Dark variant */}
          <div
            className="dark-section"
            style={{
              padding: "var(--space-8)",
              borderRadius: "var(--radius-md)",
              marginTop: "var(--space-8)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-xs)",
                color: "var(--color-ink-soft)",
                marginBottom: "var(--space-6)",
                textTransform: "uppercase",
                letterSpacing: "var(--letter-spacing-label)",
              }}
            >
              Dark variant
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-end",
                gap: "var(--space-12)",
              }}
            >
              <NumberCell
                number={23}
                label="KAMPÜS"
                sublabel="4 ilçe + Manisa"
                size="sm"
                variant="dark"
              />
              <NumberCell
                number={23}
                label="KAMPÜS"
                sublabel="4 ilçe + Manisa"
                size="md"
                variant="dark"
              />
              <NumberCell
                number={23}
                label="KAMPÜS"
                sublabel="4 ilçe + Manisa"
                size="lg"
                variant="dark"
              />
            </div>
          </div>
        </DevSection>

        {/* ════════════════════════════════
            STAT CARD — 4'lü grid
        ════════════════════════════════ */}
        <DevSection title="StatCard — 4'lü Grid (Reveal koreografisi)">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "var(--space-6)",
            }}
          >
            <Reveal delay={1}>
              <StatCard
                number={4015}
                label="ÖĞRENCİ"
                description="İlkokuldan liseye 4 ilçede"
                suffix="+"
                icon="bx bx-group"
              />
            </Reveal>
            <Reveal delay={2}>
              <StatCard
                number={23}
                label="KAMPÜS"
                description="1998'den bugüne büyüyen ağ"
                icon="bx bx-buildings"
              />
            </Reveal>
            <Reveal delay={3}>
              <StatCard
                number={246}
                label="ÖĞRETMEN"
                description="Çağdaş eğitim kadrosu"
                icon="bx bx-user-voice"
              />
            </Reveal>
            <Reveal delay={4}>
              <StatCard
                number={98}
                label="BAŞARI"
                description="LGS yerleşim oranı"
                suffix="%"
                icon="bx bx-trophy"
              />
            </Reveal>
          </div>
        </DevSection>

        {/* ════════════════════════════════
            PROGRAM CARD — featured + standard
        ════════════════════════════════ */}
        <DevSection title="ProgramCard — 2 featured + 4 standard">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "var(--space-6)",
            }}
          >
            {/* Featured */}
            <ProgramCard
              icon="bx bx-rocket"
              name="Havacılık ve Uzay"
              shortDesc="İHA tasarımı, uçuş simülatörü, model roket atölyesi — lisede TEKNOFEST yolu."
              ageRange="9-17 yaş"
              href="#"
              featured
            />
            <ProgramCard
              icon="bx bx-cog"
              name="Robotik ve Kodlama"
              shortDesc="Roma Fibonacci'ye giden yol — Lego Spike, Python, Arduino ile proje tabanlı öğrenme."
              ageRange="7-17 yaş"
              href="#"
              featured
            />
            {/* Standard */}
            <ProgramCard
              icon="bx bx-music"
              name="Müzik Akademisi"
              shortDesc="Bireysel ve toplu enstrüman eğitimi, koro, orkestra — sahne performansı odaklı."
              ageRange="6-17 yaş"
              href="#"
            />
            <ProgramCard
              icon="bx bx-football"
              name="Spor Kulüpleri"
              shortDesc="Voleybol, basketbol, jimnastik — Türkiye dereceleri ve uluslararası müsabakalar."
              ageRange="6-17 yaş"
              href="#"
            />
            <ProgramCard
              icon="bx bx-palette"
              name="Görsel Sanatlar"
              shortDesc="Resim, seramik, dijital illüstrasyon, animasyon — yaratıcılık çekirdekte."
              ageRange="5-17 yaş"
              href="#"
            />
            <ProgramCard
              icon="bx bx-book-open"
              name="Yurtdışı Eğitim"
              shortDesc="İngiltere yaz okulu, eTwinning, kardeş okul programları — küresel perspektif."
              ageRange="11-17 yaş"
              href="#"
            />
          </div>
        </DevSection>
      </main>
    </div>
  );
}
