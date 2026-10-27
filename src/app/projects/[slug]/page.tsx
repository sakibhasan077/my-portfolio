export const instant = false; 
import type { Metadata } from "next";
import { Suspense, type ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Check,
  ExternalLink,
  Lightbulb,
  Rocket,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { getProjectBySlug, projects } from "@/data/projects";
import { Reveal } from "@/components/motion/fade-in";
import { ProjectThumb } from "@/components/projects/project-thumb";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { PlaceholderNote } from "@/components/ui/placeholder-note";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary, type: "article" },
  };
}

function BlockTitle({ icon: Icon, children }: { icon: LucideIcon; children: ReactNode }) {
  return (
    <h2 className="flex items-center gap-2.5 font-heading text-xl font-semibold text-foreground">
      <span
        aria-hidden="true"
        className="aurora-surface grid size-8 place-items-center rounded-lg text-white shadow-md shadow-violet-950/30"
      >
        <Icon className="size-4" />
      </span>
      {children}
    </h2>
  );
}

export default async function ProjectDetailsPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <Suspense fallback = {<li>Loading...</li>}>
        <article className="py-12 md:py-16">
      <div className="container-shell flex max-w-4xl flex-col gap-12">
        <Reveal>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-md text-sm font-medium text-muted-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            Back to projects
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {project.isSample ? <Badge variant="accent">Sample project</Badge> : null}
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="aurora-text mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {project.summary}
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <ProjectThumb project={project} size="lg" className="rounded-2xl border border-border" />
        </Reveal>

        <Reveal delay={0.05}>
          <section aria-labelledby="project-overview" className="flex flex-col gap-4">
            <BlockTitle icon={Rocket}>
              <span id="project-overview">Overview</span>
            </BlockTitle>
            <p className="leading-relaxed text-muted-foreground">{project.overview}</p>
            <div className="rounded-2xl border border-border bg-card/70 p-5">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.15em] text-accent">
                The problem
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.problem}</p>
            </div>
          </section>
        </Reveal>

        <Reveal delay={0.05}>
          <section aria-labelledby="project-features" className="flex flex-col gap-4">
            <BlockTitle icon={Check}>
              <span id="project-features">Key features</span>
            </BlockTitle>
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 rounded-xl border border-border bg-card/60 p-3.5 text-sm leading-relaxed text-foreground/90"
                >
                  <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal delay={0.05}>
          <section aria-labelledby="project-challenges" className="flex flex-col gap-4">
            <BlockTitle icon={Lightbulb}>
              <span id="project-challenges">Challenges &amp; how they were solved</span>
            </BlockTitle>
            <div className="flex flex-col gap-4">
              {project.challenges.map((item) => (
                <div
                  key={item.challenge}
                  className="rounded-2xl border border-border bg-card/70 p-5 transition-colors hover:border-accent/40"
                >
                  <p className="font-medium text-foreground">{item.challenge}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-accent">Solution: </span>
                    {item.solution}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="grid gap-6 sm:grid-cols-2">
            <section aria-labelledby="project-improvements" className="flex flex-col gap-4">
              <BlockTitle icon={Sparkles}>
                <span id="project-improvements">Potential improvements</span>
              </BlockTitle>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                {project.improvements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="project-roadmap" className="flex flex-col gap-4">
              <BlockTitle icon={Rocket}>
                <span id="project-roadmap">Future plans</span>
              </BlockTitle>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                {project.roadmap.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <section
            aria-labelledby="project-links"
            className="flex flex-col gap-4 rounded-2xl border border-border bg-card/70 p-6"
          >
            <BlockTitle icon={ExternalLink}>
              <span id="project-links">Links</span>
            </BlockTitle>
            <div className="flex flex-wrap items-center gap-3">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "gradient", size: "lg" })}
                >
                  Live demo
                  <ExternalLink aria-hidden="true" />
                </a>
              ) : (
                <Badge variant="outline" className="px-3 py-1.5">
                  Live demo: coming soon
                </Badge>
              )}

              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  <FaGithub aria-hidden="true" />
                  Source code
                </a>
              ) : (
                <Badge variant="outline" className="px-3 py-1.5">
                  Repository: coming soon
                </Badge>
              )}
            </div>

            {project.isSample ? (
              <PlaceholderNote>
                This is sample content. Replace it — and its placeholder links — in{" "}
                <code className="rounded border border-border bg-background px-1.5 py-0.5">
                  src/data/projects.ts
                </code>
                .
              </PlaceholderNote>
            ) : null}
          </section>
        </Reveal>

        <Reveal delay={0.05}>
          <Link
            href="/#projects"
            className={buttonVariants({ variant: "gradient", size: "xl", className: "self-start" })}
          >
            <ArrowLeft aria-hidden="true" />
            Back to all projects
          </Link>
        </Reveal>
      </div>
    </article>
      </Suspense>
    </>
  );
}
