/*
 * Centralized project data (README §10–§11).
 * These are SAMPLE entries marked `isSample: true` until the owner supplies
 * real projects — no live URLs, repos, or metrics are ever fabricated.
 * When a link does not exist, keep it `null` and the UI shows "coming soon".
 *
 * This module is dependency-free on purpose: src/proxy.ts imports the slug
 * list on every request. Component references (icons) live in
 * src/data/project-icons.ts and never cross into client components.
 */

export type ProjectIconKey = "cart" | "portfolio" | "weather";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  overview: string;
  problem: string;
  tags: string[];
  features: string[];
  challenges: { challenge: string; solution: string }[];
  improvements: string[];
  roadmap: string[];
  liveUrl: string | null;
  repoUrl: string | null;
  iconKey: ProjectIconKey;
  /** Placeholder visual accent — swap alongside real screenshots. */
  accent: "indigo" | "violet" | "cyan";
  /** Real screenshot path under /public. `null` falls back to the CSS placeholder. */
  image: string | null;
  isSample: boolean;
};

export const projects: Project[] = [
  {
    slug: "bazar-dor",
    title: "BazarDor — বাজার দর",
    summary:
      "A bilingual (বাংলা) market-price tracker that helps shoppers in Bangladesh compare daily product prices across local markets.",
    overview:
      "BazarDor (\"market price\") lets users browse a full product catalog, see today's price against yesterday's, and check which items went up or down. It's built on the Next.js 16 App Router with React Server Components, streams data with skeleton loading states, and ships a Bengali-first, mobile-friendly UI using HeroUI, daisyUI, and Tailwind CSS 4.",
    problem:
      "Daily grocery prices in Bangladesh vary widely between local markets and change every day, but there's no single place to see today's rate, compare it with yesterday's, or find the cheapest market — shoppers rely on word of mouth and overpay.",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Better Auth",
      "MongoDB",
      "HeroUI",
      "daisyUI",
    ],
    features: [
      "Product catalog with today's price, yesterday's price, and percentage change",
      '"আজ দাম বেড়েছে" (price up) and "আজ দাম কমেছে" (price down) sections sorted by biggest change',
      "Category filtering via navbar and dropdown menus",
      "Per-product detail page with a market-wise price table and computed min/max",
      "Email/password sign-up and sign-in plus Google & GitHub OAuth via Better Auth",
      "Profile page for signed-in users to view and update their info",
      "Bengali-first UI with Hind Siliguri font and bn-BD number formatting",
      "Route-level streaming with skeleton placeholders (loading.tsx)",
      "Custom Bengali 404 page for missing products/categories",
      "Fully responsive layout for desktop, tablet, and mobile",
    ],
    challenges: [
      {
        challenge:
          "Product data comes from an external REST API, so page loads had to stay fast while waiting on network responses.",
        solution:
          "Fetched data in React Server Components with ISR revalidation (80s on the home page, 500s on category pages) and paired each route with a loading.tsx skeleton for streaming UI.",
      },
      {
        challenge:
          "Auth had to work with multiple providers without introducing a heavy backend.",
        solution:
          "Integrated Better Auth with the MongoDB adapter — email/password plus Google and GitHub OAuth — exposed through a single catch-all API route (app/api/auth/[...all]).",
      },
      {
        challenge:
          "Price movements (up/down/flat) and per-market min/max needed to be computed consistently across pages.",
        solution:
          "Centralized the shared shapes in TypeScript interfaces (AllProductType, MarketsType) and derived the trend and extremes from the change payload on the server before rendering.",
      },
      {
        challenge:
          "The entire UI is Bangla-first, which breaks default number and typography handling.",
        solution:
          "Used the Hind Siliguri font and bn-BD locale formatting for all numbers and localized copy throughout the app.",
      },
    ],
    improvements: [
      "Add search and sorting (by price, change %, or name) across the catalog",
      "Add price history charts per product to visualize trends over time",
      "Replace polling-style revalidation with webhooks or a cron to refresh the cache",
      "Persist a favorites/watchlist per user with MongoDB",
      "Add dark mode and language toggling between বাংলা and English",
      "Add unit and E2E test coverage (Vitest + Playwright)",
    ],
    roadmap: [
      "Price alerts — notify users when a watched product crosses a target price",
      "Weekly and monthly price trend reports per district",
      "PWA support with offline access to recently viewed products",
      "Admin dashboard for reporting incorrect market prices",
      "Expand beyond groceries to fish, meat, and seasonal produce markets",
    ],
    liveUrl: "https://bazar-dor-three-inky.vercel.app", // add your Vercel deployment URL here
    repoUrl: "https://github.com/sakibhasan077/bazar-dor",
    iconKey: "cart", // match against your ProjectIconKey map
    accent: "cyan",
    image: "/image/bajar.png", // add your screenshot path here (under /public)
    isSample: false,
  },
  {
    slug: "developer-portfolio",
    title: "Developer Portfolio",
    summary:
      "My own developer portfolio — a dark, gradient-rich single-page site with dynamic project detail pages, a spam-protected contact endpoint, and every piece of content living in typed data files.",
    overview:
      "Built with Next.js 16.4.3 (App Router) and React 19.3, styled through Tailwind CSS v4 theme tokens and shadcn/ui primitives, and animated with Motion. One page composes the Hero, About, Skills, Education, Projects, and Contact sections, and each project gets a dynamic /projects/[slug] detail page. All copy, links, and icons live in src/data, so content can be updated without touching a component. It runs on Next.js Cache Components with partial prefetching and the React Compiler enabled, and deploys to Vercel.",
    problem:
      "A developer needs one place to present skills, education, and projects — but portfolio templates usually hard-code copy inside JSX, ship fabricated placeholder links, and treat accessibility as an afterthought. I wanted a site where content is editable without editing components, missing information renders as a clearly marked placeholder instead of an invented fact, and a distinctive design never comes at the cost of keyboard access, SEO, or performance.",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "shadcn/ui",
      "Motion",
      "React Icons",
      "Vercel",
    ],
    features: [
      "Single-page layout with sticky nav, active-section highlighting, and a compact mobile menu",
      "Cyber Aurora dark theme — palette and gradient tokens defined in Tailwind CSS v4 `@theme`, no config file",
      "Project grid with dynamic /projects/[slug] detail pages covering overview, problem, features, challenges, improvements, and roadmap",
      "Typed content layer in src/data — swap copy, URLs, and icons without editing components",
      "Contact form posting to /api/contact with server-side validation, a honeypot spam trap, per-IP rate limiting, and Resend delivery",
      "Resume download (with a designed fallback when the PDF is absent) plus GitHub, LinkedIn, and Discord links",
      "Scroll-reveal Motion animations that respect prefers-reduced-motion",
      "Accessibility pass: visible focus rings, keyboard-reachable nav with aria-current, semantic landmarks, and ARIA labels on decorative visuals",
      "Per-route SEO metadata with an Open Graph image and custom favicon",
      "Custom 404 page for unknown project slugs, validated before render so it returns a real 404 status",
    ],
    challenges: [
      {
        challenge:
          "Under Cache Components, notFound() on a cold request streamed a 200 status with 404 content, so bad URLs looked successful to crawlers.",
        solution:
          "Added src/proxy.ts to validate /projects/:slug before the route renders, guaranteeing a genuine 404 status without giving up streaming.",
      },
      {
        challenge:
          "Icon components can't cross into client components — React can't serialize functions — and lucide-react v1 dropped the GitHub/LinkedIn brand icons.",
        solution:
          "The data layer stores only serializable iconKey strings; the component mapping lives in src/data/project-icons.ts, with brand marks sourced from react-icons.",
      },
      {
        challenge:
          "Once cacheComponents was enabled, uncached runtime reads (cookies(), headers()) inside pages failed prerendering with blocking-route errors.",
        solution:
          "Wrapped those reads in Suspense boundaries or marked the async work 'use cache', following the labeled fixes the build prints.",
      },
      {
        challenge:
          "The spec forbids fabricating personal details, but an unfinished portfolio can look broken instead of intentional.",
        solution:
          'Built clearly marked placeholder UI — disabled placeholder links, PlaceholderNote, and "Sample project" badges — so missing data reads as deliberate rather than invented.',
      },
    ],
    improvements: [
      "Add real screenshots to replace the CSS placeholder thumbnails",
      "Add unit and E2E tests plus a CI workflow (none exist today)",
      "Ship sitemap.xml, robots.txt, and JSON-LD structured data",
      "Add a light variant of the Cyber Aurora theme with a persisted toggle",
      "Generate a unique Open Graph image per project route at build time",
    ],
    roadmap: [
      "Long-form case studies with real metrics for each project",
      "MDX-powered blog section",
      "বাংলা/English language toggle for the content layer",
      "Automated Lighthouse checks on every deploy",
      "RSS feed for new projects and posts",
    ],
    liveUrl: "https://sakibhasan077.vercel.app/",
    repoUrl: "https://github.com/sakibhasan077/my-portfolio",
    iconKey: "portfolio", // requires the union + registry edits noted at the top
    accent: "violet",
    image: "/image/portfolio.png", // set to "/image/portfolio.png" once a real screenshot exists
    isSample: false,
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    summary:
      "A weather dashboard with current conditions, hourly trends, and saved locations — a sample project.",
    overview:
      "A dashboard that turns a public weather API into a calm, readable interface: current conditions at a glance, an hourly trend line, and saved cities the user can switch between.",
    problem:
      "Weather data is dense and easy to render as an unreadable wall of numbers. The challenge was to prioritise what people actually check first, and degrade gracefully when the API is slow or unavailable.",
    tags: ["React", "TypeScript", "REST API", "Charting"],
    features: [
      "Current conditions with temperature, wind, and humidity",
      "Hourly and weekly outlooks with simple trend charts",
      "Requests proxied through a backend route with response caching, so API keys never reach the browser",
      "Multiple saved locations with fast switching",
      "Unit toggle that persists between visits",
      "Clear loading, empty, and error states for every request",
    ],
    challenges: [
      {
        challenge:
          "Displaying several days of data without overwhelming the eye.",
        solution:
          "Used a strict visual hierarchy — one dominant current-conditions card, then progressively quieter detail — plus charts only where they beat a table.",
      },
      {
        challenge: "Slow or failed API responses leaving a blank screen.",
        solution:
          "Wrapped requests in explicit loading and error states with a retry action, so the UI is never empty or falsely confident.",
      },
      {
        challenge:
          "Avoiding rate limits and repeated round-trips for the same forecasts.",
        solution:
          "Requests go through a server route with short-lived response caching, which keeps API keys private and makes repeat views instant.",
      },
    ],
    improvements: [
      "Geolocation-based automatic location",
      "Weather alerts and severity highlighting",
      "Service worker for offline last-known data",
    ],
    roadmap: [
      "Severe weather notifications",
      "Radar map layer",
      "Home-screen widgets",
    ],
    liveUrl: null,
    repoUrl: null,
    iconKey: "weather",
    accent: "indigo",
    image: null,
    isSample: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
