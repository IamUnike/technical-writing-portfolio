import Link from "next/link";

export type EvidenceItem = {
  href?: string;
  label: string;
  status: "verified" | "submitted" | "pending";
};

type EvidenceBlockProps = {
  items: readonly EvidenceItem[];
  title?: string;
};

export function EvidenceBlock({
  items,
  title = "Evidence",
}: EvidenceBlockProps) {
  return (
    <aside
      aria-label={title}
      className="my-10 border-y border-line bg-canvas-subtle px-5 py-6 sm:px-7"
    >
      <p className="type-label type-label-readable text-ink-subtle">{title}</p>
      <ul className="!mt-5 !list-none divide-y divide-line !p-0">
        {items.map((item) => (
          <li
            key={`${item.status}-${item.label}`}
            className="grid gap-2 py-4 first:pt-0 last:pb-0 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6"
          >
            <EvidenceContent item={item} />
            <span className="type-technical text-ink-subtle">
              {statusLabels[item.status]}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function EvidenceContent({ item }: { item: EvidenceItem }) {
  const content = (
    <>
      <span aria-hidden="true" className="text-accent">
        {item.href ? "↗" : item.status === "verified" ? "✓" : "○"}
      </span>
      <span>{item.label}</span>
    </>
  );

  if (!item.href) {
    return <span className="grid grid-cols-[1rem_1fr] gap-2">{content}</span>;
  }

  const isExternal = /^https?:\/\//.test(item.href);
  const className =
    "control-transition grid min-h-11 grid-cols-[1rem_1fr] items-center gap-2 font-medium text-accent underline decoration-accent/35 underline-offset-4 hover:text-accent-strong hover:decoration-accent-strong active:opacity-75";

  if (isExternal) {
    return (
      <a href={item.href} className={className} rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link href={item.href} className={className}>
      {content}
    </Link>
  );
}

const statusLabels: Record<EvidenceItem["status"], string> = {
  verified: "Verified",
  submitted: "Submitted",
  pending: "Pending",
};
