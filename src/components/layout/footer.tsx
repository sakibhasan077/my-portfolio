import { ArrowUp } from "lucide-react";
import { cacheLife } from "next/cache";
import { navLinks, profile } from "@/data/portfolio";
import { SocialLinks } from "@/components/social-links";

/**
 * Footer year, prerender-safe under Cache Components: `new Date()` alone is
 * an unstable value during prerender, so it is cached (and expires daily so
 * the year can't go stale across a New Year rebuild).
 */
async function getCurrentYear(): Promise<number> {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container-shell flex flex-col gap-10 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="aurora-surface grid size-9 place-items-center rounded-lg font-heading text-sm font-bold text-white shadow-md shadow-violet-950/40"
            >
              {profile.initials}
            </span>
            <div>
              <p className="font-heading text-base font-semibold text-foreground">{profile.name}</p>
              <p className="text-sm text-muted-foreground">{profile.designation}</p>
            </div>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <SocialLinks />
        </div>

        <div className="flex flex-col-reverse items-start justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row md:items-center">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 transition-colors hover:border-accent/50 hover:text-accent focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <ArrowUp aria-hidden="true" className="size-4" />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
