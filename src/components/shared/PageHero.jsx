import './PageHero.css'

export default function PageHero({ eyebrow, title, lede, children }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1 className="display page-hero-title">{title}</h1>
        {lede && <p className="page-hero-lede">{lede}</p>}
        {children}
      </div>
    </section>
  )
}
