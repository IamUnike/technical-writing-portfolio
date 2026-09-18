import Link from "next/link";

import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer id="site-footer" className="border-t border-line">
      <Container className="flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="type-small text-ink-subtle">
          © {new Date().getFullYear()} Gideon Francis
        </p>
        <Link
          href="/contact"
          className="control-transition -ml-3 flex min-h-11 w-fit items-center px-3 text-sm font-medium text-ink-muted underline decoration-line-strong underline-offset-4 hover:text-ink hover:decoration-accent active:opacity-70 sm:-mr-3 sm:ml-0"
        >
          Contact
        </Link>
      </Container>
    </footer>
  );
}
