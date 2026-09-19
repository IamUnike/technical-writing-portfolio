import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import type { Project } from "@/data/projects";

import { CaseStudyMeta } from "./case-study-meta";

type CaseStudyHeaderProps = {
  project: Project;
  statusLabel: string;
};

export function CaseStudyHeader({
  project,
  statusLabel,
}: CaseStudyHeaderProps) {
  return (
    <header className="border-b border-line py-[var(--section-space-compact)]">
      <Container>
        <Link
          href="/work"
          className="control-transition type-technical -ml-3 inline-flex min-h-11 items-center gap-2 px-3 text-ink-muted hover:text-accent active:opacity-70"
        >
          <span aria-hidden="true">←</span>
          Work index
        </Link>

        <div className="mt-9 grid gap-10 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-8">
            <Eyebrow className="type-label-readable">
              Case study / {statusLabel}
            </Eyebrow>
            <p className="type-label type-label-readable mt-7 text-ink-subtle">
              {project.context}
            </p>
            <h1 className="type-h1 mt-3 max-w-[14ch]">{project.name}</h1>
            <p className="type-body-large mt-7 max-w-[44rem] text-ink-muted">
              {project.summary}
            </p>
          </div>

          <CaseStudyMeta project={project} />
        </div>
      </Container>
    </header>
  );
}
