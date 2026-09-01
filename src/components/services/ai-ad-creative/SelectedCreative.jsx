import Section from '../../shared/Section.jsx'
import SectionEyebrow from '../../shared/SectionEyebrow.jsx'
import Reveal from '../../shared/Reveal.jsx'
import { portfolio } from '../../../data/ai-ad-creative.js'
import './SelectedCreative.css'

export default function SelectedCreative() {
  const { piece } = portfolio

  return (
    <Section background="sand" className="selected-creative-section" aria-labelledby="selected-creative-heading">
      <div className="selected-creative-layout">
        <Reveal as="div" className="selected-creative-copy" preset="content">
          <SectionEyebrow>{portfolio.eyebrow}</SectionEyebrow>
          <h2 className="selected-creative-heading" id="selected-creative-heading">
            {portfolio.heading}
          </h2>
          <p className="selected-creative-label">{piece.label}</p>
          <p className="selected-creative-body">{portfolio.body}</p>
          <a className="selected-creative-link" href={piece.youtubeUrl} target="_blank" rel="noreferrer noopener">
            Watch on YouTube
          </a>
        </Reveal>

        <Reveal as="div" className="selected-creative-player-frame" preset="content" y={12}>
          <iframe
            className="selected-creative-player"
            src={piece.embedUrl}
            title={piece.title}
            loading="lazy"
            allow="encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </Reveal>
      </div>
    </Section>
  )
}
