import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";
import { projectIcons } from "@/data/project-icons";

const accents: Record<Project["accent"], string> = {
  indigo: "from-[#0b1026] via-[#312e81] to-[#7c3aed]",
  violet: "from-[#312e81] via-[#7c3aed] to-[#a78bfa]",
  cyan: "from-[#312e81] via-[#7c3aed] to-[#22d3ee]",
};

/**
 * CSS-composed project visual. Always labelled as a placeholder so it is
 * never mistaken for a real screenshot (README §10).
 */
export function ProjectThumb({
  project,
  className,
  size = "md",
}: {
  project: Project;
  className?: string;
  size?: "md" | "lg";
}) {
  const Icon = projectIcons[project.iconKey];
  return (
    <div
      role="img"
      aria-label={`Placeholder preview image for ${project.title}`}
      className={cn(
        "relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br",
        accents[project.accent],
        className
      )}
    >
      <div aria-hidden="true" className="grid-lines absolute inset-0 opacity-40" />
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-10 size-36 rounded-full bg-white/15 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-12 -left-8 size-40 rounded-full bg-white/10 blur-2xl"
      />
      <Icon
        aria-hidden="true"
        strokeWidth={1.5}
        className={cn(
          "relative text-white drop-shadow-lg transition-transform duration-500 group-hover:scale-110",
          size === "lg" ? "size-20" : "size-14"
        )}
      />
      {project.isSample ? (
        <span className="absolute right-3 top-3 rounded-full border border-white/30 bg-black/25 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
          Sample
        </span>
      ) : null}
      <span className="absolute bottom-3 left-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/85 drop-shadow">
        Preview placeholder
      </span>
    </div>
  );
}
