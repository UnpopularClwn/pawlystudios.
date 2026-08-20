import test from 'node:test'
import assert from 'node:assert/strict'
import { getProfileCardTilt } from './profileCardTilt.js'

test('profile card tilt stays centered and capped at two degrees', () => {
  assert.deepEqual(getProfileCardTilt(0.5, 0.5), { rotateX: 0, rotateY: 0 })
  assert.deepEqual(getProfileCardTilt(0, 0), { rotateX: 2, rotateY: -2 })
  assert.deepEqual(getProfileCardTilt(1, 1), { rotateX: -2, rotateY: 2 })
})
