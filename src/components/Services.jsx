import { services } from '../data/services'
export default function Services() {
  return (
    <section id="services" className="sec">
      <h2>Services</h2><p className="sub">Design for brands that want to look sharp and communicate clearly.</p>
      <div className="grid svc">
        {services.map(({ icon: Icon, title, text }) => (
          <article key={title} className="svc-card"><Icon size={26} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>
        ))}
      </div>
    </section>
  )
}
