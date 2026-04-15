/**
 * /dev/components/primitives — Design System Primitives Demo
 *
 * Gösterilen: Button, Input, Label, Eyebrow, ContentNote
 * Production'da erişilemez — Faz 8 lansman öncesi /dev/ klasörü tamamen silinecek.
 */

import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ContentNote } from "@/components/ui/content-note";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const TEST_SENTENCE =
  "\u00C7a\u011fda\u015f \u00F6\u011fretmenlerimiz, \u00FCst\u00FCn ba\u015far\u0131l\u0131 \u00F6\u011frencilerimizle Ege\u2019nin \u0131\u015f\u0131\u011f\u0131nda gelece\u011fi in\u015fa ediyor.";

/* ── Küçük yardımcı: bölüm başlığı ── */
function DevSection({
  title,
  children,
  dark = false,
}: {
  title: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <section
      style={{
        padding: "var(--space-16) 0",
        borderBottom: `var(--border-thin) solid ${dark ? "var(--color-anthracite-line)" : "var(--color-line)"}`,
      }}
    >
      <div className="wrap">
        <Eyebrow variant={dark ? "light" : "default"}>{title}</Eyebrow>
        <div style={{ marginTop: "var(--space-8)" }}>{children}</div>
      </div>
    </section>
  );
}

/* ── Row yardımcı ── */
function Row({ children, gap = "var(--space-4)" }: { children: React.ReactNode; gap?: string }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap,
      }}
    >
      {children}
    </div>
  );
}

export default function PrimitivesPage() {
  const isRealProduction = process.env.VERCEL_ENV === "production";
  if (isRealProduction) notFound();

  return (
    <div style={{ minHeight: "100dvh", backgroundColor: "var(--color-bg)" }}>
      {/* ── PAGE HEADER ── */}
      <header
        style={{
          backgroundColor: "var(--color-anthracite)",
          padding: "var(--space-16) 0 var(--space-20)",
          position: "relative",
          overflow: "hidden",
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
            Primitives
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-xl)",
              color: "var(--color-ink-mute)",
              marginTop: "var(--space-4)",
            }}
          >
            Button · Input · Label · Eyebrow · ContentNote
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-sm)",
              color: "var(--color-ink-soft)",
              marginTop: "var(--space-6)",
              fontStyle: "normal",
            }}
          >
            Türkçe karakter testi: {TEST_SENTENCE}
          </p>
        </div>
      </header>

      <main>
        {/* ════════════════════════════════
            EYEBROW
        ════════════════════════════════ */}
        <DevSection title="Eyebrow — Section Label">
          <Row gap="var(--space-8)">
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-sm)",
                  color: "var(--color-ink-mute)",
                  marginBottom: "var(--space-3)",
                }}
              >
                default (açık zemin)
              </p>
              <Eyebrow>Ege'nin Eğitim Omurgası</Eyebrow>
            </div>
            <div
              style={{
                backgroundColor: "var(--color-anthracite)",
                padding: "var(--space-4) var(--space-6)",
                borderRadius: "var(--radius-sm)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-sm)",
                  color: "var(--color-ink-soft)",
                  marginBottom: "var(--space-3)",
                }}
              >
                light (koyu zemin)
              </p>
              <Eyebrow variant="light">Uluslararası Başarılar</Eyebrow>
            </div>
          </Row>
        </DevSection>

        {/* ════════════════════════════════
            LABEL
        ════════════════════════════════ */}
        <DevSection title="Label — Form Label">
          <Row gap="var(--space-8)">
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-sm)",
                  color: "var(--color-ink-mute)",
                  marginBottom: "var(--space-2)",
                }}
              >
                Opsiyonel
              </p>
              <Label htmlFor="demo-optional">Ad Soyad</Label>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-sm)",
                  color: "var(--color-ink-mute)",
                  marginBottom: "var(--space-2)",
                }}
              >
                Zorunlu
              </p>
              <Label htmlFor="demo-required" required>
                E-posta Adresi
              </Label>
            </div>
          </Row>
        </DevSection>

        {/* ════════════════════════════════
            BUTTON — 4 variant × 3 size
        ════════════════════════════════ */}
        <DevSection title="Button — 4 Variant × 3 Size">
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            {(["primary", "outline", "ghost"] as const).map((variant) => (
              <div key={variant}>
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
                  {variant}
                </p>
                <Row>
                  {(["sm", "md", "lg"] as const).map((size) => (
                    <Button key={size} variant={variant} size={size}>
                      {size === "sm" ? "Küçük" : size === "md" ? "Orta" : "Büyük"}
                    </Button>
                  ))}
                </Row>
              </div>
            ))}

            {/* outline-light — koyu zemin üzerinde */}
            <div
              style={{
                backgroundColor: "var(--color-anthracite)",
                padding: "var(--space-8)",
                borderRadius: "var(--radius-sm)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-xs)",
                  color: "var(--color-ink-soft)",
                  marginBottom: "var(--space-3)",
                  textTransform: "uppercase",
                  letterSpacing: "var(--letter-spacing-label)",
                }}
              >
                outline-light (koyu zemin)
              </p>
              <Row>
                {(["sm", "md", "lg"] as const).map((size) => (
                  <Button key={size} variant="outline-light" size={size}>
                    {size === "sm" ? "Küçük" : size === "md" ? "Orta" : "Büyük"}
                  </Button>
                ))}
              </Row>
            </div>
          </div>
        </DevSection>

        {/* ════════════════════════════════
            BUTTON — States
        ════════════════════════════════ */}
        <DevSection title="Button — States">
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-sm)",
                  color: "var(--color-ink-mute)",
                  marginBottom: "var(--space-3)",
                }}
              >
                Icon sağ, Icon sol
              </p>
              <Row>
                <Button variant="primary" icon={<i className="bx bx-right-arrow-alt" />}>
                  Devamını oku
                </Button>
                <Button variant="outline" iconLeft={<i className="bx bx-download" />}>
                  Broşür indir
                </Button>
                <Button variant="ghost" icon={<i className="bx bx-right-arrow-alt" />}>
                  Kampüsleri gör
                </Button>
              </Row>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-sm)",
                  color: "var(--color-ink-mute)",
                  marginBottom: "var(--space-3)",
                }}
              >
                Loading, Disabled
              </p>
              <Row>
                <Button variant="primary" loading>
                  Gönder
                </Button>
                <Button variant="primary" disabled>
                  Devre dışı
                </Button>
                <Button variant="outline" disabled>
                  Devre dışı
                </Button>
              </Row>
            </div>
          </div>
        </DevSection>

        {/* ════════════════════════════════
            INPUT
        ════════════════════════════════ */}
        <DevSection title="Input — States">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "var(--space-6)",
              maxWidth: "860px",
            }}
          >
            <Input label="Ad Soyad" placeholder="Kocatürk öğrencisi" />
            <Input
              label="E-posta"
              type="email"
              required
              placeholder="ornek@okul.com"
              defaultValue="yanlis-email"
              error="Geçersiz e-posta adresi girdiniz"
            />
            <Input
              label="Arama"
              placeholder={`${TEST_SENTENCE.slice(0, 32)}\u2026`}
              icon={<i className="bx bx-search" />}
              iconPosition="left"
            />
            <Input
              label="Parola"
              type="password"
              placeholder="Parolanız"
              icon={<i className="bx bx-lock" />}
              iconPosition="right"
            />
            <Input label="Devre dışı" disabled defaultValue="Düzenlenemez" />
          </div>
        </DevSection>

        {/* ════════════════════════════════
            CONTENT NOTE — Inline
        ════════════════════════════════ */}
        <DevSection title="ContentNote — Inline (TBA Badge)">
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            {(["tba", "pending", "review"] as const).map((status) => (
              <p
                key={status}
                style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-lg)" }}
              >
                Bu bölüm için <ContentNote type="text" variant="inline" status={status} /> içerik
                bekleniyor — {TEST_SENTENCE}
              </p>
            ))}
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-lg)" }}>
              Fotoğraf: <ContentNote type="photo" variant="inline" /> · Video:{" "}
              <ContentNote type="video" variant="inline" /> · Veri:{" "}
              <ContentNote type="data" variant="inline" />
            </p>
          </div>
        </DevSection>

        {/* ════════════════════════════════
            CONTENT NOTE — Block (light)
        ════════════════════════════════ */}
        <DevSection title="ContentNote — Block (açık zemin)">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "var(--space-4)",
            }}
          >
            <ContentNote
              type="photo"
              variant="block"
              description="Hero kampüs drone shot — Manisa Turgutlu"
            />
            <ContentNote type="video" variant="block" description="Okul tanıtım videosu 2–3 dk." />
            <ContentNote
              type="text"
              variant="block"
              status="pending"
              description="Yönetim biyografisi 3 paragraf"
            />
            <ContentNote
              type="testimonial"
              variant="photo-slot"
              description="Veli yorumu + avatar (KVKK onayı sonrası)"
            />
          </div>
        </DevSection>

        {/* ════════════════════════════════
            CONTENT NOTE — Block (dark)
        ════════════════════════════════ */}
        <section
          style={{
            backgroundColor: "var(--color-anthracite)",
            padding: "var(--space-16) 0",
          }}
        >
          <div className="wrap">
            <Eyebrow variant="light">ContentNote — Block (koyu zemin)</Eyebrow>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: "var(--space-4)",
                marginTop: "var(--space-8)",
              }}
            >
              <ContentNote
                type="photo"
                variant="block"
                description="Hero görsel — koyu section için"
                dark
              />
              <ContentNote
                type="data"
                variant="block"
                status="review"
                description="İstatistik verisi inceleniyor"
                dark
              />
              <ContentNote
                type="testimonial"
                variant="block"
                description="Avatar: KVKK onayı alınana kadar initials gösterilir"
                dark
              />
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            TÜRKÇE KARAKTER TEST
        ════════════════════════════════ */}
        <DevSection title="Türkçe Karakter Kontrolü">
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {[
              "var(--text-display-md)",
              "var(--text-display-sm)",
              "var(--text-xl)",
              "var(--text-lg)",
              "var(--text-md)",
              "var(--text-sm)",
            ].map((size) => (
              <p
                key={size}
                style={{
                  fontFamily: size.includes("display") ? "var(--font-display)" : "var(--font-body)",
                  fontSize: size,
                  fontWeight: size.includes("display") ? 600 : 400,
                  color: "var(--color-ink)",
                  lineHeight: 1.3,
                }}
              >
                {TEST_SENTENCE}
              </p>
            ))}
          </div>
        </DevSection>
      </main>
    </div>
  );
}
