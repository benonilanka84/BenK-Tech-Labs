"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most websites take 2–4 weeks depending on complexity. A simple landing page can be ready in 1 week. Complex SaaS platforms or e-commerce sites may take 8-12 weeks. We always give you a clear timeline before starting.",
  },
  {
    question: "How do you charge for projects?",
    answer:
      "We use milestone-based billing — typically 50% advance and remaining 50% in 2 installments. All quotations are itemised with no hidden charges. We'll share a detailed quote after understanding your requirements.",
  },
  {
    question: "Do you work with clients outside Andhra Pradesh?",
    answer:
      "Absolutely. We serve clients across India — from startups in Bangalore to enterprises in Mumbai. All communication and project management is handled remotely via calls, email, and shared project boards.",
  },
  {
    question: "Will I own the code after the project is complete?",
    answer:
      "Yes, 100%. Once the final payment is made, all code, assets, and intellectual property belong to you. We believe clients should have full ownership of what they paid for.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes — every project includes 30 days of free post-launch support. After that, we offer affordable monthly retainer plans for ongoing maintenance, updates, and improvements.",
  },
  {
    question: "Can you work with my existing website or app?",
    answer:
      "Yes. We regularly take over existing projects for redesigns, performance improvements, or new feature additions. Share your current codebase and we'll assess it before providing a quote.",
  },
  {
    question: "What do I need to get started?",
    answer:
      "Just reach out via our enquiry form with a brief description of your project, your budget range, and your timeline. We'll get back to you within 24 hours to schedule a free discovery call.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "For web: Next.js, React, Node.js, PostgreSQL. For mobile: React Native and Flutter. For AI: OpenAI, Claude API, LangChain, Python, n8n. For marketing: Google Ads, Meta Ads, SEO tools. We choose the best stack for your specific needs.",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-text">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 shrink-0 text-accent" />
        ) : (
          <ChevronDown className="h-5 w-5 shrink-0 text-accent" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="pb-5 text-muted">{answer}</p>
      </div>
    </div>
  );
}

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      {/* Page Header */}
      <section
        className="px-4 py-20 text-white"
        style={{
          background: "linear-gradient(to bottom, #0F172A, #1E293B)",
        }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg font-medium text-white/95">
            Everything you need to know before starting your project with us.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-surface px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl border border-border bg-white p-6 shadow-sm md:p-8">
            {FAQ_ITEMS.map((item, index) => (
              <FaqItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg font-medium text-text">
            Still have questions? We&apos;re happy to help.
          </p>
          <Link
            href="/#enquiry-form"
            className="mt-6 inline-block rounded-lg bg-[#F97316] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#EA6C00]"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
