import type { ReactNode } from "react";
import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Clearly marks editable placeholder content (README §1) so missing personal
 * information is honest instead of fabricated.
 */
export function PlaceholderNote({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "inline-flex max-w-xl items-start gap-2 rounded-lg border border-dashed border-accent/35 bg-accent/5 px-3.5 py-2.5 text-left text-xs leading-relaxed text-muted-foreground",
        className
      )}
    >
      <Info aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 text-accent" />
      <span>{children}</span>
    </p>
  );
}
