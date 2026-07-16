import MediaGallery from '../media/MediaGallery.jsx'
import useGsapReveal from '../../hooks/useGsapReveal.js'
import './CaseStudySection.css'

export default function CaseStudySection({ project, index }) {
  const headerRef = useGsapReveal({ preset: 'f1', selector: '.case-study-number, .tag, h2, .case-study-summary', y: 14 })

  return (
    <article className="case-study" id={project.slug}>
      <header className="case-study-header" ref={headerRef}>
        <span className="case-study-number mono">{String(index + 1).padStart(2, '0')}</span>
        <div className="tag">{project.tag}</div>
        <h2 className="display">{project.title}</h2>
        <p className="case-study-summary">{project.summary}</p>
        {project.extra && <p className="case-study-summary">{project.extra}</p>}
      </header>

      {project.media.length > 0 ? (
        <MediaGallery items={project.media} />
      ) : (
        <div className="case-study-media-placeholder mono">{project.mediaPlaceholder}</div>
      )}

      <div className="case-study-delivered">
        <h3>What I Did</h3>
        <ul>
          {project.delivered.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="stack-tags">
        {project.tools.map((tool) => (
          <span key={tool}>{tool}</span>
        ))}
      </div>

      {project.links.some((link) => link.url) && (
        <div className="case-study-links">
          {project.links
            .filter((link) => link.url)
            .map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="proof-link mono">
                {link.label} &rarr;
              </a>
            ))}
        </div>
      )}
    </article>
  )
}
