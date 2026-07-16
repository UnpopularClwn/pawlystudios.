import { CREDIBILITY_POINTS } from '../../data/credibility.js'
import './CredibilityStrip.css'

export default function CredibilityStrip() {
  return (
    <section className="credibility" aria-label="Credibility">
      <div className="wrap">
        <ul className="credibility-list">
          {CREDIBILITY_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
