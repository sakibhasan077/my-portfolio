<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Commands

- `npm run dev` — Turbopack dev server. It detects AI agents and rewrites the managed block above; Next.js updates only the text between the markers and preserves everything else in this file, so keep your own notes outside them.
- `npm run build` — the single full verification: compile + **TypeScript check** (there is no `typecheck` script).
- `npx tsc --noEmit` — fast standalone typecheck while iterating. On a fresh clone `PageProps`/`LayoutProps` fail to resolve because `.next/types/` doesn't exist yet (`next-env.d.ts`, which is gitignored, imports it) — run `next build` or `next dev` once to generate it.
- `npm run lint` — bare `eslint` (v9 flat config in `eslint.config.mjs`); currently exits 0 with warnings.
- No tests, CI, or formatter exist. Verify with `npm run lint` → `npm run build`.

## Framework facts (Next.js 16.4.3, React 19.3)

- Bundled version-matched docs: `node_modules/next/dist/docs/` (`01-app/` for the App Router; `01-app/02-guides/ai-agents.md` indexes the agent tooling). Prefer these over training data.
- `cacheComponents: true` in `next.config.ts`: an uncached data read or runtime-API access (`cookies()`, `headers()`, …) inside a page fails prerendering with a "blocking-route" error. Fix by wrapping the read in `<Suspense>` or marking the async function `'use cache'` — see `01-app/01-getting-started/08-caching.md`. Build output prints labeled fixes; `next build --debug-prerender` adds server source maps and keeps checking other routes.
- Also enabled: `partialPrefetching` (links share one App Shell) and `reactCompiler` (React Compiler via `babel-plugin-react-compiler`) — skip manual `useMemo`/`useCallback` memoization.
- Pages/layouts use the generated global prop helpers `PageProps<'/route'>` / `LayoutProps<'/route'>` (no import needed) instead of hand-written prop types; `src/app/layout.tsx` shows the pattern.
- `next dev` forwards browser console warnings/errors to its terminal output, so client-side failures appear in the tool output you already read.

## Project facts

- Single-page portfolio app: sections composed in `src/app/page.tsx` from `src/components/{sections,layout,projects,ui,motion}`, dynamic `/projects/[slug]` + global `not-found`, all editable content in `src/data/` (never fabricate personal info — placeholders render as clearly marked disabled UI). Import alias: `@/*` → `src/*`.
- `README.md` is the product spec, not a readme: it defines the "Cyber Aurora" design tokens, required sections, accessibility/SEO bar, and the hard rule to never fabricate personal details, links, or credentials (use clearly marked placeholders). Treat it as the requirements document.
- Tailwind CSS **v4**: there is no `tailwind.config.js`; theme tokens live in `@theme inline` + `:root` in `src/app/globals.css` (Cyber Aurora palette), and CSS compiles through the `@tailwindcss/turbopack` loader rule in `next.config.ts`.
- shadcn/ui is initialized (`components.json`, base-nova style, Base UI primitives). Brand icons must come from `react-icons` — lucide-react v1 dropped Github/Linkedin. Icon components must never cross into client components (React can't serialize functions): data stores `iconKey` strings, mapping lives in `src/data/project-icons.ts`.
- `src/proxy.ts` validates `/projects/:slug` before rendering. Without it, `notFound()` under Cache Components streams a **200 status** with 404 content on cold requests (bundled docs: `loading.md` → "Status codes").
