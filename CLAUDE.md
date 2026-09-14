# Portfolio Website — CLAUDE.md

## Current Checkpoint

The multi-page `pawlystudios.` portfolio is at its architecture-integration checkpoint. The visible experience, first Vercel
production deployment, social-preview artwork, and all useful QA that does not require a custom domain or inquiry
provider are complete. Custom-domain work, inquiry delivery, approved commercial prices,
and launch activation remain intentionally pending. This project folder is the only source of truth. Do not create a
duplicate app or experimental copy.

Read `docs/implementation-status.md` before resuming. Older briefs, plans, and decision records are preserved under
`docs/archive/` for history; current code and the status document take precedence when they conflict.

## Repository State (read this before touching git)

`main` / `origin/main` are identical and are production, at commit `29219b3907a275afdbc221fe85540856a6cf6e6a`. The
current branch (`portfolio-first-restructure`) is **4 commits ahead of `main`**, and all four are committed but
unmerged — none of them are on production yet:

1. **LIVE / PRODUCTION** — `main`/`origin/main` at `29219b3`. Service-first homepage structure, Services nav dropdown,
   About portrait/story. This is what a visitor sees today.
2. **COMMITTED BUT UNMERGED — portfolio-first content pass** — `8a4345e` (feat: shift site copy toward portfolio
   positioning). Homepage Hero headline/CTA copy, Hero `line-height: 1.12`, homepage capability descriptions, About
   Preview copy, and the AI Ad Creative hero lead.
3. **COMMITTED BUT UNMERGED — site restructure** — `09fcb44` (feat: restructure site around portfolio work) and
   `10ef7d2` (fix: align hero identity with portfolio positioning). Navigation simplification (Services dropdown →
   direct Web/AI Creative links), homepage section reorder, the "Selected Work" Featured Work rebuild, "What I Do"
   structural changes (id/heading/link-label rework), Web Development and AI Ad Creative section reorders, and Home
   CTA copy changes. See **Current Branch Architecture** below for the resulting page structure.
4. **COMMITTED BUT UNMERGED — SetSail redesign** — `5d67e0a` (feat: redesign SetSail case study). `SetSailDialog.jsx`/
   `.css` and `src/data/setsail.js` rebuilt with cover/experience/build sections; three new screenshots
   (`(2).png`, `(3).png`, `(11).png`) committed and referenced. See **Asset State** below.

None of layers 2–4 are shipped, approved for production, merged, or deployed. Do not merge, push, or deploy
`portfolio-first-restructure` until this work has its own explicit review/approval.

## Current Branch Architecture (committed, unmerged — `portfolio-first-restructure`)

This is what exists on the branch's 4 commits, not on production. Do not describe it as live until merged.

- **Navigation**: Web, AI Creative, About, Contact, Start a Project (flat links, no Services dropdown).
- **Homepage**: Hero → Selected Work → What I Do → About Preview → Final CTA → Footer.
- **Web Development** (`/services/web-development`): Hero → SetSail case study → What I Build / Services → Process →
  Maintenance → Tools → CTA.
- **AI Ad Creative** (`/services/ai-ad-creative`): Hero → Selected Creative → remaining strategy/methodology content →
  CTA.
- **About** (`/about`): unchanged from the production About implementation.
- **Contact** (`/contact`): unchanged.
- **`/work`**: absent / intentionally 404.
- **SetSail**: the redesigned case study (cover/experience/build sections) is committed in `5d67e0a`, not on
  production.

## Page Architecture (production, `main`)

Homepage: Brand Hero → Primary Services → Featured Work (SetSail) → About Preview → Final CTA → Footer.

Detailed Web Development and AI Ad Creative content lives on their approved `/services/web-development` and
`/services/ai-ad-creative` routes. The Web Development route also contains the full SetSail showcase. About and
Contact live at `/about` and `/contact`. Shared navigation is a Services disclosure (Web Development, AI Ad Creative)
alongside About, Contact, and Start a Project.

The committed-but-unmerged branch work (see **Current Branch Architecture** above) changes this to: Hero → Selected
Work → What I Do → About Preview → Final CTA → Footer, with flat Web/AI Creative/About/Contact navigation links. That
layout is not live and is not the source of truth until it is merged into `main` and approved.

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

## Latest Approved Implementation (live on production, `main`)

- The homepage leads with a Brand Hero, then Primary Services (Web Development / AI Ad Creative gateways), then
  Featured Work (SetSail only), then About Preview and the final CTA.
- Shared navigation exposes a Services disclosure (Web Development, AI Ad Creative) alongside About and Contact.
- The crawlable Featured Build pairs approved SetSail copy with an interactive Folder containing three real sanitized
  screenshots. Opening the Folder reveals the single Explore Project action.
- Explore Project opens the reusable native-dialog SetSail experience with GSAP geometry animation, focus containment
  and restoration, scroll locking, Escape and close-button behavior, responsive layouts, and reduced-motion handling.
- Web Development pricing is intentionally absent until the commercial offer is finalized.
- Website Maintenance remains a separate optional ongoing offer without a published price.
- Tools uses local logos in a continuous marquee with a static reduced-motion fallback.
- The homepage uses a lightweight About preview; `/about` keeps its copy server-rendered and isolates its ProfileCard
  tilt and Contact action in a small client component with reduced-motion support.
- Contact is form-only. Footer renders the alternate contact destinations as accessible icon-only links sourced from
  `src/data/contact.js`:
  - Email: `ninopaul.cabiles@gmail.com`
  - WhatsApp: `https://wa.me/qr/ON77VWUSLF3MF1`
  - LinkedIn: `https://www.linkedin.com/in/nino-paul-cabiles`
- The inquiry form has client/server validation and a honeypot, but no delivery provider. It must continue to report
  `NOT_CONFIGURED`; never fake success.
- The current global title, description, and gated schema remain Web Development-oriented; broadening them is a
  future SEO/launch task, not an architecture-housekeeping change.
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

None of this list includes the portfolio-first content pass (`8a4345e`), the site restructure (`09fcb44`, `10ef7d2`),
or the SetSail redesign (`5d67e0a`) — see **Repository State** and **Current Branch Architecture** above for what
exists beyond production and where it lives.

## Asset State

- Three new SetSail screenshots are committed and referenced in `src/data/setsail.js`: `(2).png`, `(3).png`, and
  `(11).png` (committed in `5d67e0a`).
- The other 11 SetSail screenshots generated during the redesign were unused (not referenced anywhere in code) and
  have been deleted from the working tree.
- `qa/` holds local QA screenshots only, is not part of any deliverable, and is gitignored — it will not appear in
  `git status` and should not be staged.

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
- Commercial content: add Web Development and Website Maintenance pricing only when real prices are approved.
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
