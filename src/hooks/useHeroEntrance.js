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
// line), lead, supporting copy, and CTA reveal in a short overlapping sequence.
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
    const targets = [panel, eyebrow, heading, lead, support, cta].filter(Boolean)

    if (prefersReducedMotion()) {
      gsap.set(targets, { opacity: 1, y: 0, clearProps: 'transform' })
      return undefined
    }

    registerSplitText()

    let split
    const ctx = gsap.context(() => {
      split = new SplitText(heading, { type: 'lines', linesClass: 'hero-heading-line' })

      split.lines.forEach((line) => {
        const mask = document.createElement('span')
        mask.style.display = 'block'
        mask.style.overflow = 'hidden'
        line.parentNode.insertBefore(mask, line)
        mask.appendChild(line)
      })

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(panel, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo(eyebrow, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.4 }, '-=0.35')
        .fromTo(
          split.lines,
          { yPercent: 110, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
          '-=0.15',
        )
        .fromTo(lead, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.25')
        .fromTo(support, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
        .fromTo(cta, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4 }, '-=0.25')
    }, root)

    return () => {
      split?.revert()
      ctx.revert()
    }
  }, [])

  return rootRef
}
