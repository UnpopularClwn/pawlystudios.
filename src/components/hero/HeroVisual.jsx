'use client'

import { useEffect, useRef } from 'react'
import { gsap, registerGsap, prefersReducedMotion } from '../../lib/motion.js'
import './HeroVisual.css'

// Purely decorative — an abstract composition of website modules (nav, hero,
// content rows, image block, CTA) assembling into a finished layout. Never
// meant to represent a real client project.
export default function HeroVisual() {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return undefined

    const blocks = el.querySelectorAll('[data-block]')

    if (prefersReducedMotion()) {
      gsap.set(blocks, { opacity: 1, y: 0, scale: 1, clearProps: 'transform' })
      return undefined
    }

    registerGsap()

    const ctx = gsap.context(() => {
      gsap.fromTo(
        blocks,
        { opacity: 0, y: 22, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.1,
          delay: 0.9,
        },
      )

      gsap.to(el, {
        y: -28,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
        },
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <div className="hero-visual" ref={containerRef} aria-hidden="true">
      <div className="hv-frame">
        <div className="hv-navbar" data-block>
          <span className="hv-dot" />
          <span className="hv-dot" />
          <span className="hv-dot" />
          <span className="hv-navline" />
        </div>
        <div className="hv-hero-block" data-block>
          <span className="hv-line hv-line--lg" />
          <span className="hv-line hv-line--sm" />
          <span className="hv-pill hv-pill--accent" />
        </div>
        <div className="hv-content-rows" data-block>
          <span className="hv-line" />
          <span className="hv-line" />
          <span className="hv-line hv-line--short" />
        </div>
        <div className="hv-image-block" data-block />
        <div className="hv-cta-block" data-block>
          <span className="hv-pill" />
        </div>
      </div>
    </div>
  )
}
