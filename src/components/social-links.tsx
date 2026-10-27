import { FaGithub, FaLinkedinIn, FaDiscord } from "react-icons/fa6";
import { socials, type SocialKey } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const iconMap: Record<SocialKey, typeof FaGithub> = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  discord: FaDiscord,
};

/**
 * Social links shared by hero and footer.
 * Entries with a null URL render a clearly disabled placeholder instead of a
 * fabricated profile link (README §5).
 */
export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-3", className)} aria-label="Social profiles">
      {socials.map(({ key, label, url }) => {
        const Icon = iconMap[key];
        const baseClass =
          "grid size-10 place-items-center rounded-full border border-border bg-card/60 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50";
        const icon = <Icon aria-hidden="true" className="size-4" />;
        return (
          <li key={key}>
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} profile (opens in a new tab)`}
                title={label}
                className={baseClass}
              >
                {icon}
              </a>
            ) : (
              <span
                role="link"
                aria-disabled="true"
                aria-label={`${label} profile — link not added yet`}
                title={`Placeholder — add your ${label} URL in src/data/portfolio.ts`}
                className={cn(baseClass, "cursor-not-allowed opacity-45 hover:translate-y-0")}
              >
                {icon}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
