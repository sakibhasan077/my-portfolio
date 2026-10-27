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

const SITE_URL = "https://sakibhasan077.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Sakib Hasan",
    url: SITE_URL,
    title: "Sakib Hasan — Full-stack Developer",
    description:
      "Portfolio of Sakib Hasan, a full-stack developer building end-to-end web products with React, Next.js, and Node.js.",
    images: [
      {
        url: "/image/og.png",
        width: 1825,
        height: 769,
        alt: "Sakib Hasan — Full-stack Developer portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sakib Hasan — Full-stack Developer",
    description:
      "Portfolio of Sakib Hasan, a full-stack developer building end-to-end web products with React, Next.js, and Node.js.",
    images: ["/image/og.png"],
  },
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
