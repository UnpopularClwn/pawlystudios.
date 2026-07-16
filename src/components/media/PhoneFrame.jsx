import './PhoneFrame.css'

// A CSS-only mobile frame for feed-style social graphics. No mockup dependency.
export default function PhoneFrame({ src, alt }) {
  return (
    <figure className="phone-frame">
      <span className="phone-frame-notch" aria-hidden="true" />
      <div className="phone-frame-body">
        <img src={src} alt={alt} loading="lazy" />
      </div>
    </figure>
  )
}
