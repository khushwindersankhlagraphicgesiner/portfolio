import { Lightbulb, Eye, Users, MessageSquare, Clock, BookOpen, ClipboardCheck } from 'lucide-react'
const items = [[Lightbulb,'Creative thinking','Ideas shaped around your message, not templates.'],[Eye,'Attention to detail','Spacing, alignment and type checked on every file.'],[Users,'Client-focused approach','Your goals guide every design decision.'],[MessageSquare,'Clear communication','Simple updates and easy feedback rounds.'],[Clock,'Timely delivery','Agreed timelines, respected.'],[BookOpen,'Continuous learning','Always improving craft and tools.'],[ClipboardCheck,'Understanding requirements','A clear brief before design begins.']]
export default function WhyChooseMe() {
  return (
    <section id="why" className="sec">
      <h2>Why Work With Me</h2>
      <div className="grid why">{items.map(([I, t, d]) => <div key={t} className="why-item"><I size={22} aria-hidden="true" /><h3>{t}</h3><p>{d}</p></div>)}</div>
    </section>
  )
}
