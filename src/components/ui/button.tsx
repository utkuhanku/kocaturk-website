/**
 * Button — Primary CTA component
 *
 * @see .docs/06-COMPONENT-LIBRARY.md#11-button
 * @see .docs/02-DESIGN-SYSTEM.md — Button token'ları: --btn-padding-*, --btn-hover-lift
 *
 * @example
 * <Button variant="primary" size="lg">Ön Kayıt</Button>
 * <Button variant="ghost" icon={<i className="bx bx-right-arrow-alt" />}>Devamını oku</Button>
 *
 * NOT: onClick yalnızca 'use client' parent'lardan geçirilir.
 * Icon-only kullanımda aria-label zorunludur.
 */

import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./button.module.css";

type ButtonVariant = "primary" | "outline" | "outline-light" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: ReactNode;
  icon?: ReactNode;
  iconLeft?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  "aria-label"?: string;
  type?: "button" | "submit" | "reset";
}

const variantClass: Record<ButtonVariant, string> = {
  primary: styles.primary,
  outline: styles.outline,
  "outline-light": styles.outlineLight,
  ghost: styles.ghost,
};

const sizeClass: Record<ButtonSize, string> = {
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  icon,
  iconLeft,
  loading = false,
  disabled = false,
  onClick,
  className,
  "aria-label": ariaLabel,
  type = "button",
}: ButtonProps) {
  const isDisabled = disabled || loading;

  const cls = cn(styles.btn, variantClass[variant], sizeClass[size], className);

  const content = (
    <>
      {loading ? (
        <span className={cn(styles.iconWrap, styles.spinner)} aria-hidden="true">
          <i className="bx bx-loader-alt" />
        </span>
      ) : (
        iconLeft && (
          <span className={styles.iconWrap} aria-hidden="true">
            {iconLeft}
          </span>
        )
      )}
      <span>{loading ? "G\u00F6nderiliyor\u2026" : children}</span>
      {!loading && icon && (
        <span className={cn(styles.iconWrap, styles.iconRight)} aria-hidden="true">
          {icon}
        </span>
      )}
    </>
  );

  if (href && !isDisabled) {
    return (
      <Link
        href={href}
        className={cls}
        aria-label={ariaLabel}
        aria-busy={loading ? "true" : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={cls}
      disabled={isDisabled}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-busy={loading ? "true" : undefined}
    >
      {content}
    </button>
  );
}
