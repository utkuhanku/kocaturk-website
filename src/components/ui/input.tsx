"use client";

/**
 * Input — Form text input with label, error, and icon support
 *
 * @see .docs/06-COMPONENT-LIBRARY.md#12-input
 *
 * forwardRef ile React Hook Form uyumludur.
 * id: useId() ile SSR-safe otomatik üretilir — Math.random/Date.now KULLANMA.
 *
 * @example
 * <Input label="E-posta" type="email" error="Geçersiz adres" />
 * <Input label="Arama" icon={<i className="bx bx-search" />} iconPosition="left" />
 */

import type { ReactNode } from "react";
import { forwardRef, useId } from "react";
import { cn } from "@/lib/cn";
import styles from "./input.module.css";
import { Label } from "./label";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, icon, iconPosition = "right", className, id: propId, required, ...rest },
  ref,
) {
  const generatedId = useId();
  const id = propId ?? generatedId;
  const errorId = `${id}-error`;

  return (
    <div className={styles.wrapper}>
      {label && (
        <Label htmlFor={id} required={required}>
          {label}
        </Label>
      )}
      <div className={styles.fieldWrap}>
        {icon && iconPosition === "left" && (
          <span className={cn(styles.icon, styles.iconLeft)} aria-hidden="true">
            {icon}
          </span>
        )}
        <input
          ref={ref}
          id={id}
          required={required}
          aria-required={required || undefined}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            styles.input,
            icon && iconPosition === "left" && styles.hasIconLeft,
            icon && iconPosition === "right" && styles.hasIconRight,
            error && styles.hasError,
            className,
          )}
          {...rest}
        />
        {icon && iconPosition === "right" && (
          <span className={cn(styles.icon, styles.iconRight)} aria-hidden="true">
            {icon}
          </span>
        )}
      </div>
      {error && (
        <p id={errorId} className={styles.errorMessage} role="alert">
          {error}
        </p>
      )}
    </div>
  );
});
