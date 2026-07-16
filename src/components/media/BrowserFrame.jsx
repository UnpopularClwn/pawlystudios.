import './BrowserFrame.css'

// A CSS-only browser window chrome around real screenshots. No mockup dependency,
// no fake content — just a designed frame for genuine project media.
export default function BrowserFrame({ src, alt, label }) {
  return (
    <figure className="browser-frame">
      <div className="browser-frame-bar">
        <span className="browser-frame-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        {label && <span className="browser-frame-label mono">{label}</span>}
      </div>
      <div className="browser-frame-body">
        <img src={src} alt={alt} loading="lazy" />
      </div>
    </figure>
  )
}
