const Hero = () => (
  <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "80px" }}>
    <div className="hero-bg" />
    <div className="hero-content">
	<p className="hero-greeting">
	  {"// HELLO WORLD — WELCOME TO MY PORTFOLIO"}
	</p>
      <h1 className="hero-name">
        <span className="first">NAGARAJAN</span><br />
        <span className="last">N.</span>
      </h1>
      <p className="hero-role">
        Full Stack Developer — <span>HTML/React.js & Spring Boot</span>
      </p>
      <p className="hero-desc">
        A passionate Computer Science & Engineering graduate building modern web applications
        with cutting-edge technologies. Specialized in Java Full Stack Development, crafting
        seamless digital experiences from database to UI.
      </p>
      <div className="hero-btns">
        <a href="#projects" className="btn-primary">VIEW PROJECTS</a>
        <a href="#contact" className="btn-secondary">HIRE ME</a>
      </div>
      <div className="hero-stats">
        <div>
          <div className="stat-num">2+</div>
          <div className="stat-label">PROJECTS</div>
        </div>
        <div>
          <div className="stat-num">7+</div>
          <div className="stat-label">SKILLS</div>
        </div>
        <div>
          <div className="stat-num">2024</div>
          <div className="stat-label">GRADUATE</div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;