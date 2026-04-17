/**
 * /dev/components/layout — SiteHeader + SiteFooter izole preview
 *
 * Production'da gizli (VERCEL_ENV guard).
 */

import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/header";

export default function LayoutDevPage() {
  if (process.env.VERCEL_ENV === "production") notFound();

  return (
    <div style={{ minHeight: "100dvh", backgroundColor: "var(--color-bg)" }}>
      <SiteHeader />
      <div
        style={{
          padding: "var(--space-20) 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "var(--space-6)",
          textAlign: "center",
        }}
      >
        <span className="eyebrow">Layout Preview</span>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-display-md)",
            color: "var(--color-ink)",
          }}
        >
          SiteHeader + SiteFooter
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-lg)",
            color: "var(--color-ink-mute)",
          }}
        >
          Scroll aşağı → header compact mode. Hamburger → mobile overlay.
        </p>
      </div>
      <SiteFooter />
    </div>
  );
}
