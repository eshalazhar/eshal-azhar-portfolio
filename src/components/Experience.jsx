import { experience } from '../data/content.js'

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-title reveal">Learning by doing, with people.</h2>
          <p className="section-lede reveal">Research, client work, leadership and a venture of my own. Most of it started in the last year, and I am still adding to it.</p>
        </div>
        <ol className="timeline">
          {experience.map((e) => (
            <li key={e.role + e.org} className="tl-item reveal">
              <p className="tl-when">{e.when}</p>
              <div className="tl-body">
                <p className="tl-kind">{e.kind}</p>
                <h3>{e.role}</h3>
                <p className="tl-org">{e.org}</p>
                {e.points.length > 0 && <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>}
                {e.links && (
                  <p className="tl-links">
                    {e.links.map((l) => <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer">{l.label}</a>)}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
