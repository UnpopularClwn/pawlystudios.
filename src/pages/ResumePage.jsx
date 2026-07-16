import Seo from '../components/shared/Seo.jsx'
import PageHero from '../components/shared/PageHero.jsx'
import { ResumeToolbar, ResumeEmbed } from '../components/resume/ResumeViewer.jsx'
import ResumeHighlights from '../components/resume/ResumeHighlights.jsx'
import CTASection from '../components/shared/CTASection.jsx'
import usePageTheme from '../hooks/usePageTheme.js'
import { CONTACT } from '../data/contact.js'
import './ResumePage.css'

export default function ResumePage() {
  usePageTheme('systems')
  const hasResume = Boolean(CONTACT.resumeUrl)

  return (
    <>
      <Seo
        title="Resume — Paul Cabiles"
        description="Paul Cabiles' experience in operations, executive support, and AI-forward systems building, viewable and downloadable on the site."
        path="/resume"
      />
      <PageHero
        title="See the experience behind the work."
        lede="No need to leave the site. Read the highlights below, or open the full resume."
      />
      <section aria-label="Resume">
        <div className={`wrap resume-layout${hasResume ? '' : ' resume-layout-empty'}`}>
          {hasResume && <ResumeToolbar url={CONTACT.resumeUrl} />}
          <div className="resume-layout-highlights">
            <ResumeHighlights />
          </div>
          <ResumeEmbed url={CONTACT.resumeUrl} />
        </div>
      </section>
      <CTASection
        title="Like what you see?"
        subtitle="Tell me what is not getting done and we will go from there."
        ctaLabel="Get In Touch"
      />
    </>
  )
}
