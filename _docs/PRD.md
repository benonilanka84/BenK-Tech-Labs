---
# BenK Tech Labs — Website PRD v3.0

## Company
- Name: BenK Tech Labs
- Tagline: Empowering Businesses with Smart Technology
- Location: Vijayawada, Andhra Pradesh, India
- Email: contact@benktechlabs.com
- Domain: benktechlabs.com
- Udyam Registered: Yes

## Services
1. Full Stack Web Development
2. Mobile App Development (Android & iOS)
3. AI Automation & Integration
4. Digital Marketing (SEO, Social Media, PPC)

## Tech Stack
- Framework: Next.js 14 (App Router)
- Language: TypeScript (strict mode)
- Styling: Tailwind CSS v3
- Deployment: Vercel
- Email: Resend API (contact@benktechlabs.com)
- Blog: MDX + gray-matter
- Icons: Lucide React
- Animations: Framer Motion
- SEO: next-seo + next-sitemap
- Analytics: Vercel Analytics

## Pages
| Route | Page |
|---|---|
| / | Home — Landing Page (lead gen) |
| /about | About Us |
| /portfolio | Portfolio & Case Studies |
| /blog | Blog Index |
| /blog/[slug] | Blog Post |
| /privacy-policy | Privacy Policy |
| /terms | Terms & Conditions |

## Brand Colors (tailwind.config.ts tokens)
| Token | Hex | Usage |
|---|---|---|
| primary | #1E3A8A | Navbar, headings, footer bg |
| accent | #4F6FD4 | CTA buttons, links, highlights |
| accentLight | #7B94E8 | Hover states, subtle borders |
| teal | #0D9488 | Callouts, success states |
| surface | #EEF2FF | Card backgrounds, alt sections |
| text | #111827 | Body copy |
| muted | #6B7280 | Secondary text, captions |
| border | #C7D2FE | Card borders, input borders |

## Typography
- Headings: Inter Bold 700
- Body: Inter Regular 400 / Medium 500
- Code: JetBrains Mono
- Min size: 16px body, 14px labels

## Live Portfolio
| Project | Type | Status | URL |
|---|---|---|---|
| The Believerse | Christian Social Media Platform | Live | thebelieverse.com |
| The Believerse Android App | Android App | Pending Google Play Approval | TBD |

## Enquiry Form Fields
- Full Name (required)
- Phone (required, +91, 10 digits)
- Email (required)
- Company (optional)
- Service Required (dropdown, required)
- Project Budget (dropdown, required)
- Message (required, min 20 chars)
- How did you hear about us? (dropdown, optional)
- Honeypot: field name "website" — must be empty

## Form Backend
- API Route: /api/enquiry (POST)
- Email via: Resend SDK
- To: contact@benktechlabs.com
- Spam: honeypot field check
- Optional: Google Sheets webhook

## SEO Targets
- web development company Vijayawada
- digital services company Andhra Pradesh
- AI automation small business India
- BenK Tech Labs (brand)

## Implementation Phases
1. Project Setup (Next.js init + config)
2. Core Layout (Navbar + Footer)
3. Landing Page Top (Hero + Services + Why Us)
4. Landing Page Bottom (Portfolio Snapshot + Testimonials + Form)
5. Form Backend (Resend API route)
6. Portfolio Page (/portfolio + PlayStoreBadge)
7. About Us Page
8. Blog System (MDX + 5 articles)
9. Legal Pages (Privacy + Terms)
10. SEO & Schema (JSON-LD + sitemap)
11. QA & Launch
---
