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
    "Your Craft. Your Control. CraftForge is the agentic AI co-pilot built for independent tradesmen to automate business-side decisions: cost control, vendor optimization, digital footprint optimization, and new revenue streams.",
  alternates: {
    canonical: "https://genaistores.com/"
  },
  openGraph: {
    title: "CraftForge by Genaistores LLC",
    description:
      "An agentic AI co-pilot built for independent tradesmen to optimize the business side of the operation automatically.",
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
      "Automate cost control, vendor optimization, and digital footprint optimization for independent tradesmen."
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

