import { useState } from 'react'
import { categories, projects } from '../data/projects'
import ProjectModal from './ProjectModal'

const projectImages = {
  1: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=90',
  2: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=90',
  3: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=90',
  4: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1400&q=90',
  5: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1400&q=90',
  6: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1400&q=90',
  7: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1400&q=90',
  8: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=90'
}

export default function Portfolio() {
  const [cat, setCat] = useState('All Projects')
  const [sel, setSel] = useState(null)
  const list = cat === 'All Projects' ? projects : projects.filter(p => p.category === cat)

  return (
    <section id="portfolio" className="sec">
      <h2>Selected Work</h2>
      <p className="sub">Self-initiated concept projects. These are not client work.</p>

      <div className="filters" role="tablist">
        {categories.map(c => (
          <button key={c} role="tab" aria-selected={cat === c} className={cat === c ? 'on' : ''} onClick={() => setCat(c)}>
            {c}
          </button>
        ))}
      </div>

      <div className="grid work">
        {list.map((p, i) => (
          <article key={p.id} className={`proj ${i % 5 === 0 ? 'wide' : ''}`}>
            <button className="thumb" onClick={() => setSel(p)} aria-label={`View ${p.title}`}>
              <img
                src={projectImages[p.id]}
                alt={p.title}
                loading="lazy"
              />
            </button>

            <div className="meta">
              <span>{p.category} · Concept</span>
              <h3>{p.title}</h3>
              <p>{p.short}</p>
              <button className="link" onClick={() => setSel(p)}>View Project</button>
            </div>
          </article>
        ))}
      </div>

      {sel && <ProjectModal p={sel} onClose={() => setSel(null)} />}
    </section>
  )
}