"use client";

/**
 * Reveal — Scroll-triggered fade-in with stagger delay support
 *
 * @see src/styles/utilities.css — .reveal, .reveal.is-in, .reveal-d{1-5}
 * @see .docs/06-COMPONENT-LIBRARY.md#21-reveal
 *
 * CSS sınıfları utilities.css'te tanımlı — bu bileşen yeni CSS yazmaz.
 * Reduced motion: anında is-in eklenir, IntersectionObserver çalıştırılmaz.
 *
 * @example
 * <Reveal delay={2} as="section">
 *   <p>Scroll ile görünür</p>
 * </Reveal>
 */

import { useReducedMotion } from "motion/react";
import type { ElementType, ReactNode } from "react";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

type RevealDelay = 1 | 2 | 3 | 4 | 5;
type RevealAs = "div" | "span" | "section" | "article";

interface RevealProps {
  children: ReactNode;
  delay?: RevealDelay;
  as?: RevealAs;
  className?: string;
}

export function Reveal({ children, delay, as = "div", className }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReduced) {
      el.classList.add("is-in");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in");
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [prefersReduced]);

  const Tag = as as ElementType;

  return (
    <Tag ref={ref} className={cn("reveal", delay && `reveal-d${delay}`, className)}>
      {children}
    </Tag>
  );
}
