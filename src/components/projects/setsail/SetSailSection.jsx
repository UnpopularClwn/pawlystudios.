import Section from '../../shared/Section.jsx'
import SectionEyebrow from '../../shared/SectionEyebrow.jsx'
import Reveal from '../../shared/Reveal.jsx'
import Button from '../../shared/Button.jsx'
import ProjectMeta from './ProjectMeta.jsx'
import SetSailVisual from './SetSailVisual.jsx'
import { setsail } from '../../../data/setsail.js'
import './SetSail.css'

export default function SetSailSection() {
  return (
    <Section background="sand" className="setsail-section" aria-label="Featured build">
      <div className="setsail-top">
        <Reveal as="div" className="setsail-intro">
          <SectionEyebrow>Featured Build</SectionEyebrow>
          <h2 className="setsail-heading">{setsail.name}</h2>
          {setsail.description ? (
            <p className="setsail-description">{setsail.description}</p>
          ) : (
            <p className="setsail-description setsail-pending">
              Project description pending PM-approved copy.
            </p>
          )}
          {setsail.tags.length > 0 && (
            <ul className="setsail-tags">
              {setsail.tags.map((tag) => (
                <li className="setsail-tag" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </Reveal>

        <Reveal as="div" className="setsail-side">
          <ProjectMeta details={setsail.buildDetails} />
          {setsail.externalUrl && (
            <div className="setsail-cta">
              <Button href={setsail.externalUrl} variant="secondary">
                {setsail.ctaLabel}
              </Button>
            </div>
          )}
        </Reveal>
      </div>

      <Reveal
        as="div"
        className="setsail-visual-block"
        selector=".setsail-frame"
        y={24}
        fromScale={0.98}
      >
        <SetSailVisual screenshot={setsail.screenshots.primary} variant="primary" />
        <div className="setsail-supporting-grid">
          {setsail.screenshots.supporting.map((shot) => (
            <SetSailVisual key={shot.id} screenshot={shot} variant="supporting" />
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
