import {
  caseStudyStatusLabels,
  type Project,
} from "@/data/projects";
import { TextLink } from "@/components/ui/text-link";
import { cn } from "@/lib/cn";

type WorkProjectEntryProps = {
  index: number;
  project: Project;
};

export function WorkProjectEntry({ index, project }: WorkProjectEntryProps) {
  const isFeatured = project.prominence === "featured";

  return (
    <article
      aria-labelledby={`project-${project.slug}`}
      className={cn(
        "grid gap-8 border-b border-line py-10 lg:grid-cols-12 lg:gap-x-8",
        isFeatured ? "sm:py-14" : "sm:py-10",
      )}
    >
      <div className="flex items-start justify-between gap-5 lg:col-span-2 lg:block">
        <p className="type-technical text-accent">
          {String(index).padStart(2, "0")}
        </p>
        <p className="type-label type-label-readable text-ink-subtle lg:mt-8">
          {isFeatured ? "Primary project" : "Supporting project"}
        </p>
      </div>

      <div className="lg:col-span-5">
        <p className="type-label type-label-readable text-ink-subtle">
          {project.context}
        </p>
        <h2
          id={`project-${project.slug}`}
          className={cn(isFeatured ? "type-h2" : "type-h3", "mt-3")}
        >
          {project.name}
        </h2>
        <p
          className={cn(
            "mt-5 max-w-[42rem] text-ink-muted",
            isFeatured ? "type-body-large" : "type-body",
          )}
        >
          {project.summary}
        </p>

        <dl className="mt-8 grid gap-6 border-t border-line pt-6 sm:grid-cols-2">
          <MetadataGroup label="Documentation focus" values={project.focus} />
          <MetadataGroup
            label="Selected tools"
            values={project.technologies}
            emptyValue="To be verified"
          />
        </dl>
      </div>

      <div className="grid gap-7 sm:grid-cols-2 lg:col-span-4 lg:col-start-9 lg:block">
        <div>
          <p className="type-label type-label-readable text-ink-subtle">
            {project.workLabel ?? "Investigation"}
          </p>
          <ul className="type-small mt-3 space-y-2 text-ink-muted">
            {project.investigation.map((item) => (
              <li key={item} className="grid grid-cols-[0.75rem_1fr] gap-2">
                <span aria-hidden="true" className="text-accent">
                  —
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-line pt-5 sm:border-t-0 sm:pt-0 lg:mt-8 lg:border-t lg:pt-5">
          <p className="type-label type-label-readable text-ink-subtle">
            Evidence / status
          </p>
          <p className="type-small mt-3 grid grid-cols-[0.75rem_1fr] gap-2 text-ink-muted">
            <span
              aria-hidden="true"
              className={cn(
                "mt-[0.72em] block size-1.5 rounded-full",
                dotClassByTone[project.statusTone],
              )}
            />
            <span>{project.evidence}</span>
          </p>
        </div>

        <CaseStudyAvailability project={project} />
      </div>
    </article>
  );
}

function CaseStudyAvailability({ project }: { project: Project }) {
  if (project.caseStudyStatus === "published") {
    return (
      <p className="border-t border-line pt-3 sm:col-span-2 lg:mt-8">
        <TextLink
          href={`/work/${project.slug}`}
          className="type-technical type-technical-readable inline-flex min-h-11 items-center"
        >
          Read case study
          <span aria-hidden="true" className="ml-2">
            →
          </span>
        </TextLink>
      </p>
    );
  }

  return (
    <p className="type-technical type-technical-readable border-t border-line pt-5 text-ink-muted sm:col-span-2 lg:mt-8">
      Case study / {caseStudyStatusLabels[project.caseStudyStatus]}
    </p>
  );
}

type MetadataGroupProps = {
  emptyValue?: string;
  label: string;
  values: readonly string[];
};

function MetadataGroup({ emptyValue, label, values }: MetadataGroupProps) {
  return (
    <div>
      <dt className="type-label type-label-readable text-ink-subtle">
        {label}
      </dt>
      <dd className="type-small mt-3 text-ink-muted">
        {values.length > 0 ? values.join(" · ") : emptyValue}
      </dd>
    </div>
  );
}

const dotClassByTone: Record<Project["statusTone"], string> = {
  complete: "bg-accent",
  submitted: "border border-accent bg-transparent",
  practice: "bg-ink-subtle",
  todo: "border border-ink-subtle bg-transparent",
};
