import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ryven.studio"), // update with real domain before launch
  title: "Ryven — AI Creative & Commercial Studio",
  description:
    "Ryven is an AI creative studio producing high-impact commercials, product visuals, UGC, and video ads for ambitious brands.",
  keywords: [
    "AI creative studio",
    "AI video production",
    "AI commercials",
    "AI ads",
    "generative video",
    "product advertising",
  ],
  authors: [{ name: "Ryven Studio" }],
  creator: "Ryven Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ryven.studio", // placeholder — update with real domain
    siteName: "Ryven",
    title: "Ryven — AI Creative & Commercial Studio",
    description:
      "AI creative and commercial video production for modern brands. Product ads, UGC, and digital campaigns.",
    images: [
      {
        url: "/og-image.png", // placeholder — add real OG image before launch
        width: 1200,
        height: 630,
        alt: "Ryven — AI + Creative Technology Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryven — AI + Creative Technology Studio",
    description:
      "AI and creative technology for brands moving faster.",
    images: ["/og-image.png"], // placeholder
    creator: "@ryven", // placeholder
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${ibmPlexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
