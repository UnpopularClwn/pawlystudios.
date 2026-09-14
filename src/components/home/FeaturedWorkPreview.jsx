import Image from 'next/image'
import Section from '../shared/Section.jsx'
import SectionEyebrow from '../shared/SectionEyebrow.jsx'
import Reveal from '../shared/Reveal.jsx'
import Button from '../shared/Button.jsx'
import { setsail } from '../../data/setsail.js'
import './FeaturedWorkPreview.css'

export default function FeaturedWorkPreview() {
  const screenshot = setsail.screenshots.primary

  return (
    <Section
      background="sand"
      className="featured-work-preview"
      aria-labelledby="featured-work-heading"
      id="work"
    >
      <Reveal as="header" className="featured-work-preview-heading" preset="content">
        <SectionEyebrow>Selected Work</SectionEyebrow>
        <h2 id="featured-work-heading">A closer look at what I make.</h2>
      </Reveal>

      <article className="selected-work-project selected-work-project--setsail" aria-labelledby="setsail-preview-heading">
        <Reveal as="div" className="selected-work-copy" preset="content" y={16}>
          <p className="selected-work-kind">Web Development / Client Portal</p>
          <h3 id="setsail-preview-heading">{setsail.name}</h3>
          <p>
            A client portal for an organic social media agency, built to make content review, approvals, onboarding,
            and day-to-day updates easier for clients.
          </p>
          <Button href="/services/web-development#work" arrow>
            View SetSail Project
          </Button>
        </Reveal>

        <Reveal as="figure" className="featured-work-preview-image" preset="content" y={20}>
          <Image
            src={screenshot.src}
            alt={screenshot.alt}
            width={screenshot.width}
            height={screenshot.height}
            sizes="(max-width: 960px) calc(100vw - 48px), 680px"
          />
          <figcaption>{screenshot.label}</figcaption>
        </Reveal>
      </article>
    </Section>
  )
}
