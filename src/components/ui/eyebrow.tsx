import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

type EyebrowProps = ComponentPropsWithoutRef<"span">;

export function Eyebrow({ className, ...props }: EyebrowProps) {
  return (
    <span
      className={cn("type-label inline-flex items-center text-accent", className)}
      {...props}
    />
  );
}
