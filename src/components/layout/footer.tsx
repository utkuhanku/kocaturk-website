/**
 * SiteFooter — Antrasit zemin, 5-sütun grid
 *
 * @see .docs/06-COMPONENT-LIBRARY.md#42-sitefooter
 * @see src/components/layout/footer.module.css
 *
 * Server component — statik içerik, hook yok.
 *
 * @example
 * <SiteFooter />
 */

import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.grid}>
          {/* Sütun 1 — Marka */}
          <div>
            <Link href="/" className={styles.brandLogo} aria-label="Kocatürk Okulları — Ana Sayfa">
              <Image
                src="/logo-kocaturk.png"
                alt="Kocatürk Okulları"
                width={96}
                height={36}
                className={styles.brandLogoImage}
              />
            </Link>
            <p className={styles.tagline}>
              1998'den bu yana Ege'nin eğitim omurgası. Dört ilçede, yirmi üç kampüste kalıcı
              değerler.
            </p>
            <nav className={styles.social} aria-label="Sosyal medya">
              <a
                href="https://instagram.com"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-instagram" aria-hidden="true" />
                <span className={styles.srOnly}>Instagram</span>
              </a>
              <a
                href="https://facebook.com"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-facebook" aria-hidden="true" />
                <span className={styles.srOnly}>Facebook</span>
              </a>
              <a
                href="https://youtube.com"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-youtube" aria-hidden="true" />
                <span className={styles.srOnly}>YouTube</span>
              </a>
              <a
                href="https://linkedin.com"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-linkedin" aria-hidden="true" />
                <span className={styles.srOnly}>LinkedIn</span>
              </a>
            </nav>
          </div>

          {/* Sütun 2 — Kurumsal */}
          <div>
            <span className={styles.colTitle}>Kurumsal</span>
            <nav className={styles.links} aria-label="Kurumsal linkler">
              <Link href="/kurumsal/hakkimizda" className={styles.footerLink}>
                Hakkımızda
              </Link>
              <Link href="/kurumsal/tarihce" className={styles.footerLink}>
                Tarihçemiz
              </Link>
              <Link href="/kurumsal/vizyon" className={styles.footerLink}>
                Vizyon &amp; Misyon
              </Link>
              <Link href="/kurumsal/yonetim" className={styles.footerLink}>
                Yönetim Kadrosu
              </Link>
              <Link href="/kurumsal/akreditasyonlar" className={styles.footerLink}>
                Akreditasyonlar
              </Link>
              <Link href="/kurumsal/sosyal-sorumluluk" className={styles.footerLink}>
                Sosyal Sorumluluk
              </Link>
            </nav>
          </div>

          {/* Sütun 3 — Eğitim */}
          <div>
            <span className={styles.colTitle}>Eğitim</span>
            <nav className={styles.links} aria-label="Eğitim linkler">
              <Link href="/egitim/anaokulu" className={styles.footerLink}>
                Anaokulu
              </Link>
              <Link href="/egitim/ilkokul" className={styles.footerLink}>
                İlkokul
              </Link>
              <Link href="/egitim/ortaokul" className={styles.footerLink}>
                Ortaokul
              </Link>
              <Link href="/egitim/anadolu-lisesi" className={styles.footerLink}>
                Anadolu Lisesi
              </Link>
              <Link href="/egitim/fen-lisesi" className={styles.footerLink}>
                Fen Lisesi
              </Link>
              <Link
                href="/egitim/havacilik-lisesi"
                className={`${styles.footerLink} ${styles.footerLinkFeatured}`}
              >
                ✈ Havacılık Lisesi
              </Link>
              <Link
                href="/egitim/programlar/robotik-kodlama"
                className={`${styles.footerLink} ${styles.footerLinkFeatured}`}
              >
                Robotik &amp; Kodlama
              </Link>
              <Link href="/egitim/yurtdisi" className={styles.footerLink}>
                Yurtdışı Eğitim
              </Link>
            </nav>
          </div>

          {/* Sütun 4 — Hızlı Erişim */}
          <div>
            <span className={styles.colTitle}>Hızlı Erişim</span>
            <nav className={styles.links} aria-label="Hızlı erişim">
              <Link href="/kayit/on-kayit" className={styles.footerLink}>
                Ön Kayıt Formu
              </Link>
              <Link href="/kayit/bursluluk" className={styles.footerLink}>
                Bursluluk Sınavı
              </Link>
              <Link href="/kayit/ucretler" className={styles.footerLink}>
                Ücretler
              </Link>
              <Link href="/kayit/servisler" className={styles.footerLink}>
                Servis Güzergâhları
              </Link>
              <Link href="/kayit/sss" className={styles.footerLink}>
                SSS
              </Link>
              <a
                href="https://ekocaturk.k12.tr"
                className={styles.footerLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                e-Kocatürk Girişi
              </a>
            </nav>
          </div>

          {/* Sütun 5 — Bağlantılar */}
          <div>
            <span className={styles.colTitle}>Bağlantılar</span>
            <nav className={styles.links} aria-label="Dış bağlantılar">
              <a
                href="https://meb.gov.tr"
                className={styles.footerLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Millî Eğitim Bakanlığı
              </a>
              <a
                href="https://eba.gov.tr"
                className={styles.footerLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                EBA
              </a>
              <a
                href="https://e-devlet.gov.tr"
                className={styles.footerLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                e-Devlet
              </a>
              <a
                href="https://yokatlas.yok.gov.tr"
                className={styles.footerLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                YÖK Atlas
              </a>
              <Link href="/iletisim" className={styles.footerLink}>
                İletişim
              </Link>
              <Link href="/kariyer" className={styles.footerLink}>
                Kariyer
              </Link>
            </nav>
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>&copy; {year} Kocatürk Okulları. Tüm hakları saklıdır.</p>
          <div className={styles.legalLinks}>
            <Link href="/kvkk" className={styles.legalLink}>
              KVKK
            </Link>
            <Link href="/cerez-politikasi" className={styles.legalLink}>
              Çerez Politikası
            </Link>
            <Link href="/sitemap.xml" className={styles.legalLink}>
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
