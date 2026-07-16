import { Link } from 'react-router-dom'
import './SolutionCard.css'

export default function SolutionCard({ service }) {
  return (
    <article className="solution-card" id={service.slug}>
      <div className="tag">{service.tag}</div>
      <h2>{service.headline}</h2>
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
      </div>
      <Link className="btn ghost" to="/contact">
        Tell Me What&rsquo;s Not Working
      </Link>
    </article>
  )
}
