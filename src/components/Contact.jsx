import { useState } from 'react'
import { EMAIL, LINKEDIN, GITHUB } from '../data/config'
export default function Contact() {
  const [msg, setMsg] = useState('')
  const submit = e => {
    e.preventDefault()
    if (!EMAIL) { setMsg('Email is not configured yet. Please reach out on LinkedIn for now.'); return }
    const f = Object.fromEntries(new FormData(e.target))
    const body = `Name: ${f.name}\nEmail: ${f.email}\nProject type: ${f.type}\nBudget: ${f.budget || 'Not specified'}\n\n${f.details}`
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Project inquiry: ' + f.type)}&body=${encodeURIComponent(body)}`
    setMsg('Opening your email app…')
  }
  return (
    <section id="contact" className="sec split">
      <div>
        <h2>Have a Project in Mind? Let’s Create Something Great.</h2>
        <p className="sub">Tell me what you need and I’ll reply with next steps.</p>
        <p><a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a> · <a href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>{EMAIL && <> · <a href={`mailto:${EMAIL}`}>{EMAIL}</a></>}</p>
      </div>
      <form onSubmit={submit}>
        <label>Full Name<input name="name" required autoComplete="name" /></label>
        <label>Email Address<input name="email" type="email" required autoComplete="email" /></label>
        <label>Project Type<select name="type" required defaultValue=""><option value="" disabled>Select one</option><option>Social Media Design</option><option>Logo / Branding</option><option>YouTube Thumbnail</option><option>Advertising Creative</option><option>Website UI/UX</option><option>Other</option></select></label>
        <label>Budget (Optional)<input name="budget" placeholder="e.g. $200" /></label>
        <label>Project Details<textarea name="details" rows="5" required /></label>
        <button className="btn" type="submit">Send Message</button>
        <p className="note" role="status">{msg}</p>
      </form>
    </section>
  )
}
