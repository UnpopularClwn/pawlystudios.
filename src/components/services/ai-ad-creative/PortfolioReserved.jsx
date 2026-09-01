import Section from '../../shared/Section.jsx'
import SectionEyebrow from '../../shared/SectionEyebrow.jsx'
import Reveal from '../../shared/Reveal.jsx'
import { portfolio } from '../../../data/ai-ad-creative.js'
import './PortfolioReserved.css'

// Honest reserved state: no fabricated pieces, thumbnails, titles, or metrics.
// This frame can later hold a real YouTube embed or approved static creative.
export default function PortfolioReserved() {
  return (
    <Section background="sand" className="portfolio-reserved-section" aria-labelledby="portfolio-heading">
      <Reveal as="div" className="portfolio-reserved-intro" preset="content">
        <SectionEyebrow>{portfolio.eyebrow}</SectionEyebrow>
        <h2 className="portfolio-reserved-heading" id="portfolio-heading">
          {portfolio.heading}
        </h2>
        <p className="portfolio-reserved-body">{portfolio.body}</p>
      </Reveal>

      <Reveal as="div" className="portfolio-reserved-frame" preset="content" y={12}>
        <div className="portfolio-reserved-mark" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p>{portfolio.reservedLabel}</p>
      </Reveal>
    </Section>
  )
}
