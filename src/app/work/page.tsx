import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "Work",
  description: "Temporary placeholder for the portfolio work index.",
};

export default function WorkPage() {
  return (
    <Section spacing="compact" aria-labelledby="work-title">
      <Container size="content">
        <Eyebrow>Route scaffold / Phase 6D</Eyebrow>
        <h1 id="work-title" className="type-h1 mt-6">
          Work
        </h1>
        <p className="type-body-large mt-6 max-w-reading text-ink-muted">
          This route is a temporary structural placeholder. Portfolio content
          will be added in a later phase.
        </p>
      </Container>
    </Section>
  );
}
