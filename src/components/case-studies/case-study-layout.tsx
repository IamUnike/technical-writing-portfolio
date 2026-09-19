import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { cn } from "@/lib/cn";

export type CaseStudyContentsItem = {
  href: `#${string}`;
  label: string;
};

type CaseStudyLayoutProps = {
  children: ReactNode;
  contents?: readonly CaseStudyContentsItem[];
};

export function CaseStudyLayout({
  children,
  contents = [],
}: CaseStudyLayoutProps) {
  const hasContents = contents.length > 1;

  return (
    <Container className="pt-14 pb-[var(--section-space)] sm:py-[var(--section-space)]">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-8">
        {hasContents ? <CaseStudyContents items={contents} /> : null}
        <div
          className={cn(
            "case-study-prose min-w-0",
            hasContents
              ? "lg:col-span-8 lg:col-start-5"
              : "lg:col-span-8 lg:col-start-3",
          )}
        >
          {children}
        </div>
      </div>
    </Container>
  );
}

type CaseStudyContentsProps = {
  items: readonly CaseStudyContentsItem[];
};

function CaseStudyContents({ items }: CaseStudyContentsProps) {
  return (
    <aside className="hidden lg:col-span-3 lg:block">
      <nav
        aria-label="Case study contents"
        className="sticky top-[calc(var(--header-height)+var(--space-lg))] border-t border-line pt-5"
      >
        <p className="type-label type-label-readable text-ink-subtle">
          On this page
        </p>
        <ol className="type-small mt-4 space-y-1">
          {items.map((item, index) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="control-transition -ml-3 grid min-h-11 grid-cols-[2rem_1fr] items-center px-3 text-ink-muted hover:text-accent active:opacity-70"
              >
                <span className="type-technical text-ink-subtle">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  );
}
