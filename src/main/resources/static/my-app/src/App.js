import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <div className="loader-text">
          <span>N</span><span>A</span><span>G</span><span>A</span><span>R</span><span>A</span><span>J</span><span>A</span><span>N</span>
        </div>
        <div className="loader-bar"><div className="loader-fill"></div></div>
      </div>
    );
  }

  return (
    <div className="app">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <footer className="footer">
        <p>© 2024 Nagarajan N — Built with React.js & Spring Boot</p>
      </footer>
    </div>
  );
}

export default App;