'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import SetSailDialog from './SetSailDialog.jsx'
import { prefersReducedMotion } from '../../../lib/motion.js'
import { setsail } from '../../../data/setsail.js'
import './SetSailFolder.css'

// React Bits' Folder concept, adapted: a real button (not div+role=button),
// papers are the three sanitized SetSail screenshots, and the magnet-follow
// effect writes CSS custom properties directly instead of React state so
// pointermove never triggers a re-render.
const PAPERS = [
  { ...setsail.screenshots.primary, rotate: -6 },
  { ...setsail.screenshots.supporting[0], rotate: 3 },
  { ...setsail.screenshots.supporting[1], rotate: 9 },
]

export default function SetSailFolder() {
  const [open, setOpen] = useState(false)
  const stageRef = useRef(null)
  const exploreRef = useRef(null)
  const dialogRef = useRef(null)
  const frameRef = useRef(null)

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return undefined

    const canMagnet =
      open && !prefersReducedMotion() && window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!canMagnet) return undefined

    function handleMove(event) {
      if (frameRef.current) return
      const rect = stage.getBoundingClientRect()
      const px = (event.clientX - rect.left) / rect.width - 0.5
      const py = (event.clientY - rect.top) / rect.height - 0.5
      frameRef.current = requestAnimationFrame(() => {
        stage.style.setProperty('--folder-mx', px.toFixed(3))
        stage.style.setProperty('--folder-my', py.toFixed(3))
        frameRef.current = null
      })
    }

    function handleLeave() {
      stage.style.setProperty('--folder-mx', 0)
      stage.style.setProperty('--folder-my', 0)
    }

    stage.addEventListener('pointermove', handleMove)
    stage.addEventListener('pointerleave', handleLeave)
    return () => {
      stage.removeEventListener('pointermove', handleMove)
      stage.removeEventListener('pointerleave', handleLeave)
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
      stage.style.removeProperty('--folder-mx')
      stage.style.removeProperty('--folder-my')
    }
  }, [open])

  function handleToggle() {
    setOpen((value) => !value)
  }

  function handleExplore() {
    dialogRef.current?.open(stageRef.current, exploreRef.current)
  }

  return (
    <div className="ssfolder-wrap">
      <button
        type="button"
        className="ssfolder"
        aria-expanded={open}
        aria-label={open ? 'Close SetSail project folder' : 'Open SetSail project folder'}
        onClick={handleToggle}
      >
        <span className="ssfolder-stage" ref={stageRef} data-open={open}>
          <span className="ssfolder-back" aria-hidden="true" />

          <span className="ssfolder-papers" aria-hidden="true">
            {PAPERS.map((paper, index) => (
              <span
                className={`ssfolder-paper ssfolder-paper--${index + 1}`}
                key={paper.id}
                style={{ '--paper-rotate': `${paper.rotate}deg` }}
              >
                <Image src={paper.src} alt="" fill sizes="180px" />
              </span>
            ))}
          </span>

          <span className="ssfolder-front" aria-hidden="true">
            <span className="ssfolder-tab">SetSail</span>
          </span>
        </span>
      </button>

      <p className="ssfolder-caption">
        {open ? 'Project folder open — choose Explore Project to see the full build.' : 'Open the folder to look inside.'}
      </p>

      <div className="ssfolder-cta" data-visible={open}>
        <button
          type="button"
          className="btn btn--primary"
          ref={exploreRef}
          tabIndex={open ? 0 : -1}
          aria-haspopup="dialog"
          aria-controls="setsail-project-dialog-folder"
          onClick={handleExplore}
        >
          <span>Explore Project</span>
          <span className="btn__arrow" aria-hidden="true">
            ↗
          </span>
        </button>
      </div>

      <SetSailDialog ref={dialogRef} id="setsail-project-dialog-folder" />
    </div>
  )
}
