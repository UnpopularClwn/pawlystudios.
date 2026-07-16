import { Link } from 'react-router-dom'
import FeaturedWorkCard from './FeaturedWorkCard.jsx'
import useGsapReveal from '../../hooks/useGsapReveal.js'
import { PROJECTS } from '../../data/projects.js'
import './FeaturedWork.css'

export default function FeaturedWork() {
  const gridRef = useGsapReveal({ preset: 'f1', y: 20 })

  return (
    <section id="work" aria-label="Featured work" data-theme="proof">
      <div className="wrap">
        <div className="featured-grid" ref={gridRef}>
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
