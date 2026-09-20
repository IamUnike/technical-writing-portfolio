import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/cn";

import {
  CaseStudyMeta,
  type CaseStudyMetaGroup,
} from "./case-study-meta";

type CaseStudyHeaderProps = {
  metadata: readonly CaseStudyMetaGroup[];
  project: Project;
  statusLabel: string;
  summary: string;
  title?: string;
};

export function CaseStudyHeader({
  metadata,
  project,
  statusLabel,
  summary,
  title,
}: CaseStudyHeaderProps) {
  const isSupporting = project.prominence === "supporting";

  return (
    <header
      className={cn(
        "border-b border-line",
        isSupporting
          ? "py-8 sm:py-14"
          : "py-10 sm:py-[var(--section-space-compact)]",
      )}
    >
      <Container>
        <Link
          href="/work"
          className="control-transition type-technical -ml-3 inline-flex min-h-11 items-center gap-2 px-3 text-ink-muted hover:text-accent active:opacity-70"
        >
          <span aria-hidden="true">←</span>
          Work index
        </Link>

        <div
          className={cn(
            "grid gap-7 lg:grid-cols-12 lg:gap-x-8",
            isSupporting ? "mt-6 sm:mt-8 sm:gap-8" : "mt-7 sm:mt-9 sm:gap-10",
          )}
        >
          <div className="lg:col-span-7">
            <Eyebrow className="type-label-readable">
              Case study / {statusLabel}
            </Eyebrow>
            <p className="type-label type-label-readable mt-5 text-ink-subtle sm:mt-7">
              {project.context}
            </p>
            <h1
              className={cn(
                "mt-3 max-w-[14ch]",
                isSupporting ? "type-h2" : "type-h1",
              )}
            >
              {title ?? project.name}
            </h1>
            <p
              className={cn(
                "mt-5 max-w-[44rem] text-ink-muted",
                isSupporting ? "type-body sm:mt-6" : "type-body-large sm:mt-7",
              )}
            >
              {summary}
            </p>

            {project.externalLinks?.length ? (
              <ul
                className={cn(
                  "mt-5 flex flex-col items-start sm:flex-row sm:flex-wrap sm:gap-x-6",
                  isSupporting ? "sm:mt-6" : "sm:mt-7",
                )}
              >
                {project.externalLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="control-transition inline-flex min-h-11 items-center font-medium text-accent underline decoration-accent/35 underline-offset-4 hover:text-accent-strong hover:decoration-accent-strong active:opacity-75"
                    >
                      {link.label}
                      <span aria-hidden="true" className="ml-2">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <CaseStudyMeta groups={metadata} />
        </div>
      </Container>
    </header>
  );
}
