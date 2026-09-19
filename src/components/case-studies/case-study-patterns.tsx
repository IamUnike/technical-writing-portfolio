type DocumentationItem = {
  filename: string;
  title: string;
};

type DocumentationSetProps = {
  items: readonly DocumentationItem[];
};

export function DocumentationSet({ items }: DocumentationSetProps) {
  return (
    <div className="my-10 border-y border-line" aria-label="Documentation set">
      <p className="type-label type-label-readable border-b border-line py-4 text-ink-subtle">
        Task-oriented documentation set
      </p>
      <ol className="!mt-0 !list-none !p-0">
        {items.map((item, index) => (
          <li
            key={item.filename}
            className="grid gap-2 border-b border-line py-5 last:border-b-0 sm:grid-cols-[2.5rem_minmax(0,1fr)_minmax(12rem,0.9fr)] sm:items-baseline sm:gap-5"
          >
            <span className="type-technical text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-medium text-ink">{item.title}</span>
            <span className="type-technical break-words text-ink-muted">
              {item.filename}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

type TechnicalSequenceProps = {
  items: readonly string[];
  title?: string;
};

export function TechnicalSequence({
  items,
  title = "Verification sequence",
}: TechnicalSequenceProps) {
  return (
    <div
      className="my-10 border-y border-line bg-canvas-subtle px-5 py-6 sm:px-7"
      aria-label={title}
    >
      <p className="type-label type-label-readable text-ink-subtle">{title}</p>
      <ol className="!mt-5 !list-none !p-0">
        {items.map((item, index) => (
          <li
            key={`${index}-${item}`}
            className="grid grid-cols-[2.25rem_1fr] items-center gap-3 border-t border-line py-4 first:border-t-0 sm:grid-cols-[2.25rem_1fr_auto]"
          >
            <span className="type-technical text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-medium leading-snug text-ink">{item}</span>
            {index < items.length - 1 ? (
              <span aria-hidden="true" className="hidden text-accent sm:inline">
                ↓
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

type WorkflowPathProps = {
  steps: readonly string[];
  title?: string;
};

export function WorkflowPath({
  steps,
  title = "Repository workflow",
}: WorkflowPathProps) {
  return (
    <div className="my-10 border-y border-line py-6" aria-label={title}>
      <p className="type-label type-label-readable text-ink-subtle">
        {title}
      </p>
      <ol className="!mt-5 flex !list-none flex-wrap items-center gap-x-3 gap-y-4 !p-0">
        {steps.map((step, index) => (
          <li key={step} className="flex items-center gap-3">
            <span className="type-technical font-medium text-ink">{step}</span>
            {index < steps.length - 1 ? (
              <span aria-hidden="true" className="text-accent">
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

type RevisionItem = {
  commits: readonly string[];
  description: string;
};

type RevisionTrailProps = {
  items: readonly RevisionItem[];
};

export function RevisionTrail({ items }: RevisionTrailProps) {
  return (
    <div className="my-10" aria-label="Selected Git history">
      <p className="type-label type-label-readable text-ink-subtle">
        Selected Git evidence
      </p>
      <dl className="mt-5 border-y border-line">
        {items.map((item) => (
          <div
            key={item.commits.join("-")}
            className="grid grid-cols-1 gap-2 border-b border-line py-5 last:border-b-0 sm:grid-cols-[minmax(11rem,0.65fr)_1fr] sm:gap-6"
          >
            <dt className="type-technical min-w-0 break-words text-accent [overflow-wrap:anywhere]">
              {item.commits.join(" / ")}
            </dt>
            <dd className="type-small text-ink-muted">{item.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
