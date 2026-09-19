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

type ArtifactPairItem = {
  alt: string;
  height: number;
  label: string;
  src: string;
  width: number;
};

type ArtifactPairProps = {
  items: readonly [ArtifactPairItem, ArtifactPairItem];
};

export function ArtifactPair({ items }: ArtifactPairProps) {
  return (
    <div className="grid gap-px bg-line md:grid-cols-2">
      {items.map((item) => (
        <div key={item.src} className="min-w-0 bg-ink p-5 sm:p-7">
          <p className="type-label type-label-readable text-surface">
            {item.label}
          </p>
          <ArtifactImage
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            className="mx-auto mt-5 w-auto max-w-full"
          />
        </div>
      ))}
    </div>
  );
}
