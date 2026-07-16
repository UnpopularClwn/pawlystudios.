import { CREDIBILITY_POINTS } from '../../data/credibility.js'
import useGsapReveal from '../../hooks/useGsapReveal.js'
import './CredibilityStrip.css'

export default function CredibilityStrip() {
  const listRef = useGsapReveal({ preset: 'f1', selector: 'li', y: 8 })

  return (
    <section className="credibility" aria-label="Credibility">
      <div className="wrap">
        <ul className="credibility-list" ref={listRef}>
          {CREDIBILITY_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
