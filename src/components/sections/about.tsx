import { aboutFields } from "@/data/portfolio";
import { Reveal } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { PlaceholderNote } from "@/components/ui/placeholder-note";

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="container-shell flex flex-col items-center gap-10">
        <SectionHeading
          kicker="About me"
          title={
            <>
              Behind the <span className="aurora-text">code</span>
            </>
          }
          description="A quick look at how I think, what I'm currently learning, and the kind of work I enjoy doing."
        />

        {/* <PlaceholderNote>
          Sample copy — replace these texts with your own in{" "}
          <code className="rounded border border-border bg-card px-1.5 py-0.5">src/data/portfolio.ts</code>.
        </PlaceholderNote> */}

        <div className="grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {aboutFields.map((field, index) => {
            const Icon = field.icon;
            return (
              <Reveal key={field.title} delay={Math.min(index * 0.05, 0.25)} className="h-full">
                <article className="group h-full rounded-2xl border border-border bg-card/70 p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-violet-950/30 focus-within:border-accent/40">
                  <span
                    aria-hidden="true"
                    className="aurora-surface grid size-10 place-items-center rounded-lg text-white shadow-md shadow-violet-950/30"
                  >
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                    {field.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{field.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
