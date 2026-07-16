import './ResumeHighlights.css'

const HIGHLIGHTS = [
  'Five years working remotely, supporting US businesses',
  'Senior Executive Assistant coordinating a 28-person team across 100+ client accounts',
  'Built the social media workflow for 30 to 40 clients from scratch',
  'Automated a manual process, cutting it from 3 hours a day to 20 minutes',
  'Built Set Sail, a client portal that replaced Monday.com',
  'Trained through Athena’s Executive Assistant program',
]

export default function ResumeHighlights() {
  return (
    <div className="resume-highlights">
      <p className="resume-highlights-label mono">EXPERIENCE, VERIFIED</p>
      <ul>
        {HIGHLIGHTS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
