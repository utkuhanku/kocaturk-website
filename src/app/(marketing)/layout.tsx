import type { ReactNode } from "react";

/**
 * Marketing Layout — Pazarlama sayfaları için kabuk
 *
 * Bu layout tüm (marketing) route grubu sayfalarını sarar.
 * Header ve Footer Faz 2'de burada yerini alacak:
 *   - <SiteHeader /> — navigasyon çubuğu
 *   - <SiteFooter /> — footer (dark section)
 *
 * @see .docs/10-ROADMAP.md Faz 2
 */

/* TODO Faz 2: SiteHeader import edilecek */
/* TODO Faz 2: SiteFooter import edilecek */

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* TODO Faz 2: <SiteHeader /> */}
      <main>{children}</main>
      {/* TODO Faz 2: <SiteFooter /> */}
    </>
  );
}
