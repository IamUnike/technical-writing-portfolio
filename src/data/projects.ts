export type ProjectProminence = "featured" | "supporting";
export type ProjectStatusTone = "complete" | "submitted" | "practice" | "todo";

export type Project = {
  slug: "uptime-kuma" | "resend" | "taskflow" | "conduit";
  name: string;
  context: string;
  summary: string;
  focus: readonly string[];
  technologies: readonly string[];
  evidence: string;
  statusTone: ProjectStatusTone;
  prominence: ProjectProminence;
};

export const projects = [
  {
    slug: "uptime-kuma",
    name: "Uptime Kuma",
    context: "Self-hosted monitoring product",
    summary:
      "Troubleshooting and notification documentation developed through hands-on product testing and a Docs-as-Code contribution workflow.",
    focus: ["Product documentation", "Troubleshooting", "Notifications"],
    technologies: ["Git", "GitHub", "Docs-as-Code"],
    evidence: "Upstream documentation contribution merged",
    statusTone: "complete",
    prominence: "featured",
  },
  {
    slug: "resend",
    name: "Resend",
    context: "Developer platform / Node.js",
    summary:
      "Developer documentation shaped by API and SDK testing, deliberate error reproduction, and documentation QA with GitHub Actions.",
    focus: ["API documentation", "SDK documentation", "Troubleshooting"],
    technologies: ["Node.js", "GitHub Actions", "GitHub"],
    evidence: "Upstream pull request submitted",
    statusTone: "submitted",
    prominence: "featured",
  },
  {
    slug: "taskflow",
    name: "TaskFlow",
    context: "API documentation practice",
    summary:
      "An API quickstart and Docs-as-Code practice project built around runnable curl examples and static documentation publishing.",
    focus: ["API quickstart", "Docs-as-Code"],
    technologies: ["Docusaurus", "curl", "GitHub Pages"],
    evidence: "Documentation practice project",
    statusTone: "practice",
    prominence: "supporting",
  },
  {
    slug: "conduit",
    name: "Conduit",
    context: "Content verification pending",
    summary:
      "Project details will be added after the source material and contribution scope have been verified.",
    focus: ["Content inventory pending"],
    technologies: [],
    evidence: "Content TODO — verification required",
    statusTone: "todo",
    prominence: "supporting",
  },
] as const satisfies readonly Project[];
