import { Link } from 'react-router-dom'
import './FeaturedWorkCard.css'

export default function FeaturedWorkCard({ project }) {
  const image = project.media[0]

  return (
    <article className="featured-card">
      {image ? (
        <img src={image.src} alt={image.alt} loading="lazy" width="640" height="480" />
      ) : (
        <div className="featured-card-placeholder mono">Screenshot coming soon</div>
      )}
      <div className="featured-card-body">
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <Link className="proof-link mono" to="/portfolio">
          See the case study &rarr;
        </Link>
      </div>
    </article>
  )
}
