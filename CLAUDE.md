# Portfolio Website — CLAUDE.md

## Current Checkpoint

Development is paused after completing the one-page portfolio and its production foundation. This project folder is
the only source of truth. Do not create a duplicate app or experimental copy.

Read `docs/implementation-status.md` before resuming. Older briefs, plans, and decision records are preserved under
`docs/archive/` for history; current code and the status document take precedence when they conflict.

## Page Architecture

Hero → SetSail Featured Build → What I Build → Process Roadmap → Ongoing Support → Pricing → Tools I Use → Contact →
Footer.

## Tech Stack and Boundaries

- Next.js App Router, React, JavaScript, custom CSS, GSAP, and `next/image`.
- General Sans is self-hosted for headings; Inter is loaded through `next/font` for body copy.
- Server components are the default. Client boundaries are isolated to browser behavior.
- GSAP is the motion system. Motion, Tailwind, shadcn/ui, and Motion Primitives are not installed.
- Static rendering is retained where possible.

## Latest Approved Implementation

- The Hero is a wide contained Pine panel with locked copy, a real sanitized SetSail dashboard preview, and an
  accessible Explore Project trigger.
- Explore Project opens a native-dialog SetSail experience with GSAP geometry animation, focus containment and
  restoration, scroll locking, Escape and close-button behavior, responsive layouts, and reduced-motion handling.
- The main SetSail section remains visible and crawlable with approved copy and three real sanitized screenshots. The
  dialog is secondary and must not replace the homepage proof surface.
- Pricing uses three equal Lime-wash cards. Tools uses local logos in a continuous marquee with a static
  reduced-motion fallback.
- Contact and Footer share approved destinations from `src/data/contact.js`:
  - Email: `ninopaul.cabiles@gmail.com`
  - WhatsApp: `https://wa.me/qr/ON77VWUSLF3MF1`
  - LinkedIn: `https://www.linkedin.com/in/nino-paul-cabiles`
- The inquiry form has client/server validation and a honeypot, but no delivery provider. It must continue to report
  `NOT_CONFIGURED`; never fake success.
- Baseline security headers are configured. Strict CSP remains a launch review item.
- `SITE_IS_LAUNCHED` is `false`; the site remains noindex.

## Resume Rules

- Do not fabricate contact details, client identities, business claims, metrics, testimonials, or domains.
- Do not configure inquiry delivery without an approved provider and real server-side credentials.
- Do not enable indexing until the production domain, metadata, launch QA, and explicit approval are complete.
- Preserve the approved architecture and data-driven content organization. Do not broadly refactor because a
  different implementation style is preferred.
- The client owns the finished website. Ongoing support is optional.
- Update `docs/implementation-status.md` after future implementation sessions.

## Pending Launch Work

Configure real inquiry delivery and rate limiting; choose the production domain; finalize metadata, Open Graph image,
schema, sitemap, and CSP; run final performance/Lighthouse and SEO/GEO/AEO audits; complete launch QA; then switch
`SITE_IS_LAUNCHED` to `true` and enable indexing.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
