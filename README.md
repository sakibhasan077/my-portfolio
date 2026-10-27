# Sakib Hasan — Developer Portfolio

![Next.js](https://img.shields.io/badge/Next.js-16.4.3-000000?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.3-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

A dark, gradient-driven portfolio site built with the Next.js App Router. The homepage presents Hero, About, Skills, Education, Projects, and Contact sections; every project card opens a full detail route; and a contact form delivers email through Resend. The visual identity — **Cyber Aurora** — is a single indigo-to-cyan gradient system defined once in `src/app/globals.css` and reused across the site (spec §3).

All editable content lives in `src/data/`, so copy, links, and project entries can be changed without touching component code.

> **Two things this file is:** the repository README *and* the product specification. Sections 1–20 below are cited from source comments as `README §N` (for example, `README §12` in `.env.example`), so the numbering is a stable reference — keep it when editing.

---

## Contents

- [Getting started](#getting-started)
- [Commands](#commands)
- [Environment variables](#environment-variables)
- [Optional assets](#optional-assets)
- [Editing content](#editing-content)
- [Deployment](#deployment)
- [Verification](#verification)
- [Product specification](#product-specification)
  - [1. Project goal](#1-project-goal) · [2. Technology stack](#2-technology-stack) · [3. Visual identity](#3-signature-visual-identity-cyber-aurora) · [4. Navbar](#4-navbar) · [5. Hero](#5-hero-section) · [6. About](#6-about-me-section)
  - [7. Skills](#7-skills-section) · [8. Education](#8-education-section) · [9. Experience](#9-experience-section) · [10. Projects](#10-projects-section-minimum-three-projects) · [11. Project details](#11-individual-project-details-pages) · [12. Contact](#12-contact-section)
  - [13. Footer](#13-footer) · [14. Animations](#14-animations-and-interactions) · [15. Responsive design](#15-responsive-design) · [16. Accessibility](#16-accessibility) · [17. SEO & performance](#17-seo-and-performance) · [18. Project structure](#18-project-structure) · [19. Workflow](#19-development-workflow) · [20. Definition of done](#20-definition-of-done)
- [Remaining setup for the owner](#remaining-setup-for-the-owner)

---

## Getting started

### Prerequisites

- **Node.js 20.9 or newer** (Next.js 16 requirement)
- **npm** — the commit includes `package-lock.json`; use npm rather than another client

### Install and run

```bash
git clone https://github.com/sakibhasan077/my-portfolio.git
cd my-portfolio
npm install
npm run dev
```

The dev server starts at `http://localhost:3000` with Turbopack hot reload.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Turbopack dev server |
| `npm run build` | Production build — compile **and** TypeScript check (there is no separate `typecheck` script) |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint 9 flat config (`eslint.config.mjs`) |

No test suite, CI workflow, or formatter is configured. The verification path is `npm run lint` followed by `npm run build`.

## Environment variables

Only the contact form needs configuration (full walkthrough in [§12](#12-contact-section)). Copy the template, then fill it in:

```bash
cp .env.example .env.local
```

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | Yes | Resend API key used by `src/app/api/contact/route.ts` |
| `RESEND_FROM` | No | Sender identity; must be a domain verified in Resend |

These are server-only values. `.env*` is gitignored (`.env.example` is the exception), and the key must never reach client-side code. While `RESEND_API_KEY` is missing, the API route answers `503 not_configured` and the form shows a `mailto:` fallback instead of claiming a message was sent.

## Optional assets

Assets degrade gracefully — each one is checked before use, so nothing breaks when it is absent.

| Asset | Enables | When missing |
| --- | --- | --- |
| `public/resume.pdf` | The hero's **Download Resume** button | Button stays visible but disabled, with an explanation (§5) |
| `public/myImg.jpeg` | Hero portrait | Clearly labelled portrait placeholder (§5) |
| `public/image/*.png` | Real project screenshot | Labelled CSS placeholder composition (§10) |

## Editing content

| File | Contains |
| --- | --- |
| `src/data/portfolio.ts` | Profile, nav links, socials, About fields, skills, education, experience, contact details |
| `src/data/projects.ts` | Project entries: content, links, tags, screenshot path, `isSample` flag |
| `src/data/project-icons.ts` | Icon mapping for placeholder project thumbnails |
| `src/app/layout.tsx` | Page metadata: title, description, Open Graph (§17) |
| `src/app/globals.css` | Cyber Aurora tokens, gradients, utilities (§3) |

**Hard rule (§1):** never invent employment history, degrees, achievements, project URLs, contact details, or metrics. Anything not supplied by the owner renders as a clearly marked placeholder rather than plausible-looking fiction.

## Deployment

The preferred platform is **Vercel**:

1. Import the repository; the Next.js framework preset is detected automatically.
2. Add `RESEND_API_KEY` (and optionally `RESEND_FROM`) to the project's environment variables — they are not committed.
3. Deploy. Local `.env*` files are ignored by git, so nothing secret ships with the source.

Once the production domain is known, add `metadataBase`, a canonical URL, and an Open Graph image to `src/app/layout.tsx` (§17).

## Verification

```bash
npm run lint   # ESLint — should exit with 0 errors
npm run build  # compile + TypeScript check + static generation
```

Both must pass before a change is considered complete (§20).

---

# Product specification

The requirements below define the site's design tokens, sections, accessibility and SEO bar, and content policy. Source comments cite them as `README §N`.

## 1. Project goal

Build a visually distinctive, professional, responsive portfolio for the developer **Sakib Hasan** that communicates technical ability, creativity, attention to detail, and professional readiness for frontend or full-stack roles.

The result must read as custom-designed rather than as a generic template.

Use realistic, editable content and clearly identified placeholders wherever personal information is missing. **Never invent** real employment history, degrees, achievements, project URLs, contact details, or personal experiences.

## 2. Technology stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js (App Router) |
| UI library | React |
| Language | TypeScript with strict type checking |
| Styling | Tailwind CSS |
| Components | shadcn/ui (accessible, reusable primitives) |
| Animation | Motion for React |
| Icons | Lucide React (brand icons via `react-icons`) |
| Optimizations | Next.js Image and Font |
| Hosting | Vercel |

Conventions:

- Use compatible, current stable package versions and follow the installed Next.js project's conventions.
- Server Components by default. Add `"use client"` only for state, browser APIs, event handlers, or client-side animation.
- Do not add a database or backend unless an actual feature requires one.

## 3. Signature visual identity: Cyber Aurora

A single visual identity stays consistent across the whole site.

**Signature gradient**

```css
linear-gradient(
  120deg,
  #0b1026 0%,
  #312e81 48%,
  #7c3aed 76%,
  #22d3ee 100%
);
```

**Color tokens**

| Token | Value |
| --- | --- |
| Midnight Navy | `#0B1026` |
| Deep Indigo | `#312E81` |
| Electric Violet | `#7C3AED` |
| Arctic Cyan | `#22D3EE` |
| Primary text | `#F8FAFC` |
| Secondary text | `#AAB4CC` |
| Card surface | `#111831` |
| Subtle border | `rgba(148, 163, 184, 0.18)` |

These are implemented as CSS variables in `src/app/globals.css` (`:root`, plus fixed Tailwind utilities such as `bg-aurora-violet`). The site is dark-only, so the palette lives in `:root` and the `dark` class remains on `<html>` for shadcn's `dark:` utilities.

**Design direction**

- Premium dark interface with subtle aurora gradients and radial glows
- Controlled cyan and violet accents — never neon for its own sake
- Clean typography, strong visual hierarchy, generous spacing, balanced composition
- Refined card borders, subtle shadows, elegant hover and focus states
- Consistent radii, spacing, and component styling, expressed as CSS variables and reusable Tailwind utilities

**Usage rule:** the signature gradient is a recurring brand element, not a full-strength background on every section. Keep the primary background dark; use the brighter gradient for the hero, text accents, CTA buttons, decorative glows, selected borders, and interactive states.

Maintain sufficient text contrast and readability. Avoid excessive neon, unnecessary glassmorphism, excessive blur, distracting particles, and over-complicated animation.

## 4. Navbar

Fully responsive navigation.

**Desktop links:** Home · About · Skills · Education · Projects · Contact

**Requirements**

- Brand mark or name: Sakib Hasan
- Smooth scrolling to page sections
- Active-section indication where appropriate
- Mobile hamburger menu with proper closing behavior
- Keyboard-accessible navigation with visible focus states
- Sticky or fixed positioning only where it improves usability
- Subtle backdrop or border styling
- Anchor links must account for the navbar height (scroll offset) when jumping to a section

## 5. Hero section

A strong first-screen experience containing:

- A small availability or role label (editable content)
- Name: **Sakib Hasan**
- Editable professional designation
- A concise, compelling introduction
- Professional portrait image or a clearly identified portrait placeholder
- Primary CTA: **View My Projects**
- Secondary CTA: **Download Resume**
- Social links for GitHub and LinkedIn (optional: X, Facebook, Discord)
- A subtle visual accent or animated gradient element

Use strong typography, a balanced two-column layout on large screens, and a polished single column on mobile. The hero establishes the Cyber Aurora identity immediately.

Do not fabricate social profile URLs or a portrait. Use clearly identified placeholders until real assets and URLs are supplied; a `null` URL renders as a disabled, clearly labelled control rather than a dead link.

**Resume behavior**

- Link to `/resume.pdf` when the file exists, with a download behavior.
- If the resume is missing, keep the button visible but do not create a broken link: disable it accessibly and explain what to add.

## 6. About me section

An engaging About section with editable fields for:

- Programming journey
- Current learning and professional interests
- Preferred types of development work
- Approach to problem-solving
- Hobbies and interests outside programming
- Personal values and working style

Write in a concise, natural, professional voice. Do not fabricate personal stories or unverified skill claims; keep all biography content easy to edit. Include a portrait, timeline, or supporting visual only if it improves the composition.

## 7. Skills section

Skills displayed in categorized cards or grouped visual elements.

**Suggested categories**

| Category | Suggested entries |
| --- | --- |
| Frontend | HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS |
| Backend | Node.js, Express.js, REST APIs, MongoDB |
| Tools | Git, GitHub, VS Code, Postman |

These are suggested starting entries, not verified claims. Keep the skill data centralized and easy to edit.

**Requirements:** clear category labels · consistent icons where appropriate · subtle hover interactions · responsive grid · accessible text labels.

Do not use arbitrary skill percentages or progress bars that imply a measured proficiency.

## 8. Education section

An education timeline or polished education cards. Each entry supports:

- Qualification or degree
- Institution
- Department or subject
- Start and end dates
- Current or completed status
- Optional description

Do not invent qualifications. Where details are unknown, use clearly identified editable placeholders or omit unverified entries.

## 9. Experience section

Support professional experience when it exists. Each entry contains:

- Role or job title
- Organization
- Employment type, if relevant
- Dates
- Responsibilities
- Technologies used
- Verifiable accomplishments, when provided

If no verified experience exists, do not invent jobs: omit the section from the page while keeping its data shape ready for real entries, or render a tasteful alternative inviting visitors to explore personal projects.

**Current state:** no verified experience has been supplied, so `experience` in `src/data/portfolio.ts` is empty and the section is not rendered on the homepage.

## 10. Projects section: minimum three projects

An impressive Projects section with at least three project cards, driven by a centralized TypeScript data structure (`src/data/projects.ts`) so projects can be added or edited without rewriting the UI.

**Each card contains**

- Project name
- Thumbnail or screenshot
- Brief summary
- Technology tags
- **View Details** button
- Live project link, when available
- GitHub link, when available and appropriate

**Visuals:** use real supplied screenshots where available (`project.image`, e.g. `public/image/update-bazar.png`); otherwise use clearly identified placeholders or original CSS compositions. A placeholder must never imply it is a real screenshot of a deployed project.

**Sample entries** — such as the Task Management Application and Weather Dashboard — are marked `isSample: true` and kept until the owner supplies real projects. Do not fabricate live URLs, repositories, usage statistics, or achievements; when a link is unavailable, the card shows a "coming soon" affordance instead.

Hover effects are welcome, but the whole card must stay accessible and easy to navigate.

## 11. Individual project details pages

Every project card links to a real, working detail page via the dynamic route `src/app/projects/[slug]/page.tsx`.

**Each page contains**

- Project title and hero image
- Brief description
- Problem being solved
- Main technology stack
- Key features
- Development challenges and how they were addressed
- Potential improvements
- Future development plans
- Live demo link, if available
- GitHub repository link, if available
- Back-to-projects navigation

Use reusable components and the centralized project data source. Unknown slugs must return a proper 404 — `src/proxy.ts` validates the slug before rendering so the request carries a real `404` status rather than streamed 404 content (Cache Components).

Do not generate fake links: when a URL is unavailable, display "Coming soon" or omit the link. Never expose secrets or credentials for private source code.

## 12. Contact section

A polished Contact section with:

- Email address and optional phone / WhatsApp numbers
- A clickable `mailto:` email link and `tel:` phone link
- A WhatsApp link only when a valid number is supplied
- An optional contact form with name, email, and message fields

If a form is implemented, provide validation plus loading, success, and error states. Do not claim a message was sent unless it is connected to a working email service. If no service is configured, offer a clear `mailto:` alternative (or document the integration, as below). Never expose API keys or credentials in client-side code.

### Contact form delivery (Resend)

The form posts to `POST /api/contact` (`src/app/api/contact/route.ts`), which re-validates the submission (length limits, honeypot field, best-effort per-IP rate limit) and delivers the email through [Resend](https://resend.com) to `contact.email` in `src/data/portfolio.ts`. The visitor's address is set as `Reply-To`, so a reply goes straight back to them. Only a confirmed Resend response may show the success state.

**Server responses**

| Status | Meaning | Form behavior |
| --- | --- | --- |
| `400 invalid` | Missing or malformed fields | Inline validation error |
| `429 rate_limited` | More than 5 submissions per 10 minutes from one IP | Retry-later message |
| `502 send_failed` | Resend rejected or the request failed | Error state, message preserved |
| `503 not_configured` | `RESEND_API_KEY` missing | "Not connected yet" notice with a `mailto:` fallback |

**To configure it**

1. Copy `.env.example` to `.env.local` (or `.env`) and set `RESEND_API_KEY` (from the Resend dashboard).
2. Optionally set `RESEND_FROM`. Until you verify your own sending domain in Resend, keep `Your Name <onboarding@resend.dev>` — that sender only delivers to the email address registered on your Resend account.
3. Set the recipient in `src/data/portfolio.ts` → `contact.email`.

While `RESEND_API_KEY` is missing the route answers `503 not_configured`, the form shows an explicit "not connected yet" notice with the `mailto:` fallback, and never claims a send.

A honeypot field traps bots: a submission that fills it receives a fake success and sends nothing.

## 13. Footer

An elegant footer containing:

- Sakib Hasan branding
- Copyright notice with the current year
- Relevant social links
- Useful navigation links
- Optional back-to-top action

Use consistent spacing and the same visual identity as the rest of the site.

## 14. Animations and interactions

Motion for React implements tasteful animation:

- Hero content entrance
- Subtle section reveal
- Project card hover states
- Button interactions
- Mobile menu transitions
- Optional decorative gradient movement

**Rules**

- Prefer `transform` and `opacity` animations
- Respect `prefers-reduced-motion` (site-wide override in `globals.css`)
- Do not animate every element; avoid layout shift and performance-heavy effects
- All important content must remain accessible without animation
- Every visible interactive element must perform its intended action

## 15. Responsive design

The site must work on small and large phones, tablets, laptops, and desktop monitors.

**Requirements:** mobile-first styling · responsive navigation · appropriate typography scaling · no unintended horizontal overflow · responsive image dimensions · grids that adapt to available space · comfortable touch targets · readable text and spacing · consistent alignment across sections.

Test at multiple viewport sizes.

## 16. Accessibility

Follow practical WCAG principles:

- Semantic HTML and a proper heading hierarchy
- Accessible navigation (including the skip-to-content link)
- Full keyboard navigation with visible focus indicators
- Meaningful image alt text and accessible form labels
- Sufficient color contrast
- Reduced-motion support
- Descriptive link names; accessible dialogs and mobile menu
- No reliance on color alone to communicate information

## 17. SEO and performance

- Page metadata and title (template in `src/app/layout.tsx`)
- A meaningful meta description and Open Graph metadata
- Canonical URL once the production URL is known — **not yet set**, because the domain is unconfirmed; do not invent one
- A favicon or brand mark (`src/app/icon.svg`)
- Optimized images, sensible font loading (Next.js Font)
- Sensible component boundaries and minimal unnecessary client-side JavaScript

Do not add fake SEO claims or an unverified production domain.

## 18. Project structure

The guideline structure below matches the repository. Follow existing conventions and keep components reusable without overengineering.

```text
src/
  app/
    api/contact/route.ts      # Resend delivery endpoint (§12)
    projects/[slug]/page.tsx  # Project detail route (§11)
    globals.css               # Cyber Aurora tokens (§3)
    layout.tsx                # Fonts, navbar, footer, metadata (§17)
    not-found.tsx
    page.tsx                  # Composes the homepage sections
    icon.svg
  components/
    layout/                   # navbar.tsx, footer.tsx
    motion/                   # fade-in.tsx
    projects/                 # project-card.tsx, project-thumb.tsx
    sections/                 # hero, about, skills, education, projects, contact, contact-form
    social-links.tsx          # Shared by hero and footer
    ui/                       # shadcn/ui primitives + section-heading, placeholder-note
  data/
    portfolio.ts              # Editable personal content (§1, §4–§9, §12)
    projects.ts               # Project entries (§10–§11)
    project-icons.ts
  lib/
    resume.ts                 # Resume asset check (§5)
    utils.ts
  proxy.ts                    # Request-time 404 for unknown slugs (§11)
public/
  image/                      # Project screenshots (§10)
  myImg.jpeg                  # Portrait (§5)
  resume.pdf                  # Optional resume (§5)
```

## 19. Development workflow

Work through changes in this order:

1. Inspect the repository — framework, package manager, current structure, and installed Next.js / Tailwind / shadcn/ui configuration.
2. Write a concise implementation plan.
3. Establish design tokens and the Cyber Aurora color system.
4. Implement responsive layout and navigation.
5. Build every required section.
6. Create at least three project cards and their dynamic detail pages.
7. Wire up navigation, social links, resume behavior, and contact interactions.
8. Add responsive states, accessibility, and restrained animation.
9. Run `npm run lint` and `npm run build`; fix any errors the change introduced.
10. Test the important routes, navigation, missing-content fallbacks, and responsive layouts.
11. Summarize what was implemented, which checks passed, and which assets or configuration values the owner must supply.

Do not stop at a homepage mockup: continue until all sections, project detail routes, responsive states, and available checks are done. When a dependency, credential, or missing asset blocks a feature, implement the safest fallback and document the remaining setup.

Preserve existing configuration and reuse working code; do not overwrite unrelated files or restart the project unnecessarily. Make design decisions independently rather than asking about minor preferences, and keep personal content editable.

## 20. Definition of done

The project is complete only when:

- [ ] The homepage contains all required portfolio sections
- [ ] The Cyber Aurora gradient is used consistently across the site
- [ ] shadcn/ui components are used appropriately
- [ ] The navbar works on desktop and mobile
- [ ] The hero has a designation, introduction, portrait or placeholder, resume action, and social links
- [ ] About, Skills, Education, Projects, Contact, and Footer are handled correctly; Experience renders only when verified data exists
- [ ] At least three project cards are present, and each opens a working detail page
- [ ] Project detail pages carry the required information and only real external links
- [ ] Missing assets and personal information never produce broken UI or fabricated claims
- [ ] The layout is responsive and accessible
- [ ] `npm run lint` and `npm run build` pass
- [ ] Remaining manual configuration is documented

---

## Remaining setup for the owner

Items that cannot be completed from inside the repository:

1. **Production domain** — add `metadataBase`, canonical URL, and an Open Graph image to `src/app/layout.tsx` once the site is live (§17). No domain has been assumed.
2. **Contact form** — create a Resend API key and set `RESEND_API_KEY` in every deployment environment; verify a sending domain to move off `onboarding@resend.dev` (§12).
3. **Social URLs** — confirm each profile link in `src/data/portfolio.ts` → `socials`; entries left `null` render as disabled placeholders (§5).
4. **Project screenshots** — add real captures under `public/image/` and reference them from `project.image` in `src/data/projects.ts` (§10).
5. **Experience entries** — supply verified roles and dates to enable the Experience section (§9).
6. **About and skills copy** — review the sample text in `src/data/portfolio.ts` and replace anything that does not reflect your actual background (§6, §7).

For day-to-day development guidance (bundled Next.js docs, Cache Components gotchas, verification commands), see `AGENTS.md`.
