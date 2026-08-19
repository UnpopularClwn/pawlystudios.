'use client'

import { useEffect, useRef } from 'react'
import { gsap, registerGsap, prefersReducedMotion } from '../../lib/motion.js'

// Decorative Lime progress path that scrubs alongside scroll through the
// roadmap. Isolated as its own client component so ProcessSection and
// ProcessStep stay server-rendered.
export default function RoadmapProgressLine() {
  const fillRef = useRef(null)

  useEffect(() => {
    const fill = fillRef.current
    if (!fill) return undefined

    if (prefersReducedMotion()) {
      gsap.set(fill, { scaleY: 1 })
      return undefined
    }

    registerGsap()

    const ctx = gsap.context(() => {
      gsap.fromTo(
        fill,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: fill.closest('.roadmap-track-wrap'),
            start: 'top 75%',
            end: 'bottom 75%',
            scrub: 0.4,
          },
        },
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="roadmap-line" aria-hidden="true">
      <div className="roadmap-line-base" />
      <div className="roadmap-line-fill" ref={fillRef} />
    </div>
  )
}
