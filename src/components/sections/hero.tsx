import { ArrowRight, Download } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { SocialLinks } from "@/components/social-links";
import { profile } from "@/data/portfolio";
import { hasResume } from "@/lib/resume";
import Image from "next/image";


export function Hero() {
  const resumeAvailable = hasResume();

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Decorative Cyber Aurora layers (signature gradient used as accent, not full background) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="aurora-gradient animate-aurora-drift absolute -top-40 left-1/2 h-[30rem] w-[54rem] -translate-x-1/2 opacity-30 blur-[110px]" />
        <div className="absolute -left-24 bottom-0 size-96 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.32),transparent_65%)] blur-2xl" />
        <div className="absolute -right-20 top-1/4 size-80 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.22),transparent_65%)] blur-2xl" />
        <div className="grid-lines absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <div className="container-shell relative flex min-h-[88svh] flex-col items-center gap-16 py-24 md:min-h-[92svh] md:flex-row md:justify-between md:gap-10 md:py-28">
        <div className="flex max-w-xl flex-col items-start gap-6">
          <FadeIn>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <span aria-hidden="true" className="animate-pulse-soft size-2 rounded-full bg-accent" />
              {profile.availability}
            </span>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Hi, I&apos;m <span className="aurora-text">{profile.name}</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="font-heading text-lg font-medium text-muted-foreground sm:text-xl">
              {profile.designation}
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              {profile.intro}
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="flex w-full flex-col gap-5">
            <div className="flex flex-wrap items-center gap-3">
              <a href="#projects" className={buttonVariants({ variant: "gradient", size: "xl" })}>
                View My Projects
                <ArrowRight aria-hidden="true" />
              </a>
              {resumeAvailable ? (
                <a
                  href="/resume.pdf"
                  download="Sakib-Hasan-Resume.pdf"
                  className={buttonVariants({ variant: "outline", size: "xl" })}
                >
                  Download Resume
                  <Download aria-hidden="true" />
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  aria-describedby="resume-note"
                  className={buttonVariants({ variant: "outline", size: "xl" })}
                >
                  Download Resume
                  <Download aria-hidden="true" />
                </button>
              )}
            </div>
            {!resumeAvailable ? (
              <p id="resume-note" className="text-xs leading-relaxed text-muted-foreground">
                Resume PDF not available yet — drop the file at{" "}
                <code className="rounded border border-border bg-card px-1.5 py-0.5 text-[11px]">
                  public/resume.pdf
                </code>{" "}
                to enable this button.
              </p>
            ) : null}
            <SocialLinks />
          </FadeIn>
        </div>

        <FadeIn delay={0.25} className="w-full max-w-sm">
          {/* Portrait placeholder — clearly labelled, never a fake photo (README §5) */}
          <div
            role="img"
            aria-label="Portrait placeholder — no photo has been provided yet"
            className="relative aspect-[4/5] w-full"
          >
            <div
              aria-hidden="true"
              className="aurora-surface absolute -inset-2 rounded-[2.25rem] opacity-60 blur-xl"
            />
            <div className="relative flex h-full w-full flex-col items-center justify-center gap-5 overflow-hidden rounded-[2rem] border border-border bg-card">
              <div aria-hidden="true" className="grid-lines absolute inset-0 opacity-70" />
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-12 size-44 rounded-full bg-accent/15 blur-2xl"
              />
              <Image src="/myImg.jpeg" alt="Portfolio Image" width={500} height={500} className="object-cover h-full"></Image>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
