import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyHeader } from "@/components/case-studies/case-study-header";
import { CaseStudyLayout } from "@/components/case-studies/case-study-layout";
import { caseStudySlugs, getCaseStudy } from "@/content/case-studies";
import { getProject, type ProjectSlug } from "@/data/projects";

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
  const caseStudy = project
    ? getCaseStudy(project.slug as ProjectSlug)
    : undefined;

  if (!project || !caseStudy) {
    return {};
  }

  return {
    title: caseStudy.seo.title,
    description: caseStudy.seo.description,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  const caseStudy = project
    ? getCaseStudy(project.slug as ProjectSlug)
    : undefined;

  if (!project || !caseStudy) {
    notFound();
  }

  const { default: CaseStudyContent } = await caseStudy.loader();

  return (
    <article>
      <CaseStudyHeader
        metadata={caseStudy.header.metadata}
        project={project}
        statusLabel={caseStudy.header.statusLabel}
        summary={caseStudy.header.summary}
      />
      <CaseStudyLayout contents={caseStudy.contents}>
        <CaseStudyContent />
      </CaseStudyLayout>
    </article>
  );
}
