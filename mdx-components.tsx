import type { MDXComponents } from "mdx/types";

import {
  ArtifactFigure,
  ArtifactImage,
  ArtifactPair,
} from "@/components/case-studies/artifact-figure";
import {
  DocumentationSet,
  RevisionTrail,
  TechnicalSequence,
  WorkflowPath,
} from "@/components/case-studies/case-study-patterns";
import { CaseStudySection } from "@/components/case-studies/case-study-section";
import { EvidenceBlock } from "@/components/case-studies/evidence-block";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ArtifactFigure,
    ArtifactImage,
    ArtifactPair,
    CaseStudySection,
    DocumentationSet,
    EvidenceBlock,
    RevisionTrail,
    TechnicalSequence,
    WorkflowPath,
    ...components,
  };
}
