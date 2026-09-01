import Container from '../../shared/Container.jsx'
import Reveal from '../../shared/Reveal.jsx'
import Button from '../../shared/Button.jsx'
import { aiAdCreative } from '../../../data/ai-ad-creative.js'
import './AiAdCreativeHero.css'

export default function AiAdCreativeHero() {
  return (
    <section className="ad-hero-section" aria-label="AI Ad Creative">
      <Container>
        <Reveal
          as="div"
          className="ad-hero-panel"
          selector=".ad-hero-copy > *, .ad-hero-motif"
          preset="content"
          y={16}
        >
          <div className="ad-hero-copy">
            <p className="ad-hero-eyebrow">{aiAdCreative.eyebrow}</p>
            <h1 className="ad-hero-heading">{aiAdCreative.heading}</h1>
            <p className="ad-hero-lead">{aiAdCreative.lead}</p>
            <Button href="/contact" variant="primary" arrow className="ad-hero-cta">
              Start a Project
            </Button>
          </div>

          <div className="ad-hero-motif" aria-hidden="true">
            <span className="ad-hero-motif-frame ad-hero-motif-frame--tall" />
            <span className="ad-hero-motif-frame ad-hero-motif-frame--square" />
            <span className="ad-hero-motif-frame ad-hero-motif-frame--wide" />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
