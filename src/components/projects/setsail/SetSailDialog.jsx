'use client'

import Image from 'next/image'
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import { gsap, prefersReducedMotion } from '../../../lib/motion.js'
import { setsail } from '../../../data/setsail.js'
import './SetSailDialog.css'

function CapabilityList({ items }) {
  return (
    <ul className="setsail-dialog-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

// The single implementation of the SetSail expanded project experience,
// anchoring its zoom transition to the source element passed to open().
const SetSailDialog = forwardRef(function SetSailDialog({ id = 'setsail-project-dialog' }, ref) {
  const dialogRef = useRef(null)
  const panelRef = useRef(null)
  const closeRef = useRef(null)
  const bodyStylesRef = useRef(null)
  const closingRef = useRef(false)
  const sourceElRef = useRef(null)
  const returnFocusElRef = useRef(null)
  const { primary, supporting } = setsail.screenshots
  const { details } = setsail

  useEffect(
    () => () => {
      if (!bodyStylesRef.current) return
      document.body.style.overflow = bodyStylesRef.current.overflow
      document.body.style.paddingRight = bodyStylesRef.current.paddingRight
    },
    [],
  )

  function lockPage() {
    bodyStylesRef.current = {
      overflow: document.body.style.overflow,
      paddingRight: document.body.style.paddingRight,
    }
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`
  }

  function unlockPage() {
    if (!bodyStylesRef.current) return
    document.body.style.overflow = bodyStylesRef.current.overflow
    document.body.style.paddingRight = bodyStylesRef.current.paddingRight
    bodyStylesRef.current = null
  }

  function geometryFromSource() {
    const source = sourceElRef.current.getBoundingClientRect()
    const target = panelRef.current.getBoundingClientRect()
    return {
      x: source.left + source.width / 2 - (target.left + target.width / 2),
      y: source.top + source.height / 2 - (target.top + target.height / 2),
      scaleX: source.width / target.width,
      scaleY: source.height / target.height,
    }
  }

  function openProject() {
    const dialog = dialogRef.current
    if (!dialog || dialog.open) return

    lockPage()
    dialog.showModal()
    closeRef.current.focus({ preventScroll: true })

    if (prefersReducedMotion() || !sourceElRef.current) return

    const panel = panelRef.current
    const content = panel.querySelector('.setsail-dialog-content')
    const geometry = geometryFromSource()
    gsap.set(content, { opacity: 0, y: 12 })
    gsap
      .timeline({ defaults: { ease: 'power3.out' } })
      .fromTo(dialog, { opacity: 0 }, { opacity: 1, duration: 0.24 })
      .fromTo(
        panel,
        { ...geometry, transformOrigin: 'center center' },
        { x: 0, y: 0, scaleX: 1, scaleY: 1, duration: 0.52, clearProps: 'transform' },
        '<',
      )
      .to(content, { opacity: 1, y: 0, duration: 0.3, clearProps: 'transform' }, '-=0.2')
  }

  function finishClose() {
    const dialog = dialogRef.current
    dialog.close()
    gsap.set([dialog, panelRef.current], { clearProps: 'all' })
    unlockPage()
    closingRef.current = false
    returnFocusElRef.current?.focus({ preventScroll: true })
  }

  function closeProject() {
    const dialog = dialogRef.current
    if (!dialog?.open || closingRef.current) return
    closingRef.current = true

    if (prefersReducedMotion() || !sourceElRef.current) {
      finishClose()
      return
    }

    const panel = panelRef.current
    const content = panel.querySelector('.setsail-dialog-content')
    const geometry = geometryFromSource()
    gsap
      .timeline({ defaults: { ease: 'power2.inOut' }, onComplete: finishClose })
      .to(content, { opacity: 0, y: 8, duration: 0.16 })
      .to(panel, { ...geometry, duration: 0.38 }, '<0.04')
      .to(dialog, { opacity: 0, duration: 0.24 }, '-=0.2')
  }

  useImperativeHandle(ref, () => ({
    open(sourceEl, returnFocusEl) {
      sourceElRef.current = sourceEl ?? null
      returnFocusElRef.current = returnFocusEl ?? sourceEl ?? null
      openProject()
    },
    close() {
      closeProject()
    },
  }))

  function handleCancel(event) {
    event.preventDefault()
    closeProject()
  }

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) closeProject()
  }

  function handleDialogKeyDown(event) {
    if (event.key !== 'Tab') return
    const controls = [...dialogRef.current.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])')]
    const first = controls[0]
    const last = controls.at(-1)

    if (controls.length === 1 || (event.shiftKey && document.activeElement === first)) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  return (
    <dialog
      className="setsail-dialog"
      id={id}
      ref={dialogRef}
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-intro`}
      onCancel={handleCancel}
      onClick={handleBackdropClick}
      onKeyDown={handleDialogKeyDown}
    >
      <article className="setsail-dialog-panel" ref={panelRef}>
        <button
          className="setsail-dialog-close"
          type="button"
          ref={closeRef}
          aria-label="Close SetSail project"
          onClick={closeProject}
        >
          <span aria-hidden="true">×</span>
        </button>

        <div className="setsail-dialog-content">
          <header className="setsail-dialog-header">
            <p className="setsail-dialog-eyebrow">Featured Build</p>
            <h2 id={`${id}-title`}>SetSail Client Portal</h2>
            <p id={`${id}-intro`}>{details.intro}</p>
          </header>

          <figure className="setsail-dialog-primary-image">
            <Image
              src={primary.src}
              alt={primary.alt}
              width={primary.width}
              height={primary.height}
              sizes="(max-width: 720px) calc(100vw - 32px), 1120px"
            />
          </figure>

          <div className="setsail-dialog-story">
            <section>
              <h3>The Problem</h3>
              <p>{details.problem}</p>
            </section>
            <section>
              <h3>The Build</h3>
              <p>{details.solution}</p>
            </section>
            <section>
              <h3>What I Built</h3>
              <p>{details.contribution}</p>
            </section>
          </div>

          <div className="setsail-dialog-experience-grid">
            <section>
              <h3>Client Experience</h3>
              <CapabilityList items={details.clientExperience} />
            </section>
            <section>
              <h3>Agency Experience</h3>
              <CapabilityList items={details.agencyExperience} />
            </section>
          </div>

          <div className="setsail-dialog-gallery">
            {supporting.map((shot) => (
              <figure key={shot.id}>
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.width}
                  height={shot.height}
                  sizes="(max-width: 720px) calc(100vw - 32px), 540px"
                />
                <figcaption>{shot.label}</figcaption>
              </figure>
            ))}
          </div>

          <section className="setsail-dialog-stack">
            <h3>Stack</h3>
            <div className="setsail-dialog-stack-groups">
              {details.stack.map((group) => (
                <div key={group.label}>
                  <h4>{group.label}</h4>
                  <p>{group.items.join(' · ')}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>
    </dialog>
  )
})

export default SetSailDialog
