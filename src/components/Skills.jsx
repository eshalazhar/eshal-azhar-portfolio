import { useState } from 'react'
import { skillGroups, softSkills, languages } from '../data/content.js'

export default function Skills() {
  const [id, setId] = useState('ai')
  const group = skillGroups.find((g) => g.id === id)
  return (
    <section id="skills" className="section skills">
      <div className="wrap">
        <h2 className="section-title reveal">What I work with.</h2>
        <div className="skills-grid">
          <div role="group" aria-label="Skill categories" className="skill-cats">
            {skillGroups.map((g) => (
              <button key={g.id} aria-pressed={id === g.id} aria-controls="skill-panel" className={id === g.id ? 'on' : ''} onClick={() => setId(g.id)}>
                {g.label}
              </button>
            ))}
          </div>
          <div id="skill-panel" className="skill-panel" aria-live="polite">
            <ul>{group.items.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        </div>
        <div className="skills-foot">
          <div>
            <p className="small-title">Working style</p>
            <p>{softSkills.join(' · ')}</p>
          </div>
          <div>
            <p className="small-title">Languages</p>
            <p>{languages.join(' · ')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
