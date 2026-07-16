import { Link } from 'react-router-dom'
import './ResumeViewer.css'

export function ResumeToolbar({ url }) {
  if (!url) return null

  return (
    <div className="resume-toolbar">
      <span className="resume-status mono">DOCUMENT STATUS: ON FILE</span>
      <div className="resume-actions">
        <a className="btn sm" href={url} download>
          Download Resume
        </a>
        <a className="btn ghost sm" href={url} target="_blank" rel="noopener noreferrer">
          Open in New Tab
        </a>
      </div>
    </div>
  )
}

export function ResumeEmbed({ url }) {
  if (!url) {
    return (
      <div className="resume-viewer-empty">
        <p className="resume-status mono">DOCUMENT STATUS: PENDING UPLOAD</p>
        <p>
          The embedded resume is not live yet. Use the experience summary on this page, or reach out
          directly and I will send it over.
        </p>
        <Link className="btn" to="/contact">
          Get In Touch
        </Link>
      </div>
    )
  }

  return (
    <div className="resume-embed">
      <object data={url} type="application/pdf" width="100%" height="100%" aria-label="Paul Cabiles resume, PDF document">
        <iframe src={url} title="Paul Cabiles resume" width="100%" height="100%">
          <p>
            Your browser cannot display this PDF. <a href={url}>Download the resume</a> instead.
          </p>
        </iframe>
      </object>
    </div>
  )
}
