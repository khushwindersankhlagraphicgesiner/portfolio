import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import Art from './Art'
export default function ProjectModal({ p, onClose }) {
  const ref = useRef(null)
  useEffect(() => {
    const key = e => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', key); document.body.style.overflow = 'hidden'; ref.current?.focus()
    return () => { document.removeEventListener('keydown', key); document.body.style.overflow = '' }
  }, [onClose])
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-label={p.title} onClick={e => e.stopPropagation()}>
        <button ref={ref} className="close" onClick={onClose} aria-label="Close"><X /></button>
        <div className="m-art"><Art p={p} /></div>
        <div className="m-body">
          <span className="badge">Self-initiated concept project</span>
          <h3>{p.title}</h3><p>{p.detail}</p>
          <dl><dt>Category</dt><dd>{p.category}</dd><dt>Tools</dt><dd>{p.tools}</dd></dl>
          <a className="btn" href="#contact" onClick={onClose}>Start a similar project</a>
        </div>
      </div>
    </div>
  )
}
