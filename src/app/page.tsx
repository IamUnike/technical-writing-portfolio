import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button, LinkButton } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { Eyebrow } from "@/components/ui/eyebrow";
import { TextLink } from "@/components/ui/text-link";
import type { ReactNode } from "react";

const colors = [
  { name: "Canvas", token: "--canvas", className: "bg-canvas" },
  {
    name: "Raised surface",
    token: "--surface-raised",
    className: "bg-surface-raised",
  },
  { name: "Surface", token: "--surface", className: "bg-surface" },
  { name: "Ink", token: "--ink", className: "bg-ink" },
  { name: "Muted ink", token: "--ink-muted", className: "bg-ink-muted" },
  { name: "Accent", token: "--accent", className: "bg-accent" },
] as const;

const spacing = [
  { name: "XS", value: "0.5rem", width: "w-8" },
  { name: "SM", value: "1rem", width: "w-16" },
  { name: "MD", value: "1.5rem", width: "w-24" },
  { name: "LG", value: "2.5rem", width: "w-40" },
  { name: "XL", value: "4rem", width: "w-64 max-w-full" },
] as const;

export default function DesignSystemPreview() {
  return (
    <div>
      <div className="border-b border-line bg-surface-raised">
        <Container className="flex min-h-12 items-center justify-between gap-4 py-2">
          <span className="type-label text-ink-muted">Internal reference</span>
          <span className="type-technical text-ink-subtle">Phase 6C / v0.1</span>
        </Container>
      </div>

      <Section spacing="compact" aria-labelledby="preview-title">
        <Container size="content">
          <Eyebrow>Temporary design-system preview</Eyebrow>
          <h1 id="preview-title" className="type-display mt-8 max-w-content">
            Precision before decoration.
          </h1>
          <p className="type-body-large mt-8 max-w-reading text-ink-muted">
            A working reference for typography, color, spacing, layout, and
            foundational interactions. This route is not the portfolio
            homepage and will be replaced in a later phase.
          </p>
        </Container>
      </Section>

      <Divider />

      <Section id="type" aria-labelledby="type-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-20">
            <div>
              <Eyebrow>01 / Typography</Eyebrow>
              <h2 id="type-title" className="type-h3 mt-4">
                Editorial hierarchy
              </h2>
            </div>

            <div className="space-y-14">
              <TypeSpecimen label="Display / Newsreader">
                <p className="type-display">Complex ideas, clearly framed.</p>
              </TypeSpecimen>
              <TypeSpecimen label="Heading 1 / Newsreader">
                <p className="type-h1">Readable systems for dense information.</p>
              </TypeSpecimen>
              <TypeSpecimen label="Heading 2 / Newsreader">
                <p className="type-h2">Structure makes detail navigable.</p>
              </TypeSpecimen>
              <TypeSpecimen label="Heading 3 / IBM Plex Sans">
                <p className="type-h3">Evidence, context, and next steps</p>
              </TypeSpecimen>
              <TypeSpecimen label="Body large / IBM Plex Sans">
                <p className="type-body-large max-w-reading text-ink-muted">
                  Long-form technical content should feel measured and easy to
                  follow, with enough space for readers to understand the
                  system rather than simply scan the surface.
                </p>
              </TypeSpecimen>
              <div className="grid gap-10 md:grid-cols-2">
                <TypeSpecimen label="Body / IBM Plex Sans">
                  <p className="type-body text-ink-muted">
                    Clear hierarchy, deliberate pacing, and precise language
                    help readers move from context to action without friction.
                  </p>
                </TypeSpecimen>
                <TypeSpecimen label="Technical / IBM Plex Mono">
                  <p className="type-technical rounded-control border border-line bg-surface-raised p-4 text-ink-muted">
                    status: ready
                    <br />
                    mode: editorial
                    <br />
                    contrast: AA-oriented
                  </p>
                </TypeSpecimen>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Divider />

      <Section aria-labelledby="color-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-20">
            <div>
              <Eyebrow>02 / Color</Eyebrow>
              <h2 id="color-title" className="type-h3 mt-4">
                Quiet contrast
              </h2>
            </div>

            <div className="grid gap-px overflow-hidden rounded-surface border border-line bg-line sm:grid-cols-2 xl:grid-cols-3">
              {colors.map((color) => (
                <div key={color.token} className="bg-canvas p-5">
                  <div
                    className={`${color.className} h-24 rounded-control border border-line`}
                  />
                  <p className="mt-4 font-medium">{color.name}</p>
                  <p className="type-technical mt-1 text-ink-subtle">
                    {color.token}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Divider />

      <Section aria-labelledby="interaction-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-20">
            <div>
              <Eyebrow>03 / Interaction</Eyebrow>
              <h2 id="interaction-title" className="type-h3 mt-4">
                Controls and links
              </h2>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-4">
                <Button>Primary action</Button>
                <Button variant="secondary">Secondary action</Button>
                <LinkButton href="#layout" variant="secondary">
                  Linked action
                </LinkButton>
              </div>
              <p className="type-body mt-10 max-w-reading text-ink-muted">
                Inline links remain recognizable through more than color. Review
                the <TextLink href="#spacing">spacing scale</TextLink> or jump
                to the <TextLink href="#layout">container system</TextLink>.
              </p>
              <p className="type-small mt-5 text-ink-subtle">
                Use Tab to review the visible focus treatment.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Divider />

      <Section id="spacing" aria-labelledby="spacing-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-20">
            <div>
              <Eyebrow>04 / Spacing</Eyebrow>
              <h2 id="spacing-title" className="type-h3 mt-4">
                Measured rhythm
              </h2>
            </div>

            <div className="space-y-5">
              {spacing.map((item) => (
                <div
                  key={item.name}
                  className="grid grid-cols-[3rem_minmax(0,1fr)_4rem] items-center gap-4"
                >
                  <span className="type-technical text-ink-subtle">
                    {item.name}
                  </span>
                  <span
                    className={`${item.width} block h-3 rounded-[2px] bg-accent`}
                  />
                  <span className="type-technical text-right text-ink-subtle">
                    {item.value}
                  </span>
                </div>
              ))}
              <p className="type-small border-t border-line pt-5 text-ink-subtle">
                Page gutters and section spacing are fluid tokens that expand
                continuously with the viewport.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Divider />

      <Section id="layout" aria-labelledby="layout-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-20">
            <div>
              <Eyebrow>05 / Layout</Eyebrow>
              <h2 id="layout-title" className="type-h3 mt-4">
                Purposeful widths
              </h2>
            </div>

            <div className="space-y-5">
              <WidthSample label="Site / 90rem" width="w-full" />
              <WidthSample label="Media / 78rem" width="w-[87%]" />
              <WidthSample label="Content / 68rem" width="w-[76%]" />
              <WidthSample label="Reading / 46rem" width="w-[52%]" />
              <p className="type-body max-w-reading pt-5 text-ink-muted">
                The narrow measure supports sustained reading. Wider containers
                allow technical evidence, media, and composed portfolio layouts
                to breathe without losing alignment.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

type TypeSpecimenProps = {
  children: ReactNode;
  label: string;
};

function TypeSpecimen({ children, label }: TypeSpecimenProps) {
  return (
    <div>
      <p className="type-label mb-5 text-ink-subtle">{label}</p>
      {children}
    </div>
  );
}

type WidthSampleProps = {
  label: string;
  width: string;
};

function WidthSample({ label, width }: WidthSampleProps) {
  return (
    <div
      className={`${width} rounded-control border border-line-strong bg-surface-raised p-4`}
    >
      <span className="type-technical text-ink-subtle">{label}</span>
    </div>
  );
}
