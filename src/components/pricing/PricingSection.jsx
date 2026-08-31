import Section from '../shared/Section.jsx'
import SectionEyebrow from '../shared/SectionEyebrow.jsx'
import Reveal from '../shared/Reveal.jsx'
import Button from '../shared/Button.jsx'
import { pricing } from '../../data/pricing.js'
import './Pricing.css'

export default function PricingSection() {
  return (
    <Section background="sand" className="pricing-section" aria-labelledby="pricing-heading" id="pricing">
      <Reveal as="div" className="pricing-intro" preset="content">
        <SectionEyebrow>{pricing.eyebrow}</SectionEyebrow>
        <h2 className="pricing-heading" id="pricing-heading">
          {pricing.heading}
        </h2>
        <p className="pricing-lead">{pricing.lead}</p>
      </Reveal>

      <Reveal as="ul" className="pricing-grid" selector=":scope > .pricing-card" preset="feature" y={18}>
        {pricing.tiers.map((tier) => (
          <li className={`pricing-card pricing-card--${tier.tone}`} key={tier.name}>
            <h3 className="pricing-tier-name">{tier.name}</h3>
            <p
              className="pricing-price"
              data-price-status={tier.isPricePlaceholder ? 'placeholder' : 'approved'}
            >
              {tier.pricingLabel}
            </p>
            <p className="pricing-description">{tier.description}</p>

            <div className="pricing-divider" aria-hidden="true" />

            <ul className="pricing-features">
              {tier.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <Button
              href="/contact"
              variant={tier.tone === 'pine' ? 'primary' : 'secondary'}
              className="pricing-cta"
            >
              {tier.ctaLabel}
            </Button>
          </li>
        ))}
      </Reveal>
    </Section>
  )
}
