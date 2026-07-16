import { Link } from 'react-router-dom'
import BrowserFrame from '../media/BrowserFrame.jsx'
import './FeaturedWorkCard.css'

export default function FeaturedWorkCard({ project }) {
  const image = project.media[0]

  return (
    <article className="featured-card">
      {image ? (
        <div className="featured-card-media">
          <BrowserFrame src={image.src} alt={image.alt} />
        </div>
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
