const tags = ['Visual storytelling','Branding','Typography','Colour & layout','Creative problem-solving']

export default function About() {
  return (
    <section id="about" className="sec split">
      <div>
        <img
          src="/images/profile.png"
          alt="Khushwinder Sankhla - Graphic Designer"
          className="about-image"
        />
      </div>

      <div>
        <h2>Behind Every Great Design Is a Great Idea.</h2>
        <p>I’m Khushwinder Sankhla, an aspiring graphic designer passionate about visual storytelling, modern design, branding, and creative problem-solving.</p>
        <p>I enjoy experimenting with typography, color combinations, layouts, and creative concepts to develop designs that are both attractive and meaningful.</p>
        <p>My goal is to help businesses and individuals communicate their ideas through effective visual design.</p>
        <ul className="tags">{tags.map(s => <li key={s}>{s}</li>)}</ul>
      </div>
    </section>
  )
}