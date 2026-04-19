"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { type Resolver, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { type OnKayitFormData, onKayitSchema } from "@/lib/validators";
import styles from "./form.module.css";

export function OnKayitForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<OnKayitFormData>({
    resolver: zodResolver(onKayitSchema) as Resolver<OnKayitFormData>,
  });

  const mesaj = watch("mesaj") ?? "";

  async function onSubmit(data: OnKayitFormData) {
    setServerError(null);
    try {
      const res = await fetch("/api/on-kayit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        router.push("/kayit/on-kayit/tesekkurler");
        return;
      }
      const json = await res.json();
      setServerError(json.error ?? "Bir hata oluştu. Lütfen tekrar deneyin.");
    } catch {
      setServerError("Bağlantı hatası. Lütfen tekrar deneyin.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
      <input
        {...register("website")}
        tabIndex={-1}
        className={styles.honeypot}
        aria-hidden="true"
      />

      <fieldset style={{ border: "none", padding: 0, margin: 0 }}>
        <legend
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-sm)",
            fontWeight: 700,
            color: "var(--color-ink-mute)",
            textTransform: "uppercase",
            letterSpacing: "var(--letter-spacing-label)",
            marginBottom: "var(--space-4)",
          }}
        >
          Veli Bilgileri
        </legend>
        <div className={styles.row}>
          <Input
            label="Ad Soyad"
            required
            autoComplete="name"
            error={errors.veliAdi?.message}
            {...register("veliAdi")}
          />
          <Input
            label="Telefon"
            type="tel"
            required
            placeholder="05XX XXX XX XX"
            autoComplete="tel"
            error={errors.veliTelefon?.message}
            {...register("veliTelefon")}
          />
        </div>
        <Input
          label="E-posta"
          type="email"
          required
          autoComplete="email"
          error={errors.veliEmail?.message}
          {...register("veliEmail")}
        />
      </fieldset>

      <fieldset style={{ border: "none", padding: 0, margin: 0 }}>
        <legend
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-sm)",
            fontWeight: 700,
            color: "var(--color-ink-mute)",
            textTransform: "uppercase",
            letterSpacing: "var(--letter-spacing-label)",
            marginBottom: "var(--space-4)",
          }}
        >
          Çocuk Bilgileri
        </legend>
        <div className={styles.row}>
          <Input
            label="Çocuğun Adı Soyadı"
            required
            error={errors.cocukAdi?.message}
            {...register("cocukAdi")}
          />
          <Input
            label="Yaş"
            type="number"
            required
            min={3}
            max={18}
            error={errors.cocukYas?.message}
            {...register("cocukYas")}
          />
        </div>
        <div className={styles.fieldGroup}>
          <label htmlFor="cinsiyet" className={styles.label}>
            Cinsiyet{" "}
            <span style={{ color: "var(--color-ink-mute)", fontWeight: 400 }}>(isteğe bağlı)</span>
          </label>
          <select
            id="cinsiyet"
            className={errors.cinsiyet ? `${styles.select} ${styles.selectError}` : styles.select}
            {...register("cinsiyet")}
          >
            <option value="">Belirtmek istemiyorum</option>
            <option value="kiz">Kız</option>
            <option value="erkek">Erkek</option>
            <option value="belirtmek-istemiyorum">Belirtmek istemiyorum</option>
          </select>
          {errors.cinsiyet && <p className={styles.errorText}>{errors.cinsiyet.message}</p>}
        </div>
      </fieldset>

      <fieldset style={{ border: "none", padding: 0, margin: 0 }}>
        <legend
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-sm)",
            fontWeight: 700,
            color: "var(--color-ink-mute)",
            textTransform: "uppercase",
            letterSpacing: "var(--letter-spacing-label)",
            marginBottom: "var(--space-4)",
          }}
        >
          Eğitim Tercihi
        </legend>
        <div className={styles.row}>
          <div className={styles.fieldGroup}>
            <label htmlFor="kademe" className={`${styles.label} ${styles.labelRequired}`}>
              Kademe
            </label>
            <select
              id="kademe"
              className={errors.kademe ? `${styles.select} ${styles.selectError}` : styles.select}
              {...register("kademe")}
            >
              <option value="">Lütfen seçin</option>
              <option value="anaokulu">Anaokulu (3-6 yaş)</option>
              <option value="ilkokul">İlkokul (6-10 yaş)</option>
              <option value="ortaokul">Ortaokul (10-14 yaş)</option>
              <option value="anadolu-lisesi">Anadolu Lisesi</option>
              <option value="fen-lisesi">Fen Lisesi</option>
              <option value="havacilik-lisesi">Havacılık Lisesi</option>
            </select>
            {errors.kademe && <p className={styles.errorText}>{errors.kademe.message}</p>}
          </div>
          <div className={styles.fieldGroup}>
            <label htmlFor="kampus" className={`${styles.label} ${styles.labelRequired}`}>
              Tercih Edilen Kampüs
            </label>
            <select
              id="kampus"
              className={errors.kampus ? `${styles.select} ${styles.selectError}` : styles.select}
              {...register("kampus")}
            >
              <option value="">Lütfen seçin</option>
              <option value="turgutlu">Manisa Turgutlu</option>
              <option value="gaziemir">İzmir Gaziemir</option>
              <option value="uckuyular">İzmir Karabağlar (Üçkuyular)</option>
              <option value="kemalpasa">İzmir Kemalpaşa</option>
              <option value="tire">İzmir Tire</option>
              <option value="henuz-bilmiyorum">Henüz bilmiyorum</option>
            </select>
            {errors.kampus && <p className={styles.errorText}>{errors.kampus.message}</p>}
          </div>
        </div>
        <div className={styles.fieldGroup}>
          <label htmlFor="mesaj" className={styles.label}>
            Eklemek İstedikleriniz{" "}
            <span style={{ color: "var(--color-ink-mute)", fontWeight: 400 }}>(isteğe bağlı)</span>
          </label>
          <textarea
            id="mesaj"
            placeholder="Sorularınız, özel durumlar, ek notlar..."
            className={
              errors.mesaj ? `${styles.textarea} ${styles.textareaError}` : styles.textarea
            }
            {...register("mesaj")}
          />
          <p className={styles.charCount}>{mesaj.length} / 500</p>
          {errors.mesaj && <p className={styles.errorText}>{errors.mesaj.message}</p>}
        </div>
      </fieldset>

      <div>
        <div className={styles.kvkkRow}>
          <input
            id="kvkkOnay"
            type="checkbox"
            className={styles.kvkkCheckbox}
            {...register("kvkkOnay")}
          />
          <label htmlFor="kvkkOnay" className={styles.kvkkLabel}>
            <Link href="/kvkk" target="_blank" rel="noopener noreferrer">
              KVKK Aydınlatma Metni
            </Link>{" "}
            kapsamında kişisel verilerimin işlenmesini kabul ediyorum. *
          </label>
        </div>
        {errors.kvkkOnay && <p className={styles.kvkkError}>{errors.kvkkOnay.message}</p>}
      </div>

      <div className={styles.submitRow}>
        <Button type="submit" variant="primary" size="lg" loading={isSubmitting}>
          Ön Kayıt Başvurusu Gönder
        </Button>
        {serverError && <p className={styles.errorMsg}>{serverError}</p>}
      </div>
    </form>
  );
}
