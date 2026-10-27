"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { navLinks, profile, type NavLink } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const reduce = useReducedMotion();
  const pathname = usePathname();

  /**
   * Nav links are hash-only (`#about`). On `/` that scrolls in place; on any
   * other route (e.g. `/projects/[slug]`) the hash targets don't exist, so the
   * link must navigate back to the home page first.
   */
  const hrefFor = (link: NavLink) => (pathname === "/" ? link.href : `/${link.href}`);

  /** Scroll-spy: mark the section currently crossing the viewport middle. */
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.split("#")[1]))
      .filter((element): element is HTMLElement => element !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  /** Mobile menu: Escape closes it and background scroll stays locked while open. */
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const close = () => setOpen(false);

  /**
   * Which nav link is highlighted. On `/` the scroll-spy state decides; on
   * nested routes (e.g. `/projects/[slug]`) the owning section is derived from
   * the pathname so the parent link stays active.
   */
  const activeSection =
    pathname === "/" ? active : pathname.startsWith("/projects") ? "projects" : null;

  const linkClass = (isActive: boolean) =>
    cn(
      "relative rounded-md px-3 py-2 text-sm font-medium transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
      isActive ? "text-accent" : "text-muted-foreground hover:text-foreground"
    );

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/75 backdrop-blur-xl">
      <nav
        aria-label="Main"
        className="container-shell flex h-16 items-center justify-between md:h-20"
      >
        <Link
          href="/"
          onClick={close}
          className="group flex items-center gap-3 rounded-md outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <span
            aria-hidden="true"
            className="aurora-surface grid size-9 place-items-center rounded-lg font-heading text-sm font-bold text-white shadow-md shadow-violet-950/40 transition-transform group-hover:scale-105"
          >
            {profile.initials}
          </span>
          <span className="font-heading text-base font-semibold tracking-tight text-foreground">
            {profile.name}
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.href}>
                <Link
                  href={hrefFor(link)}
                  aria-current={isActive ? "true" : undefined}
                  className={linkClass(isActive)}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "aurora-divider absolute inset-x-3 -bottom-0.5 h-px transition-opacity",
                      isActive ? "opacity-100" : "opacity-0"
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className="grid size-10 place-items-center rounded-lg border border-border bg-card/60 text-foreground transition-colors hover:border-accent/50 hover:text-accent focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 md:hidden"
        >
          {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <>
            <motion.div
              key="backdrop"
              aria-hidden="true"
              className="fixed inset-x-0 bottom-0 top-16 bg-background/70 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={close}
            />
            <motion.div
              id="mobile-menu"
              key="panel"
              className="fixed inset-x-0 top-16 max-h-[calc(100svh-4rem)] overflow-y-auto border-b border-border bg-background/95 px-5 pb-6 pt-3 backdrop-blur-xl md:hidden"
              initial={{ opacity: 0, y: reduce ? 0 : -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduce ? 0 : -8 }}
              transition={{ duration: 0.25 }}
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.slice(1);
                  return (
                    <li key={link.href}>
                      <Link
                        href={hrefFor(link)}
                        onClick={close}
                        aria-current={isActive ? "true" : undefined}
                        className={cn(
                          "flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
                          isActive
                            ? "bg-card text-accent"
                            : "text-muted-foreground hover:bg-card/60 hover:text-foreground"
                        )}
                      >
                        {link.label}
                        <span
                          aria-hidden="true"
                          className={cn(
                            "aurora-divider h-4 w-0.5 rounded-full transition-opacity",
                            isActive ? "opacity-100" : "opacity-0"
                          )}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
