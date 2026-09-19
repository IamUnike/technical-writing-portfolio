import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyHeader } from "@/components/case-studies/case-study-header";
import { CaseStudyLayout } from "@/components/case-studies/case-study-layout";
import { caseStudySlugs, getCaseStudyLoader } from "@/content/case-studies";
import {
  caseStudyStatusLabels,
  getProject,
  type ProjectSlug,
} from "@/data/projects";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  const loader = project
    ? getCaseStudyLoader(project.slug as ProjectSlug)
    : undefined;

  if (!project || !loader) {
    return {};
  }

  return {
    title: `${project.name} case study — structural preview`,
    description:
      "A structural development preview. Verified case-study content has not yet been published.",
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  const loader = project
    ? getCaseStudyLoader(project.slug as ProjectSlug)
    : undefined;

  if (!project || !loader) {
    notFound();
  }

  const { default: CaseStudyContent } = await loader();

  return (
    <article>
      <CaseStudyHeader
        project={project}
        statusLabel={caseStudyStatusLabels[project.caseStudyStatus]}
      />
      <CaseStudyLayout>
        <CaseStudyContent />
      </CaseStudyLayout>
    </article>
  );
}
