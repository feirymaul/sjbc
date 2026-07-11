"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { primaryNav, site } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  // Close mobile menu on navigate; navKey remounts the panel when the path changes.
  const navKey = pathname;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={close}>
          <Image
            src="/sjbc-logo.png"
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover ring-1 ring-line"
            priority
          />
          <span className="min-w-0">
            <span className="block truncate font-serif text-lg font-semibold leading-tight text-ink">
              {site.name}
            </span>
            <span className="block truncate text-xs uppercase tracking-[0.14em] text-muted">
              {site.location}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <Link
            href="/"
            className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
              isActive("/") && pathname === "/"
                ? "bg-accent-soft text-ink"
                : "text-muted hover:text-ink"
            }`}
          >
            Home
          </Link>
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-accent-soft text-ink"
                  : "text-muted hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/visit"
            className="ml-2 inline-flex min-h-10 items-center rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Visit
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-ink transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span className={`block h-0.5 w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 w-5 bg-ink transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div
          key={navKey}
          id={menuId}
          className="border-t border-line bg-bg px-4 py-4 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile primary">
            <Link
              href="/"
              onClick={close}
              className={`rounded-xl px-4 py-3 text-base font-medium ${
                pathname === "/" ? "bg-accent-soft text-ink" : "text-ink"
              }`}
            >
              Home
            </Link>
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className={`rounded-xl px-4 py-3 text-base font-medium ${
                  isActive(link.href) ? "bg-accent-soft text-ink" : "text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/faq"
              onClick={close}
              className={`rounded-xl px-4 py-3 text-base font-medium ${
                isActive("/faq") ? "bg-accent-soft text-ink" : "text-ink"
              }`}
            >
              FAQ
            </Link>
            <Link
              href="/visit"
              onClick={close}
              className="mt-2 inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-5 py-3 text-base font-semibold text-white"
            >
              Plan a visit
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
