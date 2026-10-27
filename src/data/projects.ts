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
  isSample: boolean;
};

export const projects: Project[] = [
  {
    slug: "e-commerce-platform",
    title: "E-commerce Platform",
    summary:
      "A storefront with product browsing, a persistent cart, and a streamlined checkout flow, built as a sample project.",
    overview:
      "A full storefront experience: searchable product listings, product detail pages, a cart that survives navigation and devices, and a multi-step checkout backed by an order API. Built to practice API design, data modelling, and the performance work that shopping interfaces demand.",
    problem:
      "Shoppers abandon sites that feel slow or unpredictable. The task was to keep browsing and cart interactions instant, the order flow trustworthy, and the codebase simple enough to extend with new product types.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    features: [
      "Responsive product grid with search and category filters",
      "REST API for products, cart, and orders with server-side validation",
      "Product detail pages with image gallery and related items",
      "Persistent cart with quantity controls and live totals",
      "Checkout flow with client-side validation and clear error states",
      "Accessible keyboard navigation across the whole purchase path",
    ],
    challenges: [
      {
        challenge: "Keeping cart state consistent across pages, sessions, and devices.",
        solution:
          "One typed store drives every surface on the client and syncs to the cart API, so totals never disagree — and a failed write rolls back to the last known good state.",
      },
      {
        challenge: "Avoiding layout shift while product images load.",
        solution:
          "Reserved image aspect ratios up front and lazy-loaded below-the-fold media, keeping cumulative layout shift near zero.",
      },
    ],
    improvements: [
      "Server-side search with URL-synced filters",
      "Inventory checks during checkout",
      "End-to-end tests for the checkout flow",
    ],
    roadmap: [
      "User accounts with order history",
      "Saved carts and wishlist support",
      "Payment provider integration behind the existing order API",
    ],
    liveUrl: null,
    repoUrl: null,
    iconKey: "cart",
    accent: "violet",
    isSample: true,
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
    isSample: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
