import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

const widthClasses = {
  site: "max-w-site",
  content: "max-w-content",
  media: "max-w-media",
  reading: "max-w-reading",
} as const;

type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  size?: keyof typeof widthClasses;
};

export function Container({
  size = "site",
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full [padding-inline:var(--page-gutter)]",
        widthClasses[size],
        className,
      )}
      {...props}
    />
  );
}
