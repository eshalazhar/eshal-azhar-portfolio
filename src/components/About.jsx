import { useState } from 'react'
import { interests, exploring, education } from '../data/content.js'

export default function About() {
  const [i, setI] = useState(0)
  return (
    <section id="about" className="section about">
      <div className="wrap">
        <div className="about-top">
          <h2 className="section-title reveal">A little more than code.</h2>
          <div className="about-text reveal">
            <p>I study Artificial Intelligence, but the through-line is simpler: I like turning messy problems into something people can use.</p>
            <p>That has meant a clinical decision-support prototype, full-stack apps, and a tool that explains datasets in plain English. Outside the lab I run campus events with a team, start small digital products, and write songs and stories.</p>
          </div>
        </div>

        <div className="about-mid">
          <div className="interest-picker reveal">
            <p className="small-title">How it connects</p>
            <div role="group" aria-label="Interests" className="interest-list">
              {interests.map((it, idx) => (
                <button key={it.name} aria-pressed={i === idx} className={i === idx ? 'on' : ''} onClick={() => setI(idx)}>
                  {it.name}
                </button>
              ))}
            </div>
            <p className="interest-text" aria-live="polite">{interests[i].text}</p>
          </div>

          <aside className="exploring reveal">
            <p className="small-title">Currently exploring</p>
            <ul>{exploring.map((e) => <li key={e}>{e}</li>)}</ul>
          </aside>
        </div>

        <div className="edu reveal">
          <p className="small-title">Education</p>
          <ol>
            {education.map((e) => (
              <li key={e.title}>
                <span className="edu-years">{e.years}</span>
                <span><strong>{e.title}</strong><br />{e.place}<br /><em>{e.note}</em></span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
