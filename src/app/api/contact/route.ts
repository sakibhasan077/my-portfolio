import { contact } from "@/data/portfolio";

/**
 * Contact form endpoint (README §12): validates a submission and delivers it
 * to `contact.email` through Resend. Credentials stay in server-only env vars
 * (`RESEND_API_KEY`, `RESEND_FROM`) and are never sent to the browser.
 */

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const DEFAULT_FROM = "Portfolio Contact <onboarding@resend.dev>";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMITS = { name: 200, email: 254, message: 5_000 } as const;

/** Best-effort per-IP throttle; each serverless instance keeps its own map. */
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const attempts = new Map<string, { count: number; resetAt: number }>();

type FailureCode = "invalid" | "rate_limited" | "not_configured" | "send_failed";
type Submission = { name: string; email: string; message: string; website: string };

function failure(code: FailureCode, status: number) {
  return Response.json({ ok: false as const, code }, { status });
}

function readSubmission(raw: unknown): Submission | null {
  if (typeof raw !== "object" || raw === null) return null;

  const { name, email, message, website } = raw as Record<string, unknown>;
  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
    return null;
  }

  const trimmed = { name: name.trim(), email: email.trim(), message: message.trim() };
  if (trimmed.name.length < 2 || trimmed.name.length > LIMITS.name) return null;
  if (trimmed.email.length > LIMITS.email || !EMAIL_PATTERN.test(trimmed.email)) return null;
  if (trimmed.message.length < 10 || trimmed.message.length > LIMITS.message) return null;

  return { ...trimmed, website: typeof website === "string" ? website : "" };
}

function isRateLimited(key: string, now: number): boolean {
  const bucket = attempts.get(key);

  if (!bucket || bucket.resetAt <= now) {
    if (attempts.size >= 500) {
      for (const [staleKey, stale] of attempts) {
        if (stale.resetAt <= now) attempts.delete(staleKey);
      }
    }
    attempts.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  bucket.count += 1;
  return bucket.count > RATE_LIMIT;
}

function clientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "local";
}

export async function POST(request: Request) {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return failure("invalid", 400);
  }

  const submission = readSubmission(raw);
  if (!submission) return failure("invalid", 400);

  // Honeypot: bots that fill the hidden field get a fake success, no email.
  if (submission.website) return Response.json({ ok: true as const });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return failure("not_configured", 503);

  if (isRateLimited(clientKey(request), Date.now())) return failure("rate_limited", 429);

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.RESEND_FROM?.trim() || DEFAULT_FROM,
        to: [contact.email],
        reply_to: submission.email,
        subject: `Portfolio enquiry from ${submission.name}`,
        text: `${submission.message}\n\n— ${submission.name} (${submission.email})`,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      const details = await response.text().catch(() => "");
      console.error(`[contact] Resend responded ${response.status}: ${details}`);
      return failure("send_failed", 502);
    }
  } catch (error) {
    console.error("[contact] Resend request failed:", error);
    return failure("send_failed", 502);
  }

  return Response.json({ ok: true as const });
}
