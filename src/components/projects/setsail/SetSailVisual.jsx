import Image from 'next/image'

// Renders a real screenshot when one exists, or an honest empty development
// state when it doesn't. Never fabricates interface content.
export default function SetSailVisual({ screenshot, variant = 'primary' }) {
  const { label, alt, aspect, src } = screenshot

  return (
    <div className={`setsail-frame setsail-frame--${variant} setsail-frame--${aspect}`}>
      {src ? (
        <Image
          src={src}
          alt={alt || label}
          fill
          sizes={variant === 'primary' ? '(max-width: 960px) 100vw, 1180px' : '(max-width: 960px) 50vw, 320px'}
          className="setsail-frame-image"
        />
      ) : (
        <div className="setsail-frame-empty" role="img" aria-label={`${label} — screenshot pending`}>
          <span className="setsail-frame-empty-label">{label}</span>
          <span className="setsail-frame-empty-note">Screenshot pending</span>
        </div>
      )}
    </div>
  )
}
