/**
 * Ana Sayfa — Geçici Placeholder
 *
 * Faz 2'de bu dosya tamamen yeniden yazılacak.
 * @see .docs/10-ROADMAP.md Faz 2 — Ana Sayfa
 */

export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--color-bg)",
        padding: "var(--space-10)",
        textAlign: "center",
      }}
    >
      <span className="eyebrow" style={{ marginBottom: "var(--space-6)" }}>
        Kocatürk Okulları
      </span>

      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-display-md)",
          fontWeight: "600",
          lineHeight: 1.05,
          letterSpacing: "-0.025em",
          color: "var(--color-ink)",
          maxWidth: "var(--container-narrow)",
          marginBottom: "var(--space-6)",
        }}
      >
        Köklerimiz burada,{" "}
        <em style={{ fontStyle: "normal", color: "var(--color-orange)" }}>ufkumuz dünyada.</em>
      </h1>

      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-xl)",
          color: "var(--color-ink-mute)",
          lineHeight: 1.6,
          maxWidth: "var(--container-narrow)",
          marginBottom: "var(--space-4)",
        }}
      >
        Ana sayfa Faz 2&apos;de inşa edilecek.
      </p>

      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-sm)",
          color: "var(--color-ink-soft)",
        }}
      >
        Geliştirici modu için{" "}
        <a
          href="/dev/font-test"
          style={{ color: "var(--color-orange)", textDecoration: "underline" }}
        >
          /dev/font-test
        </a>{" "}
        sayfasına git.
      </p>
    </div>
  );
}
