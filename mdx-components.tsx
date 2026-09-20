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
import {
  ApiErrorTable,
  CodeArtifact,
  JourneyMap,
  PermissionEvidence,
} from "@/components/case-studies/technical-artifacts";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ArtifactFigure,
    ArtifactImage,
    ArtifactPair,
    ApiErrorTable,
    CaseStudySection,
    CodeArtifact,
    DocumentationSet,
    EvidenceBlock,
    JourneyMap,
    PermissionEvidence,
    RevisionTrail,
    TechnicalSequence,
    WorkflowPath,
    ...components,
  };
}
