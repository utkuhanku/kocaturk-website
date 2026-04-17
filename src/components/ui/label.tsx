/**
 * Label — Form input label
 *
 * @see .docs/06-COMPONENT-LIBRARY.md#13-label
 *
 * @example
 * <Label htmlFor="email" required>E-posta adresi</Label>
 */

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./label.module.css";

interface LabelProps {
  htmlFor?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}

export function Label({ htmlFor, required, children, className }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={cn(styles.label, className)}>
      {children}
      {required && (
        <span aria-hidden="true" className={styles.required}>
          *
        </span>
      )}
    </label>
  );
}
