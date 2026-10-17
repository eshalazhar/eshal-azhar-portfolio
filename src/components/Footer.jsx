import { profile } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <a href="#top" className="to-top">Back to top ↑</a>
      </div>
    </footer>
  )
}
