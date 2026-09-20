export type ProjectProminence = "featured" | "supporting";
export type ProjectStatusTone = "complete" | "submitted" | "practice" | "todo";
export type ProjectSlug = "uptime-kuma" | "resend" | "taskflow" | "conduit";
export type CaseStudyStatus =
  | "published"
  | "in-development"
  | "planned"
  | "awaiting-verification";

export type ProjectExternalLink = {
  href: string;
  label: string;
};

export type Project = {
  slug: ProjectSlug;
  name: string;
  context: string;
  summary: string;
  focus: readonly string[];
  investigation: readonly string[];
  technologies: readonly string[];
  evidence: string;
  statusTone: ProjectStatusTone;
  prominence: ProjectProminence;
  caseStudyStatus: CaseStudyStatus;
  externalLinks?: readonly ProjectExternalLink[];
};

export const projects = [
  {
    slug: "uptime-kuma",
    name: "Uptime Kuma",
    context: "Independent documentation / self-hosted monitoring",
    summary:
      "A five-page, task-oriented documentation project grounded in local product testing, deliberate failure reproduction, notification verification, and Docs-as-Code practice.",
    focus: [
      "Product documentation",
      "Troubleshooting",
      "Notifications",
      "Docs-as-Code",
    ],
    investigation: [
      "Local Docker deployment",
      "Failure and recovery reproduction",
      "Telegram notification testing",
      "Docs-as-Code workflow",
    ],
    technologies: [
      "Markdown",
      "Git",
      "GitHub",
      "GitHub Actions",
      "Docker",
      "Telegram",
    ],
    evidence: "Upstream documentation contribution merged",
    statusTone: "complete",
    prominence: "featured",
    caseStudyStatus: "published",
    externalLinks: [
      {
        href: "https://github.com/IamUnike/uptime-kuma-docs",
        label: "Independent documentation repository",
      },
      {
        href: "https://github.com/louislam/uptime-kuma-wiki/pull/175",
        label: "Merged upstream contribution",
      },
    ],
  },
  {
    slug: "resend",
    name: "Resend",
    context: "Independent developer documentation / Node.js SDK",
    summary:
      "A five-page developer guide and two sanitized JavaScript examples structured around onboarding, API-key permissions, reproduced errors, and documentation QA.",
    focus: [
      "Developer documentation",
      "API & SDK documentation",
      "Troubleshooting",
      "Docs-as-Code",
    ],
    investigation: [
      "Node.js SDK workflow testing",
      "API-key permission testing",
      "Six reproduced API error scenarios",
      "Documentation QA with GitHub Actions",
    ],
    technologies: [
      "Node.js",
      "JavaScript",
      "Resend SDK",
      "Markdown",
      "Git",
      "GitHub Actions",
    ],
    evidence: "Documentation published · upstream pull request open",
    statusTone: "submitted",
    prominence: "featured",
    caseStudyStatus: "published",
    externalLinks: [
      {
        href: "https://github.com/IamUnike/resend-nodejs-docs",
        label: "Independent documentation repository",
      },
      {
        href: "https://github.com/resend/resend-examples/pull/313",
        label: "Open upstream contribution",
      },
    ],
  },
  {
    slug: "taskflow",
    name: "TaskFlow",
    context: "API documentation practice",
    summary:
      "An API quickstart and Docs-as-Code practice project built around runnable curl examples and static documentation publishing.",
    focus: ["API quickstart", "Docs-as-Code"],
    investigation: ["Runnable curl example development"],
    technologies: ["Docusaurus", "curl", "GitHub Pages"],
    evidence: "Documentation practice project",
    statusTone: "practice",
    prominence: "supporting",
    caseStudyStatus: "planned",
  },
  {
    slug: "conduit",
    name: "Conduit",
    context: "Content verification pending",
    summary:
      "Project details will be added after the source material and contribution scope have been verified.",
    focus: ["Content inventory pending"],
    investigation: ["Verification pending"],
    technologies: [],
    evidence: "Content TODO — verification required",
    statusTone: "todo",
    prominence: "supporting",
    caseStudyStatus: "awaiting-verification",
  },
] as const satisfies readonly Project[];

export const caseStudyStatusLabels: Record<CaseStudyStatus, string> = {
  published: "Available",
  "in-development": "In development",
  planned: "Planned",
  "awaiting-verification": "Awaiting verification",
};

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
