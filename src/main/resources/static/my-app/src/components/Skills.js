const skills = [
  { icon: "🌐", name: "HTML5 & CSS3", level: 90, desc: "Semantic markup, Flexbox, Grid, animations" },
  { icon: "⚡", name: "JavaScript", level: 82, desc: "ES6+, DOM manipulation, async/await" },
  { icon: "⚛️", name: "React.js", level: 85, desc: "Hooks, Context API, React Router, components" },
  { icon: "☕", name: "Java", level: 88, desc: "OOP, Collections, Exception handling, JDBC" },
  { icon: "🌱", name: "Spring Boot", level: 80, desc: "REST APIs, JPA, Hibernate, Spring Security" },
  { icon: "🗄️", name: "MySQL", level: 82, desc: "Schema design, Joins, stored procedures" },
  { icon: "🖥️", name: "Web Creation", level: 87, desc: "Full project lifecycle, UI/UX design" },
  { icon: "🔗", name: "Full Stack Dev", level: 83, desc: "End-to-end development, API integration" },
];

const Skills = () => (
  <section id="skills">
    <p className="section-label">{"// 02 — WHAT I KNOW"}</p>
    <h2 className="section-title">Technical <span>Skills</span></h2>
    <div className="divider" />
    <div className="skills-grid">
      {skills.map((s, i) => (
        <div className="skill-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
          <div className="skill-icon">{s.icon}</div>
          <div className="skill-name">{s.name}</div>
          <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "0.3rem" }}>{s.desc}</div>
          <div className="skill-bar-wrap">
            <div className="skill-bar-fill" style={{ width: `${s.level}%` }} />
          </div>
          <div className="skill-level">{s.level}%</div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;