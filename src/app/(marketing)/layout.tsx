/**
 * MarketingLayout — SiteHeader + SiteFooter wrapper
 *
 * @see .docs/06-COMPONENT-LIBRARY.md#41-marketinglayout
 *
 * Route group (marketing) — URL'yi etkilemez.
 * Tüm pazarlama sayfaları bu layout'u kullanır: /, /kampusler, /egitim, vs.
 */

import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/header";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
