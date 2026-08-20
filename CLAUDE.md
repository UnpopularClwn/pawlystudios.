# Portfolio Website — CLAUDE.md

## Current Checkpoint

Development is in launch-readiness preparation for the approved one-page `pawlystudios.` portfolio. The visible
experience is complete; domain, delivery, deployment, and launch activation remain intentionally pending. This
project folder is the only source of truth. Do not create a duplicate app or experimental copy.

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
- Pricing is data-driven with Starter, Pro, and Max cards. Dollar values remain explicit development placeholders.
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
- Server-rendered Person, WebSite, and Service schema architecture is prepared but remains gated off until a real
  production URL exists and launch is approved. SetSail SoftwareApplication schema remains pending.
- Baseline security headers and a conservative Permissions Policy are configured; the Next.js signature is disabled.
  HSTS and CSP remain launch review items.
- `src/app/robots.js` preserves pre-launch crawling behavior without publishing a sitemap URL.
- `SITE_IS_LAUNCHED` is `false`; the site remains noindex.
- Final visual, responsive, accessibility, motion, content, and implementation QA passed at 1920, 1440, 1024, 768,
  and 375 pixels. Tests, lint, production build, production dependency audit, and whitespace validation passed.

## Resume Rules

- Do not fabricate contact details, client identities, business claims, metrics, testimonials, or domains.
- Do not configure inquiry delivery without an approved provider and real server-side credentials.
- Do not enable indexing until the production domain, metadata, launch QA, and explicit approval are complete.
- Preserve the approved architecture and data-driven content organization. Do not broadly refactor because a
  different implementation style is preferred.
- The client owns the finished website. Ongoing support is optional.
- Update `docs/implementation-status.md` after future implementation sessions.

## Pending Launch Work

- Add the Git remote and push the approved checkpoint.
- Select the production host and domain.
- Configure `metadataBase` and the absolute canonical URL.
- Create and approve the Open Graph image.
- Replace development-placeholder pricing with approved production values or non-price labels.
- Decide whether SetSail should publish SoftwareApplication schema.
- Publish the sitemap URL after the production domain exists.
- Select and configure a real inquiry delivery provider.
- Add provider credentials through the approved server-side environment setup.
- Add rate limiting tied to the real delivery path.
- Decide and verify HSTS behavior on the production host.
- Complete CSP review and deployed-policy testing.
- Run Lighthouse against deployed production and complete the final SEO/GEO/AEO audit.
- Complete production deployment QA.
- Only after explicit launch approval, switch `SITE_IS_LAUNCHED` to `true` and enable indexing.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
