const projects = [
  {
    icon: "💼",
    badge: "FULL STACK",
    title: "Online Job Portal System",
    desc: "A comprehensive job portal enabling employers to post jobs and candidates to apply, with role-based authentication and real-time status tracking.",
    tech: ["React.js", "Spring Boot", "MySQL", "REST API", "Spring Security", "JPA"],
    features: [
      "Job seeker & employer registration with JWT auth",
      "Advanced job search with filters (location, skill, salary)",
      "Resume upload and application tracking system",
      "Employer dashboard to manage job listings",
      "Admin panel with user & post management",
      "Email notifications for application updates",
    ],
  },
  {
    icon: "📋",
    badge: "FULL STACK",
    title: "Online Complaint Page",
    desc: "A civic complaint management system allowing citizens to register, track, and resolve complaints with department-wise routing and status updates.",
    tech: ["React.js", "Spring Boot", "MySQL", "REST API", "Hibernate", "Maven"],
    features: [
      "Citizen registration and complaint submission",
      "Department-wise complaint routing system",
      "Real-time complaint status tracking",
      "Admin dashboard with analytics and reports",
      "Category-based complaint classification",
      "Automated acknowledgment via email",
    ],
  },
];

const Projects = () => (
  <section id="projects">
    <p className="section-label">{"// 03 — WHAT I BUILT"}</p>
    <h2 className="section-title">My <span>Projects</span></h2>
    <div className="divider" />
    <div className="projects-grid">
      {projects.map((p, i) => (
        <div className="project-card" key={i}>
          <div className="project-header">
            <span className="project-icon">{p.icon}</span>
            <span className="project-badge">{p.badge}</span>
          </div>
          <div className="project-body">
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tech">
              {p.tech.map((t, j) => <span className="tech-tag" key={j}>{t}</span>)}
            </div>
            <ul className="project-features">
              {p.features.map((f, j) => <li key={j}>{f}</li>)}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;