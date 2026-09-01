# Product

## Register

`pawlystudios.` — the portfolio brand for Paul Cabiles.

## Users

Business owners and teams considering web development or AI-generated advertising creative. They need quick proof
that Paul is credible, practical, and capable of handling the work directly.

## Product Purpose

Confirm Paul's credibility, show real work, introduce the two primary services, and make it easy to start a direct
conversation without presenting Paul as a larger agency.

## Brand Personality

Direct, capable, and personal. The experience should feel calm, specific, and human.

## Anti-references

Generic agency templates, corporate consultant copy, AI-influencer language, fake proof, stock-photo portfolios, intrusive popups, and overbuilt interactions that hide the work or slow the page down.

## Design Principles

- Show real work and real assets.
- Put the visitor's problem before the solution.
- Keep Paul's voice short, direct, and specific.
- Use interaction to support credibility, never to obscure it.
- Keep the contact path honest and easy to find.

## Accessibility & Inclusion

Preserve semantic HTML, keyboard access, visible focus, readable contrast, responsive layouts, and useful reduced-motion alternatives. Meaningful content must remain available without animation, WebGL, or client-side JavaScript.

## Approved Page Architecture

1. Brand Hero
2. Primary Services: Web Development and AI Ad Creative
3. Featured Work
4. About Preview
5. Final CTA
6. Footer

Approved routes are `/`, `/services/web-development`, `/services/ai-ad-creative`, `/about`, and `/contact`.
The shared navigation is a Services disclosure for the two service routes, About, Contact, and Start a Project.

Detailed Web Development content lives at `/services/web-development`. AI Ad Creative content lives at
`/services/ai-ad-creative`. The full SetSail showcase lives with the Web Development service, and the homepage Featured
Work links directly to `/services/web-development#work`; the full About experience lives at `/about`; the inquiry form
lives at `/contact`. Footer contains accessible icon links for Email, WhatsApp, and LinkedIn.

## Approved Contact Details

- Email: `ninopaul.cabiles@gmail.com`
- WhatsApp: `https://wa.me/qr/ON77VWUSLF3MF1`
- LinkedIn: `https://www.linkedin.com/in/nino-paul-cabiles`

## Current Delivery and Launch State

Inquiry delivery is not configured and must continue to fail safely with `NOT_CONFIGURED`. `SITE_IS_LAUNCHED` remains
`false`; indexing and final launch work are intentionally pending. All useful launch-readiness work not dependent on
the custom domain or inquiry provider has passed implementation and production-style browser QA.

The approved `main` branch is connected from `https://github.com/UnpopularClwn/pawlystudios..git` to the Vercel
project `pawlystudios`. The pre-launch production deployment is available at `https://pawlystudios.vercel.app`; this
is not a final custom domain. Hosted desktop, tablet, mobile, interaction, form, asset, console, and security-header QA
passed. The Lighthouse baseline is Performance 96, Accessibility 100, Best Practices 96, SEO 66 (expected while
noindex is active), LCP 2.7 seconds, CLS 0, and TBT 90 milliseconds.

The current pre-launch global title, description, and gated schema remain Web Development-oriented. Broadening them
for the studio architecture is deliberately deferred to the future SEO/launch phase. Person, WebSite, and Service
schema must not render until the production URL exists and launch is approved. SetSail SoftwareApplication schema
remains a separate launch decision.

A branded 1200 × 630 preview is generated at `/social-preview` from the approved logo and Pine/Lime identity. It stays
detached from Open Graph and Twitter metadata until a custom domain exists, preventing Next.js from publishing a
fabricated absolute image URL. Web Development and Website Maintenance pricing are intentionally not published while
the commercial offer remains pending.

Current security preparation keeps the existing nosniff, strict-origin referrer, and frame-denial headers; adds a
conservative camera, microphone, and geolocation Permissions Policy; and disables the Next.js signature. HSTS and CSP
remain pending production-host review.

Still pending: a custom domain; `metadataBase`; absolute canonical and JSON-LD IDs; sitemap and final schema
publication; attaching `/social-preview` to absolute Open Graph/Twitter metadata; approved production prices; the
SetSail SoftwareApplication schema decision; inquiry provider, server-only credentials, delivery call, rate limiting,
and retention/spam policy; final-domain HSTS verification; CSP review; final-domain Lighthouse and domain/provider
QA; launch approval; switching `SITE_IS_LAUNCHED` to `true`; and enabling indexing.
