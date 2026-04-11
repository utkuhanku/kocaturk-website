import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Font Test · Dev",
  robots: { index: false, follow: false },
};

/* =========================================================
   Production guard — module seviyesinde değil, component içinde
   ========================================================= */

/* =========================================================
   Sabitler
   ========================================================= */

const SENTENCE =
  "Çağdaş öğretmenlerimiz, üstün başarılı öğrencilerimizle Ege\u2019nin ışığında geleceği inşa ediyor.";

const TR_CHARS = "ç Ç ğ Ğ ı I İ ö Ö ş Ş ü Ü";

const DISPLAY_SCALE = [
  { token: "var(--text-display-2xl)", label: "display-2xl" },
  { token: "var(--text-display-xl)", label: "display-xl" },
  { token: "var(--text-display-lg)", label: "display-lg" },
  { token: "var(--text-display-md)", label: "display-md" },
  { token: "var(--text-display-sm)", label: "display-sm" },
];

const BODY_SCALE = [
  { token: "var(--text-2xl)", label: "text-2xl · 20px" },
  { token: "var(--text-xl)", label: "text-xl · 18px" },
  { token: "var(--text-lg)", label: "text-lg · 16px" },
  { token: "var(--text-md)", label: "text-md · 14px" },
  { token: "var(--text-sm)", label: "text-sm · 13px" },
  { token: "var(--text-xs)", label: "text-xs · 12px" },
  { token: "var(--text-2xs)", label: "text-2xs · 11px" },
  { token: "var(--text-3xs)", label: "text-3xs · 10px" },
];

const WEIGHTS = [
  { value: "400", label: "400 Regular" },
  { value: "500", label: "500 Medium" },
  { value: "600", label: "600 SemiBold" },
  { value: "700", label: "700 Bold" },
];

/* =========================================================
   Sayfa
   ========================================================= */

export default function FontTestPage() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  return (
    <div
      style={{
        backgroundColor: "var(--color-bg)",
        color: "var(--color-ink)",
        minHeight: "100dvh",
        padding: "var(--space-16) var(--space-10)",
      }}
    >
      {/* Başlık */}
      <header
        style={{
          borderBottom: "var(--border-thin) solid var(--color-line-strong)",
          paddingBottom: "var(--space-8)",
          marginBottom: "var(--space-12)",
        }}
      >
        <p className="eyebrow" style={{ marginBottom: "var(--space-4)" }}>
          Geliştirici — Yalnızca development modda görünür
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-display-sm)",
            fontWeight: "700",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            marginBottom: "var(--space-3)",
          }}
        >
          Font Test Sayfası
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-md)",
            color: "var(--color-ink-mute)",
          }}
        >
          Bricolage Grotesque (sol) · Manrope (sağ) · Türkçe karakter doğrulaması
        </p>
      </header>

      {/* ===== BÖLÜM 1: Türkçe Karakter İzolasyonu ===== */}
      <section style={{ marginBottom: "var(--space-20)" }}>
        <p className="eyebrow" style={{ marginBottom: "var(--space-6)" }}>
          Türkçe Karakter İzolasyonu
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--space-8)",
          }}
        >
          {/* Bricolage */}
          <div
            style={{
              background: "var(--color-surface)",
              border: "var(--border-thin) solid var(--color-line)",
              borderRadius: "var(--radius-sm)",
              padding: "var(--space-8)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-xs)",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "var(--letter-spacing-eyebrow)",
                color: "var(--color-orange)",
                marginBottom: "var(--space-4)",
              }}
            >
              Bricolage Grotesque
            </p>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-display-md)",
                fontWeight: "700",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              {TR_CHARS}
            </p>
          </div>
          {/* Manrope */}
          <div
            style={{
              background: "var(--color-surface)",
              border: "var(--border-thin) solid var(--color-line)",
              borderRadius: "var(--radius-sm)",
              padding: "var(--space-8)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-xs)",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "var(--letter-spacing-eyebrow)",
                color: "var(--color-orange)",
                marginBottom: "var(--space-4)",
              }}
            >
              Manrope
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-display-md)",
                fontWeight: "700",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              {TR_CHARS}
            </p>
          </div>
        </div>
      </section>

      {/* ===== BÖLÜM 2: Display Scale ===== */}
      <section style={{ marginBottom: "var(--space-20)" }}>
        <p className="eyebrow" style={{ marginBottom: "var(--space-6)" }}>
          Display Scale — Bricolage Grotesque (sol) · Manrope (sağ)
        </p>
        {DISPLAY_SCALE.map(({ token, label }) => (
          <div
            key={label}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--space-6)",
              marginBottom: "var(--space-12)",
              paddingBottom: "var(--space-12)",
              borderBottom: "var(--border-thin) solid var(--color-line)",
            }}
          >
            <div>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-xs)",
                  fontWeight: "600",
                  color: "var(--color-ink-mute)",
                  textTransform: "uppercase",
                  letterSpacing: "var(--letter-spacing-label)",
                  marginBottom: "var(--space-3)",
                }}
              >
                {label}
              </span>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: token,
                  fontWeight: "600",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                }}
              >
                {SENTENCE}
              </p>
            </div>
            <div>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-xs)",
                  fontWeight: "600",
                  color: "var(--color-ink-mute)",
                  textTransform: "uppercase",
                  letterSpacing: "var(--letter-spacing-label)",
                  marginBottom: "var(--space-3)",
                }}
              >
                {label} · Manrope
              </span>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: token,
                  fontWeight: "600",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                }}
              >
                {SENTENCE}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* ===== BÖLÜM 3: Body Scale ===== */}
      <section style={{ marginBottom: "var(--space-20)" }}>
        <p className="eyebrow" style={{ marginBottom: "var(--space-6)" }}>
          Body Scale — Bricolage Grotesque (sol) · Manrope (sağ)
        </p>
        {BODY_SCALE.map(({ token, label }) => (
          <div
            key={label}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--space-6)",
              marginBottom: "var(--space-8)",
              paddingBottom: "var(--space-8)",
              borderBottom: "var(--border-thin) solid var(--color-line)",
            }}
          >
            <div>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-xs)",
                  fontWeight: "600",
                  color: "var(--color-ink-mute)",
                  textTransform: "uppercase",
                  letterSpacing: "var(--letter-spacing-label)",
                  marginBottom: "var(--space-2)",
                }}
              >
                {label}
              </span>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: token,
                  fontWeight: "400",
                  lineHeight: 1.65,
                }}
              >
                {SENTENCE}
              </p>
            </div>
            <div>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-xs)",
                  fontWeight: "600",
                  color: "var(--color-ink-mute)",
                  textTransform: "uppercase",
                  letterSpacing: "var(--letter-spacing-label)",
                  marginBottom: "var(--space-2)",
                }}
              >
                {label} · Manrope
              </span>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: token,
                  fontWeight: "400",
                  lineHeight: 1.65,
                }}
              >
                {SENTENCE}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* ===== BÖLÜM 4: Weight Rampası ===== */}
      <section style={{ marginBottom: "var(--space-20)" }}>
        <p className="eyebrow" style={{ marginBottom: "var(--space-6)" }}>
          Weight Rampası
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--space-8)",
          }}
        >
          {/* Bricolage weights */}
          <div
            style={{
              background: "var(--color-surface)",
              border: "var(--border-thin) solid var(--color-line)",
              borderRadius: "var(--radius-sm)",
              padding: "var(--space-8)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-xs)",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "var(--letter-spacing-eyebrow)",
                color: "var(--color-orange)",
                marginBottom: "var(--space-6)",
              }}
            >
              Bricolage Grotesque
            </p>
            {WEIGHTS.map(({ value, label }) => (
              <div
                key={value}
                style={{
                  marginBottom: "var(--space-4)",
                  paddingBottom: "var(--space-4)",
                  borderBottom: "var(--border-thin) solid var(--color-line)",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-2xs)",
                    color: "var(--color-ink-mute)",
                    marginBottom: "var(--space-1)",
                  }}
                >
                  {label}
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-xl)",
                    fontWeight: value,
                    lineHeight: 1.4,
                  }}
                >
                  {SENTENCE}
                </p>
              </div>
            ))}
          </div>

          {/* Manrope weights */}
          <div
            style={{
              background: "var(--color-surface)",
              border: "var(--border-thin) solid var(--color-line)",
              borderRadius: "var(--radius-sm)",
              padding: "var(--space-8)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-xs)",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "var(--letter-spacing-eyebrow)",
                color: "var(--color-orange)",
                marginBottom: "var(--space-6)",
              }}
            >
              Manrope
            </p>
            {WEIGHTS.map(({ value, label }) => (
              <div
                key={value}
                style={{
                  marginBottom: "var(--space-4)",
                  paddingBottom: "var(--space-4)",
                  borderBottom: "var(--border-thin) solid var(--color-line)",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-2xs)",
                    color: "var(--color-ink-mute)",
                    marginBottom: "var(--space-1)",
                  }}
                >
                  {label}
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-xl)",
                    fontWeight: value,
                    lineHeight: 1.4,
                  }}
                >
                  {SENTENCE}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BÖLÜM 5: Dark Section Örneği ===== */}
      <section
        className="dark-section"
        style={{
          padding: "var(--space-16) var(--space-10)",
          borderRadius: "var(--radius-lg)",
          marginBottom: "var(--space-20)",
        }}
      >
        <div style={{ position: "relative", zIndex: 1 }}>
          <p className="eyebrow light" style={{ marginBottom: "var(--space-6)" }}>
            Dark Section — Atmosfer Testi
          </p>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-display-md)",
              fontWeight: "600",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              color: "#ffffff",
              marginBottom: "var(--space-4)",
            }}
          >
            {TR_CHARS}
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-xl)",
              color: "var(--color-peach)",
              lineHeight: 1.6,
            }}
          >
            {SENTENCE}
          </p>
          <p style={{ marginTop: "var(--space-4)" }}>
            <span className="tba dark">tba dark örneği</span>
          </p>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer
        style={{
          borderTop: "var(--border-thin) solid var(--color-line)",
          paddingTop: "var(--space-6)",
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-sm)",
          color: "var(--color-ink-mute)",
        }}
      >
        Bu sayfa yalnızca development ortamında görünür. Production build'inde 404 döner.
      </footer>
    </div>
  );
}
