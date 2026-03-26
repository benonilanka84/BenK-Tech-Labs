import type { Metadata } from "next";

const SITE_URL = "https://benktechlabs.com";

export const metadata: Metadata = {
  title: "FAQ | BenK Tech Labs — Common Questions Answered",
  description:
    "Frequently asked questions about BenK Tech Labs services — timelines, pricing, technologies, support & more. Vijayawada digital agency.",
  openGraph: {
    title: "FAQ | BenK Tech Labs — Common Questions Answered",
    description:
      "Frequently asked questions about BenK Tech Labs services — timelines, pricing, technologies, support & more. Vijayawada digital agency.",
    type: "website",
    url: `${SITE_URL}/faq`,
    siteName: "BenK Tech Labs",
  },
  alternates: {
    canonical: "https://www.benktechlabs.com/faq",
  },
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
