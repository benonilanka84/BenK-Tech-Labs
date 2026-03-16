import type { Metadata } from "next";

const SITE_URL = "https://benktechlabs.com";

export const metadata: Metadata = {
  title: "Privacy Policy | BenK Tech Labs",
  description:
    "Privacy Policy for BenK Tech Labs — data protection, DPDPA 2023 compliance. How we collect, use, and protect your data. Vijayawada, India.",
  openGraph: {
    title: "Privacy Policy | BenK Tech Labs",
    description:
      "Privacy Policy for BenK Tech Labs — data protection, DPDPA 2023 compliance. How we collect, use, and protect your data. Vijayawada, India.",
    type: "website",
    url: `${SITE_URL}/privacy-policy`,
    siteName: "BenK Tech Labs",
  },
};

const LAST_UPDATED = "2025-03-16";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-surface">
      <article className="mx-auto max-w-3xl px-4 py-16">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-muted">
            Last Updated:{" "}
            <time dateTime={LAST_UPDATED}>
              {new Date(LAST_UPDATED).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </p>
        </header>

        <div className="prose prose-lg prose-slate max-w-none">
          <p className="lead text-muted">
            BenK Tech Labs (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
            is committed to protecting your personal data in compliance with
            India&apos;s Digital Personal Data Protection Act (DPDPA) 2023 and
            applicable data protection laws. This policy explains what data we
            collect, how we use it, and your rights regarding your data.
          </p>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-primary">1. What Data We Collect</h2>
            <p className="mt-3 text-muted">
              We collect personal data that you voluntarily provide when you
              contact us or use our services, including:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted">
              <li>
                <strong>Name</strong> — to address you and personalise our
                communications
              </li>
              <li>
                <strong>Email address</strong> — to respond to enquiries,
                send project updates, and communicate with you
              </li>
              <li>
                <strong>Phone number</strong> — to follow up on enquiries and
                project discussions when preferred
              </li>
              <li>
                <strong>Company name</strong> — to understand your business
                context and tailor our services
              </li>
              <li>
                <strong>Message / enquiry content</strong> — to understand your
                requirements and provide relevant information or services
              </li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-primary">
              2. How We Use Your Data
            </h2>
            <p className="mt-3 text-muted">
              We use your personal data solely for the following purposes:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted">
              <li>To respond to your enquiries and provide requested information</li>
              <li>To deliver and manage the services you have engaged us for</li>
              <li>To improve our services based on feedback and usage patterns</li>
              <li>To send relevant updates about projects, deliverables, or service changes</li>
              <li>To comply with legal obligations and enforce our Terms & Conditions</li>
            </ul>
            <p className="mt-4 text-muted">
              We do not use your data for marketing communications unless you
              have given explicit consent. We do not sell, rent, or share your
              personal data with third parties for their marketing purposes.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-primary">
              3. Third-Party Services
            </h2>
            <p className="mt-3 text-muted">
              We use the following third-party services to operate our website
              and business. Each may process personal data as described below:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted">
              <li>
                <strong>Resend</strong> — for transactional emails (e.g.,
                enquiry confirmations, project communications). Resend processes
                your email address and message content. Their privacy policy
                applies to their processing.
              </li>
              <li>
                <strong>Vercel Analytics</strong> — for anonymised website
                analytics such as page views and performance metrics. This does
                not involve personally identifiable information.
              </li>
              <li>
                <strong>Google Analytics</strong> (optional) — if enabled, we may
                use Google Analytics for aggregated traffic analytics. You can
                control tracking via browser settings or Google&apos;s Opt-out
                Browser Add-on.
              </li>
            </ul>
            <p className="mt-4 text-muted">
              These service providers act as data processors on our behalf. We
              select providers that offer appropriate data protection and
              comply with applicable laws.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-primary">
              4. Data Retention and Deletion
            </h2>
            <p className="mt-3 text-muted">
              We retain your personal data only for as long as necessary to:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted">
              <li>Fulfil the purposes for which it was collected</li>
              <li>Comply with legal, regulatory, or contractual requirements</li>
              <li>Resolve disputes or enforce our agreements</li>
            </ul>
            <p className="mt-4 text-muted">
              For lead and enquiry data without an active project, we typically
              retain records for up to <strong>24 months</strong>. For
              completed projects, we retain necessary records for up to{" "}
              <strong>7 years</strong> for legal and tax compliance, unless a
              shorter period is required by law or your request.
            </p>
            <p className="mt-4 text-muted">
              You may request deletion of your personal data at any time,
              subject to our legal obligations. We will process deletion
              requests in accordance with the DPDPA 2023.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-primary">
              5. Your Rights Under DPDPA 2023
            </h2>
            <p className="mt-3 text-muted">
              Under India&apos;s Digital Personal Data Protection Act (DPDPA)
              2023, you have the following rights as a Data Principal:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted">
              <li>
                <strong>Right to access</strong> — you may request a summary of
                the personal data we hold about you
              </li>
              <li>
                <strong>Right to correction</strong> — you may request
                correction of inaccurate or incomplete data
              </li>
              <li>
                <strong>Right to erasure</strong> — you may request deletion of
                your personal data, subject to legal retention requirements
              </li>
              <li>
                <strong>Right to data portability</strong> — you may request
                your data in a structured, commonly used format
              </li>
              <li>
                <strong>Right to withdraw consent</strong> — where processing is
                based on consent, you may withdraw it at any time
              </li>
            </ul>
            <p className="mt-4 text-muted">
              To exercise any of these rights, please contact us at the email
              address below. We will respond within the timeframe prescribed
              under the DPDPA 2023. You also have the right to lodge a complaint
              with the Data Protection Board of India if you believe your rights
              have been violated.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-primary">
              6. Data Security
            </h2>
            <p className="mt-3 text-muted">
              We implement appropriate technical and organisational measures to
              protect your personal data against unauthorised access,
              alteration, disclosure, or destruction. This includes encryption,
              access controls, and secure hosting. However, no method of
              transmission over the internet is 100% secure; we strive to use
              industry-standard practices to safeguard your data.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-primary">
              7. Changes to This Policy
            </h2>
            <p className="mt-3 text-muted">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated &quot;Last Updated&quot;
              date. For material changes, we may also notify you by email or
              through a prominent notice on our website. We encourage you to
              review this policy periodically.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-primary">8. Contact Us</h2>
            <p className="mt-3 text-muted">
              For any questions about this Privacy Policy, to exercise your
              data protection rights, or to contact our Data Protection
              Officer, please email us at:
            </p>
            <p className="mt-4">
              <a
                href="mailto:contact@benktechlabs.com"
                className="font-semibold text-primary hover:text-accent hover:underline"
              >
                contact@benktechlabs.com
              </a>
            </p>
            <p className="mt-4 text-muted">
              BenK Tech Labs, Vijayawada, Andhra Pradesh, India
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
