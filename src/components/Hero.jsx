export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-copy">
        <p className="pill"><span className="dot" /> Available for freelance projects</p>
        <h1>Designing Visual Experiences That Make Brands <span className="hl">Stand&nbsp;Out.</span></h1>
        <p className="lead">I’m Khushwinder Sankhla, a creative designer focused on creating modern, meaningful, and visually engaging designs that help brands communicate and grow.</p>
        <div className="row"><a className="btn" href="#portfolio">View My Work</a><a className="btn ghost" href="#contact">Let’s Work Together</a></div>
      </div>

      <div className="hero-art">
        <div className="orb">
          <img
            src="/images/profile.png"
            alt="Khushwinder Sankhla - Graphic Designer"
            className="hero-image"
          />
        </div>

        <div className="card c1"><b>Aa</b><span>Typography</span></div>
        <div className="card c2"><i style={{background:'#FF5C35'}}/><i style={{background:'#fff'}}/><i style={{background:'#333'}}/></div>
        <div className="card c3">KS</div>
      </div>
    </section>
  )
}