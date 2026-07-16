import './CaseStudySection.css'

export default function CaseStudySection({ project }) {
  return (
    <article className="case-study" id={project.slug}>
      <header className="case-study-header">
        <div className="tag">{project.tag}</div>
        <h2 className="display">{project.title}</h2>
        <p className="case-study-summary">{project.summary}</p>
        {project.extra && <p className="case-study-summary">{project.extra}</p>}
      </header>

      {project.media.length > 0 ? (
        <div className="case-study-media">
          {project.media.map((item) => (
            <img key={item.src} src={item.src} alt={item.alt} loading="lazy" width="480" height="600" />
          ))}
        </div>
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
