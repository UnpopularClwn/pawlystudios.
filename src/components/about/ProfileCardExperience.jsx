import { logo } from '../../data/brand.js'
import ProfileCard from './ProfileCard.jsx'

export default function ProfileCardExperience() {
  return (
    <div className="about-profile-card">
      <ProfileCard
        name="Paul Cabiles"
        title="Web Developer"
        handle="pawlystudios"
        contactText="Start a Project"
        avatarUrl="/images/paul-headshot-about.png"
        iconUrl={logo.src}
        showUserInfo={false}
        enableTilt
        enableMobileTilt={false}
        behindGlowEnabled
        behindGlowColor="rgba(198, 231, 158, 0.35)"
        behindGlowSize="56%"
        innerGradient="linear-gradient(145deg, var(--color-pine-soft) 0%, var(--color-pine) 72%, var(--color-lime-deep) 145%)"
      />
    </div>
  )
}
