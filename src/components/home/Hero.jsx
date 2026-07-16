import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1 className="display">
            You run the jobs. <span className="em">I handle the rest.</span>
          </h1>
          <p className="hero-sub">
            You did not start your business to spend your nights catching up on admin work and
            trying to figure out Instagram.
          </p>
          <div className="hero-ctas">
            <Link className="btn" to="/contact">
              Let&rsquo;s Talk
            </Link>
          </div>
          <p className="hero-note mono">Working with roofing and home service companies in Tampa, FL.</p>
        </div>

        <div className="hero-photo">
          <img
            src="/images/paul-headshot-hero.png"
            alt="Paul Cabiles, marketing and operations builder for home service businesses"
            width="440"
            height="550"
            fetchPriority="high"
          />
        </div>
      </div>
    </header>
  )
}
