import { existsSync } from "node:fs";
import { join } from "node:path";

/**
 * Server-only check for the optional resume asset (README §5).
 * When the file is missing the UI must keep the button visible but
 * non-functional with an accessible explanation — never a broken link.
 *
 * If `next build` ever reports this as an uncached dynamic read
 * (Cache Components), add `'use cache'` above the function.
 */
export function hasResume(): boolean {
  try {
    return existsSync(join(process.cwd(), "public", "resume.pdf"));
  } catch {
    return false;
  }
}
