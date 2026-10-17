import { profile } from '../data/content.js'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="wrap contact-grid">
        <h2 className="contact-title reveal">Let us build something worth caring about.</h2>
        <div className="contact-side reveal">
          <p>I am open to AI projects, research collaboration and creative technology ideas. The easiest way to reach me is email.</p>
          <a className="btn primary" href={`mailto:${profile.email}`}>Email me</a>
          <ul className="contact-links">
            <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            {profile.github && <li><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>}
            {profile.softbloomStore && <li><a href={profile.softbloomStore} target="_blank" rel="noopener noreferrer">Softbloom store</a></li>}
            {profile.pinterest && <li><a href={profile.pinterest} target="_blank" rel="noopener noreferrer">Softbloom on Pinterest (@{profile.pinterestHandle})</a></li>}
          </ul>
        </div>
      </div>
    </section>
  )
}
