import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { Reveal } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { PlaceholderNote } from "@/components/ui/placeholder-note";
import { Badge } from "@/components/ui/badge";

export function Education() {
  const hasEntries = education.length > 0;
  const allPlaceholders = education.every((entry) => entry.isPlaceholder);

  return (
    <section id="education" className="relative py-20 md:py-28">
      <div className="container-shell flex flex-col items-center gap-10">
        <SectionHeading
          kicker="Education"
          title={
            <>
              Where I&apos;ve <span className="aurora-text">learned</span>
            </>
          }
          description="My academic background and educational journey."
        />

        {hasEntries ? (
          <div className="grid w-full gap-5 md:grid-cols-2">
            {education.map((entry, index) => (
              <Reveal key={`${entry.institution}-${index}`} delay={index * 0.08} className="h-full">
                <article className="h-full rounded-2xl border border-border bg-card/70 p-6 transition-all hover:-translate-y-1 hover:border-accent/40 focus-within:border-accent/40">
                  <div className="flex items-start justify-between gap-4">
                    <span
                      aria-hidden="true"
                      className="aurora-surface grid size-10 shrink-0 place-items-center rounded-lg text-white shadow-md shadow-violet-950/30"
                    >
                      <GraduationCap className="size-5" />
                    </span>
                    <div className="flex flex-wrap justify-end gap-2">
                      {entry.isPlaceholder ? (
                        <Badge variant="outline">Placeholder</Badge>
                      ) : null}
                      <Badge variant={entry.status === "current" ? "accent" : "secondary"}>
                        {entry.status === "current" ? "In progress" : "Completed"}
                      </Badge>
                    </div>
                  </div>

                  <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                    {entry.qualification}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-foreground/85">{entry.institution}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{entry.department}</p>

                  <p className="mt-4 text-xs uppercase tracking-[0.15em] text-muted-foreground/80">
                    {entry.start} — {entry.end}
                  </p>

                  {entry.description ? (
                    <p className="mt-3 border-t border-border pt-3 text-sm leading-relaxed text-muted-foreground">
                      {entry.description}
                    </p>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="w-full rounded-2xl border border-dashed border-border bg-card/50 p-10 text-center">
            <GraduationCap aria-hidden="true" className="mx-auto size-8 text-muted-foreground" />
            <p className="mt-4 text-sm text-muted-foreground">
              Education details will be added here.
            </p>
          </div>
        )}

        {/* {allPlaceholders ? (
          <PlaceholderNote>
            Placeholder entry — replace it with verified details (or empty the array) in{" "}
            <code className="rounded border border-border bg-card px-1.5 py-0.5">src/data/portfolio.ts</code>.
          </PlaceholderNote>
        ) : null} */}
      </div>
    </section>
  );
}
