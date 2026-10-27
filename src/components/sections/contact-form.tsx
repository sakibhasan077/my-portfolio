"use client";

import { useState, type FormEvent } from "react";
import { Check, CircleAlert, LoaderCircle, Send } from "lucide-react";
import { contact } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type FieldErrors = { name?: string; email?: string; message?: string };
type Status = "idle" | "pending" | "sent" | "error";
type Failure = "send_failed" | "rate_limited" | "not_configured";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Text before the mailto link in the error notice. */
const FAILURE_MESSAGES: Record<Failure, string> = {
  send_failed: "Your message could not be sent — please try again in a moment, or email me directly at",
  rate_limited:
    "Too many messages in a short time — please wait a minute and try again, or email me directly at",
  not_configured: "This form isn't connected to an email service yet — email me directly at",
};

/**
 * Contact form backed by a server route (`/api/contact`) that delivers the
 * message through Resend (README §12). Only a confirmed delivery shows the
 * success state; every failure falls back to the plain mailto address.
 */
export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "", website: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [failure, setFailure] = useState<Failure>("send_failed");
  const [sentTo, setSentTo] = useState("");

  const update = (field: keyof typeof values) => (value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setStatus((current) => (current === "idle" ? current : "idle"));
  };

  function validate(): FieldErrors {
    const nextErrors: FieldErrors = {};
    if (values.name.trim().length < 2) nextErrors.name = "Please enter your name.";
    if (!EMAIL_PATTERN.test(values.email.trim()))
      nextErrors.email = "Please enter a valid email address.";
    if (values.message.trim().length < 10)
      nextErrors.message = "Please write at least a short message (10+ characters).";
    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) return;

    setStatus("pending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
          website: values.website,
        }),
      });

      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; code?: Failure }
        | null;

      if (response.ok && result?.ok) {
        setSentTo(values.email.trim());
        setValues({ name: "", email: "", message: "", website: "" });
        setStatus("sent");
        return;
      }

      setFailure(result?.code ?? "send_failed");
      setStatus("error");
    } catch {
      setFailure("send_failed");
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
      className="flex flex-col gap-5 rounded-2xl border border-border bg-card/80 p-6 sm:p-8"
    >
      <div>
        <h3 className="font-heading text-lg font-semibold text-foreground">Send a message</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Messages go straight to my inbox — I&apos;ll reply to the email address you leave below.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-name">Name</Label>
        <Input
          id="contact-name"
          name="name"
          autoComplete="name"
          placeholder="Your name"
          value={values.name}
          onChange={(event) => update("name")(event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
        />
        {errors.name ? (
          <p id="contact-name-error" role="alert" className="text-xs text-destructive">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-email">Email</Label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={values.email}
          onChange={(event) => update("email")(event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
        />
        {errors.email ? (
          <p id="contact-email-error" role="alert" className="text-xs text-destructive">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Tell me a little about the role or project…"
          value={values.message}
          onChange={(event) => update("message")(event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
        />
        {errors.message ? (
          <p id="contact-message-error" role="alert" className="text-xs text-destructive">
            {errors.message}
          </p>
        ) : null}
      </div>

      {/* Honeypot: hidden from people and assistive tech, tempting to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => update("website")(event.target.value)}
        />
      </div>

      <Button type="submit" variant="gradient" size="lg" disabled={status === "pending"}>
        {status === "pending" ? (
          <>
            <LoaderCircle aria-hidden="true" className="animate-spin" />
            Sending your message…
          </>
        ) : (
          <>
            <Send aria-hidden="true" />
            Compose message
          </>
        )}
      </Button>

      <div aria-live="polite" className="min-h-0">
        {status === "sent" ? (
          <p className="flex items-start gap-2 rounded-lg border border-accent/35 bg-accent/10 px-3.5 py-3 text-sm leading-relaxed text-foreground">
            <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
            <span>
              Your message has been sent successfully. I&apos;ll get back to you at{" "}
              <span className="font-medium text-accent">{sentTo}</span>.
            </span>
          </p>
        ) : null}
        {status === "error" ? (
          <p className="flex items-start gap-2 rounded-lg border border-destructive/40 bg-destructive/10 px-3.5 py-3 text-sm leading-relaxed text-foreground">
            <CircleAlert aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-destructive" />
            <span>
              {FAILURE_MESSAGES[failure]}{" "}
              <a href={`mailto:${contact.email}`} className="text-accent underline underline-offset-4">
                {contact.email}
              </a>
              .
            </span>
          </p>
        ) : null}
      </div>
    </form>
  );
}
