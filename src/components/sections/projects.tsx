import { projects } from "@/data/projects";
import { Reveal } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { PlaceholderNote } from "@/components/ui/placeholder-note";
import { ProjectCard } from "@/components/projects/project-card";

export function Projects() {
  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="container-shell flex flex-col items-center gap-10">
        <SectionHeading
          kicker="Projects"
          title={
            <>
              Things I&apos;ve <span className="aurora-text">built</span>
            </>
          }
          description="Each project opens a full details page — the problem, the approach, the trade-offs, and what I'd improve next."
        />

        <PlaceholderNote>
          Sample projects marked with a “Sample” badge — replace them with your real work in{" "}
          <code className="rounded border border-border bg-card px-1.5 py-0.5">src/data/projects.ts</code>.
        </PlaceholderNote>

        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={Math.min(index * 0.08, 0.24)} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
