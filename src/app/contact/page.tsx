import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "Contact Gideon Francis",
  description:
    "Contact Gideon Francis about technical-writing roles, developer documentation projects, and related professional conversations.",
};

const conversationContexts = [
  {
    title: "Technical-writing roles",
    detail:
      "Roles centered on useful technical content for developer and technical audiences.",
  },
  {
    title: "Developer and product documentation",
    detail:
      "Task-based guides, concepts, reference content, and troubleshooting material.",
  },
  {
    title: "API & SDK documentation",
    detail:
      "Quickstarts, examples, integration guidance, and error documentation.",
  },
  {
    title: "Docs-as-Code and documentation improvement",
    detail:
      "Repository-based workflows, documentation QA, open-source contributions, and focused improvements.",
  },
] as const;

const usefulContext = [
  "What is being documented",
  "Intended audience",
  "Current documentation state",
  "Role or project scope",
  "Relevant technical environment",
] as const;

export default function ContactPage() {
  return (
    <>
      <section
        className="border-b border-line py-[var(--section-space-compact)]"
        aria-labelledby="contact-title"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-x-8">
            <div className="lg:col-span-7">
              <Eyebrow className="type-label-readable">Contact</Eyebrow>
              <h1 id="contact-title" className="type-h1 mt-6 max-w-[14ch]">
                Good documentation starts with a conversation.
              </h1>
              <p className="type-body-large mt-7 max-w-[42rem] text-ink-muted">
                I’m open to conversations about technical-writing roles and
                documentation projects for developer and technical audiences.
              </p>
            </div>

            <section
              aria-labelledby="primary-contact-title"
              className="border-t border-line pt-5 lg:col-span-4 lg:col-start-9 lg:mt-1"
            >
              <p className="type-label type-label-readable text-ink-subtle">
                Primary contact
              </p>
              <h2 id="primary-contact-title" className="type-h3 mt-4">
                Email
              </h2>
              <address className="mt-6 not-italic">
                <a
                  href="mailto:gideonfrancisoghie@gmail.com"
                  className="control-transition type-technical type-technical-readable flex min-h-11 items-center border-y border-line bg-canvas-subtle px-5 py-4 font-medium text-accent underline decoration-accent/35 underline-offset-4 [overflow-wrap:anywhere] hover:text-accent-strong hover:decoration-accent-strong active:opacity-75"
                >
                  gideonfrancisoghie@gmail.com
                </a>

                <div className="mt-6 border-t border-line pt-5">
                  <p className="type-label type-label-readable text-ink-subtle">
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/in/gideon-cyril-987829227/"
                    className="control-transition mt-2 inline-flex min-h-11 items-center font-medium text-accent underline decoration-accent/35 underline-offset-4 hover:text-accent-strong hover:decoration-accent-strong active:opacity-75"
                    aria-label="View Gideon Francis on LinkedIn"
                  >
                    View LinkedIn profile
                    <span aria-hidden="true" className="ml-2">
                      ↗
                    </span>
                  </a>
                </div>
              </address>
            </section>
          </div>
        </Container>
      </section>

      <section
        className="pt-[var(--section-space)] pb-[var(--section-space-compact)]"
        aria-labelledby="conversation-title"
      >
        <Container>
          <div className="grid gap-8 border-b border-line pb-8 lg:grid-cols-12 lg:items-end lg:gap-x-8">
            <div className="lg:col-span-7">
              <Eyebrow>01 / Conversation context</Eyebrow>
              <h2 id="conversation-title" className="type-h2 mt-6 max-w-[13ch]">
                Where a conversation can begin.
              </h2>
            </div>
            <p className="type-body max-w-reading text-ink-muted lg:col-span-4 lg:col-start-9">
              These are useful starting points, not a fixed services menu or a
              required project format.
            </p>
          </div>

          <ol>
            {conversationContexts.map((context, index) => (
              <li
                key={context.title}
                className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-3 gap-y-2 border-b border-line py-6 sm:grid-cols-[3rem_minmax(13rem,0.85fr)_minmax(18rem,1.15fr)] sm:items-baseline sm:gap-6 lg:grid-cols-12 lg:gap-x-8"
              >
                <span
                  className="type-technical text-accent lg:col-span-1"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="col-start-2 font-medium leading-snug sm:col-start-2 lg:col-span-4 lg:col-start-3">
                  {context.title}
                </h3>
                <p className="type-small col-start-2 text-ink-muted sm:col-start-3 lg:col-span-5 lg:col-start-8">
                  {context.detail}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section
        className="border-t border-line bg-canvas-subtle py-[var(--section-space-compact)]"
        aria-labelledby="useful-context-title"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-4">
              <Eyebrow>02 / Useful context</Eyebrow>
              <h2
                id="useful-context-title"
                className="type-h2 mt-6 max-w-[12ch]"
              >
                A brief first message is enough.
              </h2>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <p className="type-body-large max-w-reading text-ink-muted">
                If it is useful, an initial message can include some context
                about the documentation, its audience, and the scope of the
                conversation. None of the details below are required to begin.
              </p>

              <ul className="mt-10 border-y border-line">
                {usefulContext.map((item, index) => (
                  <li
                    key={item}
                    className="grid grid-cols-[2.5rem_1fr] items-center border-b border-line py-4 last:border-b-0"
                  >
                    <span
                      className="type-technical text-accent"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
