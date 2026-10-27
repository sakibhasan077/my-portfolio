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

export type ProjectIconKey = "cart" | "tasks" | "weather";

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
    "\"আজ দাম বেড়েছে\" (price up) and \"আজ দাম কমেছে\" (price down) sections sorted by biggest change",
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
  image: "/image/update-bazar.png", // add your screenshot path here (under /public)
  isSample: false,
},
  {
    slug: "task-management-app",
    title: "Task Management Application",
    summary:
      "A drag-and-drop board for organising tasks into stages, with filters and keyboard support — a sample project.",
    overview:
      "A focused task board: create tasks, move them between columns, and filter by label and priority. Built to explore optimistic interactions, drag-and-drop ergonomics, and making an inherently pointer-driven UI work with a keyboard.",
    problem:
      "Task tools often bury simple actions behind heavy UI. The goal was a board that stays fast with many cards, keeps every action available from the keyboard, and never loses a change.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "REST API"],
    features: [
      "Create, edit, and delete tasks with inline validation",
      "Drag-and-drop between stages with drop-target feedback",
      "Filter by label, priority, and assignee",
      "Boards persisted server-side and available on every device",
      "Full keyboard path for moving a focused card between columns",
    ],
    challenges: [
      {
        challenge: "Drag-and-drop that also works without a mouse.",
        solution:
          "Paired pointer-based dragging with keyboard move actions and an aria-live region announcing each move, so the feature is not pointer-only.",
      },
      {
        challenge: "Keeping the board fast with many cards.",
        solution:
          "Memoised card rendering per column and limited re-renders to the columns actually affected by a move.",
      },
      {
        challenge: "Keeping edits reliable when the connection drops mid-drag.",
        solution:
          "Writes are optimistic with a rollback path and a small retry queue, so a flaky network never loses a move the user already made.",
      },
    ],
    improvements: [
      "Undo/redo for destructive actions",
      "Board sharing across devices",
      "Virtualised lists for very large columns",
    ],
    roadmap: [
      "Team workspaces with roles",
      "Due dates with reminders",
      "Calendar view alternative",
    ],
    liveUrl: null,
    repoUrl: null,
    iconKey: "tasks",
    accent: "cyan",
    image: null,
    isSample: true,
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
        challenge: "Displaying several days of data without overwhelming the eye.",
        solution:
          "Used a strict visual hierarchy — one dominant current-conditions card, then progressively quieter detail — plus charts only where they beat a table.",
      },
      {
        challenge: "Slow or failed API responses leaving a blank screen.",
        solution:
          "Wrapped requests in explicit loading and error states with a retry action, so the UI is never empty or falsely confident.",
      },
      {
        challenge: "Avoiding rate limits and repeated round-trips for the same forecasts.",
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
