"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/#services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/#enquiry-form", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo — always dark text for readability */}
          <Link
            href="/"
            className="flex items-center gap-2 text-[#1E293B]"
            onClick={handleLinkClick}
          >
            <Image
              src="/logo.png"
              alt="BenK Tech Labs Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-[#1E293B]">BenK Tech Labs</span>
              <span className="hidden text-xs text-[#64748B] lg:block">
                Empowering Businesses with Smart Technology
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links — primary for text, accent for active/hover */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map(({ href, label }) => {
              const isActive =
                (href === "/" && pathname === "/") ||
                (href !== "/" && !href.startsWith("/#") && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative pb-1 text-sm font-medium transition-colors hover:text-[#F97316] ${
                    isActive ? "text-[#F97316]" : "text-[#1E293B]"
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F97316]" />
                  )}
                </Link>
              );
            })}
            <a
              href="/#enquiry-form"
              className="rounded-full bg-[#F97316] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#EA6C00]"
            >
              Get a Free Quote
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            aria-label="Toggle menu"
            className="rounded p-2 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-6 w-6 text-[#1E293B]" />
            ) : (
              <Menu className="h-6 w-6 text-[#1E293B]" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Full-Screen Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 pt-24">
          {navLinks.map(({ href, label }) => {
            const isActive =
              (href === "/" && pathname === "/") ||
              (href !== "/" && !href.startsWith("/#") && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                onClick={handleLinkClick}
                className={`text-xl font-medium transition-colors ${
                  isActive ? "text-accent underline decoration-accent underline-offset-4" : "text-text hover:text-accent"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <a
            href="/#enquiry-form"
            onClick={handleLinkClick}
            className="rounded-lg bg-accent px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-primary"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </>
  );
}
