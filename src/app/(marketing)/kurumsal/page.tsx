import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/eyebrow";
import styles from "./kurumsal.module.css";

export const metadata: Metadata = {
  title: "Kurumsal | Kocatürk Okulları",
  description:
    "Kocatürk Okulları hakkında: tarihçe, yönetim kadrosu, vizyon ve misyon, eğitim felsefemiz, akreditasyonlar ve sosyal sorumluluk.",
};

const HUB_LINKS = [
  {
    href: "/kurumsal/hakkimizda",
    icon: "bx bx-building-house",
    title: "Hakkımızda",
    desc: "1998'de 52 kişiyle başlayan hikâye. Kocatürk Okulları'nı tanıyın.",
  },
  {
    href: "/kurumsal/tarihce",
    icon: "bx bx-time-five",
    title: "Tarihçemiz",
    desc: "1998'den günümüze önemli dönüm noktaları ve büyüme hikâyesi.",
  },
  {
    href: "/kurumsal/yonetim",
    icon: "bx bx-user-circle",
    title: "Yönetim Kadrosu",
    desc: "Kocatürk ailesini yöneten kurucu ve kadromuzla tanışın.",
  },
  {
    href: "/kurumsal/sayilar",
    icon: "bx bx-bar-chart-alt-2",
    title: "Sayılarla Kocatürk",
    desc: "4.000+ öğrenci, 5 kampüs, 28 yıl. Rakamlarla anlatılan başarı.",
  },
  {
    href: "/kurumsal/vizyon",
    icon: "bx bx-target-lock",
    title: "Vizyon & Misyon",
    desc: "Nereye gittiğimiz ve neden buradayız. Temel değerlerimiz.",
  },
  {
    href: "/kurumsal/egitim-felsefemiz",
    icon: "bx bx-book-open",
    title: "Eğitim Felsefemiz",
    desc: "Bloom'un Tam Öğrenme Modeli'nden ilham alan pedagojik yaklaşım.",
  },
  {
    href: "/kurumsal/akreditasyonlar",
    icon: "bx bx-medal",
    title: "Akreditasyonlar",
    desc: "Ulusal ve uluslararası akreditasyonlar, sertifikalar ve ödüller.",
  },
  {
    href: "/kurumsal/sosyal-sorumluluk",
    icon: "bx bx-heart",
    title: "Sosyal Sorumluluk",
    desc: "Çevre, toplum ve gelecek nesiller için üstlendiğimiz sorumluluklar.",
  },
];

export default function KurumsalPage() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className="wrap">
          <Eyebrow>Kurumsal</Eyebrow>
          <h1 className={styles.heroTitle}>
            1998'den bugüne
            <br />
            <em>Ege'nin eğitim omurgası.</em>
          </h1>
          <p className={styles.heroDesc}>
            Manisa Turgutlu'da 52 kişiyle başlayan bu yolculuk, bugün dört ilçede beş kampüs ve
            4.000'den fazla öğrenciye ulaştı. Kocatürk Okulları'nı daha yakından tanıyın.
          </p>

          <div className={styles.hubGrid}>
            {HUB_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className={styles.hubCard}>
                <i className={`${link.icon} ${styles.hubCardIcon}`} aria-hidden="true" />
                <p className={styles.hubCardTitle}>{link.title}</p>
                <p className={styles.hubCardDesc}>{link.desc}</p>
                <i className={`bx bx-right-arrow-alt ${styles.hubCardArrow}`} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
