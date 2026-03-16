"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Bot,
  TrendingUp,
  Layers,
  Globe,
  Receipt,
  Zap,
  Headphones,
} from "lucide-react";

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-primary to-accent px-4 py-16 text-center">
        <h1 className="sr-only">
          Digital Services Company in Vijayawada | Web, App & AI Solutions
        </h1>
        <div className="mx-auto flex max-w-4xl flex-col items-center">
          <motion.h2
            custom={0}
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl font-bold leading-tight text-white md:text-6xl"
          >
            We Build Digital Products That Drive Growth
          </motion.h2>
          <motion.p
            custom={1}
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="mt-4 text-lg text-white/80 md:text-xl"
          >
            Full Stack · App Dev · AI Automation · Digital Marketing — all under
            one roof.
          </motion.p>
          <motion.div
            custom={2}
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <a
              href="#enquiry-form"
              className="rounded-lg bg-accent px-8 py-4 font-semibold text-white transition hover:bg-accentLight"
            >
              Start Your Project
            </a>
            <Link
              href="/portfolio"
              className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-primary"
            >
              View Our Work
            </Link>
          </motion.div>
          <motion.div
            custom={3}
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-white"
          >
            <span>✓ MSME Registered</span>
            <span>✓ 5+ Years Experience</span>
            <span>✓ 50+ Projects Delivered</span>
            <span>✓ India-wide Clients</span>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-primary md:text-4xl">
            Our Core Services
          </h2>
          <p className="mb-12 text-center text-muted">
            Everything your business needs to grow digitally — under one roof.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <Code2 className="mb-4 h-10 w-10 text-accent" />
              <h3 className="mb-2 font-bold text-primary">
                Custom Web Applications Built for Scale
              </h3>
              <p className="mb-4 text-sm text-muted">
                From marketing websites to complex SaaS platforms — fast,
                secure, and scalable using Next.js, React, Node.js, and
                PostgreSQL.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "Node.js", "PostgreSQL", "REST API"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-surface px-2 py-1 text-xs text-accent"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <Smartphone className="mb-4 h-10 w-10 text-accent" />
              <h3 className="mb-2 font-bold text-primary">
                Android & iOS Apps That Users Love
              </h3>
              <p className="mb-4 text-sm text-muted">
                Cross-platform mobile apps using React Native and Flutter — from
                MVP to Play Store and App Store.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React Native", "Flutter", "Android", "iOS", "Firebase"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-surface px-2 py-1 text-xs text-accent"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <Bot className="mb-4 h-10 w-10 text-accent" />
              <h3 className="mb-2 font-bold text-primary">
                Automate Your Business With Intelligent AI
              </h3>
              <p className="mb-4 text-sm text-muted">
                LLMs, workflow automation, and custom ML pipelines integrated
                into your existing systems.
              </p>
              <div className="flex flex-wrap gap-2">
                {["OpenAI", "Claude API", "LangChain", "Python", "n8n"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-surface px-2 py-1 text-xs text-accent"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <TrendingUp className="mb-4 h-10 w-10 text-accent" />
              <h3 className="mb-2 font-bold text-primary">
                More Visibility. More Leads. More Revenue.
              </h3>
              <p className="mb-4 text-sm text-muted">
                Data-driven SEO, Google Ads, Meta Ads, and social media
                management that turns clicks into customers.
              </p>
              <div className="flex flex-wrap gap-2">
                {["SEO", "Google Ads", "Meta Ads", "Social Media"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-surface px-2 py-1 text-xs text-accent"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="bg-surface px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary md:text-4xl">
            Why Businesses Choose BenK Tech Labs
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex gap-4">
              <Layers className="h-8 w-8 flex-shrink-0 text-teal" />
              <div>
                <h3 className="font-bold text-primary">
                  End-to-End Capability
                </h3>
                <p className="mt-1 text-sm text-muted">
                  One partner for web, app, AI, and marketing — no coordination
                  overhead.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Globe className="h-8 w-8 flex-shrink-0 text-teal" />
              <div>
                <h3 className="font-bold text-primary">
                  India-Rooted, Global-Ready
                </h3>
                <p className="mt-1 text-sm text-muted">
                  Registered Indian company, fluent in local business needs and
                  global tech standards.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Receipt className="h-8 w-8 flex-shrink-0 text-teal" />
              <div>
                <h3 className="font-bold text-primary">
                  Transparent Pricing
                </h3>
                <p className="mt-1 text-sm text-muted">
                  Itemised quotations, milestone-based billing, no hidden
                  charges.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Zap className="h-8 w-8 flex-shrink-0 text-teal" />
              <div>
                <h3 className="font-bold text-primary">
                  Agile Delivery
                </h3>
                <p className="mt-1 text-sm text-muted">
                  Sprint-based development with weekly updates and live staging
                  environments.
                </p>
              </div>
            </div>

            <div className="flex gap-4 md:col-span-2 md:justify-center">
              <Headphones className="h-8 w-8 flex-shrink-0 text-teal" />
              <div>
                <h3 className="font-bold text-primary">
                  Post-Launch Support
                </h3>
                <p className="mt-1 text-sm text-muted">
                  30-day free support on every project. Monthly retainer options
                  available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
