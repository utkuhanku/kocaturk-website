import type { Metadata } from "next";
import { IletisimForm } from "@/components/forms/iletisim-form";
import { Eyebrow } from "@/components/ui/eyebrow";
import styles from "./iletisim.module.css";

export const metadata: Metadata = {
  title: "İletişim | Kocatürk Okulları",
  description:
    "Kocatürk Okulları ile iletişime geçin. Kayıt, genel bilgi, kariyer ve basın sorularınız için bize ulaşın.",
};

const ILETISIM = [
  {
    icon: "bx bx-phone",
    label: "Telefon",
    value: "0532 111 11 09",
    href: "tel:+905321111109",
  },
  {
    icon: "bx bx-envelope",
    label: "E-posta",
    value: "info@kocaturk.k12.tr",
    href: "mailto:info@kocaturk.k12.tr",
  },
  {
    icon: "bx bx-map",
    label: "Ana Kampüs",
    value: "Manisa Turgutlu",
    href: "/kampusler/turgutlu",
  },
];

export default function IletisimPage() {
  return (
    <div className={styles.page}>
      <div className="wrap">
        <div className={styles.inner}>
          <aside className={styles.sidebar}>
            <Eyebrow>İletişim</Eyebrow>
            <h1 className={styles.sidebarTitle}>
              Size nasıl
              <br />
              <em>yardımcı</em>
              <br />
              olabiliriz?
            </h1>
            <p className={styles.sidebarDesc}>
              Kayıt, kampüs ziyareti, kariyer veya herhangi bir konuda bize ulaşın. En kısa sürede
              dönüş yaparız.
            </p>
            <ul className={styles.contactList}>
              {ILETISIM.map((item) => (
                <li key={item.label} className={styles.contactItem}>
                  <i className={`${item.icon} ${styles.contactIcon}`} aria-hidden="true" />
                  <div>
                    <p className={styles.contactLabel}>{item.label}</p>
                    <a href={item.href} className={styles.contactValue}>
                      {item.value}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </aside>

          <div className={styles.formCard}>
            <IletisimForm />
          </div>
        </div>
      </div>
    </div>
  );
}
