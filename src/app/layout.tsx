import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientWidgets from "@/components/ClientWidgets";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const SITE_URL = "https://benktechlabs.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "BenK Tech Labs | Web, App & AI Development — Vijayawada",
  description:
    "Web development company Vijayawada, app development & AI automation Andhra Pradesh. Full stack web apps, mobile apps, digital marketing — BenK Tech Labs.",
  openGraph: {
    title: "BenK Tech Labs | Web, App & AI Development — Vijayawada",
    description:
      "Web development company Vijayawada, app development & AI automation Andhra Pradesh. Full stack web apps, mobile apps, digital marketing.",
    type: "website",
    url: SITE_URL,
    siteName: "BenK Tech Labs",
  },
  alternates: {
    canonical: "https://www.benktechlabs.com",
  },
  verification: {
    google: "BqAmQxPI5ncclY0deQInKADUPS4IQmkTgqZpaZT8Zkg",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "BenK Tech Labs",
  description:
    "Full stack web development, app development, AI automation, and digital marketing company in Vijayawada, Andhra Pradesh, India.",
  url: SITE_URL,
  email: "contact@benktechlabs.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vijayawada",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  sameAs: [] as string[],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} flex min-h-screen flex-col overflow-x-hidden font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ClientWidgets />
      </body>
    </html>
  );
}
