export type CaseStudyMetaGroup = {
  label: string;
  values: readonly string[];
};

type CaseStudyMetaProps = {
  groups: readonly CaseStudyMetaGroup[];
};

export function CaseStudyMeta({ groups }: CaseStudyMetaProps) {
  return (
    <dl className="grid gap-5 border-t border-line pt-5 sm:grid-cols-2 sm:gap-6 sm:pt-6 lg:col-span-4 lg:col-start-9 lg:block lg:space-y-7">
      {groups.map((group) => (
        <MetaGroup key={group.label} {...group} />
      ))}
    </dl>
  );
}

function MetaGroup({ label, values }: CaseStudyMetaGroup) {
  return (
    <div>
      <dt className="type-label type-label-readable text-ink-subtle">
        {label}
      </dt>
      <dd className="type-small mt-2 text-ink-muted sm:mt-3">
        {values.join(" · ")}
      </dd>
    </div>
  );
}
