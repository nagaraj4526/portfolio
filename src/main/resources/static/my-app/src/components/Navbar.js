import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "education", "contact"];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu automatically if the viewport is resized back to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "skills", label: "SKILLS" },
    { id: "projects", label: "PROJECTS" },
    { id: "education", label: "EDUCATION" },
    { id: "contact", label: "CONTACT" },
  ];

  const handleLinkClick = (id) => {
    setActive(id);
    setIsOpen(false); // collapse menu after a link is tapped
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        NAG<span>.</span>DEV
      </div>

      {/* Hamburger button — only visible on mobile via CSS */}
      <button
        className="nav-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        {links.map((l) => (
          <li key={l.id}>
            <a
              href={`#${l.id}`}
              className={active === l.id ? "active" : ""}
              onClick={() => handleLinkClick(l.id)}
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