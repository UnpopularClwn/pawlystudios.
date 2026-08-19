import test from 'node:test'
import assert from 'node:assert/strict'
import { submitContactForm } from './submitContactForm.js'

const validPayload = {
  name: 'Paul',
  email: 'paul@example.com',
  company: '',
  projectType: 'Business Website',
  details: 'A website inquiry.',
  hp_field: '',
}

test('contact submissions fail safely until delivery is configured', async () => {
  assert.equal((await submitContactForm(validPayload)).code, 'NOT_CONFIGURED')
  assert.equal((await submitContactForm({ ...validPayload, name: 42 })).code, 'VALIDATION_ERROR')
  assert.equal((await submitContactForm({ ...validPayload, projectType: 'Anything' })).code, 'VALIDATION_ERROR')
  assert.equal((await submitContactForm({ ...validPayload, name: 'x'.repeat(101) })).code, 'VALIDATION_ERROR')
  assert.equal((await submitContactForm({ ...validPayload, hp_field: {} })).code, 'VALIDATION_ERROR')
  assert.deepEqual(await submitContactForm({ ...validPayload, hp_field: 'filled' }), { ok: true })
})
