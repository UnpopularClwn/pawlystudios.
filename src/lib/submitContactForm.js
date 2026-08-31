'use server'

import { contactFieldLimits, projectTypes } from '../data/contact.js'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Server-side submission boundary for the contact form. The client never
// talks to a delivery provider directly — it calls this Server Action, which
// is the only place a future provider's credentials would ever live (as
// server-only env vars, never exposed to the client bundle).
//
// NEEDS YOUR INPUT: no delivery provider is configured yet. Pick one
// (Formspree, a transactional email API, a serverless webhook, etc.),
// provide its server-side credentials as env vars, and wire the send call
// in below the validation block. Until then this intentionally reports
// failure rather than faking success.
export async function submitContactForm(payload) {
  const data = payload && typeof payload === 'object' && !Array.isArray(payload) ? payload : {}
  const { name, email, company, projectType, details, hp_field: honeypot = '' } = data

  if (typeof honeypot !== 'string' || honeypot.length > contactFieldLimits.honeypot) {
    return { ok: false, code: 'VALIDATION_ERROR', errors: { form: 'Invalid submission.' } }
  }

  // Silently succeed for bots that fill the honeypot — never reveal the trap.
  if (honeypot.trim()) {
    return { ok: true }
  }

  const errors = {}
  if (typeof name !== 'string' || !name.trim()) errors.name = 'Name is required.'
  else if (name.length > contactFieldLimits.name) errors.name = `Name must be ${contactFieldLimits.name} characters or fewer.`

  if (typeof email !== 'string' || !email.trim()) errors.email = 'Email is required.'
  else if (!EMAIL_PATTERN.test(email)) errors.email = 'Enter a valid email address.'
  else if (email.length > contactFieldLimits.email) {
    errors.email = `Email must be ${contactFieldLimits.email} characters or fewer.`
  }

  if (typeof company !== 'undefined' && typeof company !== 'string') errors.company = 'Enter a valid company name.'
  else if (company?.length > contactFieldLimits.company) {
    errors.company = `Company must be ${contactFieldLimits.company} characters or fewer.`
  }

  if (typeof projectType !== 'string' || !projectTypes.includes(projectType)) {
    errors.projectType = 'Select what you’re looking to build.'
  }

  if (typeof details !== 'string' || !details.trim()) errors.details = 'Tell me a little about the project.'
  else if (details.length > contactFieldLimits.details) {
    errors.details = `Project details must be ${contactFieldLimits.details} characters or fewer.`
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, code: 'VALIDATION_ERROR', errors }
  }

  // No delivery provider configured — do not fabricate a success response.
  // ponytail: rate limiting belongs at the real provider boundary, add it when delivery is configured.
  return { ok: false, code: 'NOT_CONFIGURED' }
}
