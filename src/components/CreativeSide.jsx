import { useState } from 'react'
import { creative } from '../data/content.js'

export default function CreativeSide() {
  const [i, setI] = useState(0)
  const item = creative.items[i]
  return (
    <section id="creative" className="section creative">
      <div className="wrap">
        <h2 className="section-title reveal">Beyond the screen.</h2>
        <p className="section-lede reveal">{creative.intro}</p>
        <div className="creative-stage">
          <div className="creative-word" aria-hidden="true" key={item.name}>{item.name}</div>
          <div className="creative-side">
            <div role="group" aria-label="Creative interests" className="creative-list">
              {creative.items.map((c, idx) => (
                <button key={c.name} aria-pressed={i === idx} className={i === idx ? 'on' : ''} onClick={() => setI(idx)} onMouseEnter={() => setI(idx)} onFocus={() => setI(idx)}>
                  {c.name}
                </button>
              ))}
            </div>
            <p className="creative-text" aria-live="polite">{item.text}</p>
          </div>
        </div>
        <p className="creative-community">{creative.community}</p>
        {creative.samples.length > 0 ? (
          <ul className="samples">
            {creative.samples.map((s) => <li key={s.url}><a href={s.url} target="_blank" rel="noreferrer">{s.title}</a> <span>{s.kind}</span></li>)}
          </ul>
        ) : (
          <p className="creative-note"> </p>
        )}
      </div>
    </section>
  )
}
