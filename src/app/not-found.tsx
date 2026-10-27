import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container-shell flex min-h-[70svh] flex-col items-center justify-center py-24 text-center">
      <p aria-hidden="true" className="aurora-text font-heading text-7xl font-bold sm:text-8xl">
        404
      </p>
      <h1 className="mt-5 font-heading text-2xl font-semibold text-foreground sm:text-3xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
        This page doesn&apos;t exist — the address may be mistyped, or the project you were looking
        for has been renamed.
      </p>
      <Link href="/" className={buttonVariants({ variant: "gradient", size: "xl", className: "mt-8" })}>
        <ArrowLeft aria-hidden="true" />
        Back to home
      </Link>
    </section>
  );
}
