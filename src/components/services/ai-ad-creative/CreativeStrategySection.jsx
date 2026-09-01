import Section from '../../shared/Section.jsx'
import SectionEyebrow from '../../shared/SectionEyebrow.jsx'
import Reveal from '../../shared/Reveal.jsx'
import './CreativeStrategySection.css'

const strategyLoop = [
  {
    label: 'Research',
    description: 'Study the market and identify creative patterns worth investigating.',
  },
  {
    label: 'Deconstruct',
    description: 'Break those patterns into hooks, angles, structures, proof, and calls to action.',
  },
  {
    label: 'Create',
    description: 'Turn the strongest directions into original AI-generated ad creative for the brand.',
  },
  {
    label: 'Learn',
    description: 'When campaign data is available, identify where the creative is gaining or losing attention.',
  },
  {
    label: 'Iterate',
    description: 'Use those findings to develop the next creative cycle instead of starting from zero.',
  },
]

export default function CreativeStrategySection() {
  return (
    <Section background="pine" className="creative-strategy-section" aria-labelledby="creative-strategy-heading">
      <Reveal as="div" className="creative-strategy-intro" preset="content">
        <SectionEyebrow>Creative Strategy</SectionEyebrow>
        <h2 id="creative-strategy-heading" className="creative-strategy-heading">
          Research before generation.
        </h2>
        <p>
          Instead of starting with a blank prompt, the process starts by studying the market. I look at what keeps
          appearing within the product or service category, then break those creatives down into hooks, angles,
          narrative structures, proof, offer framing, and calls to action.
        </p>
        <p>Those observations shape the creative direction before production starts.</p>
      </Reveal>

      <div className="creative-strategy-loop-frame">
        <Reveal
          as="ol"
          className="creative-strategy-loop"
          selector=":scope > .creative-strategy-step"
          preset="content"
          y={14}
        >
          {strategyLoop.map((step) => (
            <li className="creative-strategy-step" key={step.label}>
              <span className="creative-strategy-node" aria-hidden="true" />
              <h3>{step.label}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </Reveal>
        <p className="creative-strategy-return">Iteration feeds the next research cycle.</p>
      </div>

      <Reveal as="div" className="creative-strategy-principle" preset="content" y={14}>
        <h3>Build on what works. Leave room to discover what works next.</h3>
        <p>
          Creative does not need to start from zero every cycle. The approach balances research-backed directions,
          iterations of ideas already showing promise, and a smaller space for new experiments. When campaign data
          is available, those results help shape what gets developed next.
        </p>
      </Reveal>
    </Section>
  )
}
