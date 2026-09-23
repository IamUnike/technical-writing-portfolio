import type { MDXComponents } from "mdx/types";

import {
  ArtifactFigure,
  ArtifactImage,
  ArtifactPair,
} from "@/components/case-studies/artifact-figure";
import {
  DocumentationArchitecture,
  DocumentationSet,
  DocumentationTaxonomy,
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
import { TextLink } from "@/components/ui/text-link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ArtifactFigure,
    ArtifactImage,
    ArtifactPair,
    ApiErrorTable,
    CaseStudySection,
    CodeArtifact,
    DocumentationArchitecture,
    DocumentationSet,
    DocumentationTaxonomy,
    EvidenceBlock,
    JourneyMap,
    PermissionEvidence,
    RevisionTrail,
    TechnicalSequence,
    TextLink,
    WorkflowPath,
    ...components,
  };
}
