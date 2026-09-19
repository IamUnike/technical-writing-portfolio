import type { Project } from "@/data/projects";

type CaseStudyMetaProps = {
  project: Project;
};

export function CaseStudyMeta({ project }: CaseStudyMetaProps) {
  return (
    <dl className="grid gap-6 border-t border-line pt-6 sm:grid-cols-2 lg:col-span-3 lg:col-start-10 lg:block lg:space-y-7">
      <MetaGroup label="Documentation" values={project.focus} />
      <MetaGroup
        label="Selected tools"
        values={project.technologies}
        emptyValue="To be verified"
      />
    </dl>
  );
}

type MetaGroupProps = {
  emptyValue?: string;
  label: string;
  values: readonly string[];
};

function MetaGroup({ emptyValue, label, values }: MetaGroupProps) {
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
