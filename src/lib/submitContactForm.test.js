import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { projectTypes } from '../data/contact.js'
import { processContactForm } from './contactSubmission.js'

const validPayload = {
  name: 'Paul',
  email: 'paul@example.com',
  company: 'pawlystudios.',
  projectType: 'Web Development',
  details: 'A website inquiry.',
  hp_field: '',
}
const deliveryConfig = { from: 'inquiries@configured.example', to: 'paul@configured.example' }
const allow = async () => true
const send = async () => true

test('contact validation covers approved project types and field boundaries', async () => {
  assert.deepEqual(projectTypes, ['Web Development', 'AI Ad Creative', 'Website Maintenance', 'Other / Not Sure Yet'])
  for (const projectType of projectTypes) {
    assert.equal((await processContactForm({ ...validPayload, projectType }, { deliveryConfig, sendEmail: send })).code, 'SUCCESS')
  }
  assert.equal((await processContactForm({ ...validPayload, projectType: 'Anything' })).code, 'VALIDATION_ERROR')
  assert.equal((await processContactForm({ ...validPayload, name: 'x'.repeat(101) })).code, 'VALIDATION_ERROR')
  assert.equal((await processContactForm({ ...validPayload, email: `${'x'.repeat(243)}@example.com` })).code, 'VALIDATION_ERROR')
  assert.equal((await processContactForm({ ...validPayload, company: 'x'.repeat(151) })).code, 'VALIDATION_ERROR')
  assert.equal((await processContactForm({ ...validPayload, email: '' })).errors.email, 'Email is required.')
  assert.equal((await processContactForm({ ...validPayload, details: 'x'.repeat(5001) })).code, 'VALIDATION_ERROR')
  assert.equal((await processContactForm({ ...validPayload, hp_field: 'x'.repeat(201) })).code, 'VALIDATION_ERROR')
  assert.equal((await processContactForm({ ...validPayload, hp_field: {} })).code, 'VALIDATION_ERROR')
})

test('honeypot silently succeeds without rate limiting or delivery', async () => {
  let calls = 0
  const track = async () => {
    calls += 1
    return true
  }
  assert.deepEqual(
    await processContactForm({ ...validPayload, hp_field: 'filled' }, { deliveryConfig, rateLimit: track, sendEmail: track }),
    { ok: true, code: 'SUCCESS' },
  )
  assert.equal(calls, 0)
})

test('missing delivery configuration fails safely', async () => {
  assert.deepEqual(await processContactForm(validPayload), { ok: false, code: 'NOT_CONFIGURED' })
})

test('Resend message uses configured addresses and validated reply-to', async () => {
  let message
  const result = await processContactForm(validPayload, {
    deliveryConfig,
    rateLimit: allow,
    sendEmail: async (value) => {
      message = value
      return true
    },
  })
  assert.deepEqual(result, { ok: true, code: 'SUCCESS' })
  assert.equal(message.from, deliveryConfig.from)
  assert.deepEqual(message.to, [deliveryConfig.to])
  assert.equal(message.replyTo, validPayload.email)
  assert.equal(message.subject, 'New pawlystudios. inquiry — Web Development')
  assert.match(message.text, /Company \/ Business: pawlystudios\./)
  assert.match(message.text, /Project Details:\nA website inquiry\./)
  assert.equal('html' in message, false)
})

test('provider failure returns a safe delivery error', async () => {
  assert.deepEqual(
    await processContactForm(validPayload, { deliveryConfig, sendEmail: async () => false }),
    { ok: false, code: 'DELIVERY_ERROR' },
  )

  const logged = []
  const originalError = console.error
  console.error = (...args) => logged.push(args)
  try {
    assert.deepEqual(
      await processContactForm(validPayload, {
        deliveryConfig,
        sendEmail: async () => {
          throw new Error('Provider details must stay private')
        },
      }),
      { ok: false, code: 'DELIVERY_ERROR' },
    )
  } finally {
    console.error = originalError
  }
  assert.deepEqual(logged, [['Contact delivery failed.']])
})

test('rate limiting allows, rejects, and gracefully degrades on infrastructure failure', async () => {
  let delivered = 0
  const trackedSend = async () => {
    delivered += 1
    return true
  }
  assert.equal(
    (await processContactForm(validPayload, { deliveryConfig, rateLimit: allow, sendEmail: trackedSend })).code,
    'SUCCESS',
  )
  assert.equal(
    (await processContactForm(validPayload, { deliveryConfig, rateLimit: async () => false, sendEmail: trackedSend })).code,
    'RATE_LIMITED',
  )

  const logged = []
  const originalWarn = console.warn
  console.warn = (...args) => logged.push(args)
  try {
    assert.equal(
      (
        await processContactForm(validPayload, {
          deliveryConfig,
          rateLimit: async () => {
            throw new Error('Redis unavailable')
          },
          sendEmail: trackedSend,
        })
      ).code,
      'SUCCESS',
    )
  } finally {
    console.warn = originalWarn
  }
  assert.equal(delivered, 2)
  assert.deepEqual(logged, [['Contact rate-limit check failed; continuing without rate limiting.']])
})

test('provider and Redis credentials stay behind the Server Action boundary', () => {
  const source = readFileSync(new URL('./submitContactForm.js', import.meta.url), 'utf8')
  assert.match(source, /^'use server'/)
  assert.match(source, /process\.env\.RESEND_API_KEY/)
  assert.doesNotMatch(source, /NEXT_PUBLIC_(?:RESEND|CONTACT|UPSTASH)/)

  const clientSource = readFileSync(new URL('../components/contact/InquiryForm.jsx', import.meta.url), 'utf8')
  assert.match(clientSource, /result\.code === 'RATE_LIMITED'/)
  assert.match(clientSource, /Too many attempts\. Please wait a few minutes and try again\./)
})
