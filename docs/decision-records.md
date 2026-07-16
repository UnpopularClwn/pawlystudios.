# Decision Records

Approved strategic decisions for the Paul Cabiles portfolio site. These were supplied directly by
Paul in the Session 1.1 build brief and are treated as recorded requirements. Do not reopen them
without a direct conflict between files, implementation constraints, or existing code.

## Positioning

- First impression must read as "this guy is the real deal."
- Paul is the primary brand, face, and point of contact. No agency framing.
- The site positions Paul as the person to call when something keeps falling through the cracks.
- The site seeks project-based work, not full-time employment or a permanent VA role.
- Focus is roofing and home service businesses.
- The site discourages full-time VA inquiries, tiny one-off tasks, and unrelated industries.
- Paul is AI-forward. AI supports the story; it is never the headline or the product.

## Homepage Trust Sequence

Hero → Credibility strip → Featured work (must show both social media operations and Set Sail).

## Services Positioning

One broad promise — "Paul handles the business problems that keep getting pushed aside" — with
social media, websites, operations, and custom tools presented as examples, not four disconnected
packages.

## Portfolio

Case studies, not technical write-ups. Each covers: problem, solution, what was delivered, business
outcome, a lesson learned, visual proof, and tools as secondary information.

## Contact

The contact form is the primary conversion method. Supporting methods: LinkedIn, resume download,
WhatsApp. No invented contact details.

## Trusted Partner

A small, restrained mention of an accounting/bookkeeping partner. Not a team or agency presentation.

## Content Rules

Address the visitor as "you." Problem before solution. Short sentences. No em dashes, semicolons,
or emojis in body copy. No buzzwords. Never call Paul a Virtual Assistant. "Hire Me" and "Book a
Call" are not the primary CTA. Preferred CTAs: Let's Talk, Tell Me What's Not Working, Tell Me
What's On Your Plate, Get In Touch, See the Work.

## Technology

Vite + React, deployed on Vercel. No heavy UI library, no Three.js, no autoplay video, no chat
widgets or popups.

## Site Architecture

Routes: `/`, `/services`, `/portfolio`, `/contact`. Data-driven services and projects so future case
studies and solution categories don't require a redesign.

## Session 2.2 Content Authority Update

- `docs/Content Brief v2` is now the primary source for all public-facing copy, replacing
  `docs/Content Brief` (v1). Where the two conflict, v2 wins. This is a recorded decision, not an
  editorial preference — see `docs/content-voice.md` for the full voice rules that came with it.
- Homepage section order is now fixed as: Hero → Credibility strip → Problem section → How It
  Works → Proof section → Featured Work → About → Trusted Partner → Final CTA → Footer. "Proof"
  and "Featured Work" are two distinct sections, not one combined section — Proof is a short
  paragraph plus a link to the Portfolio page, Featured Work is just the two project cards.
- The "How It Works" section on the homepage is a plain editorial paragraph block, not a card grid.
  The old `HowIHelp` and `ProcessSteps` components were removed in favor of one
  `HowItWorks` component that matches the brief's four short paragraphs.
- Portfolio case studies dropped the invented "Business Outcome" and "What I Learned" fields from
  Session 1.1 — neither brief version asks for them, and inventing them risked padding real claims
  with unverifiable filler. Case studies now show: tag, title, the brief's own description
  paragraph(s), a short "what I did" list, tools, and media.
- Unverified numeric/outcome claims are tracked in `docs/content-claims.md` going forward. Any
  future content brief update must be checked against that table before publishing new numbers.

## Session 1.1 Implementation Notes

- **Mockup vs. brief conflict resolved:** the supplied HTML mockup (`paul-portfolio-mockup.html`)
  was written for Executive Assistant/Operations positioning with a live "your time vs. my time"
  clock widget, a Three.js particle field, and GSAP ScrollTrigger reveals. All three conflict with
  the approved positioning (not an EA) and the performance rules (no heavy animation libraries
  unless already present and justified). Only the mockup's design tokens (dark navy/amber palette,
  Archivo Black + IBM Plex typography, card and section patterns) were carried forward. The clock
  widget, Three.js, and GSAP were dropped entirely.
- **Portfolio assets found:** the social media graphics in `assets/` are real design work for a
  business-systems coaching brand, "ACE HomeBuyers, LLC," and "Sell to Ben" — not roofing
  companies. Per the brief's instruction not to imply every brand was a roofing company unless
  assets prove it, the Social Media case study describes the work honestly as multi-industry
  content and design work, not roofing-specific work.
- **No Set Sail screenshots exist in the project assets.** The Set Sail case study is written from
  the content brief's description with a clearly labeled placeholder in place of screenshots. See
  `docs/implementation-status.md` for the full list of what's missing.
