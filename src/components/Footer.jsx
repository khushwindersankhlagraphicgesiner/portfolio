import { LINKEDIN, GITHUB } from '../data/config'
export default function Footer() {
  return (
    <footer className="foot">
      <div><b>KS Creative Studio</b><p>Khushwinder Sankhla · Graphic Designer</p><p>Email: Khushwindersankhla@gmail.com</p></div>
      <nav aria-label="Footer">{['About','Services','Portfolio','Process','Contact'].map(l => <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>)}</nav>
      <div><a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a> <a href={GITHUB} target="_blank" rel="noreferrer">GitHub</a></div>
      <p>© {new Date().getFullYear()} KS Creative Studio. All rights reserved.</p>
      <a className="top" href="#home">Back to top</a>
    </footer>
  )
}
