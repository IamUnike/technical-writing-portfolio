import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "About",
  description: "Temporary placeholder for the portfolio About page.",
};

export default function AboutPage() {
  return (
    <Section spacing="compact" aria-labelledby="about-title">
      <Container size="content">
        <Eyebrow>Route scaffold / Phase 6D</Eyebrow>
        <h1 id="about-title" className="type-h1 mt-6">
          About
        </h1>
        <p className="type-body-large mt-6 max-w-reading text-ink-muted">
          This route is a temporary structural placeholder. About-page content
          will be added in a later phase.
        </p>
      </Container>
    </Section>
  );
}
