"use client";

/**
 * MotionProvider — Reduced motion farkındalığı sağlar
 *
 * Kullanıcının "prefers-reduced-motion" tercihini okur ve
 * Motion kütüphanesinin MotionConfig'ine iletir. Tüm animasyonlu
 * componentler bu provider'ın altında olmalıdır.
 *
 * @see .docs/02-DESIGN-SYSTEM.md Bölüm 6 — Yasak Animasyonlar
 * @see .docs/09-RULES-AND-GUARDRAILS.md Bölüm 7
 */

import { MotionConfig, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface MotionProviderProps {
  children: ReactNode;
}

export function MotionProvider({ children }: MotionProviderProps) {
  /* Sistem düzeyinde "azaltılmış hareket" tercihi */
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion={shouldReduceMotion ? "always" : "never"}>{children}</MotionConfig>
  );
}
