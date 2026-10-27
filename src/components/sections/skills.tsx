import { skillCategories } from "@/data/portfolio";
import { Reveal } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { PlaceholderNote } from "@/components/ui/placeholder-note";

export function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-28">
      <div className="container-shell flex flex-col items-center gap-10">
        <SectionHeading
          kicker="Skills"
          title={
            <>
              Tools I <span className="aurora-text">build with</span>
            </>
          }
          description="Grouped by where they fit in the stack — no invented proficiency meters, just the technologies I work with."
        />

        <div className="grid w-full gap-6 md:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Reveal key={category.title} delay={Math.min(index * 0.08, 0.24)} className="h-full">
                <article className="group h-full rounded-2xl border border-border bg-card/70 p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-violet-950/30 focus-within:border-accent/40">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="aurora-surface grid size-10 place-items-center rounded-lg text-white shadow-md shadow-violet-950/30"
                    >
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-lg border border-border bg-background/60 px-3 py-1.5 text-sm text-foreground/90 transition-colors hover:border-accent/40 hover:text-foreground"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* <PlaceholderNote>
          Suggested starter entries — adjust the list in{" "}
          <code className="rounded border border-border bg-card px-1.5 py-0.5">src/data/portfolio.ts</code>{" "}
          to match your verified skills.
        </PlaceholderNote> */}
      </div>
    </section>
  );
}
