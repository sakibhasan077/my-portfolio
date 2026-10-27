import { Mail, MessageCircle, Phone } from "lucide-react";
import { contact } from "@/data/portfolio";
import { Reveal } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { PlaceholderNote } from "@/components/ui/placeholder-note";
import { SocialLinks } from "@/components/social-links";
import { ContactForm } from "@/components/sections/contact-form";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="container-shell grid items-start gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="flex flex-col items-start gap-6">
            <SectionHeading
              align="left"
              kicker="Contact"
              title={
                <>
                  Let&apos;s <span className="aurora-text">talk</span>
                </>
              }
              description="Have a role, a project, or just a question? Pick whichever channel is easiest for you."
            />

            <ul className="flex w-full flex-col gap-3" aria-label="Contact channels">
              <li className="flex items-center gap-4 rounded-xl border border-border bg-card/70 p-4 transition-colors hover:border-accent/40 focus-within:border-accent/40">
                <span
                  aria-hidden="true"
                  className="aurora-surface grid size-10 shrink-0 place-items-center rounded-lg text-white shadow-md shadow-violet-950/30"
                >
                  <Mail className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                    Email
                  </p>
                  <Link
                    href={`mailto:${contact.email}`}
                    className="block truncate text-sm font-medium text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 rounded"
                  >
                    {contact.email}
                  </Link>
                </div>
              </li>

              <li className="flex items-center gap-4 rounded-xl border border-border bg-card/70 p-4 transition-colors hover:border-accent/40 focus-within:border-accent/40">
                <span
                  aria-hidden="true"
                  className="aurora-surface grid size-10 shrink-0 place-items-center rounded-lg text-white shadow-md shadow-violet-950/30"
                >
                  <Phone className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                    Phone
                  </p>
                  {contact.phone ? (
                    <Link
                      href={`tel:${contact.phone}`}
                      className="block truncate text-sm font-medium text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 rounded"
                    >
                      {contact.phone}
                    </Link>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      [Number not added yet — set it in <code>src/data/portfolio.ts</code>]
                    </p>
                  )}
                </div>
              </li>

              {contact.whatsapp ? (
                <li className="flex items-center gap-4 rounded-xl border border-border bg-card/70 p-4 transition-colors hover:border-accent/40 focus-within:border-accent/40">
                  <span
                    aria-hidden="true"
                    className="aurora-surface grid size-10 shrink-0 place-items-center rounded-lg text-white shadow-md shadow-violet-950/30"
                  >
                    <MessageCircle className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                      WhatsApp
                    </p>
                    <Link
                      href={`https://wa.me/${contact.whatsapp.replace(/[^\d]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block truncate text-sm font-medium text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 rounded"
                    >
                      {contact.whatsapp}
                    </Link>
                  </div>
                </li>
              ) : null}
            </ul>

            

            <SocialLinks />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
