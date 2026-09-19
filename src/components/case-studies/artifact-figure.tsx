import Image, { type ImageProps } from "next/image";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type ArtifactFigureProps = {
  caption: string;
  children: ReactNode;
  className?: string;
  label?: string;
};

export function ArtifactFigure({
  caption,
  children,
  className,
  label,
}: ArtifactFigureProps) {
  return (
    <figure className={cn("case-study-artifact my-10", className)}>
      <div className="overflow-hidden border border-line bg-surface-raised">
        {children}
      </div>
      <figcaption className="type-small mt-3 grid gap-1 text-ink-muted sm:grid-cols-[auto_1fr] sm:gap-3">
        {label ? (
          <span className="type-technical text-ink-subtle">{label}</span>
        ) : null}
        <span>{caption}</span>
      </figcaption>
    </figure>
  );
}

export function ArtifactImage({ alt, className, ...props }: ImageProps) {
  return (
    <Image
      alt={alt}
      className={cn("h-auto w-full", className)}
      sizes="(max-width: 768px) 100vw, 78rem"
      {...props}
    />
  );
}
