/**
 * /dev/components/motion — Design System Motion Demo
 *
 * Gösterilen: Reveal (scroll stagger), NumberCounter (easeOutCubic animasyon)
 * Production'da erişilemez — Faz 8 lansman öncesi /dev/ klasörü tamamen silinecek.
 */

import { notFound } from "next/navigation";
import { NumberCounter } from "@/components/number-counter";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";

/* ── Bölüm başlığı yardımcısı ── */
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

export default function MotionPage() {
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
            Motion
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-xl)",
              color: "var(--color-ink-mute)",
              marginTop: "var(--space-4)",
            }}
          >
            Reveal · NumberCounter
          </p>
        </div>
      </header>

      <main>
        {/* ════════════════════════════════
            REVEAL — Scroll stagger
        ════════════════════════════════ */}
        <DevSection title="Reveal — Scroll Stagger (delay 1–5)">
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-sm)",
              color: "var(--color-ink-mute)",
              marginBottom: "var(--space-8)",
            }}
          >
            Aşağı kaydır — kutular sırayla fade-in olur. Her kutu bir sonrakinden{" "}
            <strong>stagger delay</strong> kadar gecikir.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-4)",
            }}
          >
            {([1, 2, 3, 4, 5] as const).map((d) => (
              <Reveal key={d} delay={d}>
                <div
                  style={{
                    backgroundColor: "var(--color-surface-2)",
                    border: `var(--border-thin) solid var(--color-line)`,
                    borderRadius: "var(--radius-sm)",
                    padding: "var(--space-6) var(--space-8)",
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-4)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--text-display-sm)",
                      fontWeight: 700,
                      color: "var(--color-orange)",
                      lineHeight: 1,
                      minWidth: "2ch",
                    }}
                  >
                    {d}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "var(--text-md)",
                        fontWeight: 600,
                        color: "var(--color-ink)",
                      }}
                    >
                      delay-{d} — stagger-{d} gecikmeli
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "var(--text-sm)",
                        color: "var(--color-ink-mute)",
                        marginTop: "var(--space-1)",
                      }}
                    >
                      Çağdaş öğretmenlerimiz, üstün başarılı öğrencilerimizle Ege'nin ışığında
                      geleceği inşa ediyor.
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </DevSection>

        {/* ════════════════════════════════
            NUMBER COUNTER
        ════════════════════════════════ */}
        <DevSection title="NumberCounter — easeOutCubic Animasyon">
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-sm)",
              color: "var(--color-ink-mute)",
              marginBottom: "var(--space-8)",
            }}
          >
            Viewport'a girince animasyon başlar. tr-TR locale — nokta binlik ayraç, virgül ondalık.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "var(--space-8)",
            }}
          >
            {/* Öğrenci sayısı */}
            <Reveal>
              <div
                style={{
                  borderLeft: `3px solid var(--color-orange)`,
                  paddingLeft: "var(--space-4)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-display-md)",
                    fontWeight: 700,
                    color: "var(--color-ink)",
                    lineHeight: 1,
                  }}
                >
                  <NumberCounter target={4015} suffix="+" />
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-xs)",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "var(--letter-spacing-label)",
                    color: "var(--color-ink-mute)",
                    marginTop: "var(--space-2)",
                  }}
                >
                  Öğrenci
                </p>
              </div>
            </Reveal>

            {/* Kampüs sayısı */}
            <Reveal delay={1}>
              <div
                style={{
                  borderLeft: `3px solid var(--color-orange)`,
                  paddingLeft: "var(--space-4)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-display-md)",
                    fontWeight: 700,
                    color: "var(--color-ink)",
                    lineHeight: 1,
                  }}
                >
                  <NumberCounter target={23} />
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-xs)",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "var(--letter-spacing-label)",
                    color: "var(--color-ink-mute)",
                    marginTop: "var(--space-2)",
                  }}
                >
                  Kampüs
                </p>
              </div>
            </Reveal>

            {/* Öğretmen sayısı */}
            <Reveal delay={2}>
              <div
                style={{
                  borderLeft: `3px solid var(--color-orange)`,
                  paddingLeft: "var(--space-4)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-display-md)",
                    fontWeight: 700,
                    color: "var(--color-ink)",
                    lineHeight: 1,
                  }}
                >
                  <NumberCounter target={246} />
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-xs)",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "var(--letter-spacing-label)",
                    color: "var(--color-ink-mute)",
                    marginTop: "var(--space-2)",
                  }}
                >
                  Öğretmen
                </p>
              </div>
            </Reveal>

            {/* Başarı oranı */}
            <Reveal delay={3}>
              <div
                style={{
                  borderLeft: `3px solid var(--color-orange)`,
                  paddingLeft: "var(--space-4)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-display-md)",
                    fontWeight: 700,
                    color: "var(--color-ink)",
                    lineHeight: 1,
                  }}
                >
                  <NumberCounter target={98} suffix="%" />
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-xs)",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "var(--letter-spacing-label)",
                    color: "var(--color-ink-mute)",
                    marginTop: "var(--space-2)",
                  }}
                >
                  Başarı Oranı
                </p>
              </div>
            </Reveal>
          </div>
        </DevSection>

        {/* ════════════════════════════════
            TIMING TOKEN TABLOSU
        ════════════════════════════════ */}
        <DevSection title="Timing Tokens — Referans">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr 1fr",
              gap: "0",
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-sm)",
              maxWidth: "640px",
            }}
          >
            {[
              ["Token", "Değer", "Kullanım"],
              ["--dur-instant", "0ms", "JS toggle — animasyon yok"],
              ["--dur-fast", "150ms", "Hover, micro-feedback"],
              ["--dur-base", "250ms", "Modal aç/kapat, tab geçiş"],
              ["--dur-slow", "400ms", "Panel slide, accordion"],
              ["--dur-slower", "600ms", "Hero giriş"],
              ["--dur-slowest", "800ms", "Reveal fade-in"],
              ["--stagger-1", "60ms", "Reveal delay-1"],
              ["--stagger-2", "120ms", "Reveal delay-2"],
              ["--stagger-3", "180ms", "Reveal delay-3"],
              ["--stagger-4", "240ms", "Reveal delay-4"],
              ["--stagger-5", "300ms", "Reveal delay-5"],
            ].map(([token, value, usage], i) => (
              <div
                key={token}
                style={{
                  display: "contents",
                }}
              >
                <p
                  style={{
                    padding: "var(--space-3) var(--space-4)",
                    borderBottom: `var(--border-thin) solid var(--color-line)`,
                    backgroundColor: i === 0 ? "var(--color-surface-2)" : "transparent",
                    fontWeight: i === 0 ? 600 : 400,
                    color: i === 0 ? "var(--color-ink)" : "var(--color-orange)",
                    fontFamily: i === 0 ? "var(--font-body)" : "monospace",
                    fontSize: "var(--text-xs)",
                  }}
                >
                  {token}
                </p>
                <p
                  style={{
                    padding: "var(--space-3) var(--space-4)",
                    borderBottom: `var(--border-thin) solid var(--color-line)`,
                    backgroundColor: i === 0 ? "var(--color-surface-2)" : "transparent",
                    fontWeight: i === 0 ? 600 : 400,
                    color: "var(--color-ink)",
                  }}
                >
                  {value}
                </p>
                <p
                  style={{
                    padding: "var(--space-3) var(--space-4)",
                    borderBottom: `var(--border-thin) solid var(--color-line)`,
                    backgroundColor: i === 0 ? "var(--color-surface-2)" : "transparent",
                    fontWeight: i === 0 ? 600 : 400,
                    color: i === 0 ? "var(--color-ink)" : "var(--color-ink-mute)",
                  }}
                >
                  {usage}
                </p>
              </div>
            ))}
          </div>
        </DevSection>

        {/* ════════════════════════════════
            REDUCED MOTION BİLGİ NOTU
        ════════════════════════════════ */}
        <DevSection title="Reduced Motion Desteği">
          <div
            style={{
              backgroundColor: "var(--color-surface-2)",
              border: `var(--border-thin) solid var(--color-line)`,
              borderRadius: "var(--radius-sm)",
              padding: "var(--space-6) var(--space-8)",
              maxWidth: "640px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-md)",
                fontWeight: 600,
                color: "var(--color-ink)",
                marginBottom: "var(--space-3)",
              }}
            >
              prefers-reduced-motion: reduce
            </p>
            <ul
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-sm)",
                color: "var(--color-ink-mute)",
                lineHeight: 1.7,
                paddingLeft: "var(--space-4)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-2)",
              }}
            >
              <li>
                <strong style={{ color: "var(--color-ink)" }}>Reveal:</strong> IntersectionObserver
                atlanır, is-in class anında eklenir — içerik hemen görünür.
              </li>
              <li>
                <strong style={{ color: "var(--color-ink)" }}>NumberCounter:</strong> RAF animasyon
                çalışmaz, hedef değer (örn. 4.015+) doğrudan gösterilir.
              </li>
              <li>
                <strong style={{ color: "var(--color-ink)" }}>Button / genel geçişler:</strong>{" "}
                globals.css'teki{" "}
                <code
                  style={{
                    fontFamily: "monospace",
                    fontSize: "var(--text-xs)",
                    backgroundColor: "var(--color-line)",
                    padding: "1px 4px",
                    borderRadius: "3px",
                  }}
                >
                  @media (prefers-reduced-motion: reduce)
                </code>{" "}
                bloğu tüm transition/animation'ları devre dışı bırakır.
              </li>
            </ul>
          </div>
        </DevSection>
      </main>
    </div>
  );
}
