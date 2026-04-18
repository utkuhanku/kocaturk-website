"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { type Resolver, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { type KariyerFormData, kariyerSchema } from "@/lib/validators";
import styles from "./form.module.css";

export function KariyerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<KariyerFormData>({
    resolver: zodResolver(kariyerSchema) as Resolver<KariyerFormData>,
  });

  const mesaj = watch("mesaj") ?? "";

  async function onSubmit(data: KariyerFormData) {
    setServerError(null);
    try {
      const res = await fetch("/api/kariyer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
        return;
      }
      const json = await res.json();
      setServerError(json.error ?? "Bir hata oluştu. Lütfen tekrar deneyin.");
    } catch {
      setServerError("Bağlantı hatası. Lütfen tekrar deneyin.");
    }
  }

  if (submitted) {
    return (
      <div className={styles.successMsg} role="status">
        <i className="bx bx-check-circle" aria-hidden="true" style={{ fontSize: "1.5rem" }} />
        Başvurunuz alındı, en kısa sürede dönüş yapacağız.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
      <input
        {...register("website")}
        tabIndex={-1}
        className={styles.honeypot}
        aria-hidden="true"
      />

      <div className={styles.row}>
        <Input
          label="Ad Soyad"
          required
          autoComplete="name"
          error={errors.isim?.message}
          {...register("isim")}
        />
        <Input
          label="E-posta"
          type="email"
          required
          autoComplete="email"
          error={errors.email?.message}
          {...register("email")}
        />
      </div>

      <div className={styles.row}>
        <Input
          label="Telefon"
          type="tel"
          required
          placeholder="05XX XXX XX XX"
          autoComplete="tel"
          error={errors.telefon?.message}
          {...register("telefon")}
        />
        <Input
          label="Başvurduğunuz Pozisyon"
          required
          placeholder="Örn: Matematik Öğretmeni"
          error={errors.pozisyon?.message}
          {...register("pozisyon")}
        />
      </div>

      <Input
        label="CV / Portfolio Linki"
        type="url"
        placeholder="https://linkedin.com/in/..."
        error={errors.cvLink?.message}
        {...register("cvLink")}
      />

      <div className={styles.fieldGroup}>
        <label htmlFor="mesaj" className={`${styles.label} ${styles.labelRequired}`}>
          Ön Yazı
        </label>
        <textarea
          id="mesaj"
          placeholder="Kendinizi tanıtın, neden Kocatürk Okulları'nda çalışmak istediğinizi anlatın..."
          className={errors.mesaj ? `${styles.textarea} ${styles.textareaError}` : styles.textarea}
          style={{ minHeight: "180px" }}
          {...register("mesaj")}
        />
        <p className={styles.charCount}>{mesaj.length} / 1000</p>
        {errors.mesaj && <p className={styles.errorText}>{errors.mesaj.message}</p>}
      </div>

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
          Kariyer Başvurusu Gönder
        </Button>
        {serverError && <p className={styles.errorMsg}>{serverError}</p>}
      </div>
    </form>
  );
}
