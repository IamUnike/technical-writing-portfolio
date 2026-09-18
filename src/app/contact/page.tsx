import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "Contact",
  description: "Temporary placeholder for the portfolio Contact page.",
};

export default function ContactPage() {
  return (
    <Section spacing="compact" aria-labelledby="contact-title">
      <Container size="content">
        <Eyebrow>Route scaffold / Phase 6D</Eyebrow>
        <h1 id="contact-title" className="type-h1 mt-6">
          Contact
        </h1>
        <p className="type-body-large mt-6 max-w-reading text-ink-muted">
          This route is a temporary structural placeholder. Contact details
          will be added in a later phase.
        </p>
      </Container>
    </Section>
  );
}
