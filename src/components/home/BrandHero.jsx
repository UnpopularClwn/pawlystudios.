import Image from 'next/image'
import Container from '../shared/Container.jsx'
import Button from '../shared/Button.jsx'
import HeroMotion from '../hero/HeroMotion.jsx'
import { BRAND_NAME, logo } from '../../data/brand.js'
import './BrandHero.css'

export default function BrandHero() {
  return (
    <section className="brand-hero-section" aria-labelledby="brand-hero-heading">
      <Container>
        <HeroMotion>
          <div className="brand-hero-panel" data-hero="panel">
            <div className="brand-hero-copy">
              <span className="brand-hero-logo-plate" data-hero="brand">
                <Image
                  src={logo.src}
                  alt={BRAND_NAME}
                  width={logo.width}
                  height={logo.height}
                  sizes="(max-width: 480px) 22px, 26px"
                  className="brand-hero-logo"
                  priority
                />
              </span>
              <p className="brand-hero-eyebrow" data-hero="eyebrow">
                Independent Studio
              </p>
              <h1 className="brand-hero-heading" id="brand-hero-heading" data-hero="heading">
                Digital experiences and creative for businesses.
              </h1>
              <p className="brand-hero-lead" data-hero="lead">
                Web development and AI-generated ad creative, handled with a practical, hands-on approach from concept
                through delivery.
              </p>
              <div className="brand-hero-actions" data-hero="cta">
                <Button href="#services" arrow>
                  Explore Services
                </Button>
                <Button href="/contact" variant="secondary" className="brand-hero-secondary-cta">
                  Start a Project
                </Button>
              </div>
            </div>

            <div className="brand-hero-composition" data-hero="motif" aria-hidden="true">
              <span className="brand-hero-plane brand-hero-plane--wide" />
              <span className="brand-hero-plane brand-hero-plane--tall" />
              <span className="brand-hero-axis" />
            </div>
          </div>
        </HeroMotion>
      </Container>
    </section>
  )
}
