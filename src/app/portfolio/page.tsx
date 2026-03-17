import type { Metadata } from "next";
import Link from "next/link";
import PlayStoreBadge from "@/components/PlayStoreBadge";

const SITE_URL = "https://benktechlabs.com";

export const metadata: Metadata = {
  title: "Our Work & Portfolio | BenK Tech Labs",
  description:
    "Our portfolio: The Believerse social platform, web dev, app dev & AI automation. BenK Tech Labs — Vijayawada, Andhra Pradesh.",
  openGraph: {
    title: "Our Work & Portfolio | BenK Tech Labs",
    description:
      "Our portfolio: The Believerse social platform, web dev, app dev & AI automation. BenK Tech Labs — Vijayawada, Andhra Pradesh.",
    type: "website",
    url: `${SITE_URL}/portfolio`,
    siteName: "BenK Tech Labs",
  },
};

const placeholderCards = [
  {
    title: "AI Workflow Automation",
    category: "AI Automation",
    status: "Coming Soon",
  },
  {
    title: "E-commerce Mobile App",
    category: "App Development",
    status: "Coming Soon",
  },
  {
    title: "SEO Growth Campaign",
    category: "Digital Marketing",
    status: "Coming Soon",
  },
];

export default function PortfolioPage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC] to-[#F1F5F9]"
    >
      {/* PAGE HEADER */}
      <section className="px-4 pt-12 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold text-primary md:text-5xl">
            Our Work
          </h1>
          <p className="mt-3 text-lg text-muted md:text-xl">
            From concept to production — real products used by real people.
          </p>
        </div>
      </section>

      {/* THE BELIEVERSE — Featured case study card */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <article className="overflow-hidden rounded-xl border-l-4 border-[#F97316] bg-white shadow-md">
            <div className="p-6 md:p-8">
              <span className="mb-3 inline-block rounded-full bg-teal/15 px-3 py-1 text-xs font-semibold text-teal">
                Full Stack Web Development
              </span>
              <h2 className="text-2xl font-bold text-primary md:text-3xl">
                The Believerse
              </h2>
              <p className="mt-1 text-accent font-medium">One Family in Christ</p>
              <p className="mt-4 text-muted leading-relaxed">
                A first-of-its-kind Christian social media platform connecting
                believers worldwide through faith, hope, and love. Designed,
                built, and deployed end-to-end by BenK Tech Labs.
              </p>
              <p className="mt-3 text-sm text-muted">
                Services: Full Stack Web Development · UI/UX Design · Deployment
                &amp; DevOps
              </p>
              <p className="mt-1 text-sm text-muted">Year: 2025–2026</p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="https://www.thebelieverse.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-[#F97316] px-6 py-3 font-semibold text-white transition hover:bg-[#EA6C00]"
                >
                  Visit thebelieverse.com →
                </a>
                <PlayStoreBadge />
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* PLACEHOLDER CARDS — 3-col grid */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {placeholderCards.map((card) => (
              <article
                key={card.title}
                className="rounded-xl border-2 border-dashed border-[#E2E8F0] bg-[#F8FAFC]/60 p-6"
              >
                <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                  {card.category}
                </span>
                <h3 className="mt-3 text-lg font-bold text-primary">
                  {card.title}
                </h3>
                <span className="mt-2 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">
                  {card.status}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xl font-semibold text-primary md:text-2xl">
            Have a project in mind? Let&apos;s build it together.
          </p>
          <Link
            href="/#enquiry-form"
            className="mt-4 inline-block rounded-lg bg-[#F97316] px-8 py-3 font-semibold text-white transition hover:bg-[#EA6C00]"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
