import type { Metadata } from "next";

const SITE_URL = "https://benktechlabs.com";

export const metadata: Metadata = {
  title: "Terms & Conditions | BenK Tech Labs",
  description:
    "Terms & Conditions for BenK Tech Labs services — scope, payment, IP, liability, and governing law. Vijayawada-based digital agency, India.",
  openGraph: {
    title: "Terms & Conditions | BenK Tech Labs",
    description:
      "Terms & Conditions for BenK Tech Labs services — scope, payment, IP, liability, and governing law. Vijayawada-based digital agency, India.",
    type: "website",
    url: `${SITE_URL}/terms`,
    siteName: "BenK Tech Labs",
  },
};

const LAST_UPDATED = "2025-03-16";

export default function TermsPage() {
  return (
        <div className="min-h-screen bg-[#F8FAFC]">
      <article className="mx-auto max-w-3xl px-4 py-16">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Terms & Conditions
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
            Welcome to BenK Tech Labs. By engaging our services or using our
            website, you agree to be bound by these Terms & Conditions
            (&quot;Terms&quot;). Please read them carefully.
          </p>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-primary">
              1. Services Offered and Scope
            </h2>
            <p className="mt-3 text-muted">
              BenK Tech Labs (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
              provides digital services including, but not limited to:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted">
              <li>Full stack web development and web applications</li>
              <li>Mobile application development (iOS and Android)</li>
              <li>AI automation and custom software solutions</li>
              <li>Digital marketing and analytics</li>
              <li>Consulting and technical advisory</li>
            </ul>
            <p className="mt-4 text-muted">
              The specific scope, deliverables, timeline, and pricing for each
              project will be defined in a separate Statement of Work (SOW),
              Proposal, or Service Agreement (&quot;Project Agreement&quot;).
              These Terms apply generally to all engagements; in case of
              conflict between these Terms and a Project Agreement, the Project
              Agreement shall prevail for that project.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-primary">
              2. Intellectual Property
            </h2>
            <p className="mt-3 text-muted">
              <strong>Ownership of Deliverables:</strong> Upon receipt of full
              payment for the relevant deliverables, all intellectual property
              rights in the deliverables (including source code, designs,
              documentation, and other work product created for your project)
              shall transfer to you as the client.
            </p>
            <p className="mt-4 text-muted">
              <strong>Before Full Payment:</strong> Until full payment is
              received, BenK Tech Labs retains all rights, title, and interest
              in the deliverables. We may withhold delivery of final assets,
              source code, or transfer of ownership until all amounts due have
              been paid.
            </p>
            <p className="mt-4 text-muted">
              <strong>Pre-existing and Third-party Materials:</strong> We
              reserve the right to use pre-existing tools, libraries, frameworks,
              and other materials we own or license. These remain our property
              or that of their respective owners. Where deliverables incorporate
              open-source or third-party components, their respective licenses
              shall apply; we will inform you of any such components and
              relevant license terms.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-primary">
              3. Payment Terms
            </h2>
            <p className="mt-3 text-muted">
              Payment terms shall be as specified in the Project Agreement.
              Unless otherwise agreed:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted">
              <li>
                <strong>Advance:</strong> A non-refundable advance of 50% of the
                total project fee is required before work commences.
              </li>
              <li>
                <strong>Milestone-based:</strong> Remaining payments are tied to
                agreed milestones (e.g., design approval, development complete,
                deployment). Invoices will be issued upon milestone completion.
              </li>
              <li>
                <strong>Payment due:</strong> Invoices are due within 14 days
                of issue unless a different period is specified.
              </li>
              <li>
                <strong>Late payment:</strong> We reserve the right to charge
                interest on overdue amounts at 1.5% per month (or the maximum
                rate permitted by law) and to suspend work until payment is
                received.
              </li>
            </ul>
            <p className="mt-4 text-muted">
              All fees and amounts are in Indian Rupees (INR) unless otherwise
              specified. Taxes, including GST, will be charged as applicable.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-primary">
              4. Limitation of Liability
            </h2>
            <p className="mt-3 text-muted">
              <strong>Exclusion of Indirect Damages:</strong> To the maximum
              extent permitted by law, BenK Tech Labs shall not be liable for
              any indirect, incidental, special, consequential, or punitive
              damages, including but not limited to loss of profits, revenue,
              data, or goodwill, whether arising in contract, tort (including
              negligence), or otherwise.
            </p>
            <p className="mt-4 text-muted">
              <strong>Cap on Liability:</strong> Our total aggregate liability for
              any claims arising out of or related to our services or these
              Terms shall not exceed the total amount paid by you to us for the
              specific project giving rise to the claim in the twelve (12)
              months preceding the claim.
            </p>
            <p className="mt-4 text-muted">
              <strong>Basis:</strong> You acknowledge that these limitations
              reflect a reasonable allocation of risk and that we would not
              have entered into the engagement without these limitations.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-primary">
              5. Confidentiality
            </h2>
            <p className="mt-3 text-muted">
              Each party agrees to keep confidential any proprietary or
              non-public information received from the other, and to use it
              only for the purpose of performing or receiving the services.
              Confidentiality obligations survive termination of the
              engagement. This does not apply to information that is publicly
              available, independently developed, or rightfully obtained from a
              third party without confidentiality restrictions.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-primary">
              6. Governing Law and Jurisdiction
            </h2>
            <p className="mt-3 text-muted">
              These Terms and any disputes arising out of or in connection with
              them shall be governed by the laws of India, without regard to
              conflict of law principles.
            </p>
            <p className="mt-4 text-muted">
              The parties submit to the exclusive jurisdiction of the courts at
              <strong> Vijayawada, Andhra Pradesh, India</strong> for the
              resolution of any disputes.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-primary">
              7. Termination
            </h2>
            <p className="mt-3 text-muted">
              Either party may terminate an engagement in accordance with the
              terms of the Project Agreement. In the absence of specific
              provisions, either party may terminate for material breach with 30
              days&apos; prior written notice, provided the breach is not cured
              within that period. Upon termination, you shall pay for all work
              performed up to the date of termination and for any non-cancellable
              third-party costs incurred on your behalf.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-primary">
              8. General Provisions
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted">
              <li>
                <strong>Entire Agreement:</strong> These Terms, together with
                any Project Agreement, constitute the entire agreement between
                the parties regarding the subject matter.
              </li>
              <li>
                <strong>Amendments:</strong> We may amend these Terms from time
                to time. Changes will be posted on this page with an updated
                Last Updated date. Continued use of our services after changes
                constitutes acceptance of the amended Terms.
              </li>
              <li>
                <strong>Severability:</strong> If any provision is held invalid
                or unenforceable, the remaining provisions shall remain in
                effect.
              </li>
              <li>
                <strong>Contact:</strong> For questions about these Terms,
                contact us at{" "}
                <a
                  href="mailto:contact@benktechlabs.com"
                  className="font-medium text-primary hover:text-accent hover:underline"
                >
                  contact@benktechlabs.com
                </a>
                .
              </li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
