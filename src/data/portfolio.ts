import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Coffee,
  Compass,
  HeartHandshake,
  Lightbulb,
  MonitorCog,
  Rocket,
  Server,
  Wrench,
} from "lucide-react";

/*
 * Single source of truth for editable portfolio content.
 * Everything marked PLACEHOLDER must be replaced with verified personal
 * information before publishing — never invent it (README §1).
 */

export type NavLink = { label: string; href: string };

/** Desktop + mobile navigation (README §4). */
export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const profile = {
  name: "Sakib Hasan",
  initials: "SH",
  designation: "Full-stack Developer", // editable (README §5)
  availability: "Open to new opportunities", // editable
  intro:
    "I design and build end-to-end web products — from data models and APIs to fast, accessible interfaces — with the kind of attention to detail where every layer feels intentional.",
};

export type SocialKey = "github" | "linkedin" | "discord";

/**
 * PLACEHOLDER: set `url` to the real profile URL (e.g. "https://github.com/…").
 * While `url` is null the UI renders a clearly disabled placeholder instead of
 * a fabricated link (README §5).
 */
export const socials: { key: SocialKey; label: string; url: string | null }[] = [
  { key: "github", label: "GitHub", url: "https://github.com/sakibhasan077" },
  { key: "linkedin", label: "LinkedIn", url: "https://linkedin.com/in/sakibhasan-web" },
  { key: "discord", label: "Discord", url: "https://discord.com/users/1517404827343388828" },
];

/** About fields (README §6). Copy below is sample text — replace it. */
export const aboutFields: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Rocket,
    title: "Programming journey",
    text: "I started with HTML, CSS, and JavaScript and kept pulling on the thread — server-side JavaScript, APIs, and databases — until I could take a feature from schema to screen on my own.",
  },
  {
    icon: BookOpen,
    title: "Currently learning",
    text: "Deepening my knowledge of API design and data modelling alongside modern React patterns, performance, and the accessibility details that separate good products from great ones.",
  },
  {
    icon: Compass,
    title: "Preferred work",
    text: "Full-stack product work — owning features end-to-end, from database schema and API design through to accessible, polished interfaces.",
  },
  {
    icon: Lightbulb,
    title: "Problem-solving",
    text: "I break problems into the smallest verifiable piece, look at what the types, the database, or the browser are actually telling me, and only then reach for a solution worth keeping.",
  },
  {
    icon: Coffee,
    title: "Outside of code",
    text: "Reading, exploring new tools, and the usual recharges — stepping away often solves the bug I'd been staring at for an hour.",
  },
  {
    icon: HeartHandshake,
    title: "Values & working style",
    text: "Clear communication, honest estimates, and code the next person can read. I care about shipping work that is maintainable, not just impressive.",
  },
];

/** Skills (README §7). Suggested entries, not measured proficiency — no percentages. */
export const skillCategories: {
  icon: LucideIcon;
  title: string;
  skills: string[];
}[] = [
  {
    icon: MonitorCog,
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel"],
  },
];

export type EducationEntry = {
  qualification: string;
  institution: string;
  department: string;
  start: string;
  end: string;
  status: "current" | "completed";
  description?: string;
  isPlaceholder?: boolean;
};

/**
 * PLACEHOLDER entry — README §8 forbids inventing qualifications.
 * Replace with real details or delete the array contents (the section then
 * renders a designed empty state).
 */
export const education: EducationEntry[] = [
  {
    qualification: "Diploma in Engineering",
    institution: "Dinajpur Polytechnic Institute",
    department: "Computer Science & Technology",
    start: "September,2021",
    end: "December,2024",
    status: "completed",
    description: "My academic background in Computer Science and Technology provided the foundation for my journey into web development. I continue to build my skills in modern web technologies and apply what I learn through practical projects.",
    isPlaceholder: false,
  },
];

export type ExperienceEntry = {
  role: string;
  organization: string;
  employmentType?: string;
  start: string;
  end: string;
  responsibilities: string[];
  technologies: string[];
  accomplishments?: string[];
};

/** README §9: no verified experience yet, so the section renders a fallback. */
export const experience: ExperienceEntry[] = [];

/**
 * PLACEHOLDER contact details (README §12).
 * - `email` uses the reserved example.com domain on purpose.
 * - `phone` / `whatsapp` stay hidden until set to a real number.
 */
export const contact = {
  email: "sakibhasanmd077@gmail.com",
  phone: "01780696376",
  whatsapp: "01780696376",
};
