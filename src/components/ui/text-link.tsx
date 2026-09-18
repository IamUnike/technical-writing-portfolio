import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type TextLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: ReactNode;
  href: LinkProps["href"];
};

export function TextLink({
  className,
  href,
  ...props
}: TextLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "control-transition font-medium text-accent underline decoration-accent/35 underline-offset-4 hover:text-accent-strong hover:decoration-accent-strong active:opacity-75",
        className,
      )}
      {...props}
    />
  );
}
