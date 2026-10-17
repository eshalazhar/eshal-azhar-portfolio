import { useEffect, useState } from 'react'
import { profile, sections } from '../data/content.js'
import { useActiveSection } from '../hooks/useReveal.js'

const ids = sections.map((s) => s.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="nav">
      <div className="wrap nav-row">
        <a className="wordmark" href="#top" onClick={() => setOpen(false)}>
          eshal<span>.</span>azhar
        </a>
        <button className="nav-toggle" aria-expanded={open} aria-controls="nav-links" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'}
        </button>
        <nav id="nav-links" className={open ? 'open' : ''} aria-label="Main">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={active === s.id ? 'active' : ''} aria-current={active === s.id ? 'true' : undefined} onClick={() => setOpen(false)}>
              {s.label}
            </a>
          ))}
          {profile.cvFile && (
            <a className="nav-cv" href={`${import.meta.env.BASE_URL}${profile.cvFile}`} download>
              Download CV
            </a>
          )}
        </nav>
      </div>
    </header>
  )
}
