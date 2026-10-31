import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
const links = ['Home','About','Services','Portfolio','Process','Contact']
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    links.forEach(l => { const el = document.getElementById(l.toLowerCase()); el && io.observe(el) })
    return () => io.disconnect()
  }, [])
  return (
    <header className="nav">
      <a href="#home" className="logo" aria-label="KS Creative Studio home">KS</a>
      <nav className={open ? 'open' : ''} aria-label="Main">
        {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} className={active === l.toLowerCase() ? 'on' : ''} onClick={() => setOpen(false)}>{l}</a>)}
        <a href="#contact" className="btn small" onClick={() => setOpen(false)}>Let’s Talk</a>
      </nav>
      <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </header>
  )
}
