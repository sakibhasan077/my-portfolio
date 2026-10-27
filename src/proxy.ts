import { NextResponse, type NextRequest } from "next/server";
import { projects } from "@/data/projects";

const projectSlugs = new Set(projects.map((project) => project.slug));

/**
 * Request-time 404 for unknown project slugs (README §11).
 *
 * With Cache Components, `notFound()` inside the page only runs after the
 * static shell has streamed, so a cold request would carry HTTP 200 with
 * 404 content. Proxy runs before any rendering, so every unknown slug gets
 * a real 404 status while still serving the designed not-found page.
 * (Bundled docs: loading.md → "Status codes".)
 */
export function proxy(request: NextRequest) {
  const slug = request.nextUrl.pathname.split("/")[2] ?? "";
  if (!projectSlugs.has(slug)) {
    return NextResponse.rewrite(new URL("/_not-found", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/projects/:slug",
};
