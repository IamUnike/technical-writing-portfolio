import type { ComponentType } from "react";

import type { CaseStudyMetaGroup } from "@/components/case-studies/case-study-meta";
import type { ProjectSlug } from "@/data/projects";

type CaseStudyModule = {
  default: ComponentType;
};

export type CaseStudyDefinition = {
  contents: readonly { href: `#${string}`; label: string }[];
  header: {
    metadata: readonly CaseStudyMetaGroup[];
    statusLabel: string;
    summary: string;
    title?: string;
  };
  loader: () => Promise<CaseStudyModule>;
  seo: {
    description: string;
    title: string;
  };
};

const caseStudies = {
  "uptime-kuma": {
    contents: [
      { href: "#overview", label: "Overview" },
      { href: "#challenge", label: "Challenge" },
      { href: "#investigation", label: "Investigation" },
      { href: "#documentation-strategy", label: "Documentation strategy" },
      { href: "#technical-verification", label: "Technical verification" },
      { href: "#docs-as-code", label: "Docs-as-Code" },
      { href: "#open-source", label: "Open-source" },
      { href: "#selected-evidence", label: "Selected evidence" },
      { href: "#outcome", label: "Outcome" },
    ],
    header: {
      metadata: [
        { label: "Project", values: ["Independent documentation"] },
        {
          label: "Environment",
          values: ["Windows", "Docker Desktop", "Localhost / port 3001"],
        },
        {
          label: "Documentation",
          values: [
            "Product documentation",
            "Troubleshooting",
            "Notifications",
            "Docs-as-Code",
          ],
        },
        {
          label: "Tools",
          values: [
            "Markdown",
            "Git",
            "GitHub",
            "GitHub Actions",
            "Docker",
            "Telegram",
          ],
        },
      ],
      statusLabel: "Published",
      summary:
        "An independent documentation project grounded in local product testing, deliberate failure reproduction, notification verification, Docs-as-Code practice, and a separate merged upstream contribution.",
    },
    loader: () => import("../../content/projects/uptime-kuma.mdx"),
    seo: {
      title: "Uptime Kuma Documentation Case Study",
      description:
        "An independent Uptime Kuma documentation project covering hands-on monitoring tests, failure recovery, Telegram notifications, Docs-as-Code, and a merged upstream contribution.",
    },
  },
  resend: {
    contents: [
      { href: "#overview", label: "Overview" },
      { href: "#challenge", label: "Challenge" },
      { href: "#developer-journey", label: "Developer journey" },
      { href: "#api-verification", label: "API verification" },
      { href: "#permissions", label: "Permissions" },
      { href: "#troubleshooting", label: "Troubleshooting" },
      { href: "#examples", label: "Runnable examples" },
      { href: "#docs-as-code", label: "Docs-as-Code" },
      { href: "#upstream", label: "Upstream proposal" },
      { href: "#outcome", label: "Outcome" },
    ],
    header: {
      metadata: [
        { label: "Project", values: ["Independent technical-writing project"] },
        {
          label: "Focus",
          values: ["Developer documentation", "API & SDK documentation"],
        },
        {
          label: "Environment",
          values: ["Node.js", "JavaScript", "Resend Node.js SDK"],
        },
        {
          label: "Documentation",
          values: ["5 documentation pages", "2 sanitized examples"],
        },
      ],
      statusLabel: "Published",
      summary:
        "An independent developer-documentation project that turns a tested Node.js SDK workflow into onboarding, permission, troubleshooting, and runnable-example guidance, with a separate open upstream contribution.",
      title: "Resend Node.js Developer Guide",
    },
    loader: () => import("../../content/projects/resend.mdx"),
    seo: {
      title: "Resend Node.js Documentation Case Study",
      description:
        "An independent Resend Node.js documentation case study covering developer onboarding, API-key permissions, runnable examples, reproduced errors, Docs-as-Code, and an open upstream contribution.",
    },
  },
} satisfies Partial<Record<ProjectSlug, CaseStudyDefinition>>;

export const caseStudySlugs = Object.keys(caseStudies) as ProjectSlug[];

export function getCaseStudy(
  slug: ProjectSlug,
): CaseStudyDefinition | undefined {
  return caseStudies[slug as keyof typeof caseStudies];
}
