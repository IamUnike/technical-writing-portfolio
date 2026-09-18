import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ProjectPreview } from "@/components/projects/project-preview";
import { LinkButton } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { Eyebrow } from "@/components/ui/eyebrow";
import { TextLink } from "@/components/ui/text-link";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Gideon Francis — Technical Writer",
  description:
    "Gideon Francis is a technical writer focused on developer documentation, API and SDK documentation, Docs-as-Code, and technical verification.",
};

const capabilities = [
  {
    name: "Developer Documentation",
    detail: "Product guides and implementation-focused technical content",
  },
  {
    name: "API & SDK Documentation",
    detail: "Tested requests, examples, quickstarts, and error guidance",
  },
  {
    name: "Docs-as-Code",
    detail: "Version-controlled documentation and review workflows",
  },
  {
    name: "Technical Investigation",
    detail: "Hands-on product, API, and implementation research",
  },
  {
    name: "Troubleshooting Documentation",
    detail: "Reproducible paths from failure state to resolution",
  },
  {
    name: "Open-source Documentation",
    detail: "Repository-based contribution and upstream collaboration",
  },
] as const;

const process = ["Investigate", "Structure", "Write", "Verify", "Ship"] as const;

export default function HomePage() {
  const featuredProjects = projects.filter(
    (project) => project.prominence === "featured",
  );
  const supportingProjects = projects.filter(
    (project) => project.prominence === "supporting",
  );

  return (
    <>
      <section
        className="flex min-h-[calc(100svh-var(--header-height))] items-stretch border-b border-line"
        aria-labelledby="hero-title"
      >
        <Container className="grid flex-1 content-between gap-14 py-12 sm:py-16 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-10 lg:py-14">
          <div className="lg:col-span-9 xl:col-span-8">
            <Eyebrow className="type-label-readable">
              Gideon Francis / Technical Writer
            </Eyebrow>
            <h1
              id="hero-title"
              className="type-display mt-7 max-w-[12ch] lg:max-w-[14ch]"
            >
              I turn complex technical systems into documentation developers
              can use.
            </h1>
          </div>

          <aside
            aria-label="Documentation focus"
            className="self-start border-t border-line pt-5 lg:col-span-3 lg:col-start-10 lg:mt-1 xl:col-start-10"
          >
            <p className="type-label type-label-readable text-ink-subtle">
              Documentation focus
            </p>
            <ul className="type-small mt-4 space-y-2 text-ink-muted">
              <li>Developer documentation</li>
              <li>API &amp; SDK documentation</li>
              <li>Docs-as-Code</li>
              <li>Technical verification</li>
            </ul>
          </aside>

          <div className="lg:col-span-12 lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-8">
            <div className="lg:col-span-7 xl:col-span-6">
              <p className="type-body-large max-w-[39rem] text-ink-muted">
                I investigate products, APIs, and implementation details to
                create precise documentation for technical audiences.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <LinkButton href="#selected-work">View selected work</LinkButton>
                <LinkButton href="/contact" variant="secondary">
                  Contact
                </LinkButton>
              </div>
            </div>

            <div className="mt-12 border-t border-line pt-4 lg:col-span-3 lg:col-start-10 lg:mt-0">
              <a
                href="#selected-work"
                className="control-transition type-technical -ml-3 flex min-h-11 w-fit items-center gap-3 px-3 text-ink-muted hover:text-accent active:opacity-70"
              >
                <span aria-hidden="true" className="text-accent">
                  ↓
                </span>
                01 / Selected work
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Section id="selected-work" aria-labelledby="work-title">
        <Container>
          <SectionHeading
            eyebrow="01 / Selected work"
            title="Documentation grounded in the product."
          >
            Selected projects spanning product investigation, APIs, SDKs,
            troubleshooting, and Docs-as-Code practice.
          </SectionHeading>

          <div className="mt-14 border-t border-line sm:mt-16">
            {featuredProjects.map((project, index) => (
              <ProjectPreview
                key={project.slug}
                project={project}
                index={index + 1}
                variant="featured"
              />
            ))}
          </div>

          <div className="grid border-b border-line md:grid-cols-2">
            {supportingProjects.map((project, index) => (
              <ProjectPreview
                key={project.slug}
                project={project}
                index={featuredProjects.length + index + 1}
                variant="supporting"
                className={index === 0 ? "md:border-r md:border-line" : undefined}
              />
            ))}
          </div>

          <p className="type-small mt-7 max-w-reading text-ink-muted">
            Full case studies are being prepared. Current entries show verified
            project context or an explicit content TODO.
          </p>
        </Container>
      </Section>

      <Divider />

      <Section aria-labelledby="capabilities-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-4">
              <Eyebrow>02 / Capabilities</Eyebrow>
              <h2 id="capabilities-title" className="type-h2 mt-6 max-w-[10ch]">
                Work across the documentation lifecycle.
              </h2>
            </div>

            <ol className="border-t border-line lg:col-span-7 lg:col-start-6">
              {capabilities.map((capability, index) => (
                <li
                  key={capability.name}
                  className="grid gap-2 border-b border-line py-5 sm:grid-cols-[3rem_minmax(0,0.9fr)_minmax(12rem,1fr)] sm:items-baseline sm:gap-5"
                >
                  <span className="type-technical text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-medium leading-snug">{capability.name}</h3>
                  <p className="type-small text-ink-muted">
                    {capability.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <section
        className="border-y border-line bg-surface-raised py-[var(--section-space-compact)]"
        aria-labelledby="process-title"
      >
        <Container>
          <div className="grid gap-9 lg:grid-cols-12 lg:items-end lg:gap-x-8">
            <div className="lg:col-span-4">
              <Eyebrow>03 / Documentation process</Eyebrow>
              <h2 id="process-title" className="type-h2 mt-6">
                From system to usable guidance.
              </h2>
            </div>
            <p className="type-body max-w-reading text-ink-muted lg:col-span-5 lg:col-start-7">
              A repeatable workflow keeps the writing connected to real
              behavior from first investigation through delivery.
            </p>
          </div>

          <ol className="mt-12 grid border-y border-line sm:grid-cols-5">
            {process.map((step, index) => (
              <li
                key={step}
                className="relative grid grid-cols-[3rem_1fr] items-center border-b border-line py-4 last:border-b-0 sm:block sm:border-b-0 sm:border-r sm:px-4 sm:py-6 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
              >
                <span className="type-technical text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-medium sm:mt-5 sm:block">{step}</span>
                {index < process.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute right-[-0.45rem] top-[1.35rem] z-10 hidden bg-surface-raised px-1 text-ink-subtle sm:block"
                  >
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <Section aria-labelledby="background-title">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-4">
              <Eyebrow>04 / Selected background</Eyebrow>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <h2 id="background-title" className="type-h2 max-w-[15ch]">
                Technical depth behind the documentation.
              </h2>
              <p className="type-body-large mt-7 max-w-reading text-ink-muted">
                A B.Tech background in Cyber Security Science, together with
                technical research and publication experience, supports
                rigorous investigation of unfamiliar systems.
              </p>
              <p className="mt-7">
                <TextLink
                  href="/about"
                  className="inline-flex min-h-11 items-center"
                >
                  View selected background
                </TextLink>
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <section
        className="border-t border-line bg-accent text-accent-contrast"
        aria-labelledby="contact-title"
      >
        <Container className="py-[var(--section-space-compact)]">
          <div className="grid gap-9 border-t border-accent-contrast/25 pt-8 lg:grid-cols-12 lg:items-end lg:gap-x-8 lg:pt-10">
            <div className="lg:col-span-8">
              <p className="type-label type-label-readable text-accent-contrast/85">
                05 / Start a conversation
              </p>
              <h2 id="contact-title" className="type-h1 mt-6 max-w-[14ch]">
                Let&apos;s make complex systems easier to use.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="type-body max-w-[24rem] text-accent-contrast/90">
                Discuss a technical-writing opportunity or documentation
                project.
              </p>
              <LinkButton
                href="/contact"
                variant="inverse"
                className="mt-6"
              >
                Contact Gideon
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

type SectionHeadingProps = {
  children: ReactNode;
  eyebrow: string;
  title: string;
};

function SectionHeading({ children, eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="grid gap-7 lg:grid-cols-12 lg:items-end lg:gap-x-8">
      <div className="lg:col-span-8">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 id="work-title" className="type-h2 mt-6 max-w-[16ch]">
          {title}
        </h2>
      </div>
      <p className="type-body text-ink-muted lg:col-span-4">{children}</p>
    </div>
  );
}
