'use server'

import { createHash } from 'node:crypto'
import { headers } from 'next/headers'
import { Resend } from 'resend'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import { processContactForm } from './contactSubmission.js'

let resend
let rateLimiter

function getDelivery() {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.CONTACT_FROM_EMAIL
  const to = process.env.CONTACT_TO_EMAIL
  if (!apiKey || !from || !to) return null

  resend ??= new Resend(apiKey)
  return {
    deliveryConfig: { from, to },
    sendEmail: async (message) => {
      const { data, error } = await resend.emails.send(message)
      return !error && Boolean(data?.id)
    },
  }
}

async function getRateLimitCheck() {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return undefined

  const requestHeaders = await headers()
  const ip = requestHeaders.get('x-vercel-forwarded-for') || requestHeaders.get('x-forwarded-for')
  if (!ip) return undefined

  rateLimiter ??= new Ratelimit({
    redis: new Redis({ url, token }),
    limiter: Ratelimit.slidingWindow(5, '10 m'),
    prefix: 'pawlystudios:contact',
    analytics: false,
  })
  const identifier = createHash('sha256').update(ip.split(',')[0].trim()).digest('hex')
  return async () => (await rateLimiter.limit(identifier)).success
}

export async function submitContactForm(payload) {
  const delivery = getDelivery()
  return processContactForm(payload, {
    ...delivery,
    rateLimit: delivery ? await getRateLimitCheck() : undefined,
  })
}
