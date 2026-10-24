import { useEffect, useRef } from 'react'
import { profile } from '../data/content.js'
import heroImg from '../assets/eshal-hero.jpg'

// Animated network of nodes; labels are tools/ideas from the CV. Nodes drift and lean toward the pointer.
const LABELS = ['PyTorch', 'PCA', 'SVM', '5-fold CV', 'Flask', 'React', 'Pandas']

function NetworkCanvas({ hostRef }) {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current
    const host = hostRef.current
    const ctx = canvas.getContext('2d')
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w = 0, h = 0, raf = 0, nodes = [], visible = true
    const mouse = { x: -999, y: -999 }

    const init = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = w < 640 ? 28 : 52
      nodes = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
        r: 2 + Math.random() * 2.5, label: i < LABELS.length ? LABELS[i] : '', pop: i % 9 === 0,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const n of nodes) {
        if (!still) {
          n.x += n.vx; n.y += n.vy
          const dx = mouse.x - n.x, dy = mouse.y - n.y, d = Math.hypot(dx, dy)
          if (d < 160) { n.x += dx * 0.004; n.y += dy * 0.004 }
          if (n.x < 0 || n.x > w) n.vx *= -1
          if (n.y < 0 || n.y > h) n.vy *= -1
        }
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y)
          if (d < 130) {
            ctx.strokeStyle = `rgba(107,58,38,${0.35 * (1 - d / 130)})`
            ctx.lineWidth = 1
            ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y); ctx.stroke()
          }
        }
      }
      ctx.font = '600 12px Figtree, sans-serif'
      for (const n of nodes) {
        ctx.fillStyle = n.pop ? '#b3261e' : '#8a5a2b'
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill()
        if (n.label) { ctx.fillStyle = '#1f1612'; ctx.fillText(n.label, n.x + 8, n.y + 4) }
      }
    }

    const loop = () => { if (visible) draw(); raf = requestAnimationFrame(loop) }
    const onMove = (e) => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top }
    const onLeave = () => { mouse.x = -999; mouse.y = -999 }

    init(); draw()
    if (!still) raf = requestAnimationFrame(loop)
    const ro = new ResizeObserver(() => { init(); draw() })
    ro.observe(canvas)
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting })
    io.observe(canvas)
    host.addEventListener('pointermove', onMove)
    host.addEventListener('pointerleave', onLeave)
    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); host.removeEventListener('pointermove', onMove); host.removeEventListener('pointerleave', onLeave) }
  }, [hostRef])
  return <canvas ref={ref} className="hero-canvas" aria-hidden="true" />
}

export default function Hero() {
  const host = useRef(null)

  // The portrait blurs and softens a little as you scroll away from the hero.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = host.current
    let raf = 0
    const update = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const p = Math.min(Math.max(window.scrollY / (el.offsetHeight * 0.9), 0), 1)
        el.style.setProperty('--blur', `${(p * 8).toFixed(1)}px`)
        el.style.setProperty('--fade', (1 - p * 0.35).toFixed(2))
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => { cancelAnimationFrame(raf); window.removeEventListener('scroll', update) }
  }, [])

  return (
    <section id="top" className="hero" ref={host}>
      <div className="hero-photo">
        <img src={heroImg} alt="Portrait of Eshal Azhar" width="816" height="1020" />
      </div>
      <NetworkCanvas hostRef={host} />
      <div className="wrap hero-grid">
        <div className="hero-main">
          <p className="hero-label">AI student · builder · creative thinker</p>
          <h1 className="hero-name">
            <span>Eshal</span>
            <span className="indent">Azhar</span>
          </h1>
          <p className="hero-headline">{profile.headline}</p>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-cta">
            <a className="btn primary" href="#projects">Explore my work</a>
            {profile.cvFile ? (
              <a className="btn" href={`${import.meta.env.BASE_URL}${profile.cvFile}`} download>Download CV</a>
            ) : (
              <a className="btn" href="#contact">Get in touch</a>
            )}
          </div>
        </div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to About section">
        <span className="line" />
        Scroll
      </a>
    </section>
  )
}
