"use client";

/**
 * NumberCounter — Scroll-triggered animated number with easeOutCubic
 *
 * @see .docs/06-COMPONENT-LIBRARY.md#22-numbercounter
 *
 * Reduced motion: target değeri anında gösterilir, RAF animasyonu çalışmaz.
 * Format: tr-TR locale ile toLocaleString (Türkçe nokta/virgül ayracı).
 * aria-live="polite" ile ekran okuyucu son değeri okur.
 *
 * @example
 * <NumberCounter target={4015} suffix="+" />
 * <NumberCounter target={98} suffix="%" duration={1200} />
 */

import { useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

interface NumberCounterProps {
  target: number;
  duration?: number;
  format?: "tr-TR" | "en-US";
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

function easeOutCubic(progress: number): number {
  return 1 - (1 - progress) ** 3;
}

export function NumberCounter({
  target,
  duration = 1800,
  format = "tr-TR",
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
}: NumberCounterProps) {
  const [displayed, setDisplayed] = useState(0);
  const prefersReduced = useReducedMotion();
  const containerRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number>(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (prefersReduced) {
      setDisplayed(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          observer.disconnect();

          const startTime = performance.now();

          function tick(now: number) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutCubic(progress);
            setDisplayed(Math.round(eased * target));

            if (progress < 1) {
              rafRef.current = requestAnimationFrame(tick);
            } else {
              setDisplayed(target);
            }
          }

          rafRef.current = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration, prefersReduced]);

  const formatted = displayed.toLocaleString(format, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  const ariaLabel = `${prefix}${target.toLocaleString(format, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suffix}`;

  return (
    <span
      ref={containerRef}
      role="status"
      aria-live="polite"
      aria-label={ariaLabel}
      aria-atomic="true"
      className={cn(className)}
      style={{ fontFamily: "var(--font-display)" }}
    >
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
