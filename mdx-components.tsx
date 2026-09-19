import type { MDXComponents } from "mdx/types";

import {
  ArtifactFigure,
  ArtifactImage,
} from "@/components/case-studies/artifact-figure";
import { CaseStudySection } from "@/components/case-studies/case-study-section";
import { EvidenceBlock } from "@/components/case-studies/evidence-block";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ArtifactFigure,
    ArtifactImage,
    CaseStudySection,
    EvidenceBlock,
    ...components,
  };
}
