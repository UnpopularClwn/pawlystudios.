import { Link } from 'react-router-dom'
import FeaturedWorkCard from './FeaturedWorkCard.jsx'
import { PROJECTS } from '../../data/projects.js'
import './FeaturedWork.css'

export default function FeaturedWork() {
  return (
    <section id="work" aria-label="Featured work">
      <div className="wrap">
        <div className="featured-grid">
          {PROJECTS.map((project) => (
            <FeaturedWorkCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="featured-cta">
          <Link className="btn ghost" to="/portfolio">
            See All the Work
          </Link>
        </div>
      </div>
    </section>
  )
}
