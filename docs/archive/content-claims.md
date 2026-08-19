# Content Claims Verification

Every numeric or outcome-based claim on the site, checked against available evidence before
publishing. As of Session 2.3, the real resume document (`assets/AI-Forward Executive
Assistant.docx`, found in the project's assets during this session) is available as a verification
source and is cited below wherever it confirms a claim. Claims with no supporting record anywhere
are marked "Pending" and were softened in the public copy.

| Claim | Source | Verified | Public Wording Used |
|---|---|---|---|
| Five years working remotely with US businesses | Content Brief v2, About section | Self-attested (resume shows Peak Support 2021–2024 plus two 2025 roles, consistent with a multi-year remote history) | Used as written |
| 120+ customer interactions a day | Resume, "Associate, Phone, Chat, and Email Support," Peak Support | **Verified** — resume states "Managed 120+ daily customer interactions across phone, chat, and email" | Used as written |
| Three years in customer support | Resume, Peak Support dates (2021–2024) | **Verified** — matches the resume's listed employment dates | Used as written |
| Social media run for 30+ clients / 30 to 40 clients | Resume, Senior EA role | **Verified** — resume states "Built the social media service workflow from scratch for 30 to 40 clients" | Used as written |
| Automated a process from 3 hours a day down to 20 minutes | Resume, Senior EA role | **Verified** — resume states "Built a GHL automation... Cut a daily manual process from 3 hours to 20 minutes" | Restored to the brief's exact wording on the homepage Proof section (previously softened pending verification) |
| Set Sail replaced Monday.com | Resume, Projects section | **Verified** — resume describes building Set Sail "to replace Monday.com after clients reported difficulty navigating the platform" | Used as written |
| Set Sail is live | No source confirms current production status. The resume describes what was built, not its live/testing status today. No screenshots or deployment confirmation exist in the project. | **Pending** | Published as "live and in testing," the last confirmed-safe status. Not upgraded to a flat "live" claim without new evidence. |
| 400+ hours flying the A320NEO on the sim | Content Brief v2, About section | Self-attested (personal hobby detail, not resume material) | Used as written |
| Working US hours | Content Brief v2 + resume (roles support US-based teams) | Self-attested | Used as written |
| Working with roofing and home service companies in Tampa, FL | Content Brief v2, Hero section | Self-attested (current client base, not on resume) | Used as written |
| Real email address | Resume header: ninopaul.cabiles@gmail.com | **Verified** | Added to `src/data/contact.js`, used for the contact form's fallback mailto and footer/contact links |
| Real phone number | Resume header: +63 906 055 8493 | **Verified** | Used as the WhatsApp link basis (`https://wa.me/639060558493`) — **WhatsApp-enabled status itself is not confirmed**, see Needs Your Input |

## Adjustments Made (Session 2.3)

1. **Homepage Proof section** — the "3 hours a day down to 20 minutes" claim is now confirmed by
   the resume and restored to the brief's exact wording.
2. **Contact info** — real email and phone number found in `assets/AI-Forward Executive
   Assistant.docx` were added to `src/data/contact.js`, resolving a Needs Your Input item open
   since Session 1.1. The WhatsApp link assumes the same phone number accepts WhatsApp messages;
   this specific assumption is not verified and should be confirmed before relying on it publicly.
3. **Set Sail's live status** remains unchanged at "live and in testing" — the resume describes the
   build itself, not its current deployment state, so no evidence exists to upgrade this claim.

## Resume File Format

The only resume file in the project is a `.docx`, not a PDF. No PDF conversion tool (LibreOffice,
pandoc) is installed, and converting it via headless Chrome print-to-PDF produces a document with
browser-injected timestamp/URL header and footer text that cannot be cleanly suppressed — not
something to publish to prospects. Rather than ship a flawed auto-converted file, `resumeUrl` stays
`null` and the Resume page shows an honest "coming soon" state. See `docs/implementation-status.md`
Needs Your Input for the one remaining step (export a clean PDF and drop it in
`public/documents/`).
