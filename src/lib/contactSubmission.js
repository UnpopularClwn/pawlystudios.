import { contactFieldLimits, projectTypes } from '../data/contact.js'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(payload) {
  const data = payload && typeof payload === 'object' && !Array.isArray(payload) ? payload : {}
  const { name, email, company, projectType, details, hp_field: honeypot = '' } = data

  if (typeof honeypot !== 'string' || honeypot.length > contactFieldLimits.honeypot) {
    return { errors: { form: 'Invalid submission.' } }
  }

  if (honeypot.trim()) return { bot: true }

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
    errors.projectType = 'Select a project type.'
  }

  if (typeof details !== 'string' || !details.trim()) errors.details = 'Tell me a little about the project.'
  else if (details.length > contactFieldLimits.details) {
    errors.details = `Project details must be ${contactFieldLimits.details} characters or fewer.`
  }

  if (Object.keys(errors).length > 0) return { errors }

  return {
    fields: {
      name: name.trim(),
      email: email.trim(),
      company: company?.trim() || '',
      projectType,
      details: details.trim(),
    },
  }
}

export function buildContactEmail(fields, { from, to }) {
  return {
    from,
    to: [to],
    replyTo: fields.email,
    subject: `New pawlystudios. inquiry — ${fields.projectType}`,
    text: [
      'New inquiry received through pawlystudios.',
      '',
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      ...(fields.company ? [`Company / Business: ${fields.company}`] : []),
      `Project Type: ${fields.projectType}`,
      '',
      'Project Details:',
      fields.details,
    ].join('\n'),
  }
}

export async function processContactForm(payload, { deliveryConfig, rateLimit, sendEmail } = {}) {
  const result = validate(payload)

  // Silently succeed for bots that fill the honeypot — never reveal the trap or spend provider quota.
  if (result.bot) return { ok: true, code: 'SUCCESS' }
  if (result.errors) return { ok: false, code: 'VALIDATION_ERROR', errors: result.errors }
  if (!deliveryConfig || typeof sendEmail !== 'function') return { ok: false, code: 'NOT_CONFIGURED' }

  if (rateLimit) {
    try {
      if (!(await rateLimit())) return { ok: false, code: 'RATE_LIMITED' }
    } catch {
      // ponytail: fail open for this low-risk form; move to fail closed if abuse cost becomes material.
      console.warn('Contact rate-limit check failed; continuing without rate limiting.')
    }
  }

  try {
    const accepted = await sendEmail(buildContactEmail(result.fields, deliveryConfig))
    if (!accepted) return { ok: false, code: 'DELIVERY_ERROR' }
    return { ok: true, code: 'SUCCESS' }
  } catch {
    console.error('Contact delivery failed.')
    return { ok: false, code: 'DELIVERY_ERROR' }
  }
}
