import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  kicker: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  kicker,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={cn("max-w-2xl", centered && "mx-auto text-center", className)}>
      <p
        className={cn(
          "inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent",
          centered && "justify-center"
        )}
      >
        <span aria-hidden="true" className="aurora-divider h-px w-8" />
        {kicker}
        {centered ? <span aria-hidden="true" className="aurora-divider h-px w-8" /> : null}
      </p>
      <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
