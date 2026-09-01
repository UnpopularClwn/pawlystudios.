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
      <Reveal
        as="div"
        className="featured-work-preview-layout"
        selector=".featured-work-preview-copy, .featured-work-preview-image"
        preset="content"
        y={20}
      >
        <div className="featured-work-preview-copy">
          <SectionEyebrow>{setsail.eyebrow}</SectionEyebrow>
          <h2 id="featured-work-heading">{setsail.name}</h2>
          <p>{setsail.description}</p>
          <Button href="/services/web-development#work" arrow>
            View Project
          </Button>
        </div>

        <figure className="featured-work-preview-image">
          <Image
            src={screenshot.src}
            alt={screenshot.alt}
            width={screenshot.width}
            height={screenshot.height}
            sizes="(max-width: 960px) calc(100vw - 48px), 680px"
          />
          <figcaption>{screenshot.label}</figcaption>
        </figure>
      </Reveal>
    </Section>
  )
}
