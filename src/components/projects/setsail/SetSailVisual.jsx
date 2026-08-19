import Image from 'next/image'

// Renders a real screenshot when one exists, or an honest empty development
// state when it doesn't. Never fabricates interface content.
export default function SetSailVisual({ screenshot, variant = 'primary' }) {
  const { label, alt, src, width, height } = screenshot
  const sizes =
    variant === 'primary'
      ? '(max-width: 1228px) calc(100vw - 48px), 1132px'
      : '(max-width: 860px) calc(100vw - 48px), (max-width: 1228px) calc((100vw - 80px) / 2), 550px'

  return (
    <div className={`setsail-frame setsail-frame--${variant}`}>
      {src ? (
        <Image
          src={src}
          alt={alt || label}
          width={width}
          height={height}
          sizes={sizes}
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
