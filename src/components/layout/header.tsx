/**
 * SiteHeader — Sticky üst navigasyon
 *
 * @see .docs/03-INFORMATION-ARCHITECTURE.md Bölüm 2
 * @see .docs/06-COMPONENT-LIBRARY.md#31-siteheader
 * @see src/components/layout/header.module.css
 *
 * 'use client' — scroll compact mode + mobile menu state + mega menu state
 * Scroll > 200px → .scrolled class → compact padding + border-bottom
 * Mega menu: activeMenu state + CSS visibility/opacity transition
 * Mobile: full screen overlay
 *
 * @example
 * <SiteHeader />
 */

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import styles from "./header.module.css";

type MegaMenuKey = "kurumsal" | "kampusler" | "egitim";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MegaMenuKey | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mega menu açık olduğunda body scroll kilitle
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const openMenu = (key: MegaMenuKey) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setActiveMenu(key);
  };

  const closeMenu = () => {
    closeTimerRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  return (
    <>
      <header className={cn(styles.header, scrolled && styles.scrolled)}>
        <div className={cn("wrap", styles.inner)}>
          {/* Logo */}
          <Link href="/" className={styles.logo} aria-label="Kocatürk Okulları — Ana Sayfa">
            <Image
              src="/logo-kocaturk.png"
              alt="Kocatürk Okulları"
              width={160}
              height={64}
              className={styles.logoImage}
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.nav} aria-label="Ana navigasyon">
            {/* Kurumsal */}
            <div
              role="none"
              className={styles.navItem}
              onMouseEnter={() => openMenu("kurumsal")}
              onMouseLeave={closeMenu}
            >
              <button
                type="button"
                className={styles.navLink}
                aria-haspopup="true"
                aria-expanded={activeMenu === "kurumsal"}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveMenu(activeMenu === "kurumsal" ? null : "kurumsal");
                  }
                }}
              >
                Kurumsal
              </button>
              <div
                role="none"
                className={cn(styles.megaMenu, activeMenu === "kurumsal" && styles.megaMenuOpen)}
                onMouseEnter={() => openMenu("kurumsal")}
                onMouseLeave={closeMenu}
              >
                <div className={styles.megaGrid}>
                  <div className={styles.megaCol}>
                    <h4>Hakkımızda</h4>
                    <Link href="/kurumsal/hakkimizda" className={styles.megaLink}>
                      Hakkımızda
                    </Link>
                    <Link href="/kurumsal/tarihce" className={styles.megaLink}>
                      Tarihçemiz
                    </Link>
                    <Link href="/kurumsal/vizyon" className={styles.megaLink}>
                      Vizyon &amp; Misyon
                    </Link>
                    <Link href="/kurumsal/egitim-felsefemiz" className={styles.megaLink}>
                      Eğitim Felsefemiz
                    </Link>
                    <Link href="/kurumsal/sayilar" className={styles.megaLink}>
                      Sayılarla Kocatürk
                    </Link>
                  </div>
                  <div className={styles.megaCol}>
                    <h4>Yönetim</h4>
                    <Link href="/kurumsal/yonetim" className={styles.megaLink}>
                      Yönetim Kadrosu
                    </Link>
                    <Link href="/kurumsal/akreditasyonlar" className={styles.megaLink}>
                      Akreditasyonlar
                    </Link>
                    <Link href="/kurumsal/sosyal-sorumluluk" className={styles.megaLink}>
                      Sosyal Sorumluluk
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Kampüsler */}
            <div
              role="none"
              className={styles.navItem}
              onMouseEnter={() => openMenu("kampusler")}
              onMouseLeave={closeMenu}
            >
              <button
                type="button"
                className={styles.navLink}
                aria-haspopup="true"
                aria-expanded={activeMenu === "kampusler"}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveMenu(activeMenu === "kampusler" ? null : "kampusler");
                  }
                }}
              >
                Kampüsler
              </button>
              <div
                role="none"
                className={cn(
                  styles.megaMenu,
                  styles.megaMenuWide,
                  activeMenu === "kampusler" && styles.megaMenuOpen,
                )}
                onMouseEnter={() => openMenu("kampusler")}
                onMouseLeave={closeMenu}
              >
                <div className={styles.megaGrid}>
                  <div className={styles.megaCol}>
                    <h4>Manisa</h4>
                    <Link
                      href="/kampusler/turgutlu"
                      className={cn(styles.megaLink, styles.megaLinkFeatured)}
                    >
                      ★ Turgutlu — Ana Kampüs
                    </Link>
                    <Link href="/kampusler/turgutlu" className={styles.megaLink}>
                      — Anaokulu
                    </Link>
                    <Link href="/kampusler/turgutlu" className={styles.megaLink}>
                      — İlkokul
                    </Link>
                    <Link href="/kampusler/turgutlu" className={styles.megaLink}>
                      — Ortaokul
                    </Link>
                    <Link href="/kampusler/turgutlu" className={styles.megaLink}>
                      — Anadolu Lisesi
                    </Link>
                    <Link href="/kampusler/turgutlu" className={styles.megaLink}>
                      — Fen Lisesi
                    </Link>
                  </div>
                  <div className={styles.megaCol}>
                    <h4>İzmir</h4>
                    <Link
                      href="/kampusler/gaziemir"
                      className={cn(styles.megaLink, styles.megaLinkFeatured)}
                    >
                      ★ Gaziemir — 2. Ana Kampüs
                    </Link>
                    <Link href="/kampusler/gaziemir" className={styles.megaLink}>
                      — ✈ Havacılık Lisesi
                    </Link>
                    <hr className={styles.megaDivider} />
                    <Link href="/kampusler/uckuyular" className={styles.megaLink}>
                      Karabağlar / Üçkuyular
                    </Link>
                    <Link href="/kampusler/kemalpasa" className={styles.megaLink}>
                      Kemalpaşa
                    </Link>
                    <Link href="/kampusler/tire" className={styles.megaLink}>
                      Tire
                    </Link>
                    <hr className={styles.megaDivider} />
                    <Link href="/kampusler" className={styles.megaFooterLink}>
                      Tüm Kampüsler Haritası →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Eğitim */}
            <div
              role="none"
              className={styles.navItem}
              onMouseEnter={() => openMenu("egitim")}
              onMouseLeave={closeMenu}
            >
              <button
                type="button"
                className={styles.navLink}
                aria-haspopup="true"
                aria-expanded={activeMenu === "egitim"}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveMenu(activeMenu === "egitim" ? null : "egitim");
                  }
                }}
              >
                Eğitim
              </button>
              <div
                role="none"
                className={cn(
                  styles.megaMenu,
                  styles.megaMenuWide,
                  activeMenu === "egitim" && styles.megaMenuOpen,
                )}
                onMouseEnter={() => openMenu("egitim")}
                onMouseLeave={closeMenu}
              >
                <div className={styles.megaGrid}>
                  <div className={styles.megaCol}>
                    <h4>Kademeler</h4>
                    <Link href="/egitim/anaokulu" className={styles.megaLink}>
                      Anaokulu (3-6 yaş)
                    </Link>
                    <Link href="/egitim/ilkokul" className={styles.megaLink}>
                      İlkokul (6-10 yaş)
                    </Link>
                    <Link href="/egitim/ortaokul" className={styles.megaLink}>
                      Ortaokul (10-14 yaş)
                    </Link>
                    <Link href="/egitim/anadolu-lisesi" className={styles.megaLink}>
                      Anadolu Lisesi
                    </Link>
                    <Link href="/egitim/fen-lisesi" className={styles.megaLink}>
                      Fen Lisesi
                    </Link>
                    <Link
                      href="/egitim/havacilik-lisesi"
                      className={cn(styles.megaLink, styles.megaLinkFeatured)}
                    >
                      ✈ Havacılık Lisesi
                    </Link>
                  </div>
                  <div className={styles.megaCol}>
                    <h4>Programlarımız</h4>
                    <Link href="/egitim/programlar/tam-ogrenme" className={styles.megaLink}>
                      Tam Öğrenme Modeli
                    </Link>
                    <Link href="/egitim/programlar/mind-kids" className={styles.megaLink}>
                      Mind Kids
                    </Link>
                    <Link href="/egitim/programlar/stem" className={styles.megaLink}>
                      STEM
                    </Link>
                    <Link href="/egitim/programlar/wwap" className={styles.megaLink}>
                      Kocatürk WWAP
                    </Link>
                    <Link href="/egitim/programlar/design-thinking" className={styles.megaLink}>
                      Design Thinking
                    </Link>
                    <Link
                      href="/egitim/programlar/robotik-kodlama"
                      className={cn(styles.megaLink, styles.megaLinkFeatured)}
                    >
                      🤖 Robotik &amp; Kodlama
                    </Link>
                    <hr className={styles.megaDivider} />
                    <Link
                      href="/egitim/yurtdisi"
                      className={cn(styles.megaLink, styles.megaLinkFeatured)}
                    >
                      🌍 Yurtdışı Eğitim
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Diğer nav linkleri */}
            <div className={styles.navItem}>
              <Link href="/basarilarimiz" className={styles.navLink}>
                Başarılarımız
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link href="/kampus-yasami" className={styles.navLink}>
                Kampüs Yaşamı
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link
                href="/egitim/havacilik-lisesi"
                className={cn(styles.navLink, styles.navLinkSpecial)}
              >
                ✦ Havacılık Lisesi
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link href="/iletisim" className={styles.navLink}>
                İletişim
              </Link>
            </div>
          </nav>

          {/* Right Tools */}
          <div className={styles.tools}>
            <a href="tel:+902363130000" className={styles.toolPhone} aria-label="Telefon numarası">
              +90 236 313 00 00
            </a>
            <Button variant="outline-light" size="sm" href="https://ekocaturk.k12.tr">
              e-Kocatürk
            </Button>
            {/* Hamburger */}
            <button
              type="button"
              className={cn(styles.hamburger, mobileOpen && styles.open)}
              aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={cn(styles.mobileOverlay, mobileOpen && styles.mobileOpen)}
        role="dialog"
        aria-modal="true"
        aria-label="Mobil navigasyon"
      >
        <div className={styles.mobileCloseRow}>
          <button
            type="button"
            className={styles.mobileClose}
            aria-label="Menüyü kapat"
            onClick={() => setMobileOpen(false)}
          >
            <i className="bx bx-x" aria-hidden="true" />
          </button>
        </div>
        <nav className={styles.mobileNav} aria-label="Mobil navigasyon">
          <Link href="/" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>
            Ana Sayfa
          </Link>
          <Link
            href="/kurumsal/hakkimizda"
            className={styles.mobileNavLink}
            onClick={() => setMobileOpen(false)}
          >
            Kurumsal
          </Link>
          <Link
            href="/kampusler"
            className={styles.mobileNavLink}
            onClick={() => setMobileOpen(false)}
          >
            Kampüsler
          </Link>
          <Link
            href="/egitim"
            className={styles.mobileNavLink}
            onClick={() => setMobileOpen(false)}
          >
            Eğitim
          </Link>
          <Link
            href="/basarilarimiz"
            className={styles.mobileNavLink}
            onClick={() => setMobileOpen(false)}
          >
            Başarılarımız
          </Link>
          <Link
            href="/kampus-yasami"
            className={styles.mobileNavLink}
            onClick={() => setMobileOpen(false)}
          >
            Kampüs Yaşamı
          </Link>
          <Link
            href="/egitim/havacilik-lisesi"
            className={cn(styles.mobileNavLink, styles.mobileNavLinkSpecial)}
            onClick={() => setMobileOpen(false)}
          >
            ✈ Havacılık Lisesi
          </Link>
          <Link
            href="/iletisim"
            className={styles.mobileNavLink}
            onClick={() => setMobileOpen(false)}
          >
            İletişim
          </Link>
          <Link
            href="/kayit/on-kayit"
            className={styles.mobileNavLink}
            onClick={() => setMobileOpen(false)}
          >
            Ön Kayıt
          </Link>
        </nav>
      </div>
    </>
  );
}
