"use client";

import { useState } from "react";
import { Eyebrow } from "@/components/ui/eyebrow";
import styles from "../kayit.module.css";

const SORULAR = [
  {
    soru: "Kayıt süreci nasıl işliyor?",
    cevap:
      "Ön kayıt formunu doldurmanızın ardından size en yakın kampüsten bir danışman 1 iş günü içinde sizi arar. Kampüs ziyareti ayarlanır, gerekli belgeler ve kayıt süreci hakkında detaylı bilgi verilir.",
  },
  {
    soru: "Hangi belgeler gerekiyor?",
    cevap:
      "Genel olarak nüfus cüzdanı fotokopisi, fotoğraf, sağlık raporu ve bir önceki okula ait karne/transkript istenmektedir. Kampüsünüz size özel listeyi bildirecektir.",
  },
  {
    soru: "Nakil kayıt yapılıyor mu?",
    cevap:
      "Evet, yıl içi ve dönem arası nakil kayıt kabul edilmektedir. Kademe ve sınıf mevcudu durumuna göre değerlendirme yapılır. Danışmanınız size en güncel bilgiyi verecektir.",
  },
  {
    soru: "Servis hizmetiniz var mı?",
    cevap:
      "Kampüs çevresindeki güzergâhlara servis hizmeti sunulmaktadır. Detaylı güzergâh bilgisi ve ücretleri için kayıt danışmanınızla görüşebilirsiniz.",
  },
  {
    soru: "Yatılı okul var mı?",
    cevap: "Şu anda yatılı sistem bulunmamaktadır. Tüm kampüslerimiz gündüzlü eğitim vermektedir.",
  },
  {
    soru: "Bursluluk sınavına kimler girebilir?",
    cevap:
      "Tüm öğrenciler bursluluk sınavına başvurabilir. Sınav tarihleri ve başvuru şartları için /kayit/bursluluk sayfasını inceleyebilir ya da danışmanınızla iletişime geçebilirsiniz.",
  },
  {
    soru: "Ücretleri taksitli ödeyebilir miyim?",
    cevap:
      "Evet, eğitim ücretleri taksitli olarak ödenebilmektedir. Taksit seçenekleri ve kampanya dönemleri hakkında bilgi almak için kayıt danışmanınızla görüşün.",
  },
  {
    soru: "Kampüsleri ziyaret edebilir miyim?",
    cevap:
      "Kesinlikle. Kampüs ziyareti çocuğunuzun okulu tanıması için büyük önem taşır. Ön kayıt formunu doldurduktan sonra danışmanınız ziyaret randevusu ayarlar.",
  },
];

export default function SssPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <section className={styles.sssSection}>
      <div className="wrap">
        <Eyebrow>Kayıt</Eyebrow>
        <h1 className={styles.sectionTitle}>Sık Sorulan Sorular</h1>

        <div className={styles.accordionList}>
          {SORULAR.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.soru} className={styles.accordionItem}>
                <button
                  type="button"
                  className={styles.accordionBtn}
                  aria-expanded={isOpen}
                  onClick={() => toggle(i)}
                >
                  <span className={styles.accordionQuestion}>{item.soru}</span>
                  <i
                    className={`bx bx-chevron-down ${styles.accordionChevron} ${isOpen ? styles.accordionChevronOpen : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && <div className={styles.accordionBody}>{item.cevap}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
