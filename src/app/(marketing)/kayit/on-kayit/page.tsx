import type { Metadata } from "next";
import { OnKayitForm } from "@/components/forms/on-kayit-form";
import { Eyebrow } from "@/components/ui/eyebrow";
import styles from "../kayit.module.css";

export const metadata: Metadata = {
  title: "Ön Kayıt Başvurusu | Kocatürk Okulları",
  description:
    "Çocuğunuz için Kocatürk Okulları ön kayıt formunu doldurun. Anaokulu, ilkokul, ortaokul, Anadolu Lisesi, Fen Lisesi ve Havacılık Lisesi kademe seçenekleri.",
};

export default function OnKayitPage() {
  return (
    <section className={styles.formSection}>
      <div className="wrap">
        <div className={styles.formInner}>
          <aside className={styles.formSidebar}>
            <Eyebrow>Kayıt</Eyebrow>
            <h1 className={styles.formSidebarTitle}>
              Çocuğunuzun
              <br />
              yarınını birlikte
              <br />
              <em>tasarlayalım.</em>
            </h1>
            <p className={styles.formSidebarDesc}>
              Formu doldurun, size en yakın kampüsten bir danışman 1 iş günü içinde sizi arasın.
              Kampüs ziyareti ayarlanır, tüm sorularınız yanıtlanır.
            </p>
            <ul className={styles.formSidebarList}>
              <li>
                <i className="bx bx-check" aria-hidden="true" />
                Anaokulu'ndan Havacılık Lisesi'ne tüm kademeler
              </li>
              <li>
                <i className="bx bx-check" aria-hidden="true" />5 kampüs — Manisa ve İzmir
              </li>
              <li>
                <i className="bx bx-check" aria-hidden="true" />
                Ücretsiz kampüs ziyareti randevusu
              </li>
              <li>
                <i className="bx bx-check" aria-hidden="true" />
                Bursluluk sınav bilgisi
              </li>
            </ul>
          </aside>

          <div className={styles.formCard}>
            <OnKayitForm />
          </div>
        </div>
      </div>
    </section>
  );
}
