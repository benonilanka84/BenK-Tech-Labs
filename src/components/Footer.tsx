import Link from "next/link";
import Image from "next/image";
import {
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

const services = [
  { label: "Full Stack Web Dev", href: "/#services" },
  { label: "App Development", href: "/#services" },
  { label: "AI Automation", href: "/#services" },
  { label: "Digital Marketing", href: "/#services" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
  { label: "Contact", href: "/#enquiry-form" },
];

const socialLinks = [
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://x.com", icon: Twitter, label: "Twitter/X" },
  { href: "https://youtube.com", icon: Youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo, tagline, social */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="inline-flex rounded-lg bg-white p-1.5">
                <Image
                  src="/logo.png"
                  alt="BenK Tech Labs Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="font-semibold text-white">BenK Tech Labs</span>
            </Link>
            <p className="max-w-xs text-sm text-white/90">
              Empowering Businesses with Smart Technology
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/80 transition-colors hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#14B8A6]">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#14B8A6]">
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact, location, MSME badge */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#14B8A6]">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-white/80">
              <a
                href="mailto:contact@benktechlabs.com"
                className="block transition-colors hover:text-white"
              >
                contact@benktechlabs.com
              </a>
              <p className="max-w-[200px]">
                Vijayawada, Andhra Pradesh, India
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center rounded-md bg-[#14B8A6] px-2 py-1 text-xs font-medium text-white">
                  MSME Registered
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} BenK Tech Labs. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="/privacy-policy"
              className="text-white/70 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/70 transition-colors hover:text-white"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
