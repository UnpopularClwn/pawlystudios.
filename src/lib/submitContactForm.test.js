import test from 'node:test'
import assert from 'node:assert/strict'
import { submitContactForm } from './submitContactForm.js'
import { projectTypes } from '../data/contact.js'

const validPayload = {
  name: 'Paul',
  email: 'paul@example.com',
  company: '',
  projectType: 'Web Development',
  details: 'A website inquiry.',
  hp_field: '',
}

test('contact submissions fail safely until delivery is configured', async () => {
  assert.equal((await submitContactForm(validPayload)).code, 'NOT_CONFIGURED')
  assert.deepEqual(projectTypes, ['Web Development', 'AI Ad Creative', 'Website Maintenance', 'Other / Not Sure Yet'])
  for (const projectType of projectTypes) {
    assert.equal((await submitContactForm({ ...validPayload, projectType })).code, 'NOT_CONFIGURED')
  }
  assert.equal((await submitContactForm({ ...validPayload, name: 42 })).code, 'VALIDATION_ERROR')
  assert.equal((await submitContactForm({ ...validPayload, projectType: 'Anything' })).code, 'VALIDATION_ERROR')
  assert.equal((await submitContactForm({ ...validPayload, name: 'x'.repeat(101) })).code, 'VALIDATION_ERROR')
  assert.equal((await submitContactForm({ ...validPayload, email: '' })).errors.email, 'Email is required.')
  assert.equal((await submitContactForm({ ...validPayload, hp_field: {} })).code, 'VALIDATION_ERROR')
  assert.deepEqual(await submitContactForm({ ...validPayload, hp_field: 'filled' }), { ok: true })
})
