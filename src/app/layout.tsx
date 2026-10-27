import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sakib Hasan — Full-stack Developer",
    template: "%s · Sakib Hasan",
  },
  description:
    "Portfolio of Sakib Hasan, a full-stack developer building end-to-end web products with React, Next.js, and Node.js. Explore projects, skills, and contact details.",
  keywords: [
    "Sakib Hasan",
    "full-stack developer",
    "front-end developer",
    "software engineer",
    "portfolio",
    "react",
    "next.js",
    "node.js",
    "typescript",
    "tailwind css",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Sakib Hasan",
    title: "Sakib Hasan — Full-stack Developer",
    description:
      "Portfolio of Sakib Hasan, a full-stack developer building end-to-end web products with React, Next.js, and Node.js.",
  },
  twitter: {
    card: "summary",
    title: "Sakib Hasan — Full-stack Developer",
    description:
      "Portfolio of Sakib Hasan, a full-stack developer building end-to-end web products with React, Next.js, and Node.js.",
  },
  // No canonical URL or OG image yet: the production domain and assets are
  // unknown. Add both in metadata once they exist (README §17).
};

export const viewport: Viewport = {
  themeColor: "#0b1026",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} dark h-full`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-lg focus:border focus:border-border focus:bg-card focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground focus:shadow-lg"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
