"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
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
  Quote,
  Star,
} from "lucide-react";
import PlayStoreBadge from "@/components/PlayStoreBadge";

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

export default function Home() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true });

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    company: "",
    serviceRequired: "",
    projectBudget: "",
    message: "",
    howDidYouHear: "",
    website: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitError, setSubmitError] = useState<string>("");

  const handleFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim())
      newErrors.fullName = "Full name is required.";
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (phoneDigits.length !== 10)
      newErrors.phone = "Enter a valid 10-digit phone number.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email address.";
    if (!formData.serviceRequired)
      newErrors.serviceRequired = "Please select a service.";
    if (!formData.projectBudget)
      newErrors.projectBudget = "Please select a budget range.";
    if (formData.message.trim().length < 20)
      newErrors.message = "Message must be at least 20 characters.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");
    setSubmitError("");
    if (!validateForm()) return;
    if (formData.website) return; // honeypot
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setSubmitStatus("success");
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          company: "",
          serviceRequired: "",
          projectBudget: "",
          message: "",
          howDidYouHear: "",
          website: "",
        });
      } else {
        setSubmitStatus("error");
        setSubmitError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitStatus("error");
      setSubmitError("Something went wrong. Please try again or email us at contact@benktechlabs.com.");
    }
  };

  const stats = [
    { value: "50+", label: "Projects" },
    { value: "30+", label: "Happy Clients" },
    { value: "5+", label: "Years" },
    { value: "4", label: "States Served" },
  ];

  const testimonials = [
    {
      quote:
        "Their team delivered our e-commerce platform in 6 weeks — fast, beautiful, and ranking on Page 1.",
      author: "Retail Client",
      location: "Hyderabad",
    },
    {
      quote:
        "Their AI automation saved our team 20 hours per week. ROI visible within the first month.",
      author: "Healthcare Startup",
      location: "Bangalore",
    },
    {
      quote:
        "Professional, on-time, and genuinely invested in our success. Highly recommend.",
      author: "Education Platform",
      location: "Vijayawada",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative flex min-h-[85vh] flex-col items-center justify-center px-4 py-12 text-center"
        style={{
          background: "linear-gradient(to bottom, #0F172A, #1E293B)",
        }}
      >
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
              className="rounded-lg bg-[#F97316] px-8 py-4 font-semibold text-white transition hover:bg-[#EA6C00]"
            >
              Start Your Project
            </a>
            <Link
              href="/portfolio"
              className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#1E293B]"
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
            <span className="rounded-md bg-[#14B8A6] px-2.5 py-1 font-medium text-white">
              ✓ MSME Registered
            </span>
            <span className="rounded-full bg-white/10 px-2.5 py-1">
              ✓ 5+ Years Experience
            </span>
            <span className="rounded-full bg-white/10 px-2.5 py-1">
              ✓ 50+ Projects Delivered
            </span>
            <span className="rounded-full bg-white/10 px-2.5 py-1">
              ✓ India-wide Clients
            </span>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-[#1E293B] md:text-4xl">
            Our Core Services
          </h2>
          <p className="mb-12 text-center text-[#334155]">
            Everything your business needs to grow digitally — under one roof.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition-shadow hover:border-t-4 hover:border-t-[#2563EB] hover:shadow-md">
              <Code2 className="mb-4 h-10 w-10 text-[#2563EB]" />
              <h3 className="mb-2 font-bold text-[#1E293B]">
                Custom Web Applications Built for Scale
              </h3>
              <p className="mb-4 text-sm text-[#334155]">
                From marketing websites to complex SaaS platforms — fast,
                secure, and scalable using Next.js, React, Node.js, and
                PostgreSQL.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "Node.js", "PostgreSQL", "REST API"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#F8FAFC] px-2 py-1 text-xs text-[#2563EB]"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition-shadow hover:border-t-4 hover:border-t-[#7C3AED] hover:shadow-md">
              <Smartphone className="mb-4 h-10 w-10 text-[#7C3AED]" />
              <h3 className="mb-2 font-bold text-[#1E293B]">
                Android & iOS Apps That Users Love
              </h3>
              <p className="mb-4 text-sm text-[#334155]">
                Cross-platform mobile apps using React Native and Flutter — from
                MVP to Play Store and App Store.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React Native", "Flutter", "Android", "iOS", "Firebase"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#F8FAFC] px-2 py-1 text-xs text-[#7C3AED]"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition-shadow hover:border-t-4 hover:border-t-[#14B8A6] hover:shadow-md">
              <Bot className="mb-4 h-10 w-10 text-[#14B8A6]" />
              <h3 className="mb-2 font-bold text-[#1E293B]">
                Automate Your Business With Intelligent AI
              </h3>
              <p className="mb-4 text-sm text-[#334155]">
                LLMs, workflow automation, and custom ML pipelines integrated
                into your existing systems.
              </p>
              <div className="flex flex-wrap gap-2">
                {["OpenAI", "Claude API", "LangChain", "Python", "n8n"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#F8FAFC] px-2 py-1 text-xs text-[#14B8A6]"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition-shadow hover:border-t-4 hover:border-t-[#F97316] hover:shadow-md">
              <TrendingUp className="mb-4 h-10 w-10 text-[#F97316]" />
              <h3 className="mb-2 font-bold text-[#1E293B]">
                More Visibility. More Leads. More Revenue.
              </h3>
              <p className="mb-4 text-sm text-[#334155]">
                Data-driven SEO, Google Ads, Meta Ads, and social media
                management that turns clicks into customers.
              </p>
              <div className="flex flex-wrap gap-2">
                {["SEO", "Google Ads", "Meta Ads", "Social Media"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#F8FAFC] px-2 py-1 text-xs text-[#F97316]"
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
      <section className="bg-[#EEF2FF] px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#1E293B] md:text-4xl">
            Why Businesses Choose BenK Tech Labs
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex gap-4">
              <Layers className="h-8 w-8 flex-shrink-0 text-[#14B8A6]" />
              <div>
                <h3 className="font-bold text-[#1E293B]">
                  End-to-End Capability
                </h3>
                <p className="mt-1 text-sm text-[#334155]">
                  One partner for web, app, AI, and marketing — no coordination
                  overhead.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Globe className="h-8 w-8 flex-shrink-0 text-[#14B8A6]" />
              <div>
                <h3 className="font-bold text-[#1E293B]">
                  India-Rooted, Global-Ready
                </h3>
                <p className="mt-1 text-sm text-[#334155]">
                  Registered Indian company, fluent in local business needs and
                  global tech standards.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Receipt className="h-8 w-8 flex-shrink-0 text-[#14B8A6]" />
              <div>
                <h3 className="font-bold text-[#1E293B]">
                  Transparent Pricing
                </h3>
                <p className="mt-1 text-sm text-[#334155]">
                  Itemised quotations, milestone-based billing, no hidden
                  charges.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Zap className="h-8 w-8 flex-shrink-0 text-[#14B8A6]" />
              <div>
                <h3 className="font-bold text-[#1E293B]">
                  Agile Delivery
                </h3>
                <p className="mt-1 text-sm text-[#334155]">
                  Sprint-based development with weekly updates and live staging
                  environments.
                </p>
              </div>
            </div>

            <div className="flex gap-4 md:col-span-2 md:justify-center">
              <Headphones className="h-8 w-8 flex-shrink-0 text-[#14B8A6]" />
              <div>
                <h3 className="font-bold text-[#1E293B]">
                  Post-Launch Support
                </h3>
                <p className="mt-1 text-sm text-[#334155]">
                  30-day free support on every project. Monthly retainer options
                  available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SNAPSHOT SECTION */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary md:text-4xl">
            Our Work
          </h2>
          <div className="mb-8 rounded-xl border-l-4 border-[#F97316] bg-[#F8FAFC] p-6 shadow-sm transition-shadow hover:shadow-md">
            <span className="mb-2 inline-block rounded-full bg-teal/10 px-3 py-1 text-xs font-medium text-teal">
              Full Stack Web Development
            </span>
            <h3 className="mb-2 text-xl font-bold text-primary">
              The Believerse
            </h3>
            <p className="mb-4 text-muted">
              A first-of-its-kind Christian social media platform connecting
              believers worldwide. Built end-to-end by BenK Tech Labs.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.thebelieverse.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-accent px-6 py-2.5 font-semibold text-white transition hover:bg-accentLight"
              >
                Visit Live Site →
              </a>
              <PlayStoreBadge />
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center rounded-lg border-2 border-accent px-8 py-3 font-semibold text-accent transition hover:bg-accent hover:text-white"
            >
              View All Our Projects
            </Link>
          </div>
        </div>
      </section>

      {/* STATS BAR + TESTIMONIALS — single dark section */}
      <section className="bg-[#0F172A] px-4 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <div
            ref={statsRef}
            className="mb-16 flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  statsInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-[#14B8A6] md:text-4xl">
                  {stat.value}
                </div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="rounded-xl border border-white/20 bg-white/10 p-6 shadow-sm backdrop-blur-sm"
              >
                <Quote className="mb-3 h-8 w-8 text-[#14B8A6]" />
                <p className="mb-4 text-white">&ldquo;{t.quote}&rdquo;</p>
                <div className="mb-2 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#F97316] text-[#F97316]"
                    />
                  ))}
                </div>
                <p className="text-sm font-medium text-white">{t.author}</p>
                <p className="text-xs text-white/70">{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section
        id="enquiry-form"
        className="bg-[#F8FAFC] px-4 py-20"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary md:text-4xl">
            Let&apos;s Build Something Great Together
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              name="website"
              value={formData.website}
              onChange={handleFormChange}
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-1 block text-sm font-medium text-primary"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleFormChange}
                    className="w-full rounded-lg border border-border px-4 py-2.5 text-text focus:border-[#F97316] focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.fullName}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1 block text-sm font-medium text-primary"
                  >
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <span className="flex items-center rounded-l-lg border border-r-0 border-border bg-surface px-3 text-muted">
                      +91
                    </span>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleFormChange}
                      placeholder="10 digits"
                      maxLength={10}
                      className="w-full rounded-r-lg border border-border px-4 py-2.5 text-text focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-primary"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full rounded-lg border border-border px-4 py-2.5 text-text focus:border-[#F97316] focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="mb-1 block text-sm font-medium text-primary"
                  >
                    Company <span className="text-muted">(optional)</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleFormChange}
                    className="w-full rounded-lg border border-border px-4 py-2.5 text-text focus:border-[#F97316] focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="serviceRequired"
                    className="mb-1 block text-sm font-medium text-primary"
                  >
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="serviceRequired"
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleFormChange}
                    className="w-full rounded-lg border border-border px-4 py-2.5 text-text focus:border-[#F97316] focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                  >
                    <option value="">Select...</option>
                    <option value="Web Development">Web Development</option>
                    <option value="App Development">App Development</option>
                    <option value="AI Automation">AI Automation</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.serviceRequired && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.serviceRequired}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="projectBudget"
                    className="mb-1 block text-sm font-medium text-primary"
                  >
                    Project Budget <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="projectBudget"
                    name="projectBudget"
                    value={formData.projectBudget}
                    onChange={handleFormChange}
                    className="w-full rounded-lg border border-border px-4 py-2.5 text-text focus:border-[#F97316] focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                  >
                    <option value="">Select...</option>
                    <option value="Under ₹50K">Under ₹50K</option>
                    <option value="₹50K–₹2L">₹50K–₹2L</option>
                    <option value="₹2L–₹5L">₹2L–₹5L</option>
                    <option value="₹5L+">₹5L+</option>
                    <option value="Not Sure">Not Sure</option>
                  </select>
                  {errors.projectBudget && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.projectBudget}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block text-sm font-medium text-primary"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows={4}
                    minLength={20}
                    placeholder="Tell us about your project (min 20 characters)"
                    className="w-full rounded-lg border border-border px-4 py-2.5 text-text focus:border-[#F97316] focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="howDidYouHear"
                    className="mb-1 block text-sm font-medium text-primary"
                  >
                    How did you hear about us?{" "}
                    <span className="text-muted">(optional)</span>
                  </label>
                  <select
                    id="howDidYouHear"
                    name="howDidYouHear"
                    value={formData.howDidYouHear}
                    onChange={handleFormChange}
                    className="w-full rounded-lg border border-border px-4 py-2.5 text-text focus:border-[#F97316] focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                  >
                    <option value="">Select...</option>
                    <option value="Google">Google</option>
                    <option value="Referral">Referral</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>
            {submitStatus === "success" && (
              <p className="rounded-lg border border-teal-500 bg-teal-50 px-4 py-3 text-center font-medium text-teal-800">
                Thanks! We&apos;ll get back to you within 24 hours.
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-center text-red-500">
                {submitError || "Something went wrong. Please try again or email us at contact@benktechlabs.com."}
              </p>
            )}
            <button
              type="submit"
              className="w-full rounded-lg bg-accent py-4 font-semibold text-white transition hover:bg-accentLight md:w-auto md:px-12"
            >
              Send Enquiry →
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
