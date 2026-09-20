type JourneyStage = {
  label: string;
  steps: readonly string[];
};

type JourneyMapProps = {
  stages: readonly JourneyStage[];
  title?: string;
};

export function JourneyMap({
  stages,
  title = "Developer journey",
}: JourneyMapProps) {
  return (
    <div className="my-10 border-y border-line" aria-label={title}>
      <p className="type-label type-label-readable border-b border-line py-4 text-ink-subtle">
        {title}
      </p>
      <ol className="!mt-0 grid !list-none !p-0 md:grid-cols-3">
        {stages.map((stage, stageIndex) => (
          <li
            key={stage.label}
            className="border-b border-line py-6 last:border-b-0 md:border-r md:border-b-0 md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
          >
            <div className="flex items-baseline gap-3">
              <span className="type-technical text-accent" aria-hidden="true">
                {String(stageIndex + 1).padStart(2, "0")}
              </span>
              <p className="type-label type-label-readable text-ink-subtle">
                {stage.label}
              </p>
            </div>
            <ul className="!mt-5 !list-none space-y-3 !p-0">
              {stage.steps.map((step) => (
                <li
                  key={step}
                  className="grid grid-cols-[0.75rem_1fr] gap-2 text-sm text-ink-muted"
                >
                  <span aria-hidden="true" className="text-accent">
                    —
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}

type PermissionTest = {
  operation: string;
  result: string;
};

type PermissionEvidenceItem = {
  credential: string;
  note: string;
  tests: readonly PermissionTest[];
};

type PermissionEvidenceProps = {
  items: readonly PermissionEvidenceItem[];
  title?: string;
};

export function PermissionEvidence({
  items,
  title = "Permission evidence",
}: PermissionEvidenceProps) {
  return (
    <div className="my-10 border-y border-line bg-canvas-subtle" aria-label={title}>
      <p className="type-label type-label-readable border-b border-line px-5 py-4 text-ink-subtle sm:px-7">
        {title}
      </p>
      <dl className="grid md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.credential}
            className="border-b border-line px-5 py-6 last:border-b-0 md:border-r md:border-b-0 md:px-7 md:last:border-r-0"
          >
            <dt className="font-medium text-ink">{item.credential}</dt>
            <dd>
              <ul className="!mt-5 !list-none divide-y divide-line !p-0">
                {item.tests.map((test) => (
                  <li
                    key={test.operation}
                    className="grid gap-1 py-3 first:pt-0 last:pb-0 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline sm:gap-4"
                  >
                    <span className="type-technical text-ink-muted">
                      {test.operation}
                    </span>
                    <span className="type-small font-medium text-ink">
                      {test.result}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="type-small mt-5 text-ink-muted">{item.note}</p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

type ApiErrorEvidence = {
  message: string;
  name: string;
  scenario: string;
  status: string;
};

type ApiErrorTableProps = {
  rows: readonly ApiErrorEvidence[];
  title?: string;
};

export function ApiErrorTable({
  rows,
  title = "Reproduced API error evidence",
}: ApiErrorTableProps) {
  return (
    <div className="my-10 border-y border-line">
      <p className="type-label type-label-readable py-4 text-ink-subtle">
        {title}
      </p>
      <ol
        className="!mt-0 !list-none border-t border-line !p-0 sm:hidden"
        aria-label={title}
      >
        {rows.map((row, index) => (
          <li
            key={row.scenario}
            className="border-b border-line py-6 last:border-b-0"
          >
            <div className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-3">
              <span className="type-technical text-accent" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="font-medium leading-snug text-ink">
                {row.scenario}
              </p>
            </div>
            <dl className="mt-5 grid gap-4 border-t border-line pt-4">
              <div className="grid grid-cols-[6.25rem_minmax(0,1fr)] gap-3">
                <dt className="type-label text-ink-subtle">HTTP status</dt>
                <dd className="type-technical text-accent">{row.status}</dd>
              </div>
              <div className="grid grid-cols-[6.25rem_minmax(0,1fr)] gap-3">
                <dt className="type-label text-ink-subtle">Error name</dt>
                <dd className="type-technical break-words text-ink-muted [overflow-wrap:anywhere]">
                  {row.name}
                </dd>
              </div>
              <div className="grid gap-2">
                <dt className="type-label text-ink-subtle">
                  Observed message
                </dt>
                <dd className="type-small text-ink-muted">{row.message}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ol>
      <div
        className="hidden overflow-x-auto border-t border-line focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:block"
        tabIndex={0}
        aria-label={`${title}; scroll horizontally to inspect all columns`}
      >
        <table className="w-full min-w-[42rem] border-collapse text-left">
          <thead className="bg-canvas-subtle">
            <tr>
              <th className="type-label px-4 py-4 text-ink-subtle" scope="col">
                Scenario
              </th>
              <th className="type-label px-4 py-4 text-ink-subtle" scope="col">
                HTTP
              </th>
              <th className="type-label px-4 py-4 text-ink-subtle" scope="col">
                Error name
              </th>
              <th className="type-label px-4 py-4 text-ink-subtle" scope="col">
                Observed message
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.scenario} className="border-t border-line align-top">
                <th className="px-4 py-4 font-medium text-ink" scope="row">
                  {row.scenario}
                </th>
                <td className="type-technical px-4 py-4 text-accent">
                  {row.status}
                </td>
                <td className="type-technical px-4 py-4 text-ink-muted">
                  {row.name}
                </td>
                <td className="type-small max-w-[18rem] px-4 py-4 text-ink-muted">
                  {row.message}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

type CodeArtifactProps = {
  caption: string;
  code: string;
  filename: string;
  language?: string;
};

export function CodeArtifact({
  caption,
  code,
  filename,
  language = "JavaScript",
}: CodeArtifactProps) {
  return (
    <figure className="case-study-artifact my-10 min-w-0">
      <div className="overflow-hidden border border-line bg-ink">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/15 px-5 py-3">
          <span className="type-technical text-surface-raised">{filename}</span>
          <span className="type-label text-surface">{language}</span>
        </div>
        <pre
          className="!m-0 !max-w-none overflow-x-auto !border-0 !bg-transparent !p-5 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-accent sm:!p-7"
          tabIndex={0}
          aria-label={`${filename} code excerpt`}
        >
          <code>{code.trim()}</code>
        </pre>
      </div>
      <figcaption className="type-small mt-3 text-ink-muted">
        {caption}
      </figcaption>
    </figure>
  );
}
