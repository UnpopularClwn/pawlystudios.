import './TextureLayer.css'

// Fixed, decorative, extremely cheap (two CSS gradients, no image asset). Sits behind all
// content and never intercepts pointer events. Tints subtly per theme via CSS variables.
export default function TextureLayer() {
  return <div className="texture-layer" aria-hidden="true" />
}
