export default function SectionHeading({ eyebrow, title, lede, align }) {
  return (
    <div style={align === 'center' ? { textAlign: 'center' } : undefined}>
      {eyebrow && (
        <div className="eyebrow" style={align === 'center' ? { justifyContent: 'center' } : undefined}>
          {eyebrow}
        </div>
      )}
      <h2 className="section-title display">{title}</h2>
      {lede && (
        <p className="section-lede" style={align === 'center' ? { marginInline: 'auto' } : undefined}>
          {lede}
        </p>
      )}
    </div>
  )
}
