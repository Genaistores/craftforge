import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import type { ReactNode } from "react";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://genaistores.com"),
  title: {
    default: "CraftForge by Genaistores LLC",
    template: "%s | CraftForge"
  },
  description:
    "CraftForge by Genaistores LLC is where Max, Gauge, and Atlas — your frontier experts — quietly handle all the business admin so independent tradesmen can stay completely focused on their craft and never have to think about computers again. See your Untapped Profit Potential in under 60 seconds.",
  applicationName: "CraftForge",
  category: "Business Services",
  keywords: [
    "CraftForge",
    "Genaistores LLC",
    "tradesmen business support",
    "untapped profit potential",
    "contractor growth",
    "small business optimization"
  ],
  authors: [{ name: "Genaistores LLC", url: "https://genaistores.com" }],
  creator: "Genaistores LLC",
  publisher: "Genaistores LLC",
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "https://genaistores.com/"
  },
  openGraph: {
    title: "CraftForge by Genaistores LLC",
    description:
      "CraftForge by Genaistores LLC is where Max, Gauge, and Atlas — your frontier experts — quietly handle all the business admin so independent tradesmen can stay completely focused on their craft and never have to think about computers again. See your Untapped Profit Potential in under 60 seconds.",
    url: "https://genaistores.com",
    siteName: "CraftForge",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://genaistores.com/jobsite-hero.svg",
        width: 1600,
        height: 900,
        alt: "CraftForge job-site background"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "CraftForge by Genaistores LLC",
    description:
      "Your frontier experts handle business admin so tradesmen stay focused on their craft. See your Untapped Profit Potential in under 60 seconds."
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-craftOrange focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#0F172A]"
        >
          Skip to content
        </a>
        {children}
        <div className="sr-only">
          <Link href="https://genaistores.com" aria-label="Go to genaistores.com">
            genaistores.com
          </Link>
        </div>
      </body>
    </html>
  );
}

