import SectionHeading from '../shared/SectionHeading.jsx'
import { CONTACT } from '../../data/contact.js'
import './AboutSection.css'

export default function AboutSection() {
  return (
    <section id="about" aria-label="About Paul">
      <div className="wrap">
        <SectionHeading title="Who is this guy?" />
        <div className="about-inner">
          <img
            src="/images/paul-headshot-about.png"
            alt="Paul Cabiles"
            width="240"
            height="240"
            loading="lazy"
          />
          <div className="about-copy">
            <p>
              Five years working remotely with US businesses. Started in customer support. 120+
              interactions a day for three years. That is where I learned to communicate fast and
              stay calm when everything is on fire.
            </p>
            <p>
              Moved into executive assistance. Ended up being the person who built the systems,
              SOPs, and automations that teams ran on. Turns out I am better at building the machine
              than just operating it.
            </p>
            <p>
              I use AI every day. Claude, ChatGPT. Not for party tricks. For actual work. Building
              documentation, automating repetitive stuff, solving problems in hours that used to
              take days.
            </p>
            <p>Based in the Philippines. Working US hours.</p>
            <p>
              I also brew my own coffee, follow F1 every race weekend, and have 400+ hours flying the
              A320NEO on the sim. Just so you know I am a real person.
            </p>
            {CONTACT.resumeUrl ? (
              <a className="about-resume-link mono" href={CONTACT.resumeUrl} target="_blank" rel="noopener noreferrer">
                View my resume &rarr;
              </a>
            ) : (
              <p className="about-resume-link mono pending">Resume coming soon</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
