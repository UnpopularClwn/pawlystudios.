import { GOOD_FIT, NOT_A_FIT } from '../../data/services.js'
import './QualificationSection.css'

export default function QualificationSection() {
  return (
    <section aria-label="Is this a good fit">
      <div className="wrap">
        <div className="qualification-grid">
          <div className="qualification-card good">
            <h3>Good Fit</h3>
            <ul>
              {GOOD_FIT.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="qualification-card">
            <h3>Probably Not a Fit</h3>
            <ul>
              {NOT_A_FIT.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
