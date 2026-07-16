# Content Voice

As of Session 2.2, `docs/Content Brief v2` is the primary source for all public-facing website
copy. `docs/Content Brief` (v1) is superseded — kept for history only. When the two conflict, v2
wins. When the original HTML mockup conflicts with either brief, the brief wins.

## Voice

Paul talking directly to a home service business owner. Short. Direct. First person. Specific.
Conversational. Confident. Slightly blunt where useful. Fragments are fine when they hit harder.

Test: read the sentence out loud. If it sounds like a brochure, an agency website, a LinkedIn post,
a SaaS landing page, or AI-generated sales copy, rewrite it.

## Never Use

Em dashes. Semicolons. Colons in body copy. Emojis. Corporate or consultant language. Inspirational
or startup language. Empty marketing claims, fake urgency, fake outcomes, invented proof,
unverified metrics presented as fact.

Banned words/phrases: "I am passionate about," "results-driven," "streamline," "tailored
solutions," "drive growth," "scale your business," "transform your business," "elevate your
brand," "modern solutions," "meaningful impact," "end-to-end," "seamless," "robust," "leverage,"
"synergy," "AI-forward" (this term appeared in Session 1.1's own copy and has been removed —
replaced with the concrete "uses Claude and ChatGPT for real client work").

## Positioning Guardrails

Paul is selling project work to roofing and home service business owners, not applying for a job.
Never call him a Virtual Assistant. Never frame the site as a full-time employment pitch, a large
agency, a software developer portfolio, or an AI consulting shop. AI supports the story. It is
never the headline.

## Claim Discipline

Every numeric or outcome claim is checked against `docs/content-claims.md` before publishing. If a
claim has no supporting record, the public wording is softened to describe the same kind of work
without stating an unverified number as fact, and the gap is logged under Needs Your Input.

## Session 2.2 Changes

- Replaced hero, problem section, how-it-works, proof, about, and final CTA copy on the homepage
  with the exact language from Content Brief v2.
- Reordered the homepage to: Hero → Credibility → Problem → How It Works → Proof → Featured Work →
  About → Trusted Partner → Final CTA → Footer, matching the brief exactly. Previously Featured
  Work appeared before the Problem section, and "Proof" and "Featured Work" were combined into one
  section — both fixed.
- Removed the `HowIHelp` and `ProcessSteps` card-grid components. The brief's "How It Works" copy
  reads as four short paragraphs, not three or four generic process cards, so it now renders as a
  simple editorial text block (see `src/components/home/HowItWorks.jsx`).
- Simplified `CaseStudySection` by removing the invented "Business Outcome" and "What I Learned"
  fields that were not part of either content brief. The brief's project descriptions are single
  dense paragraphs plus a short "what I did" list, not a four-box grid — the component now matches
  that shape.
- Removed the homepage hero status pill ("TAKING NEW PROJECTS") and the secondary hero CTA. The
  brief calls for one primary CTA and no extra paragraphs in the hero.
- Rewrote the Good Fit / Not a Fit qualification list and the credibility strip in the same blunt,
  fragment-friendly voice as the rest of the site.
- Removed the raw `[your number]` placeholder text from the Contact page. Since no real phone or
  WhatsApp number exists yet, the "if you would rather just text" line was dropped entirely rather
  than showing a fake number. LinkedIn, Resume, and a WhatsApp "coming soon" placeholder remain.
