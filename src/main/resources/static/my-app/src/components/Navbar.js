import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home","about","skills","projects","education","contact"];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) { setActive(id); break; }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "skills", label: "SKILLS" },
    { id: "projects", label: "PROJECTS" },
    { id: "education", label: "EDUCATION" },
    { id: "contact", label: "CONTACT" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-logo">NAG<span>.</span>DEV</div>
      <ul className="nav-links">
        {links.map(l => (
          <li key={l.id}>
            <a
              href={`#${l.id}`}
              className={active === l.id ? "active" : ""}
              onClick={() => setActive(l.id)}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;