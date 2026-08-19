import Section from '../shared/Section.jsx'
import SectionEyebrow from '../shared/SectionEyebrow.jsx'
import Reveal from '../shared/Reveal.jsx'
import SupportItem from './SupportItem.jsx'
import { support } from '../../data/support.js'
import './Support.css'

export default function SupportSection() {
  return (
    <Section background="white" className="support-section" aria-label="Ongoing support">
      <Reveal as="div" className="support-shell" selector=".support-panel" preset="feature" y={20}>
        <div className="support-panel">
          <Reveal as="div" className="support-header" preset="content">
            <SectionEyebrow>{support.eyebrow}</SectionEyebrow>
            <h2 className="support-heading">{support.heading}</h2>
            <p className="support-lead">{support.lead}</p>
          </Reveal>

          <div className="support-grid">
            {support.items.map((item) => (
              <SupportItem key={item.number} item={item} />
            ))}
          </div>

          <Reveal as="p" className="support-ownership" preset="content">
            {support.ownership}
          </Reveal>
        </div>
      </Reveal>
    </Section>
  )
}
