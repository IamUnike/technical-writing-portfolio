import Link, { type LinkProps } from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/cn";

const baseClasses =
  "control-transition inline-flex min-h-11 items-center justify-center rounded-control border px-5 py-2.5 font-sans text-[0.9375rem] font-medium leading-none disabled:pointer-events-none disabled:opacity-50";

const variantClasses = {
  primary:
    "border-accent bg-accent text-accent-contrast hover:border-accent-strong hover:bg-accent-strong active:translate-y-px",
  secondary:
    "border-line-strong bg-surface-raised text-ink hover:border-ink-muted hover:bg-surface active:translate-y-px",
} as const;

type ButtonVariant = keyof typeof variantClasses;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({
  variant = "primary",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    />
  );
}

type LinkButtonProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> & {
  children: ReactNode;
  href: LinkProps["href"];
  variant?: ButtonVariant;
};

export function LinkButton({
  variant = "primary",
  className,
  href,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    />
  );
}
