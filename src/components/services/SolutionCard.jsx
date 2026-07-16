import { Link } from 'react-router-dom'
import useGsapReveal from '../../hooks/useGsapReveal.js'
import './SolutionCard.css'

export default function SolutionCard({ service, index }) {
  const revealRef = useGsapReveal({ preset: 'flight', selector: '.solution-body, .solution-covers', y: 16 })

  return (
    <article className={`solution-card solution-card-${service.variant}`} id={service.slug} ref={revealRef}>
      <div className="solution-card-heading">
        <span className="solution-card-number mono">{String(index + 1).padStart(2, '0')}</span>
        <div className="tag">{service.tag}</div>
        <h2>{service.headline}</h2>
      </div>
      <div className="solution-body">
        {service.body.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
      <div className="solution-covers">
        <ul>
          {service.covers.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Link className="btn ghost" to="/contact">
          Tell Me What&rsquo;s Not Working
        </Link>
      </div>
    </article>
  )
}
