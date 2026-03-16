import type { Metadata } from "next";

const SITE_URL = "https://benktechlabs.com";

export const metadata: Metadata = {
  title: "FAQs | BenK Tech Labs — Frequently Asked Questions",
  description:
    "Got questions about working with BenK Tech Labs? Find answers about our web development, app development, AI automation, and digital marketing services.",
  openGraph: {
    title: "FAQs | BenK Tech Labs — Frequently Asked Questions",
    description:
      "Got questions about working with BenK Tech Labs? Find answers about our web development, app development, AI automation, and digital marketing services.",
    type: "website",
    url: `${SITE_URL}/faq`,
    siteName: "BenK Tech Labs",
  },
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
