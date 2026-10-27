import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-28 w-full rounded-lg border border-border bg-background/60 px-3.5 py-2.5 text-sm text-foreground shadow-xs transition-[color,border-color,box-shadow] outline-none",
        "placeholder:text-muted-foreground/70",
        "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}
