"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { cn } from "@/lib/cn";

import { Container } from "./container";

const navigation = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback((restoreFocus = true) => {
    setIsOpen(false);

    if (restoreFocus) {
      requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  }, []);

  useEffect(() => {
    const handleHistoryNavigation = () => closeMenu(false);

    window.addEventListener("popstate", handleHistoryNavigation);
    return () => window.removeEventListener("popstate", handleHistoryNavigation);
  }, [closeMenu]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 48rem)");
    const handleDesktopChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        closeMenu(false);
      }
    };

    desktopQuery.addEventListener("change", handleDesktopChange);
    return () => desktopQuery.removeEventListener("change", handleDesktopChange);
  }, [closeMenu]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const backgroundElements = [
      document.querySelector<HTMLElement>("#main-content"),
      document.querySelector<HTMLElement>("#site-footer"),
    ].filter((element): element is HTMLElement => element !== null);
    const previousOverflow = document.body.style.overflow;
    const previousAriaHidden = backgroundElements.map((element) =>
      element.getAttribute("aria-hidden"),
    );

    document.body.style.overflow = "hidden";
    backgroundElements.forEach((element) => {
      element.setAttribute("inert", "");
      element.setAttribute("aria-hidden", "true");
    });

    const focusFrame = requestAnimationFrame(() => {
      menuRef.current
        ?.querySelector<HTMLAnchorElement>("[data-autofocus]")
        ?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const menuItems = Array.from(
        menuRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        ) ?? [],
      );
      const focusableElements = [
        menuButtonRef.current,
        ...menuItems,
      ].filter((element): element is HTMLElement => element !== null);
      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      backgroundElements.forEach((element, index) => {
        element.removeAttribute("inert");
        const ariaHidden = previousAriaHidden[index];
        if (ariaHidden === null) {
          element.removeAttribute("aria-hidden");
        } else {
          element.setAttribute("aria-hidden", ariaHidden);
        }
      });
    };
  }, [closeMenu, isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas">
      <Container className="flex h-[var(--header-height)] items-center justify-between gap-6">
        <Link
          href="/"
          aria-current={pathname === "/" ? "page" : undefined}
          className="control-transition type-label -ml-3 flex min-h-11 items-center px-3 text-ink hover:text-accent active:opacity-70"
          onClick={() => isOpen && closeMenu(false)}
        >
          Gideon Francis
        </Link>

        <div className="hidden items-center md:flex">
          <nav aria-label="Primary navigation">
            <ul className="flex items-center gap-1 lg:gap-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <NavigationLink href={item.href} pathname={pathname}>
                    {item.label}
                  </NavigationLink>
                </li>
              ))}
            </ul>
          </nav>
          <PendingCvAction className="ml-5" />
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="control-transition -mr-3 flex min-h-11 min-w-11 items-center justify-center text-ink hover:text-accent active:opacity-70 md:hidden"
          onClick={() => (isOpen ? closeMenu() : setIsOpen(true))}
        >
          <span aria-hidden="true" className="relative block h-4 w-5">
            <span
              className={cn(
                "control-transition absolute left-0 top-1 block h-px w-5 bg-current",
                isOpen && "translate-y-[3px] rotate-45",
              )}
            />
            <span
              className={cn(
                "control-transition absolute bottom-1 left-0 block h-px w-5 bg-current",
                isOpen && "-translate-y-[3px] -rotate-45",
              )}
            />
          </span>
        </button>
      </Container>

      {isOpen ? (
        <div
          ref={menuRef}
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-x-0 bottom-0 top-[var(--header-height)] overflow-y-auto overscroll-contain bg-canvas md:hidden"
        >
          <Container className="flex min-h-full flex-col py-8">
            <nav aria-label="Mobile navigation">
              <ul className="divide-y divide-line border-y border-line">
                {navigation.map((item, index) => (
                  <li key={item.href}>
                    <NavigationLink
                      href={item.href}
                      pathname={pathname}
                      mobile
                      onClick={() => closeMenu(false)}
                      data-autofocus={index === 0 ? "true" : undefined}
                    >
                      {item.label}
                    </NavigationLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto border-t border-line pt-6">
              <PendingCvAction mobile />
              <p className="type-small mt-4 max-w-reading text-ink-subtle">
                The CV download will be enabled when the final file is added.
              </p>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

type NavigationLinkProps = {
  children: ReactNode;
  href: (typeof navigation)[number]["href"];
  mobile?: boolean;
  onClick?: () => void;
  pathname: string;
  "data-autofocus"?: string;
};

function NavigationLink({
  children,
  href,
  mobile = false,
  onClick,
  pathname,
  ...props
}: NavigationLinkProps) {
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      onClick={onClick}
      className={cn(
        "control-transition relative font-medium text-ink-muted hover:text-ink active:opacity-70",
        mobile
          ? "flex min-h-16 items-center justify-between py-3 text-xl"
          : "flex min-h-11 items-center px-3 text-[0.9375rem]",
        isActive && "text-ink",
      )}
      {...props}
    >
      <span>{children}</span>
      {isActive ? (
        mobile ? (
          <span className="type-label text-accent">Current</span>
        ) : (
          <span
            aria-hidden="true"
            className="absolute inset-x-3 bottom-1.5 h-px bg-accent"
          />
        )
      ) : null}
    </Link>
  );
}

type PendingCvActionProps = {
  className?: string;
  mobile?: boolean;
};

function PendingCvAction({
  className,
  mobile = false,
}: PendingCvActionProps) {
  return (
    <button
      type="button"
      disabled
      aria-label="Download CV — unavailable until the final CV file is added"
      className={cn(
        "inline-flex min-h-11 cursor-not-allowed items-center gap-2 border-line-strong text-ink-subtle opacity-75",
        mobile
          ? "w-full justify-between border-b pb-4 text-base font-medium"
          : "rounded-control border px-4 py-2 text-sm font-medium",
        className,
      )}
    >
      <span>
        Download CV <span aria-hidden="true">↗</span>
      </span>
      <span className="type-technical text-[0.625rem] uppercase tracking-wider">
        Pending
      </span>
    </button>
  );
}
