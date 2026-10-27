# MASTER PROMPT: Build a Premium, Unique Developer Portfolio

Act as a senior UI/UX designer, full-stack developer ‍and software engineer. Your task is to design and build a complete, production-quality, premium developer portfolio website that stands out from ordinary portfolio templates.

Do not just provide suggestions, explanations, or code snippets. Inspect the existing project, plan the implementation, create and modify the necessary files, install compatible dependencies, implement all required features, and test the completed website.

If the repository already contains a project, preserve its existing configuration and reuse its working code where appropriate. Do not overwrite unrelated files or restart the project unnecessarily.

## 1. Project Goal

Build a visually distinctive, professional, responsive portfolio for a developer named Sakib Hasan.

The portfolio should communicate technical ability, creativity, attention to detail, and professional readiness for frontend or full-stack developer opportunities.

The final result must feel custom-designed rather than like a generic AI-generated portfolio template.

Use realistic, editable portfolio content and clearly identified placeholders wherever personal information is missing. Never invent real employment history, degrees, achievements, project URLs, contact details, or personal experiences.

## 2. Required Technology Stack

Use the following technologies:

- Next.js with App Router
- React
- TypeScript with strict type checking
- Tailwind CSS
- shadcn/ui for accessible, reusable interface components
- Motion for React animations
- Lucide React for icons
- Next.js Image and Font optimization where appropriate
- Vercel as the preferred deployment platform

Use compatible, current stable package versions and follow the installed Next.js project's conventions.

Use Server Components by default. Add "use client" only to components that require state, browser APIs, event handlers, or client-side animation.

Do not add a database or backend unless an actual feature requires it.

## 3. Signature Visual Identity: Cyber Aurora

Create a distinctive visual identity that remains consistent across the entire website.

Use this signature gradient:

linear-gradient(
120deg,
\#0B1026 0%,
\#312E81 48%,
\#7C3AED 76%,
\#22D3EE 100%
)

Color tokens:

- Midnight Navy: #0B1026
- Deep Indigo: #312E81
- Electric Violet: #7C3AED
- Arctic Cyan: #22D3EE
- Primary Text: #F8FAFC
- Secondary Text: #AAB4CC
- Card Surface: #111831
- Subtle Border: rgba(148, 163, 184, 0.18)

Design direction:

- Premium dark interface
- Subtle aurora-inspired gradients and radial glows
- Carefully controlled cyan and violet accents
- Clean typography and strong visual hierarchy
- Generous spacing and balanced composition
- Refined card borders and subtle shadows
- Elegant hover and focus states
- Consistent radii, spacing, and component styling

Use the signature gradient as the website's recurring brand identity, not as a full-strength background on every section. Keep the primary background dark and use the brighter gradient for the hero, text accents, CTA buttons, decorative glows, selected borders, and interactive states.

Maintain sufficient text contrast and readability. Avoid excessive neon, unnecessary glassmorphism, excessive blur, distracting particles, and overly complicated animations.

Create a cohesive design system using CSS variables and reusable Tailwind utilities.

## 4. Navbar

Build a fully responsive navigation bar.

Desktop navigation:

- Home
- About
- Skills
- Education
- Projects
- Contact

Requirements:

- Brand mark or name: Sakib Hasan
- Smooth scrolling to page sections
- Active-section indication where appropriate
- Mobile hamburger menu
- Keyboard-accessible navigation
- Proper menu closing behavior on mobile
- Sticky or fixed positioning only if it improves usability
- Subtle backdrop or border styling
- Visible focus states

Ensure anchor links work correctly and account for the navbar height when navigating to sections.

## 5. Hero Section

Create an outstanding first-screen experience.

Include:

- A small professional availability or role label, using editable content
- Name: Sakib Hasan
- Editable professional designation, initially "Frontend Developer"
- A compelling, concise introduction
- Professional portrait image or clearly identified portrait placeholder
- Primary CTA: "View My Projects"
- Secondary CTA: "Download Resume"
- Social links for GitHub and LinkedIn, with optional X and Facebook
- A subtle visual accent or animated gradient element

Use strong typography, a balanced two-column layout on larger screens, and a polished single-column layout on mobile.

The hero should establish the Cyber Aurora visual identity immediately.

Do not fabricate social profile URLs or a real portrait. Use clearly identified placeholders until real assets and URLs are supplied.

Resume requirements:

- Link to /resume.pdf when the file exists.
- Use an appropriate download behavior.
- If the resume is missing, keep the button visibly present but do not create a broken link. Show a helpful fallback or disable the action accessibly until the PDF is provided.

## 6. About Me Section

Create a visually engaging About section containing editable fields for:

- Programming journey
- Current learning and professional interests
- Preferred types of development work
- Approach to problem-solving
- Hobbies and interests outside programming
- Personal values and working style

Use a concise, natural, professional writing style.

Do not fabricate personal stories or claim skills that have not been verified. Keep all personal biography content easy to edit.

Use an optional portrait, timeline, or supporting visual only if it improves the composition.

## 7. Skills Section

Display skills in attractive, categorized cards or grouped visual elements.

Suggested categories:

Frontend:

- HTML
- CSS
- JavaScript
- TypeScript
- React
- Next.js
- Tailwind CSS

Backend:

- Node.js
- Express.js
- REST APIs
- MongoDB

Tools:

- Git
- GitHub
- VS Code
- Postman

These are suggested initial entries, not verified claims about the portfolio owner. Keep the skill data centralized and easy to edit.

Requirements:

- Clear category labels
- Consistent icons where appropriate
- Subtle hover interactions
- Responsive grid
- Accessible text labels

Do not use arbitrary skill percentages or progress bars that falsely imply measured proficiency.

## 8. Education Section

Create an education timeline or polished education cards.

Each entry should support:

- Qualification or degree
- Institution
- Department or subject
- Start and end dates
- Current or completed status
- Optional description

Do not invent educational qualifications. If details are unknown, use clearly identified editable placeholders or omit unverified entries.

## 9. Experience Section

Support relevant professional experience when available.

Each experience entry should contain:

- Role or job title
- Organization
- Employment type, if relevant
- Dates
- Responsibilities
- Technologies used
- Verifiable accomplishments, when provided

If no verified experience exists, do not invent jobs. Render a tasteful alternative inviting the visitor to explore personal projects, or omit the section's entries while preserving the intended navigation structure.

## 10. Projects Section: Minimum Three Projects

Build an impressive Projects section containing at least three project cards.

Use a centralized TypeScript data structure so projects can be added or edited without rewriting the UI.

Each project card must contain:

- Project name
- Project thumbnail or screenshot
- Brief summary
- Technology tags
- "View Details" button
- Live project link when available
- GitHub link when available and appropriate

Create attractive project visuals using real supplied screenshots when available. If screenshots are missing, use clearly identified placeholders or original CSS-based visual compositions. Never imply that a placeholder is a real screenshot of a deployed project.

Use example project entries such as:

- E-commerce Platform
- Task Management Application
- Weather Dashboard

Mark them as sample content until the owner provides actual projects. Do not fabricate live URLs, repositories, usage statistics, or achievements.

Include meaningful hover effects without making the entire card inaccessible or difficult to navigate.

## 11. Individual Project Details Pages

Every project card must link to a real, working project details page.

Use Next.js dynamic routes:

/projects/[slug]

Each project details page must contain:

- Project title and hero image
- Brief description
- Problem being solved
- Main technology stack
- Key features
- Development challenges
- How those challenges were addressed
- Potential improvements
- Future development plans
- Live demo link, if available
- Client-side GitHub repository link, if appropriate and available
- Back-to-projects navigation

Use reusable components and a centralized project data source.

Implement proper not-found handling for unknown project slugs.

Do not generate fake links. If a URL is unavailable, display a clear "Coming soon" or omit the link.

For private or sensitive source code, never expose secrets or credentials.

## 12. Contact Section

Create a polished Contact section with:

- Email address
- Phone number
- Optional WhatsApp number
- Clickable email link using mailto:
- Clickable phone link using tel:
- WhatsApp link only when a valid number is supplied
- An optional contact form with name, email, and message fields

If a contact form is implemented, provide appropriate validation, loading, success, and error states.

Do not claim that a message has been sent unless the form is connected to a working email service or backend.

If no email service is configured, either provide a clear mailto-based alternative or document exactly how to configure the form integration.

Never expose API keys or credentials in client-side code.

### Contact form delivery (Resend)

The form posts to `POST /api/contact` (`src/app/api/contact/route.ts`), which re-validates the
submission (length limits, honeypot field, best-effort per-IP rate limit) and delivers the email
through [Resend](https://resend.com) to `contact.email` in `src/data/portfolio.ts`. The visitor's
address is set as `Reply-To`, so a reply goes straight back to them. Only a confirmed Resend
response may show the success state.

To configure it:

1. Copy `.env.example` to `.env.local` (or `.env`) and set `RESEND_API_KEY` (from the Resend
   dashboard).
2. Optionally set `RESEND_FROM`. Until you verify your own sending domain in Resend, keep
   `Your Name <onboarding@resend.dev>` — that sender only delivers to the email address
   registered on your Resend account.
3. Set the recipient in `src/data/portfolio.ts` → `contact.email`.

While `RESEND_API_KEY` is missing the route answers `503 not_configured`, the form shows an
explicit "not connected yet" notice with the `mailto:` fallback, and never claims a send.

## 13. Footer

Build an elegant footer containing:

- Sakib Hasan branding
- Copyright notice with the current year
- Relevant social links
- Useful navigation links
- Optional back-to-top action

Use consistent spacing and the same visual identity as the rest of the website.

## 14. Animations and Interactions

Use Motion for React to implement tasteful animations, including:

- Hero content entrance
- Subtle section reveal
- Project card hover states
- Button interactions
- Mobile menu transitions
- Optional decorative gradient movement

Animation rules:

- Prefer transform and opacity animations
- Avoid excessive animation
- Respect prefers-reduced-motion
- Do not animate every element unnecessarily
- Avoid layout shifts and performance-heavy effects
- Keep all important content accessible without animation

All visible interactive elements must perform their intended actions.

## 15. Responsive Design

Ensure the complete website works on:

- Small mobile devices
- Large mobile devices
- Tablets
- Laptops
- Desktop monitors

Requirements:

- Mobile-first responsive styling
- Responsive navigation
- Appropriate typography scaling
- No unintended horizontal overflow
- Responsive image dimensions
- Grid layouts that adapt to available space
- Comfortable touch targets
- Readable text and proper spacing
- Consistent alignment across sections

Test the project at multiple viewport sizes.

## 16. Accessibility

Follow practical WCAG accessibility principles.

Implement:

- Semantic HTML
- Accessible navigation
- Proper heading hierarchy
- Keyboard navigation
- Visible focus indicators
- Meaningful image alt text
- Accessible labels for forms
- Sufficient color contrast
- Reduced-motion support
- Descriptive link names
- Accessible dialogs and mobile navigation

Do not rely on color alone to communicate information.

## 17. SEO and Performance

Implement:

- Page metadata and title
- A meaningful meta description
- Open Graph metadata
- Appropriate canonical URL configuration when the production URL is known
- A suitable favicon or brand mark
- Optimized images
- Appropriate font loading
- Sensible component boundaries
- Minimal unnecessary client-side JavaScript

Use Next.js metadata conventions.

Do not invent a production domain or add fake SEO claims.

## 18. Suggested Project Structure

Organize the application cleanly. Adapt this structure to the existing repository and the installed Next.js conventions.

src/
app/
layout.tsx
page.tsx
globals.css
projects/
[slug]/
page.tsx
components/
layout/
navbar.tsx
footer.tsx
sections/
hero.tsx
about.tsx
skills.tsx
education.tsx
experience.tsx
projects.tsx
contact.tsx
projects/
project-card.tsx
project-details.tsx
ui/
data/
portfolio.ts
projects.ts
lib/
utils.ts
public/
images/
resume.pdf

The structure is a guideline. Follow the actual repository conventions and keep components reusable without overengineering.

## 19. Implementation Workflow

Work through these steps in order:

1. Inspect the existing repository and identify the framework, package manager, and current structure.
2. Check the installed Next.js, Tailwind CSS, and shadcn/ui configuration.
3. Create a concise implementation plan.
4. Establish the design tokens and Cyber Aurora color system.
5. Implement the responsive layout and navigation.
6. Build every required portfolio section.
7. Create at least three project cards and their dynamic details pages.
8. Add functional navigation, social links, resume behavior, and contact interactions.
9. Implement responsive states, accessibility, and subtle animations.
10. Run the available lint, type-check, and production build commands.
11. Fix any errors caused by the implementation.
12. Test important routes, navigation behavior, missing content fallbacks, and responsive layouts.
13. Summarize what was implemented, which checks passed, and which personal assets or configuration values the owner must supply.

Do not stop after creating a homepage mockup. Continue until the requested sections, project detail routes, responsive states, and available checks have been implemented.

If a dependency, credential, external service, or missing asset prevents a feature from being completed, implement the best safe fallback and clearly document the remaining setup.

## 20. Definition of Done

The project is complete only when:

- The homepage contains all required portfolio sections.
- The Cyber Aurora gradient is used consistently across the website.
- shadcn/ui components are used appropriately.
- The navbar works on desktop and mobile.
- The hero contains a designation, introduction, portrait or placeholder, resume action, and social links.
- About, Skills, Education, Experience, Projects, Contact, and Footer are handled correctly.
- At least three project cards are present.
- Every project card opens a corresponding details page.
- Project detail pages support the required information and external links.
- Missing assets and personal information do not create broken UI or fabricated claims.
- The layout is responsive and accessible.
- The available lint, type-check, and production build checks pass.
- Any remaining manual configuration is clearly documented.

## Final Instruction

Start by inspecting the repository. Then implement the complete portfolio directly in the project files.

Make strong design decisions independently instead of repeatedly asking for minor preferences. Use polished defaults, keep personal content editable, and prioritize visual quality, functional completeness, accessibility, maintainability, and performance.

At the end, provide a concise summary of the completed work, how to run the project, the checks performed, and the personal information or external services that still need configuration.
