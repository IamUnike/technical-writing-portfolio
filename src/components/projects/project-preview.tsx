import {
  caseStudyStatusLabels,
  type Project,
} from "@/data/projects";
import { cn } from "@/lib/cn";

type ProjectPreviewProps = {
  className?: string;
  index: number;
  project: Project;
  variant: "featured" | "supporting";
};

export function ProjectPreview({
  className,
  index,
  project,
  variant,
}: ProjectPreviewProps) {
  if (variant === "supporting") {
    return (
      <article
        className={cn(
          "border-t border-line py-8 md:border-t-0 md:px-8 md:first:pl-0 md:last:pr-0",
          className,
        )}
      >
        <div className="flex items-start justify-between gap-5">
          <p className="type-technical text-accent">
            {String(index).padStart(2, "0")}
          </p>
          <Status project={project} />
        </div>
        <p className="type-label type-label-readable mt-8 text-ink-subtle">
          {project.context}
        </p>
        <h3 className="type-h3 mt-3">{project.name}</h3>
        <p className="type-body mt-5 max-w-[34rem] text-ink-muted">
          {project.summary}
        </p>
        <Metadata project={project} compact />
        <p className="type-technical type-technical-readable mt-8 border-t border-line pt-4 text-ink-muted">
          Case study / {caseStudyStatusLabels[project.caseStudyStatus]}
        </p>
      </article>
    );
  }

  return (
    <article className="grid border-b border-line py-10 sm:py-12 lg:grid-cols-12 lg:gap-x-8">
      <div className="flex items-start justify-between gap-5 lg:col-span-2 lg:block">
        <p className="type-technical text-accent">
          {String(index).padStart(2, "0")}
        </p>
        <Status project={project} className="lg:mt-8" />
      </div>

      <div className="mt-8 lg:col-span-6 lg:mt-0">
        <p className="type-label type-label-readable text-ink-subtle">
          {project.context}
        </p>
        <h3 className="type-h2 mt-3">{project.name}</h3>
        <p className="type-body-large mt-6 max-w-[41rem] text-ink-muted">
          {project.summary}
        </p>
      </div>

      <div className="mt-9 lg:col-span-3 lg:col-start-10 lg:mt-0">
        <Metadata project={project} />
        <p className="type-technical type-technical-readable mt-8 border-t border-line pt-4 text-ink-muted">
          Case study / {caseStudyStatusLabels[project.caseStudyStatus]}
        </p>
      </div>
    </article>
  );
}

type MetadataProps = {
  compact?: boolean;
  project: Project;
};

function Metadata({ compact = false, project }: MetadataProps) {
  return (
    <dl
      className={cn(
        "space-y-5",
        compact &&
          "mt-7 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 md:block md:space-y-5",
      )}
    >
      <div>
        <dt className="type-label type-label-readable text-ink-subtle">
          Focus
        </dt>
        <dd className="type-small mt-2 text-ink-muted">
          {project.focus.join(" · ")}
        </dd>
      </div>
      <div>
        <dt className="type-label type-label-readable text-ink-subtle">
          Selected tools
        </dt>
        <dd className="type-small mt-2 text-ink-muted">
          {project.technologies.length > 0
            ? project.technologies.join(" · ")
            : "To be verified"}
        </dd>
      </div>
    </dl>
  );
}

type StatusProps = {
  className?: string;
  project: Project;
};

function Status({ className, project }: StatusProps) {
  return (
    <p
      className={cn(
        "type-technical type-technical-readable inline-flex max-w-[13rem] items-start gap-2 text-ink-muted",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "mt-[0.58em] block size-1.5 shrink-0 rounded-full",
          dotClassByTone[project.statusTone],
        )}
      />
      {project.evidence}
    </p>
  );
}

const dotClassByTone: Record<Project["statusTone"], string> = {
  complete: "bg-accent",
  submitted: "border border-accent bg-transparent",
  practice: "bg-ink-subtle",
  todo: "border border-ink-subtle bg-transparent",
};
