import Section from '../../shared/Section.jsx'
import SectionEyebrow from '../../shared/SectionEyebrow.jsx'
import Reveal from '../../shared/Reveal.jsx'
import Button from '../../shared/Button.jsx'
import SetSailVisual from './SetSailVisual.jsx'
import { setsail } from '../../../data/setsail.js'
import './SetSail.css'

export default function SetSailSection() {
  return (
    <Section background="sand" className="setsail-section" aria-label="Featured build">
      <Reveal as="div" className="setsail-intro" preset="content">
        <SectionEyebrow>{setsail.eyebrow}</SectionEyebrow>
        <h2 className="setsail-heading">{setsail.name}</h2>
        <p className="setsail-description">{setsail.description}</p>
      </Reveal>

      <Reveal as="div" className="setsail-build" preset="content">
        <p className="setsail-build-label">{setsail.build.label}</p>
        <p className="setsail-build-copy">{setsail.build.copy}</p>
        <ul className="setsail-stack">
          {setsail.build.stack.map((item) => (
            <li className="setsail-stack-item" key={item}>
              {item}
            </li>
          ))}
        </ul>
        {setsail.externalUrl && (
          <div className="setsail-cta">
            <Button href={setsail.externalUrl} variant="secondary">
              {setsail.ctaLabel}
            </Button>
          </div>
        )}
      </Reveal>

      <Reveal
        as="div"
        className="setsail-primary-block"
        selector=".setsail-frame"
        preset="feature"
        y={20}
        fromScale={0.98}
      >
        <SetSailVisual screenshot={setsail.screenshots.primary} variant="primary" />
      </Reveal>

      <Reveal
        as="div"
        className="setsail-supporting-grid"
        selector=".setsail-supporting-block"
        preset="content"
        y={20}
      >
        {setsail.screenshots.supporting.map((shot) => (
          <div className="setsail-supporting-block" key={shot.id}>
            <SetSailVisual screenshot={shot} variant="supporting" />
            <h3 className="setsail-supporting-heading">{shot.heading}</h3>
            <p className="setsail-supporting-copy">{shot.copy}</p>
          </div>
        ))}
      </Reveal>
    </Section>
  )
}
