import { useState } from 'react'
import { projects, moreBuilds, filters } from '../data/content.js'

function Diagram({ title, nodes }) {
  return (
    <div className="diagram" role="img" aria-label={`${title}: ${nodes.join(', then ')}`}>
      <p className="diagram-title">{title}</p>
      <ol aria-hidden="true">
        {nodes.map((n) => <li key={n}>{n}</li>)}
      </ol>
    </div>
  )
}

function Project({ p, featured }) {
  const [open, setOpen] = useState(false)
  const panel = `details-${p.id}`
  return (
    <article className={`project${featured ? ' featured' : ''}`}>
      <div className="project-info">
        <p className="project-status">{p.status}</p>
        <h3>{p.title}</h3>
        <p><strong>The problem.</strong> {p.problem}</p>
        <p><strong>The approach.</strong> {p.approach}</p>
        <button className="more" aria-expanded={open} aria-controls={panel} onClick={() => setOpen(!open)}>
          {open ? 'Hide details' : 'Role and details'}
        </button>
        <div id={panel} className="details" hidden={!open}>
          <p><strong>My role.</strong> {p.role}</p>
          <ul>{p.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
        </div>
        <ul className="tech">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
        {(p.repo || p.demo) && (
          <p className="links">
            {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">GitHub repository</a>}
            {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Live demo</a>}
          </p>
        )}
      </div>
      <Diagram title={p.diagramTitle} nodes={p.diagram} />
    </article>
  )
}

export default function Projects() {
  const [f, setF] = useState('all')
  const shown = projects.filter((p) => f === 'all' || p.cats.includes(f))
  return (
    <section id="projects" className="section projects">
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-title reveal">Things I have built.</h2>
          <p className="section-lede reveal">Research, full-stack applications and tools. The diagrams are my own sketches of how each project fits together, not screenshots.</p>
        </div>
        <div className="filters" role="group" aria-label="Filter projects">
          {filters.map((x) => (
            <button key={x.id} aria-pressed={f === x.id} className={f === x.id ? 'on' : ''} onClick={() => setF(x.id)}>{x.label}</button>
          ))}
        </div>
        <div className="project-list">
          {shown.map((p, idx) => <Project key={p.id} p={p} featured={idx === 0} />)}
        </div>
        <div className="more-builds">
          <h3>Also built</h3>
          <ul>
            {moreBuilds.map((m) => (
              <li key={m.name}><strong>{m.name}</strong><span>{m.text}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
