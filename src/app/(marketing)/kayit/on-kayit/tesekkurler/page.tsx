import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import styles from "../../kayit.module.css";

export const metadata: Metadata = {
  title: "Başvurunuz Alındı | Kocatürk Okulları",
  description: "Ön kayıt başvurunuz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.",
  robots: { index: false },
};

export default function TesekkurlerPage() {
  return (
    <section className={styles.tesekkurlerSection}>
      <div className="wrap">
        <div className={styles.tesekkurlerInner}>
          <i className={`bx bx-check-circle ${styles.tesekkurlerIcon}`} aria-hidden="true" />
          <h1 className={styles.tesekkurlerTitle}>Başvurunuz alındı!</h1>
          <p className={styles.tesekkurlerDesc}>
            Ön kayıt formunuz başarıyla iletildi. Danışmanlarımız en geç 1 iş günü içinde sizi
            arayarak kampüs ziyareti ve kayıt süreci hakkında bilgi verecek.
          </p>
          <div className={styles.tesekkurlerCtas}>
            <Button href="/kampusler" variant="primary">
              Kampüsleri İncele
            </Button>
            <Button href="/" variant="outline">
              Ana Sayfaya Dön
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
