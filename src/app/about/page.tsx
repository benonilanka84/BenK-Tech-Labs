import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Scale,
  Sparkles,
  Users,
  Check,
} from "lucide-react";

const SITE_URL = "https://benktechlabs.com";

export const metadata: Metadata = {
  title: "About Us | BenK Tech Labs — Vijayawada Digital Agency",
  description:
    "Udyam-registered/MSME-registered digital agency in Vijayawada. Web apps, mobile apps & AI solutions for Indian businesses. Meet our team.",
  openGraph: {
    title: "About Us | BenK Tech Labs — Vijayawada Digital Agency",
    description:
      "Udyam-registered/MSME-registered digital agency in Vijayawada. Web apps, mobile apps & AI solutions for Indian businesses. Meet our team.",
    type: "website",
    url: `${SITE_URL}/about`,
    siteName: "BenK Tech Labs",
  },
  alternates: {
    canonical: "https://www.benktechlabs.com/about",
  },
};

const missionValues = [
  {
    icon: Award,
    title: "Quality",
    description: "We do not ship until it's right.",
  },
  {
    icon: Scale,
    title: "Transparency",
    description: "Clear pricing, clear timelines, no surprises.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "AI-first thinking on every project.",
  },
  {
    icon: Users,
    title: "Client-First",
    description: "Your success is our success metric.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO / COMPANY STORY */}
      <section
        className="px-4 py-20 text-white"
        style={{
          background: "linear-gradient(to bottom, #0F172A, #1E293B)",
        }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            About BenK Tech Labs — Vijayawada&apos;s Digital Services Partner
          </h1>
          <p className="mt-4 text-lg font-medium text-white/95">
            Built to Make Enterprise Tech Accessible to Every Indian Business
          </p>
          <p className="mt-6 text-white/90">
            BenK Tech Labs was founded with a clear mission — to bring
            enterprise-grade digital solutions within reach of Indian SMEs and
            startups. Based in Vijayawada, Andhra Pradesh, we are a
            MSME-registered company serving clients across India. From full stack
            web apps to AI automation, we handle the complete technology
            lifecycle — so our clients can focus on their business.
          </p>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {missionValues.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-xl border border-border bg-surface p-6 shadow-sm"
              >
                <Icon className="mb-3 h-10 w-10 text-[#14B8A6]" />
                <h3 className="mb-2 font-bold text-primary">{title}</h3>
                <p className="text-muted">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-surface px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary md:text-4xl">
            The People Behind the Work
          </h2>
          <div className="flex flex-col items-center">
            <div className="rounded-xl border border-border bg-white p-8 shadow-sm">
              <div className="flex flex-col items-center md:flex-row md:items-start md:gap-8">
                <Image
                  src="/team/benoni-lanka.jpeg"
                  alt="Benoni Lanka - Founder & CEO"
                  width={200}
                  height={200}
                  className="rounded-full object-cover object-top"
                />
                <div className="mt-6 text-center md:mt-0 md:text-left">
                  <h3 className="text-xl font-bold text-primary">
                    Benoni Lanka
                  </h3>
                  <p className="mb-3 text-accent font-medium">
                    Founder & CEO
                  </p>
                  <p className="max-w-xl text-muted">
                    Passionate technologist and entrepreneur building digital
                    solutions for Indian businesses. Leading BenK Tech Labs from
                    Vijayawada with a vision to make enterprise-grade technology
                    accessible to every SME.
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-center text-sm text-muted">
              More team members joining soon.
            </p>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-white"
            style={{ backgroundColor: "#14B8A6" }}
          >
            <Check className="h-5 w-5" />
            <span className="font-semibold">MSME Registered</span>
          </div>
          <p className="mt-4 text-muted">
            Serving businesses across India — from startups to enterprises
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        className="px-4 py-20 text-center text-white"
        style={{ backgroundColor: "#0F172A" }}
      >
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold md:text-3xl">
            Ready to work with us?
          </h2>
          <Link
            href="/#enquiry-form"
            className="mt-6 inline-block rounded-lg bg-[#F97316] px-8 py-4 font-semibold text-white transition hover:bg-[#EA6C00]"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
