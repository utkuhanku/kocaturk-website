import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/eyebrow";
import styles from "./kayit.module.css";

export const metadata: Metadata = {
  title: "Kayıt | Kocatürk Okulları",
  description:
    "Ön kayıt başvurusu, bursluluk sınavı, ücret tarifeleri ve sık sorulan sorular. Kocatürk Okulları kayıt süreci hakkında her şey.",
};

const HUB_LINKS = [
  {
    href: "/kayit/on-kayit",
    icon: "bx bx-user-plus",
    title: "Ön Kayıt Başvurusu",
    desc: "Çocuğunuz için 2 dakikada ön kayıt formu doldurun.",
  },
  {
    href: "/kayit/bursluluk",
    icon: "bx bx-trophy",
    title: "Bursluluk Sınavı",
    desc: "Burs oranları, başvuru şartları ve sınav takvimi.",
  },
  {
    href: "/kayit/ucretler",
    icon: "bx bx-receipt",
    title: "Ücret Tarifeleri",
    desc: "Kademe ve kampüse göre yıllık ücret bilgileri.",
  },
  {
    href: "/kayit/sss",
    icon: "bx bx-help-circle",
    title: "Sık Sorulan Sorular",
    desc: "Kayıt sürecine dair en çok merak edilen sorular.",
  },
];

export default function KayitPage() {
  return (
    <section className={styles.heroSection}>
      <div className="wrap">
        <Eyebrow>Kayıt</Eyebrow>
        <h1 className={styles.heroTitle}>
          Başlangıç her zaman
          <br />
          <em>bir adım.</em>
        </h1>
        <p className={styles.heroLede}>
          Ön kayıt formunuzu doldurun, size en yakın kampüsten bir danışman sizi arasın. Süreci
          birlikte planlayalım.
        </p>
        <nav aria-label="Kayıt bölümleri" className={styles.hubGrid}>
          {HUB_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={styles.hubCard}>
              <i className={`${link.icon} ${styles.hubCardIcon}`} aria-hidden="true" />
              <span className={styles.hubCardTitle}>{link.title}</span>
              <span className={styles.hubCardDesc}>{link.desc}</span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
