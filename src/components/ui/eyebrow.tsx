/**
 * Eyebrow — Section label with decorative orange line
 *
 * @see .docs/06-COMPONENT-LIBRARY.md#13-eyebrow
 * @see src/styles/utilities.css — .eyebrow, .eyebrow.light
 *
 * @example
 * <Eyebrow>Ege\u2019nin E\u011fitim Omurgas\u0131</Eyebrow>
 * <Eyebrow variant="light">Uluslararas\u0131 Ba\u015far\u0131lar</Eyebrow>
 */

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface EyebrowProps {
  variant?: "default" | "light";
  children: ReactNode;
  className?: string;
}

export function Eyebrow({ variant = "default", children, className }: EyebrowProps) {
  return (
    <span className={cn("eyebrow", variant === "light" && "light", className)}>{children}</span>
  );
}
