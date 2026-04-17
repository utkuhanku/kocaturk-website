/**
 * HeroTitleReveal — Hero başlığı load animasyonu
 *
 * @see src/components/sections/hero.tsx
 * @see src/styles/utilities.css — .hero-title, .hero-title.is-in
 *
 * 'use client' — setTimeout ile .is-in class'ı eklenir.
 * Hero server component olarak kalır; sadece animasyon bu client wrapper'da.
 * Page load sonrası 100ms delay → stagger reveal başlar.
 */

"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

interface HeroTitleRevealProps {
  children: React.ReactNode;
  className?: string;
}

export function HeroTitleReveal({ children, className }: HeroTitleRevealProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      ref.current?.classList.add("is-in");
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <h1 ref={ref} className={cn("hero-title", className)}>
      {children}
    </h1>
  );
}
