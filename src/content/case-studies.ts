import type { ComponentType } from "react";

import type { ProjectSlug } from "@/data/projects";

type CaseStudyModule = {
  default: ComponentType;
};

const caseStudyLoaders = {
  "uptime-kuma": () => import("../../content/projects/uptime-kuma.mdx"),
} satisfies Partial<Record<ProjectSlug, () => Promise<CaseStudyModule>>>;

export const caseStudySlugs = Object.keys(caseStudyLoaders) as ProjectSlug[];

export function getCaseStudyLoader(slug: ProjectSlug) {
  return caseStudyLoaders[slug as keyof typeof caseStudyLoaders];
}
