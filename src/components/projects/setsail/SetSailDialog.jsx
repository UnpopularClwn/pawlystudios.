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
  const { cover, primary, supporting, experience, build } = setsail.screenshots
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
      <button
        className="setsail-dialog-close"
        type="button"
        ref={closeRef}
        aria-label="Close SetSail project"
        onClick={closeProject}
      >
        <span aria-hidden="true">×</span>
      </button>

      <article className="setsail-dialog-panel" ref={panelRef}>
        <div className="setsail-dialog-content">
          <header className="setsail-dialog-header">
            <p className="setsail-dialog-eyebrow">Featured Build</p>
            <h2 id={`${id}-title`}>SetSail Client Portal</h2>
            <p id={`${id}-intro`}>{details.intro}</p>
          </header>

          <figure className="setsail-dialog-cover">
            <div className="setsail-dialog-cover-viewport">
              <Image
                src={cover.src}
                alt={cover.alt}
                width={cover.width}
                height={cover.height}
                sizes="(max-width: 720px) 100vw, 1280px"
                priority
              />
            </div>
            <figcaption>{cover.label}</figcaption>
          </figure>

          <div className="setsail-dialog-story">
            <section className="setsail-dialog-problem">
              <div>
                <p className="setsail-dialog-kicker">01 / Context</p>
                <h3>The Problem</h3>
                <p>{details.problem}</p>
              </div>
              <figure>
                <div className="setsail-dialog-problem-viewport">
                  <Image
                    src={primary.src}
                    alt={primary.alt}
                    width={primary.width}
                    height={primary.height}
                    sizes="(max-width: 720px) calc(100vw - 32px), 720px"
                  />
                </div>
                <figcaption>A focused “today” view replaced a general-purpose project board.</figcaption>
              </figure>
            </section>
          </div>

          <section className="setsail-dialog-experience">
            <div className="setsail-dialog-experience-copy">
              <p className="setsail-dialog-kicker">02 / Product</p>
              <h3>The Experience</h3>
              <p>{details.solution}</p>
              <div className="setsail-dialog-experience-grid">
                <div>
                  <h4>For clients</h4>
                  <CapabilityList items={details.clientExperience} />
                </div>
                <div>
                  <h4>For the agency</h4>
                  <CapabilityList items={details.agencyExperience} />
                </div>
              </div>
            </div>
            <figure className="setsail-dialog-phone">
              <Image
                src={experience.src}
                alt={experience.alt}
                width={experience.width}
                height={experience.height}
                sizes="(max-width: 720px) 72vw, 340px"
              />
              <figcaption>{experience.label}</figcaption>
            </figure>
          </section>

          <section className="setsail-dialog-build">
            <div>
              <p className="setsail-dialog-kicker">03 / Delivery</p>
              <h3>The Build</h3>
              <p>{details.contribution}</p>
            </div>
            <div className="setsail-dialog-stack-groups">
              {details.stack.map((group) => (
                <div key={group.label}>
                  <h4>{group.label}</h4>
                  <p>{group.items.join(' · ')}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="setsail-dialog-built">
            <div className="setsail-dialog-section-heading">
              <p className="setsail-dialog-kicker">04 / Scope</p>
              <h3>What I Built</h3>
            </div>
            <div className="setsail-dialog-build-gallery">
              {build.map((shot) => (
                <figure key={shot.id}>
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={shot.width}
                    height={shot.height}
                    sizes="(max-width: 720px) 72vw, 300px"
                  />
                  <figcaption>{shot.label}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="setsail-dialog-final">
            <div className="setsail-dialog-section-heading">
              <p className="setsail-dialog-kicker">05 / Outcome</p>
              <h3>Final Product Moment</h3>
              <p>Clients can review each post in context, approve it, or request a revision without learning the agency’s internal workflow.</p>
            </div>
            <div className="setsail-dialog-gallery">
              {[supporting[0]].map((shot) => (
                <figure key={shot.id}>
                  <div className="setsail-dialog-final-viewport">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={shot.width}
                      height={shot.height}
                      sizes="(max-width: 720px) calc(100vw - 32px), 1280px"
                    />
                  </div>
                  <figcaption>{shot.label}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        </div>
      </article>
    </dialog>
  )
})

export default SetSailDialog
