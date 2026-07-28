const About = () => (
  <section id="about">
    <p className="section-label">{"// 01 — WHO AM I"}</p>
    <h2 className="section-title">About <span>Me</span></h2>
    <div className="divider" />
    <div className="about-grid">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="about-avatar">
          <img
            src="nagaraj.png"
            alt="Nagarajan N"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
              display: "block",
            }}
          />
        </div>
      </div>
      <div className="about-text">
        <p>
          Hi! I'm <strong>Nagarajan N</strong>, a dedicated Full Stack Developer with a
          BE in Computer Science & Engineering from <strong>Mahathma Institute of Technology
          and Engineering College, Pudukottai</strong>, graduated in 2024.
        </p>
        <p>
          I completed my <strong>Java Full Stack Development course</strong> at
          IEE Institution, Coimbatore — where I mastered React.js, Spring Boot,
          MySQL, and modern web development practices.
        </p>
        <p>
          I love building real-world applications that solve problems. From designing
          beautiful frontends in React to engineering robust REST APIs with Spring Boot
          and managing relational data in MySQL — I handle the <strong>full stack</strong>.
        </p>
        <div className="about-tags">
          <span className="tag">Problem Solver</span>
          <span className="tag">Team Player</span>
          <span className="tag">Fast Learner</span>
          <span className="tag">Clean Code</span>
          <span className="tag">REST APIs</span>
          <span className="tag">Full Stack</span>
        </div>
      </div>
    </div>
  </section>
);

export default About;