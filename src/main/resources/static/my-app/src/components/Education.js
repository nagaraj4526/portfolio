const education = [
  {
    year: "2020 — 2024",
    degree: "BE — Computer Science & Engineering",
    school: "Mahathma Institute of Technology and Engineering College",
    detail: "Pudukottai, Tamil Nadu",
  },
  {
    year: "2026 (Completed)",
    degree: "Java Full Stack Developer",
    school: "IEE Institution",
    detail: "Gandhipuram,Coimbatore, Tamil Nadu",
  },
];

const Education = () => (
  <section id="education">
    <p className="section-label">{"// 04 — MY LEARNING PATH"}</p>
    <h2 className="section-title">Edu<span>cation</span></h2>
    <div className="divider" />
    <div className="edu-timeline">
      {education.map((e, i) => (
        <div className="edu-item" key={i}>
          <div className="edu-year">{e.year}</div>
          <div className="edu-degree">{e.degree}</div>
          <div className="edu-school">{e.school}</div>
          <div className="edu-detail">📍 {e.detail}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Education;