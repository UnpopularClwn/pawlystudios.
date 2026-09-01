import Section from '../../shared/Section.jsx'
import Reveal from '../../shared/Reveal.jsx'
import { creativePipeline } from '../../../data/ai-ad-creative.js'
import './CreativePipeline.css'

export default function CreativePipeline() {
  return (
    <Section background="sand" className="creative-pipeline-section" aria-label="Creative pipeline" id="pipeline">
      <Reveal as="div" className="creative-pipeline-intro" preset="content">
        <h2 className="creative-pipeline-heading">From strategy to finished creative.</h2>
        <p className="creative-pipeline-lead">
          Strategy decides which direction is worth producing. Production turns that direction into finished creative.
        </p>
      </Reveal>

      <Reveal
        as="ol"
        className="creative-pipeline-list"
        selector=":scope > .creative-pipeline-step"
        preset="content"
        y={16}
      >
        {creativePipeline.map((step, index) => (
          <li className="creative-pipeline-step" key={step.title}>
            <span className="creative-pipeline-node" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="creative-pipeline-title">{step.title}</h3>
            <p className="creative-pipeline-description">{step.description}</p>
          </li>
        ))}
      </Reveal>
    </Section>
  )
}
