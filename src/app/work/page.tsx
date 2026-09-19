import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { WorkProjectEntry } from "@/components/projects/work-project-entry";
import { Eyebrow } from "@/components/ui/eyebrow";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected technical-writing work across developer documentation, APIs, troubleshooting, Docs-as-Code, and open-source contribution.",
};

export default function WorkPage() {
  return (
    <>
      <section
        className="border-b border-line py-[var(--section-space-compact)]"
        aria-labelledby="work-title"
      >
        <Container>
          <div className="grid gap-9 lg:grid-cols-12 lg:items-end lg:gap-x-8">
            <div className="lg:col-span-8">
              <Eyebrow className="type-label-readable">Selected work</Eyebrow>
              <h1 id="work-title" className="type-h1 mt-6 max-w-[15ch]">
                Documentation built through investigation, testing, and
                verification.
              </h1>
            </div>
            <p className="type-body-large max-w-reading text-ink-muted lg:col-span-4">
              Projects across products, APIs, troubleshooting, Docs-as-Code,
              and open-source contribution—shown with their current evidence
              and publication status.
            </p>
          </div>
        </Container>
      </section>

      <Section aria-labelledby="project-register-title">
        <Container>
          <div className="grid gap-7 border-b border-line pb-7 lg:grid-cols-12 lg:items-end lg:gap-x-8">
            <div className="lg:col-span-7">
              <Eyebrow>Project index / 04 entries</Eyebrow>
              <h2 id="project-register-title" className="type-h3 mt-5">
                Project register
              </h2>
            </div>
            <p className="type-small max-w-[34rem] text-ink-muted lg:col-span-4 lg:col-start-9">
              Primary projects carry deeper investigation and contribution
              evidence. Supporting work remains visible without implying equal
              scope or completion.
            </p>
          </div>

          <ol>
            {projects.map((project, index) => (
              <li key={project.slug}>
                <WorkProjectEntry project={project} index={index + 1} />
              </li>
            ))}
          </ol>

          <p className="type-small mt-7 max-w-reading text-ink-muted">
            Detailed case studies will be linked from this index only after
            their supporting evidence has been verified and published.
          </p>
        </Container>
      </Section>
    </>
  );
}
