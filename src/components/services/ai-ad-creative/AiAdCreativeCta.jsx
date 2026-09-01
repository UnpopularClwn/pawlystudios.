import Section from '../../shared/Section.jsx'
import Reveal from '../../shared/Reveal.jsx'
import Button from '../../shared/Button.jsx'
import { adCreativeCta } from '../../../data/ai-ad-creative.js'
import './AiAdCreativeCta.css'

export default function AiAdCreativeCta() {
  return (
    <Section background="pine" className="ad-creative-cta" aria-labelledby="ad-creative-cta-heading">
      <Reveal as="div" className="ad-creative-cta-panel" preset="content" y={16}>
        <h2 id="ad-creative-cta-heading" className="ad-creative-cta-heading">
          {adCreativeCta.heading}
        </h2>
        <p className="ad-creative-cta-lead">{adCreativeCta.lead}</p>
        <Button href="/contact" variant="primary" arrow className="ad-creative-cta-button">
          {adCreativeCta.ctaLabel}
        </Button>
      </Reveal>
    </Section>
  )
}
