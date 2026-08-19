import Container from '../shared/Container.jsx'
import Button from '../shared/Button.jsx'
import HeroMotion from './HeroMotion.jsx'
import HeroVisual from './HeroVisual.jsx'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero-section" aria-label="Introduction">
      <Container>
        <HeroMotion>
          <div className="hero-panel" data-hero="panel">
            <div className="hero-copy">
              <p className="hero-eyebrow" data-hero="eyebrow">
                WEBSITE DEVELOPMENT
              </p>
              <h1 className="hero-heading" data-hero="heading">
                Websites built for how your business works.
              </h1>
              <p className="hero-lead" data-hero="lead">
                I build fast, functional websites that are simple to use, easy to manage, and
                built around what your business needs.
              </p>
              <p className="hero-support" data-hero="support">
                Whether you need a new website, want to improve your current one, or need
                something more custom, I can help from planning through launch. And if you need
                support afterward, I can handle new pages, content updates, site changes, and
                ongoing maintenance.
              </p>
              <div className="hero-cta" data-hero="cta">
                <Button href="#contact" arrow>
                  Start a Project
                </Button>
              </div>
            </div>
            <div className="hero-visual-wrap">
              <HeroVisual />
            </div>
          </div>
        </HeroMotion>
      </Container>
    </section>
  )
}
