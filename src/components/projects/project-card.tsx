"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import type { Project } from "@/data/projects";
import { ProjectThumb } from "@/components/projects/project-thumb";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

export function ProjectCard({ project }: { project: Project }) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={false}
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/80 transition-colors hover:border-accent/40 focus-within:border-accent/40"
    >
      <ProjectThumb project={project} />

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <h3 className="font-heading text-lg font-semibold text-foreground">{project.title}</h3>
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
        </div>

        <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Badge variant="secondary">{tag}</Badge>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-border pt-4">
          <Link href={`/projects/${project.slug}`} className={buttonVariants({ size: "default" })}>
            View Details
            <ArrowUpRight aria-hidden="true" />
          </Link>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline", size: "default" })}
            >
              Live
              <ExternalLink aria-hidden="true" />
            </a>
          ) : (
            <Badge variant="outline">Live demo: coming soon</Badge>
          )}

          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "ghost", size: "icon" })}
              aria-label={`${project.title} on GitHub (opens in a new tab)`}
            >
              <FaGithub aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
