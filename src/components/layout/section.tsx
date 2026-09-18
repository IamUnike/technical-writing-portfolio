import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

const spacingClasses = {
  default: "py-[var(--section-space)]",
  compact: "py-[var(--section-space-compact)]",
} as const;

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  spacing?: keyof typeof spacingClasses;
};

export function Section({
  spacing = "default",
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(spacingClasses[spacing], className)}
      {...props}
    />
  );
}
