import Section from '../../shared/Section.jsx'
import Reveal from '../../shared/Reveal.jsx'
import { adAudiences } from '../../../data/ai-ad-creative.js'
import './AudienceSection.css'

export default function AudienceSection() {
  return (
    <Section background="white" className="audience-section" aria-label="Who it's for" id="who-its-for">
      <Reveal as="div" className="audience-intro" preset="content">
        <h2 className="audience-heading">Who it&rsquo;s for.</h2>
      </Reveal>

      <Reveal as="div" className="audience-grid" selector=":scope > .audience-item" preset="content" y={16}>
        {adAudiences.map((audience) => (
          <div className="audience-item" key={audience.title}>
            <h3 className="audience-title">{audience.title}</h3>
            <p className="audience-description">{audience.description}</p>
          </div>
        ))}
      </Reveal>
    </Section>
  )
}
