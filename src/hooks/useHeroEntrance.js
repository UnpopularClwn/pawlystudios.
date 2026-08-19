'use client'

import { useEffect, useRef } from 'react'
import { gsap, prefersReducedMotion } from '../lib/motion.js'
import { SplitText } from 'gsap/SplitText'

let splitTextRegistered = false
function registerSplitText() {
  if (splitTextRegistered) return
  gsap.registerPlugin(SplitText)
  splitTextRegistered = true
}

// One-time page-load entrance for the hero: panel, eyebrow, heading (split by
// line), lead, supporting copy, CTA, and artwork in a short sequence.
// Fully skipped under prefers-reduced-motion — final state renders instantly.
export default function useHeroEntrance() {
  const rootRef = useRef(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return undefined

    const panel = root.querySelector('[data-hero="panel"]')
    const eyebrow = root.querySelector('[data-hero="eyebrow"]')
    const heading = root.querySelector('[data-hero="heading"]')
    const lead = root.querySelector('[data-hero="lead"]')
    const support = root.querySelector('[data-hero="support"]')
    const cta = root.querySelector('[data-hero="cta"]')
    const visual = root.querySelector('[data-hero="visual"]')
    const targets = [panel, eyebrow, heading, lead, support, cta, visual].filter(Boolean)

    if (prefersReducedMotion()) {
      gsap.set(targets, { opacity: 1, y: 0, clearProps: 'transform' })
      return undefined
    }

    registerSplitText()

    let split
    const ctx = gsap.context(() => {
      const compact = window.matchMedia('(max-width: 640px)').matches
      split = new SplitText(heading, {
        type: 'lines',
        linesClass: 'hero-heading-line',
        mask: 'lines',
      })

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(panel, { y: compact ? 6 : 10 }, { y: 0, duration: compact ? 0.28 : 0.4 })
        .fromTo(
          eyebrow,
          { opacity: 0.45, y: compact ? 5 : 8 },
          { opacity: 1, y: 0, duration: compact ? 0.22 : 0.3 },
          '<0.05',
        )
        .fromTo(
          split.lines,
          { yPercent: compact ? 12 : 18 },
          { yPercent: 0, duration: compact ? 0.3 : 0.42, stagger: compact ? 0.03 : 0.05 },
          '<0.02',
        )
        .fromTo(lead, { opacity: 0.4, y: 9 }, { opacity: 1, y: 0, duration: 0.32 }, '-=0.2')
        .fromTo(support, { opacity: 0.35, y: 8 }, { opacity: 1, y: 0, duration: 0.32 }, '-=0.18')
        .fromTo(cta, { opacity: 0.4, y: 7 }, { opacity: 1, y: 0, duration: 0.28 }, '-=0.16')
        .fromTo(
          visual,
          { opacity: 0, y: compact ? 10 : 16, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: compact ? 0.32 : 0.48 },
          '-=0.08',
        )
    }, root)

    return () => {
      split?.revert()
      ctx.revert()
    }
  }, [])

  return rootRef
}
