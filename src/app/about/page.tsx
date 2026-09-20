import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { LinkButton } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { TextLink } from "@/components/ui/text-link";

export const metadata: Metadata = {
  title: "About Gideon Francis",
  description:
    "About Gideon Francis, a technical writer with a strong technical foundation in developer documentation, APIs, Docs-as-Code, and software systems.",
};

const technicalContexts = [
  {
    title: "Read implementation context",
    detail:
      "Familiarity with JavaScript, TypeScript, Python, Node.js, and React supports reading implementation context and evaluating code examples.",
  },
  {
    title: "Work with APIs and data",
    detail:
      "Practice with APIs, SDKs, and JSON supports developer-facing guides and reference material.",
  },
  {
    title: "Navigate developer environments",
    detail:
      "Linux, repositories, and development workflows provide context for technical instructions and troubleshooting.",
  },
  {
    title: "Understand web systems",
    detail:
      "Frontend development with HTML, CSS, and Tailwind CSS supports documentation for web interfaces and workflows.",
  },
] as const;

const workingProcess = [
  {
    name: "Understand",
    detail:
      "Establish reliable technical understanding from the sources appropriate to the work—product access, specifications, code, project documentation, technical contributors, research, or direct testing.",
  },
  {
    name: "Structure",
    detail:
      "Define the audience and user goals, then shape the information architecture and task flow around what readers need to accomplish.",
  },
  {
    name: "Write",
    detail:
      "Produce clear instructions, explanations, examples, or reference material in the form the content requires.",
  },
  {
    name: "Validate",
    detail:
      "Use the right checks for the work—technical testing, SME review, code or example verification, documentation QA, or editorial review.",
  },
  {
    name: "Deliver",
    detail:
      "Publish through a maintainable documentation workflow, using version control and review practices where appropriate.",
  },
] as const;

const documentationPractice = [
  {
    name: "Developer documentation",
    detail:
      "Guidance structured around audience needs, user goals, tasks, concepts, and reference information.",
    evidence: "Uptime Kuma",
  },
  {
    name: "API & SDK documentation",
    detail:
      "API and SDK testing, deliberate error reproduction, and documentation QA in Resend; runnable API quickstart practice in TaskFlow.",
    evidence: "Resend · TaskFlow",
  },
  {
    name: "Docs-as-Code",
    detail:
      "Documentation maintained through repositories, version control, review, and automated quality checks.",
    evidence: "Uptime Kuma · TaskFlow",
  },
  {
    name: "Troubleshooting documentation",
    detail:
      "Failure paths reproduced and documented from an observed problem state through recovery.",
    evidence: "Uptime Kuma · Resend",
  },
  {
    name: "Technical investigation",
    detail:
      "Direct product, API, or implementation work used when an assignment benefits from hands-on verification.",
    evidence: "Uptime Kuma · Resend",
  },
  {
    name: "Open-source documentation",
    detail:
      "Repository-based contribution work, including a merged upstream documentation improvement.",
    evidence: "Uptime Kuma",
  },
] as const;

const researchMethods = [
  "Source evaluation",
  "Evidence gathering",
  "Structured reasoning",
  "Accurate communication",
] as const;

export default function AboutPage() {
  return (
    <>
      <section
        className="border-b border-line py-[var(--section-space-compact)]"
        aria-labelledby="about-title"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-8">
              <Eyebrow className="type-label-readable">About</Eyebrow>
              <h1
                id="about-title"
                className="type-h1 mt-6 max-w-[14ch] lg:max-w-[16ch]"
              >
                Clear documentation starts with understanding the system.
              </h1>
              <p className="type-body-large mt-7 max-w-[43rem] text-ink-muted">
                I’m Gideon Francis, a technical writer creating clear, usable
                documentation for developers and technical audiences. My
                technical background lets me work directly with code, APIs,
                repositories, and software systems when an assignment requires
                it.
              </p>
            </div>

            <aside className="border-t border-line pt-5 lg:col-span-3 lg:col-start-10 lg:mt-1">
              <p className="type-label type-label-readable text-ink-subtle">
                Working premise
              </p>
              <p className="type-body mt-4 text-ink-muted">
                Good documentation is grounded in reliable technical
                understanding and shaped around what the reader needs to
                accomplish.
              </p>
            </aside>
          </div>
        </Container>
      </section>

      <Section aria-labelledby="foundation-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-4">
              <Eyebrow>01 / Technical foundation</Eyebrow>
              <h2
                id="foundation-title"
                className="type-h2 mt-6 max-w-[12ch] scroll-mt-16"
              >
                Technical depth in service of the writing.
              </h2>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <p className="type-body-large max-w-reading text-ink-muted">
                A B.Tech background in Cyber Security Science, together with
                software and frontend development experience, provides
                practical context for developer-facing documentation. This
                foundation helps me engage with technical implementations,
                environments, and contributors when the work calls for it.
              </p>

              <ol className="mt-10 border-y border-line">
                {technicalContexts.map((context, index) => (
                  <li
                    key={context.title}
                    className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-3 gap-y-2 border-b border-line py-5 last:border-b-0 sm:grid-cols-[2.75rem_minmax(9rem,0.8fr)_minmax(14rem,1.2fr)] sm:items-baseline sm:gap-5"
                  >
                    <span
                      className="type-technical text-accent"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="col-start-2 font-medium leading-snug sm:col-start-auto">
                      {context.title}
                    </h3>
                    <p className="type-small col-start-2 text-ink-muted sm:col-start-auto">
                      {context.detail}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </Section>

      <section
        className="border-y border-line bg-surface-raised py-[var(--section-space-compact)]"
        aria-labelledby="process-title"
      >
        <Container>
          <div className="grid gap-9 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-4">
              <Eyebrow>02 / How I work</Eyebrow>
              <h2
                id="process-title"
                className="type-h2 mt-6 max-w-[11ch] scroll-mt-16"
              >
                A working method, applied in practice.
              </h2>
            </div>
            <p className="type-body-large max-w-reading text-ink-muted lg:col-span-6 lg:col-start-6">
              The method adapts to the assignment while keeping audience needs,
              technical accuracy, and maintainability in view.
            </p>
          </div>

          <ol className="mt-12 border-y border-line">
            {workingProcess.map((step, index) => (
              <li
                key={step.name}
                className="grid grid-cols-[2.5rem_1fr] gap-x-3 gap-y-2 border-b border-line py-5 last:border-b-0 sm:grid-cols-[3rem_minmax(8rem,0.65fr)_minmax(18rem,1.6fr)] sm:items-baseline sm:gap-6"
              >
                <span
                  className="type-technical text-accent"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-medium leading-snug">{step.name}</h3>
                <p className="type-small col-start-2 text-ink-muted sm:col-start-auto">
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <Section aria-labelledby="practice-title">
        <Container>
          <div className="grid gap-8 border-b border-line pb-8 lg:grid-cols-12 lg:items-end lg:gap-x-8">
            <div className="lg:col-span-7">
              <Eyebrow>03 / Documentation practice</Eyebrow>
              <h2
                id="practice-title"
                className="type-h2 mt-6 max-w-[13ch] scroll-mt-16"
              >
                Capabilities connected to current work.
              </h2>
            </div>
            <p className="type-body max-w-reading text-ink-muted lg:col-span-4 lg:col-start-9">
              The current portfolio demonstrates six areas of technical-writing
              practice. Published links appear only where a supporting case
              study is available.
            </p>
          </div>

          <ol>
            {documentationPractice.map((practice, index) => (
              <li
                key={practice.name}
                className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-3 gap-y-2 border-b border-line py-6 sm:grid-cols-[3rem_minmax(11rem,0.8fr)_minmax(16rem,1.35fr)] sm:gap-6 sm:py-7 lg:grid-cols-12 lg:gap-x-8"
              >
                <span
                  className="type-technical text-accent lg:col-span-1"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="col-start-2 font-medium leading-snug sm:col-start-2 lg:col-span-3 lg:col-start-3">
                  {practice.name}
                </h3>
                <div className="col-start-2 sm:col-start-3 lg:col-span-6 lg:col-start-7">
                  <p className="type-small text-ink-muted">{practice.detail}</p>
                  <p className="type-technical type-technical-readable mt-2 text-ink-subtle sm:mt-3">
                    Evidence / {practice.evidence}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-7">
            <TextLink
              href="/work/uptime-kuma"
              className="inline-flex min-h-11 items-center"
            >
              Read the published Uptime Kuma case study
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </TextLink>
          </p>
        </Container>
      </Section>

      <section
        className="border-y border-line bg-canvas-subtle py-[var(--section-space-compact)]"
        aria-labelledby="research-title"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-4">
              <Eyebrow>04 / Research &amp; publication</Eyebrow>
              <h2
                id="research-title"
                className="type-h2 mt-6 max-w-[12ch] scroll-mt-16"
              >
                Research habits carried into documentation.
              </h2>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <p className="type-body-large max-w-reading text-ink-muted">
                Technical research and publication experience add another layer
                of rigor to the work: evaluating sources, gathering evidence,
                reasoning carefully, and communicating technical information
                with accuracy.
              </p>

              <ul className="mt-10 grid border-y border-line sm:grid-cols-2">
                {researchMethods.map((method, index) => (
                  <li
                    key={method}
                    className="grid grid-cols-[2.5rem_1fr] items-center border-b border-line py-4 last:border-b-0 sm:min-h-20 sm:border-r sm:px-5 sm:odd:pl-0 sm:even:border-r-0 sm:even:pr-0 sm:nth-last-[-n+2]:border-b-0"
                  >
                    <span
                      className="type-technical text-accent"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-medium">{method}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section
        className="bg-accent text-accent-contrast"
        aria-labelledby="contact-title"
      >
        <Container className="py-[var(--section-space-compact)]">
          <div className="grid gap-9 border-t border-accent-contrast/25 pt-8 lg:grid-cols-12 lg:items-end lg:gap-x-8 lg:pt-10">
            <div className="lg:col-span-8">
              <p className="type-label type-label-readable text-accent-contrast/85">
                05 / Start a conversation
              </p>
              <h2
                id="contact-title"
                className="type-h1 mt-6 max-w-[13ch] scroll-mt-16"
              >
                Need clear documentation for a technical audience?
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="type-body max-w-[25rem] text-accent-contrast/90">
                Discuss a technical-writing opportunity, developer
                documentation, API or SDK documentation, or a documentation
                project.
              </p>
              <LinkButton href="/contact" variant="inverse" className="mt-6">
                Contact Gideon
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
