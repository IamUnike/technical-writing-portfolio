import type { ReactNode } from "react";

type CaseStudySectionProps = {
  children: ReactNode;
  eyebrow?: string;
  id: string;
  title: string;
};

export function CaseStudySection({
  children,
  eyebrow,
  id,
  title,
}: CaseStudySectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-[calc(var(--header-height)+var(--space-lg))] border-t border-line pt-8 first:border-t-0 first:pt-0 [&+&]:mt-16 sm:[&+&]:mt-20"
    >
      {eyebrow ? (
        <p className="type-label type-label-readable text-accent">{eyebrow}</p>
      ) : null}
      <h2 id={`${id}-title`} className="type-h2 mt-4 max-w-[16ch]">
        {title}
      </h2>
      <div className="mt-7">{children}</div>
    </section>
  );
}
