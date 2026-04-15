/**
 * /dev/components/photo-slots — Design System PhotoSlot Demo
 *
 * Gösterilen: 6 aspect ratio, 5 category, dark/light variant, photo/video type,
 * ContentNote photo-slot entegrasyonu, Faz 5 kılavuzu.
 * Production'da erişilemez — Faz 8 lansman öncesi /dev/ klasörü tamamen silinecek.
 */

import { notFound } from "next/navigation";
import type { AspectRatio, SlotCategory } from "@/components/photo-slot";
import { PhotoSlot } from "@/components/photo-slot";
import { ContentNote } from "@/components/ui/content-note";
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

export default function PhotoSlotsPage() {
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
            PhotoSlot
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-xl)",
              color: "var(--color-ink-mute)",
              marginTop: "var(--space-4)",
            }}
          >
            6 Aspect Ratio · 5 Category · dark / light · photo / video
          </p>
        </div>
      </header>

      <main>
        {/* ════════════════════════════════
            6 ASPECT RATIO
        ════════════════════════════════ */}
        <DevSection title="Aspect Ratio — 6 Format">
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-sm)",
              color: "var(--color-ink-mute)",
              marginBottom: "var(--space-8)",
            }}
          >
            Her slot oranı CSS{" "}
            <code
              style={{
                fontFamily: "monospace",
                fontSize: "var(--text-xs)",
                backgroundColor: "var(--color-line)",
                padding: "1px 4px",
                borderRadius: "3px",
              }}
            >
              aspect-ratio
            </code>{" "}
            inline style ile tanımlanır — utilities.css'teki{" "}
            <code
              style={{
                fontFamily: "monospace",
                fontSize: "var(--text-xs)",
                backgroundColor: "var(--color-line)",
                padding: "1px 4px",
                borderRadius: "3px",
              }}
            >
              .photo-slot
            </code>{" "}
            sınıfı genişliği %100 alır.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "var(--space-4)",
              alignItems: "start",
            }}
          >
            {(["16:9", "4:3", "1:1", "3:4", "4:5", "21:9"] as const).map((ratio: AspectRatio) => (
              <div key={ratio}>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-xs)",
                    fontWeight: 600,
                    color: "var(--color-ink-mute)",
                    marginBottom: "var(--space-2)",
                    textTransform: "uppercase",
                    letterSpacing: "var(--letter-spacing-label)",
                  }}
                >
                  {ratio}
                </p>
                <PhotoSlot
                  aspectRatio={ratio}
                  slotId={`demo-${ratio.replace(":", "x")}`}
                  category="GALLERY"
                  type="photo"
                  title={`${ratio} oran örneği`}
                  description="Aspect ratio demo"
                />
              </div>
            ))}
          </div>
        </DevSection>

        {/* ════════════════════════════════
            5 CATEGORY
        ════════════════════════════════ */}
        <DevSection title="Category — 5 Kategori">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "var(--space-6)",
              alignItems: "start",
            }}
          >
            {(
              [
                {
                  category: "HERO" as SlotCategory,
                  title: "Manisa Turgutlu kampüsü drone çekimi",
                  description: "Hero görseli — 1920×1080px min., LCP priority",
                  aspectRatio: "16:9" as AspectRatio,
                },
                {
                  category: "FEATURED" as SlotCategory,
                  title: "Roma Fibonacci Robot Olimpiyatı 2024",
                  description: "Öne çıkan başarı görseli — 4:3 veya 16:9",
                  aspectRatio: "4:3" as AspectRatio,
                },
                {
                  category: "GALLERY" as SlotCategory,
                  title: "Kocatürk öğrencileri laboratuvar çalışması",
                  description: "Galeri kartı — 16:9 grid içi",
                  aspectRatio: "16:9" as AspectRatio,
                },
                {
                  category: "PORTRAIT" as SlotCategory,
                  title: "Beren Baykal — Türkiye Jimnastik 1.si",
                  description: "Başarı kartı portre — 3:4 dikey",
                  aspectRatio: "3:4" as AspectRatio,
                },
                {
                  category: "CAMPUS" as SlotCategory,
                  title: "Gaziemir Anaokulu giriş cephesi",
                  description: "Kampüs kart görseli — 4:3",
                  aspectRatio: "4:3" as AspectRatio,
                },
              ] as const
            ).map(({ category, title, description, aspectRatio }) => (
              <div key={category}>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-xs)",
                    fontWeight: 600,
                    color: "var(--color-ink-mute)",
                    marginBottom: "var(--space-2)",
                    textTransform: "uppercase",
                    letterSpacing: "var(--letter-spacing-label)",
                  }}
                >
                  {category}
                </p>
                <PhotoSlot
                  aspectRatio={aspectRatio}
                  slotId={`demo-${category.toLowerCase()}`}
                  category={category}
                  type="photo"
                  title={title}
                  description={description}
                />
              </div>
            ))}
          </div>
        </DevSection>

        {/* ════════════════════════════════
            DARK / LIGHT VARIANT
        ════════════════════════════════ */}
        <DevSection title="Variant — dark / light Karşılaştırma">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--space-6)",
              maxWidth: "720px",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-xs)",
                  fontWeight: 600,
                  color: "var(--color-ink-mute)",
                  marginBottom: "var(--space-2)",
                  textTransform: "uppercase",
                  letterSpacing: "var(--letter-spacing-label)",
                }}
              >
                dark (default)
              </p>
              <PhotoSlot
                aspectRatio="16:9"
                slotId="demo-dark"
                category="HERO"
                type="photo"
                title="Koyu zemin varianti"
                description="Koyu section'lar için — anthracite bg"
                variant="dark"
              />
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-xs)",
                  fontWeight: 600,
                  color: "var(--color-ink-mute)",
                  marginBottom: "var(--space-2)",
                  textTransform: "uppercase",
                  letterSpacing: "var(--letter-spacing-label)",
                }}
              >
                light
              </p>
              <PhotoSlot
                aspectRatio="16:9"
                slotId="demo-light"
                category="FEATURED"
                type="photo"
                title="Açık zemin varianti"
                description="Açık section'lar için — surface-2 bg, orange border"
                variant="light"
              />
            </div>
          </div>
        </DevSection>

        {/* ════════════════════════════════
            PHOTO / VIDEO TYPE
        ════════════════════════════════ */}
        <DevSection title="Type — photo / video (Icon Farkı)">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--space-6)",
              maxWidth: "720px",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-xs)",
                  fontWeight: 600,
                  color: "var(--color-ink-mute)",
                  marginBottom: "var(--space-2)",
                  textTransform: "uppercase",
                  letterSpacing: "var(--letter-spacing-label)",
                }}
              >
                type="photo" — bx bx-image
              </p>
              <PhotoSlot
                aspectRatio="16:9"
                slotId="demo-photo-type"
                category="GALLERY"
                type="photo"
                title="Fotoğraf slot örneği"
                description="Statik görsel — Next.js Image ile değişecek"
                variant="light"
              />
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-xs)",
                  fontWeight: 600,
                  color: "var(--color-ink-mute)",
                  marginBottom: "var(--space-2)",
                  textTransform: "uppercase",
                  letterSpacing: "var(--letter-spacing-label)",
                }}
              >
                type="video" — bx bx-video
              </p>
              <PhotoSlot
                aspectRatio="16:9"
                slotId="demo-video-type"
                category="FEATURED"
                type="video"
                title="Okul tanıtım videosu 2–3 dk."
                description="Video embed — Faz 5'te Vimeo/YouTube player"
                variant="light"
              />
            </div>
          </div>
        </DevSection>

        {/* ════════════════════════════════
            CONTENT NOTE ENTEGRASYONU
        ════════════════════════════════ */}
        <DevSection title="ContentNote photo-slot Entegrasyonu">
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-sm)",
              color: "var(--color-ink-mute)",
              marginBottom: "var(--space-8)",
            }}
          >
            ContentNote variant="photo-slot" artık doğrudan PhotoSlot'a delegate eder. Props
            verilmezse default'lar devreye girer: aspectRatio="16:9", slotId="PLACEHOLDER",
            category="GALLERY".
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "var(--space-6)",
              alignItems: "start",
            }}
          >
            {/* Default props — primitives demo sayfasındaki testimonial gibi */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-xs)",
                  color: "var(--color-ink-mute)",
                  marginBottom: "var(--space-2)",
                }}
              >
                Default props (primitives regression testi)
              </p>
              <ContentNote
                type="testimonial"
                variant="photo-slot"
                description="Veli yorumu + avatar (KVKK onayı sonrası)"
              />
            </div>
            {/* Explicit props */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-xs)",
                  color: "var(--color-ink-mute)",
                  marginBottom: "var(--space-2)",
                }}
              >
                Explicit props (4:3, PORTRAIT, photo)
              </p>
              <ContentNote
                type="photo"
                variant="photo-slot"
                aspectRatio="4:3"
                slotId="content-note-veli-avatar"
                category="PORTRAIT"
                description="Veli portresi — KVKK onayı gerekli"
              />
            </div>
            {/* Video + dark */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-xs)",
                  color: "var(--color-ink-mute)",
                  marginBottom: "var(--space-2)",
                }}
              >
                Video + dark
              </p>
              <ContentNote
                type="video"
                variant="photo-slot"
                aspectRatio="16:9"
                slotId="content-note-tanitim-video"
                category="FEATURED"
                description="Tanıtım videosu — 2025 çekimi"
                dark
              />
            </div>
          </div>
        </DevSection>

        {/* ════════════════════════════════
            FAZ 5 KILAVUZU
        ════════════════════════════════ */}
        <DevSection title="Faz 5 Değişim Kılavuzu">
          <div
            style={{
              backgroundColor: "var(--color-surface-2)",
              border: `var(--border-thin) solid var(--color-line)`,
              borderRadius: "var(--radius-sm)",
              padding: "var(--space-6) var(--space-8)",
              maxWidth: "720px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-md)",
                fontWeight: 600,
                color: "var(--color-ink)",
                marginBottom: "var(--space-4)",
              }}
            >
              Bu placeholder'lar Faz 5'te gerçek Next.js Image ile değiştirilecek
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
                gap: "var(--space-3)",
              }}
            >
              <li>
                <strong style={{ color: "var(--color-ink)" }}>data-slot-id attribute:</strong> Her
                PhotoSlot'un benzersiz kimliği — Faz 5'te eşleştirme anahtarı olarak kullanılır.
              </li>
              <li>
                <strong style={{ color: "var(--color-ink)" }}>PhotoSlotReplacement type:</strong>{" "}
                <code
                  style={{
                    fontFamily: "monospace",
                    fontSize: "var(--text-xs)",
                    backgroundColor: "var(--color-line)",
                    padding: "1px 4px",
                    borderRadius: "3px",
                  }}
                >
                  src/types/photo-slot.ts
                </code>{" "}
                — Her slot için src, alt, width, height, priority tanımlanır.
              </li>
              <li>
                <strong style={{ color: "var(--color-ink)" }}>CI grep sayacı:</strong>{" "}
                <code
                  style={{
                    fontFamily: "monospace",
                    fontSize: "var(--text-xs)",
                    backgroundColor: "var(--color-line)",
                    padding: "1px 4px",
                    borderRadius: "3px",
                  }}
                >
                  grep -rn 'data-slot-id' src/
                </code>{" "}
                ile kalan placeholder sayılır — lansman öncesi sıfıra inmeli.
              </li>
              <li>
                <strong style={{ color: "var(--color-ink)" }}>LCP önceliği:</strong> HERO ve
                FEATURED category'deki slotlar için{" "}
                <code
                  style={{
                    fontFamily: "monospace",
                    fontSize: "var(--text-xs)",
                    backgroundColor: "var(--color-line)",
                    padding: "1px 4px",
                    borderRadius: "3px",
                  }}
                >
                  priority: true
                </code>{" "}
                ile değiştirilmeli (Lighthouse LCP skoru için).
              </li>
            </ul>
          </div>
        </DevSection>
      </main>
    </div>
  );
}
