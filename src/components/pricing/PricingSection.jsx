import Section from '../shared/Section.jsx'
import SectionEyebrow from '../shared/SectionEyebrow.jsx'
import Reveal from '../shared/Reveal.jsx'
import Button from '../shared/Button.jsx'
import { pricing } from '../../data/pricing.js'
import './Pricing.css'

export default function PricingSection() {
  return (
    <Section background="sand" className="pricing-section" aria-label="Pricing">
      <Reveal className="pricing-content" selector=".pricing-intro, .pricing-offer" preset="content" y={16}>
        <div className="pricing-intro">
          <SectionEyebrow>{pricing.eyebrow}</SectionEyebrow>
          <h2 className="pricing-heading">{pricing.heading}</h2>
        </div>

        <ol className="pricing-list">
          {pricing.offers.map((offer) => (
            <li className="pricing-offer" key={offer.number}>
              <div className="pricing-card-header">
                <span className="pricing-number" aria-hidden="true">
                  {offer.number}
                </span>
                <h3 className="pricing-title">{offer.title}</h3>
              </div>
              <p className="pricing-label">{offer.pricingLabel}</p>
              <p className="pricing-description">{offer.description}</p>
              <Button href="#contact" variant="secondary" className="pricing-cta">
                Start a Project
              </Button>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  )
}
