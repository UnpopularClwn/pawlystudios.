# Portfolio Website — CLAUDE.md

## Current Checkpoint

The one-page `pawlystudios.` portfolio is at its launch-readiness checkpoint. The visible experience, first Vercel
production deployment, social-preview artwork, neutral pending-pricing labels, and all useful QA that does not require
a custom domain or inquiry provider are complete. Custom-domain work, inquiry delivery, approved commercial prices,
and launch activation remain intentionally pending. This project folder is the only source of truth. Do not create a
duplicate app or experimental copy.

Read `docs/implementation-status.md` before resuming. Older briefs, plans, and decision records are preserved under
`docs/archive/` for history; current code and the status document take precedence when they conflict.

## Page Architecture

Hero → SetSail Featured Build / Folder → Services → Process Roadmap → Ongoing Support → Pricing → Website Maintenance → Tools I Use → About / ProfileCard → Contact → Footer.

## Brand and Contact Identity

- Runtime brand: `pawlystudios.`
- Person behind the brand: Paul Cabiles.
- Approved logo source: `public/logos/portfolio logo transparent.svg`.
- Pixel-exact optimized runtime logo: `public/logos/pawlystudios-logo.webp`.
- Email: `ninopaul.cabiles@gmail.com`
- WhatsApp: `https://wa.me/qr/ON77VWUSLF3MF1`
- LinkedIn: `https://www.linkedin.com/in/nino-paul-cabiles`

## Tech Stack and Boundaries

- Next.js App Router, React, JavaScript, custom CSS, GSAP, and `next/image`.
- General Sans is self-hosted for headings; Inter is loaded through `next/font` for body copy.
- Server components are the default. Client boundaries are isolated to browser behavior.
- GSAP is the motion system. Motion, Tailwind, shadcn/ui, and Motion Primitives are not installed.
- Static rendering is retained where possible.

## Latest Approved Implementation

- The Hero is a wide contained Pine panel with locked copy, a visible `pawlystudios.` logo plate, no unnecessary
  right-side preview, and a Contact CTA.
- The crawlable Featured Build pairs approved SetSail copy with an interactive Folder containing three real sanitized
  screenshots. Opening the Folder reveals the single Explore Project action.
- Explore Project opens the reusable native-dialog SetSail experience with GSAP geometry animation, focus containment
  and restoration, scroll locking, Escape and close-button behavior, responsive layouts, and reduced-motion handling.
- Pricing is data-driven with Starter, Pro, and Max cards. Pending values use neutral non-price labels and remain
  explicitly marked as placeholders in code.
- Website Maintenance is a separate optional ongoing offer after Pricing; it is not a fourth build tier.
- Tools uses local logos in a continuous marquee with a static reduced-motion fallback.
- About keeps its copy server-rendered and isolates its lightweight ProfileCard tilt and Contact action in a small
  client component with reduced-motion support.
- Contact is form-only. Footer renders the alternate contact destinations as accessible icon-only links sourced from
  `src/data/contact.js`:
  - Email: `ninopaul.cabiles@gmail.com`
  - WhatsApp: `https://wa.me/qr/ON77VWUSLF3MF1`
  - LinkedIn: `https://www.linkedin.com/in/nino-paul-cabiles`
- The inquiry form has client/server validation and a honeypot, but no delivery provider. It must continue to report
  `NOT_CONFIGURED`; never fake success.
- Approved SEO title and meta description are configured through the native Metadata API.
- A branded 1200 × 630 social preview is generated at `/social-preview` with the approved logo and palette. It is not
  attached to Open Graph/Twitter metadata until a custom domain can provide truthful absolute URLs.
- Server-rendered Person, WebSite, and Service schema architecture is prepared but remains gated off until a real
  production URL exists and launch is approved. SetSail SoftwareApplication schema remains pending.
- Baseline security headers and a conservative Permissions Policy are configured; the Next.js signature is disabled.
  HSTS and CSP remain launch review items.
- `src/app/robots.js` preserves pre-launch crawling behavior without publishing a sitemap URL.
- `SITE_IS_LAUNCHED` is `false`; the site remains noindex.
- Final visual, responsive, accessibility, motion, content, and implementation QA passed at 1920, 1440, 1024, 768,
  and 375 pixels. The latest launch-readiness pass covered 1440, 768, 375, and reduced-motion modes. Tests, lint,
  production build, production dependency audit, and whitespace validation passed.

## Deployment Checkpoint

- GitHub: `https://github.com/UnpopularClwn/pawlystudios..git`
- Branch: `main`; Vercel production branch: `main`.
- Vercel project: `pawlystudios`.
- Pre-launch production URL: `https://pawlystudios.vercel.app` (not a final custom domain).
- The GitHub repository is connected to Vercel; pushes to `main` trigger production deployments and non-main/PR work
  can create preview deployments.
- Hosted QA passed on desktop, tablet, and mobile with no console, hydration, asset, font, or horizontal-overflow
  errors. Security headers and the honest unconfigured-form response were verified.
- Lighthouse baseline: Performance 96, Accessibility 100, Best Practices 96, SEO 66 (expected while noindex is
  active), LCP 2.7 s, CLS 0, and TBT 90 ms.
- No custom domain or delivery environment variables are configured. `metadataBase`, absolute canonical metadata,
  sitemap, and JSON-LD publication remain unset. The page emits `noindex, nofollow` and schema remains unpublished.

## Resume Rules

- Do not fabricate contact details, client identities, business claims, metrics, testimonials, or domains.
- Do not configure inquiry delivery without an approved provider and real server-side credentials.
- Do not enable indexing until the production domain, metadata, launch QA, and explicit approval are complete.
- Preserve the approved architecture and data-driven content organization. Do not broadly refactor because a
  different implementation style is preferred.
- The client owns the finished website. Ongoing support is optional.
- Update `docs/implementation-status.md` after future implementation sessions.

## Pending Launch Work

- Domain and metadata: obtain/approve a custom domain, then configure `metadataBase`, the absolute canonical, sitemap,
  absolute JSON-LD IDs, final schema publication, and attach `/social-preview` to Open Graph/Twitter metadata. Do not
  use the Vercel URL as the permanent canonical. SetSail SoftwareApplication schema remains deferred.
- Form delivery: select a provider; add server-only credentials; configure sender, recipient, and reply-to; implement
  the provider call and rate limiting; define retention/spam policy; and test success, failure, rejection, and
  throttling. Until then, keep `NOT_CONFIGURED`.
- Commercial content: replace the neutral Starter, Pro, Max, and Website Maintenance labels only when real prices are
  approved.
- Final security: verify HSTS with the final HTTPS/custom-domain behavior, preserve the current headers, and review CSP
  with report-only testing first where practical.
- Final QA: after domain/provider configuration, rerun Lighthouse and the domain-dependent metadata, robots, sitemap,
  schema, social-card crawler, and delivered-inquiry checks.
- Final launch: only after explicit approval, switch `SITE_IS_LAUNCHED` to `true`, remove `noindex, nofollow`, publish
  the sitemap and final schema, enable indexing, and verify the live search directives.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
