const steps = [['01','Discover','Understand client goals, audience, and requirements.'],['02','Concept','Develop creative ideas and visual direction.'],['03','Design','Create and refine the visual design.'],['04','Deliver','Provide final designs in the required formats.']]
export default function Process() {
  return (
    <section id="process" className="sec">
      <h2>Creative Design Process</h2>
      <ol className="steps">{steps.map(([n, t, d]) => <li key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></li>)}</ol>
    </section>
  )
}
