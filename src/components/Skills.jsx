import { tools, designSkills } from '../data/skills'
export default function Skills() {
  return (
    <section id="skills" className="sec split2">
      <div><h2>Tools</h2><ul className="chips">{tools.map(t => <li key={t}>{t}</li>)}</ul></div>
      <div><h2>Design Skills</h2><ul className="chips alt">{designSkills.map(t => <li key={t}>{t}</li>)}</ul></div>
    </section>
  )
}
