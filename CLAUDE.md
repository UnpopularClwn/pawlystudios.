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
current branch (`portfolio-first-restructure`) is **8 commits ahead of `main`, 0 behind**, and all eight are
committed but unmerged — none of them are on production yet, and nothing has been pushed or deployed:

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
5. **COMMITTED BUT UNMERGED — docs checkpoint** — `3906e07` (docs: update repository state after portfolio
   restructure). Documentation-only, no application code.
6. **COMMITTED BUT UNMERGED — web-only public scope** — `baa2a19` (refactor: narrow public portfolio to web
   development). Removes AI Ad Creative from public navigation, the homepage Selected Work and What I Do sections,
   Contact project types, public SEO/social-preview copy, and the launch-gated JSON-LD schema. Does not delete the AI
   Ad Creative implementation. See **Public Launch Scope** below.
7. **COMMITTED BUT UNMERGED — Next.js security patch** — `a96da75` (chore: patch Next.js security vulnerability).
   `next` `16.3.1` → `16.3.3`, resolving a critical unauthenticated-RCE advisory. `react`/`react-dom` unchanged. See
   **Next.js Security State** below.
8. **COMMITTED BUT UNMERGED — pre-launch checkpoint (this housekeeping pause)** — `a274a76` (docs: save pre-launch
   project checkpoint), the prior documentation-only checkpoint commit, plus this current housekeeping pass.
   Documentation-only, no application code.

None of layers 2–8 are shipped, approved for production, merged, or deployed. Do not merge, push, or deploy
`portfolio-first-restructure` until this work has its own explicit review/approval.

## Current Branch Architecture (committed, unmerged — `portfolio-first-restructure`)

This is the current state on the branch's first 7 commits (layer 8 is documentation-only), not on production. Do not
describe it as live until merged.

- **Navigation**: Web, About, Contact, Start a Project (flat links, no Services dropdown, no AI Creative link).
- **Homepage**: Hero → Selected Work (SetSail only) → What I Do (Web Development only) → About Preview → Final CTA →
  Footer.
- **Web Development** (`/services/web-development`): Hero → SetSail case study → What I Build / Services → Process →
  Maintenance → Tools → CTA.
- **AI Ad Creative** (`/services/ai-ad-creative`): Hero → Selected Creative → remaining strategy/methodology content →
  CTA. Implementation intact; parked with no public navigation path. See **Public Launch Scope** below.
- **About** (`/about`): unchanged from the production About implementation, aside from the metadata description no
  longer mentioning AI ad creative work.
- **Contact** (`/contact`): unchanged aside from the project-type options (AI Ad Creative removed).
- **`/work`**: absent / intentionally 404.
- **SetSail**: the redesigned case study (cover/experience/build sections) is committed in `5d67e0a`, not on
  production.

## Public Launch Scope

The upcoming public launch is narrowed to **Web Development only**. AI Ad Creative is intentionally parked, not
deleted:

- Public navigation (header `SiteNavigation.jsx`, footer `FooterNav.jsx`), the homepage Selected Work and What I Do
  sections, and the Contact project-type options no longer reference or link to AI Ad Creative.
- The `/services/ai-ad-creative` route, its page, all of its section components (`AiAdCreativeHero`,
  `SelectedCreative`, `CreativeTypes`, `CreativePipeline`, `AudienceSection`, `WorkingTogether`, `AiAdCreativeCta`),
  and its data (`src/data/ai-ad-creative.js`, including the YouTube spec-creative embed and thumbnail fields) remain
  fully intact and unchanged. The route is not redirected and has no "Coming Soon" placeholder — it is a parked draft
  reachable only by direct URL.
- `next.config.js`'s `images.remotePatterns` entry for `i.ytimg.com` was removed: it existed only to let `next/image`
  optimize the AI Ad Creative thumbnail on the homepage card, and that card no longer renders. The AI page's own
  `SelectedCreative` component embeds the YouTube player directly via `embedUrl` (an iframe), not `next/image`, so
  nothing in the current runtime needs that remote pattern. If AI Ad Creative content is ever restored to a page that
  renders `thumbnailUrl` through `next/image`, re-add this remote pattern.
- Restoring AI Ad Creative to the public site later should not require rebuilding the feature — it means re-adding
  the nav links, the homepage cards, and the Contact project-type option, and (if needed) the `next.config.js` remote
  pattern.
- `src/lib/schema.js` still models `AI Ad Creative` as a `Service` inside the JSON-LD `@graph`, but the whole graph is
  gated off by `SITE_IS_LAUNCHED` (currently `false`) and was intentionally left unchanged here — it isn't live and
  its launch-time scope is a separate decision from this parking change.

## Page Architecture (production, `main`)

Homepage: Brand Hero → Primary Services → Featured Work (SetSail) → About Preview → Final CTA → Footer.

Detailed Web Development and AI Ad Creative content lives on their approved `/services/web-development` and
`/services/ai-ad-creative` routes. The Web Development route also contains the full SetSail showcase. About and
Contact live at `/about` and `/contact`. Shared navigation is a Services disclosure (Web Development, AI Ad Creative)
alongside About, Contact, and Start a Project.

The branch work in its current state (see **Current Branch Architecture** above) changes this to: Hero → Selected
Work (SetSail only) → What I Do (Web Development only) → About Preview → Final CTA → Footer, with flat
Web/About/Contact navigation links and no AI Ad Creative exposure. That layout is not live and is not the source of
truth until it is merged into `main` and approved.

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
the SetSail redesign (`5d67e0a`), the web-only public scope narrowing (`baa2a19`), or the Next.js security patch
(`a96da75`) — see **Repository State** and **Current Branch Architecture** above for what exists beyond production
and where it lives.

## Asset State

- Three new SetSail screenshots are committed and referenced in `src/data/setsail.js`: `(2).png`, `(3).png`, and
  `(11).png` (committed in `5d67e0a`).
- The other 11 SetSail screenshots generated during the redesign were unused (not referenced anywhere in code) and
  have been deleted from the working tree.
- `qa/` holds local QA screenshots only, is not part of any deliverable, and is gitignored — it will not appear in
  `git status` and should not be staged.
- The AI Ad Creative thumbnail asset (`thumbnailUrl`/`thumbnailAlt` in `src/data/ai-ad-creative.js`, hosted at
  `i.ytimg.com`) is preserved as data but is no longer rendered anywhere in the current runtime; see **Public Launch
  Scope** above for why its `next.config.js` remote-image pattern was removed.

## Next.js Security State

- Runtime versions: `next@16.3.3`, `react@19.2.8`, `react-dom@19.2.8` (committed in `a96da75`).
- The critical Next.js unauthenticated-RCE advisories (`GHSA-p293-qw3h-jr36`, `GHSA-2xp9-vwfh-vxw4`), which affected
  `next` `16.0.0–16.3.2`, are resolved by this patch.
- Remaining `npm audit --omit=dev` findings, both transitive through `next` itself (not direct dependencies):
  - `sharp <0.35.4` — HIGH (libheif vulnerabilities).
  - `baseline-browser-mapping >=2.0.0 <2.11.0` — MODERATE (DoS).
  Do not manually pin/override either without a separate, reviewed dependency task — they follow whatever versions
  `next` itself declares.

## Vercel / Environment State

- Vercel project: `pawlystudios`. Production URL for the initial launch: `https://pawlystudios.vercel.app` (custom
  domain intentionally deferred).
- Configured Vercel environment variable: `NEXT_PUBLIC_SITE_URL=https://pawlystudios.vercel.app`, scoped
  **Production only**. Preview and Development are intentionally left unset (a preview deployment's own unique URL
  would be wrong if it inherited the production origin for `metadataBase`/canonical).
- Setting this variable has **not** triggered a new deployment — it only takes effect on the next Production build.
- No other environment variables are configured yet: `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`,
  `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` are all absent from every Vercel environment. See **Contact
  Form State** below.
- `SITE_IS_LAUNCHED` remains `false`. Nothing from `portfolio-first-restructure` has been pushed or deployed.

## Contact Form State

- Flow: `InquiryForm.jsx` (client) → `submitContactForm.js` (`'use server'` Server Action) → server validation +
  honeypot → optional rate limiting → `contactSubmission.js`'s `processContactForm` → Resend delivery.
- Project types: `Web Development`, `Website Maintenance`, `Other / Not Sure Yet` (AI Ad Creative removed, see
  **Public Launch Scope**).
- **Required** for real delivery (currently unset — see **Vercel / Environment State**): `RESEND_API_KEY`,
  `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`. Missing any one of these makes `getDelivery()` return `null`, and
  `processContactForm` returns `NOT_CONFIGURED` — the honest, non-fake-success state currently shown to visitors.
- **Optional**, safe to defer: `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN` (sliding-window rate limit, 5
  requests/10 minutes, IP-hash keyed). Absent config skips rate limiting entirely; a runtime failure fails open
  (still delivers, logs a warning). Neither absence nor failure blocks or misleads a legitimate visitor.
- Never fake successful delivery. Do not configure credentials without an approved provider and real server-side
  values — do not store real credentials in this file or any repository documentation.

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
- `NEXT_PUBLIC_SITE_URL` is now configured in Vercel (Production only — see **Vercel / Environment State**), but no
  new Production deployment has run yet, so `metadataBase`/canonical are not active in the live site today. No
  delivery environment variables are configured. Sitemap and JSON-LD publication remain unset. The page emits
  `noindex, nofollow` and schema remains unpublished.

## Resume Rules

- Do not fabricate contact details, client identities, business claims, metrics, testimonials, or domains.
- Do not configure inquiry delivery without an approved provider and real server-side credentials.
- Do not enable indexing until the production domain, metadata, launch QA, and explicit approval are complete.
- Preserve the approved architecture and data-driven content organization. Do not broadly refactor because a
  different implementation style is preferred.
- The client owns the finished website. Ongoing support is optional.
- Update `docs/implementation-status.md` after future implementation sessions.

**Do not, without explicit approval:**
- Restore AI Ad Creative to public launch scope, or expose it in nav/homepage/contact/schema — the parked
  implementation stays in code (see **Public Launch Scope**), not deleted.
- Restore `/work` (intentionally absent / 404).
- Redesign the approved About page.
- Modify SetSail unless a genuine bug is found.
- Flip `SITE_IS_LAUNCHED` or otherwise enable indexing.
- Push directly to `main` — pushes to `main` trigger a Vercel production deployment.
- Add pricing content (none is approved yet).

## Remaining Launch Order

Initial launch uses `https://pawlystudios.vercel.app` — a custom domain is intentionally deferred, not required for
launch.

1. Configure Resend contact delivery (`RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`, Production only).
2. Test a real contact submission end to end.
3. Add a sitemap.
4. Attach `/social-preview` to Open Graph/Twitter metadata.
5. Review final launch configuration.
6. Set `SITE_IS_LAUNCHED` to `true` (only after explicit approval).
7. Run final test/lint/build/security audit.
8. Final desktop/tablet/mobile smoke test.
9. Merge/push/deploy (only after explicit approval — pushes to `main` trigger a Vercel production deployment).
10. Verify the actual Vercel production deployment.
11. Verify canonical, robots, schema, social metadata, and contact delivery in production.

Deferred, not required for this launch: custom domain, Upstash rate limiting (safe to add later), final commercial
pricing, HSTS/CSP hardening beyond the current baseline, SetSail `SoftwareApplication` schema.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
