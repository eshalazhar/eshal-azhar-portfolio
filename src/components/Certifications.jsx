import { certifications, googleSpecialization as g } from '../data/content.js'

export default function Certifications() {
  return (
    <section id="learning" className="section learning">
      <div className="wrap learning-grid">
        <h2 className="section-title reveal">Always learning.</h2>
        <div>
          <div className="spec reveal">
            <h3>{g.name}</h3>
            <p className="meta">{g.org} · {g.date}</p>
            <ul>{g.courses.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
          <ul className="certs">
            {certifications.map((c) => (
              <li key={c.name} className="reveal">
                <span>{c.name}</span>
                <span className="meta">{c.org} · {c.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
