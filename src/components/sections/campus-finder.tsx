/**
 * CampusFinder — Kampüs bulucu form (Parça A)
 *
 * @see .docs/07-PAGE-SPECIFICATIONS.md#kampüs-bulucu
 * @see src/components/sections/campus-finder.module.css
 *
 * 'use client' — form state gerektirir.
 * Sol: ad/soyad + telefon + kademe seçimi + ilçe tercihi + mesaj + CTA.
 * Sağ: Mapbox ContentNote placeholder (Faz 3'te interaktif harita).
 * Form submit: submitted state → başarı mesajı (Faz 4'te Resend entegrasyonu).
 *
 * @example
 * <CampusFinder
 *   eyebrow="Size En Yakın Kampüs"
 *   title={<>Hangi kampüs<br/>size daha <em>uygun?</em></>}
 *   description="Bilgilerinizi bırakın, en yakın kampüsümüzden sizi arayalım."
 * />
 */

"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { CampusMapbox } from "@/components/campus-mapbox";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/cn";
import styles from "./campus-finder.module.css";

const FINDER_CAMPUSES = [
  {
    slug: "turgutlu",
    name: "Manisa Turgutlu Kampüsü",
    ilce: "Turgutlu",
    il: "Manisa",
    badge: "ana" as const,
    kademeler: ["Anaokulu", "İlkokul", "Ortaokul", "Anadolu Lisesi", "Fen Lisesi"],
    koordinatlar: { lat: 38.4955, lng: 27.7125 },
  },
  {
    slug: "gaziemir",
    name: "İzmir Gaziemir Kampüsü",
    ilce: "Gaziemir",
    il: "İzmir",
    badge: "ikinci-ana" as const,
    kademeler: ["Anaokulu", "İlkokul", "Ortaokul", "Anadolu Lisesi", "Havacılık Lisesi"],
    koordinatlar: { lat: 38.318, lng: 27.129 },
  },
  {
    slug: "uckuyular",
    name: "İzmir Karabağlar Kampüsü",
    ilce: "Üçkuyular",
    il: "İzmir",
    kademeler: ["İlkokul", "Ortaokul"],
    koordinatlar: { lat: 38.386, lng: 27.119 },
  },
  {
    slug: "kemalpasa",
    name: "İzmir Kemalpaşa Kampüsü",
    ilce: "Kemalpaşa",
    il: "İzmir",
    kademeler: ["İlkokul", "Ortaokul", "Lise"],
    koordinatlar: { lat: 38.428, lng: 27.417 },
  },
  {
    slug: "tire",
    name: "İzmir Tire Kampüsü",
    ilce: "Tire",
    il: "İzmir",
    kademeler: ["İlkokul", "Ortaokul", "Lise", "Fen Lisesi"],
    koordinatlar: { lat: 38.088, lng: 27.733 },
  },
];

interface CampusFinderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  className?: string;
}

// ilçe seçimini slug'a dönüştür
const ILCE_TO_SLUG: Record<string, string> = {
  turgutlu: "turgutlu",
  gaziemir: "gaziemir",
  uckuyular: "uckuyular",
  kemalpasa: "kemalpasa",
  tire: "tire",
};

export function CampusFinder({ eyebrow, title, description, className }: CampusFinderProps) {
  const [submitted, setSubmitted] = useState(false);
  const [selectedIlce, setSelectedIlce] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className={cn(styles.section, className)}>
      <div className="wrap">
        {(eyebrow || title) && (
          <div className={styles.header}>
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            {title && <h2 className={styles.title}>{title}</h2>}
            {description && <p className={styles.description}>{description}</p>}
          </div>
        )}

        <div className={styles.inner}>
          {/* Sol: Form */}
          <div className={styles.formSide}>
            {submitted ? (
              <div className={styles.successBox} role="status" aria-live="polite">
                <i className="bx bx-check-circle" aria-hidden="true" />
                <div>
                  <p className={styles.successTitle}>Talebiniz alındı!</p>
                  <p className={styles.successBody}>
                    En yakın kampüsümüzden en kısa sürede sizi arayacağız.
                  </p>
                </div>
              </div>
            ) : (
              <form
                className={styles.form}
                onSubmit={handleSubmit}
                noValidate
                aria-label="Kampüs bulucu formu"
              >
                <div className={styles.row}>
                  <Input
                    label="Ad Soyad"
                    type="text"
                    name="fullName"
                    placeholder="Adınız Soyadınız"
                    autoComplete="name"
                    required
                  />
                  <Input
                    label="Telefon"
                    type="tel"
                    name="phone"
                    placeholder="05XX XXX XX XX"
                    autoComplete="tel"
                    required
                  />
                </div>

                <div className={styles.row}>
                  <div className={styles.selectWrap}>
                    <label className={styles.selectLabel} htmlFor="kademe">
                      Çocuğunuzun Kademesi
                    </label>
                    <select
                      id="kademe"
                      name="kademe"
                      className={styles.select}
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Seçiniz…
                      </option>
                      <option value="anaokulu">Anaokulu (3-6 yaş)</option>
                      <option value="ilkokul">İlkokul (6-10 yaş)</option>
                      <option value="ortaokul">Ortaokul (10-14 yaş)</option>
                      <option value="lise">Lise (14-18 yaş)</option>
                      <option value="havacilik">✈ Havacılık Lisesi (14-18 yaş)</option>
                    </select>
                  </div>

                  <div className={styles.selectWrap}>
                    <label className={styles.selectLabel} htmlFor="ilce">
                      İlçe Tercihi
                    </label>
                    <select
                      id="ilce"
                      name="ilce"
                      className={styles.select}
                      required
                      defaultValue=""
                      onChange={(e) => setSelectedIlce(e.target.value)}
                    >
                      <option value="" disabled>
                        Seçiniz…
                      </option>
                      <option value="turgutlu">Turgutlu (Manisa)</option>
                      <option value="gaziemir">Gaziemir (İzmir)</option>
                      <option value="uckuyular">Üçkuyular / Karabağlar (İzmir)</option>
                      <option value="kemalpasa">Kemalpaşa (İzmir)</option>
                      <option value="tire">Tire (İzmir)</option>
                      <option value="fark-etmez">Fark etmez — en yakın hangisi</option>
                    </select>
                  </div>
                </div>

                <div className={styles.textareaWrap}>
                  <label className={styles.selectLabel} htmlFor="mesaj">
                    Mesajınız <span className={styles.optional}>(isteğe bağlı)</span>
                  </label>
                  <textarea
                    id="mesaj"
                    name="mesaj"
                    className={styles.textarea}
                    rows={3}
                    placeholder="Sormak istediğiniz bir şey varsa buraya yazabilirsiniz…"
                  />
                </div>

                <div className={styles.formFooter}>
                  <button type="submit" className={styles.submitBtn}>
                    Beni Arayın
                    <i className="bx bx-phone-call" aria-hidden="true" />
                  </button>
                  <p className={styles.privacy}>
                    Bilgileriniz yalnızca kayıt süreciniz için kullanılır.{" "}
                    <a href="/kvkk" className={styles.privacyLink}>
                      KVKK
                    </a>
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Sağ: Mapbox harita */}
          <div className={styles.mapSide}>
            <CampusMapbox
              campuses={FINDER_CAMPUSES}
              activeCampus={ILCE_TO_SLUG[selectedIlce] ?? undefined}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
