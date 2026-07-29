import { lazy, Suspense, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./styles/navbar.css";
import "./App.css";
import resume from "../public/resume.pdf";

const Dashboard = lazy(() => import("./homepages/Dashboard"));
const Projects = lazy(() => import("./homepages/Projects"));
const Skills = lazy(() => import("./homepages/Skills"));
const Contact = lazy(() => import("./homepages/Contact"));

function App() {
  const dashboardRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const handleNavClick = (ref: React.RefObject<HTMLDivElement>, sectionName: string) => {
    setActiveSection(sectionName);
    setMobileMenuOpen(false);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="app_wrapper">
      {/* Header Navbar */}
      <nav id="navbar">
        <a href="#home" className="navbar_logo" onClick={(e) => { e.preventDefault(); handleNavClick(dashboardRef, "home"); }}>
          Junaid Khan<span className="logo-dot">.</span>
        </a>

        {/* Center Nav Items divided by vertical lines */}
        <ul className={`navbar_center_links ${mobileMenuOpen ? "mobile-active" : ""}`}>
          <li 
            className={activeSection === "home" ? "active" : ""} 
            onClick={() => handleNavClick(dashboardRef, "home")}
          >
            Home
          </li>
          <li 
            className={activeSection === "works" ? "active" : ""} 
            onClick={() => handleNavClick(worksRef, "works")}
          >
            Works
          </li>
          <li 
            className={activeSection === "experience" ? "active" : ""} 
            onClick={() => handleNavClick(experienceRef, "experience")}
          >
            Experience
          </li>
          <li 
            className={activeSection === "contact" ? "active" : ""} 
            onClick={() => handleNavClick(contactRef, "contact")}
          >
            Contact
          </li>
        </ul>

        {/* Right Header Action Buttons (GitHub Redirect + Resume Download) */}
        <div className="navbar_right_action">
          <a 
            href="https://github.com/junaidify" 
            target="_blank" 
            rel="noreferrer" 
            className="btn-navbar-github" 
            title="GitHub Profile (junaidify)"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <button className="btn-navbar-action" onClick={() => window.open(resume)}>
            RESUME
          </button>
          <button 
            className="mobile_toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>
      </nav>

      {/* Main Sections */}
      <main>
        <div ref={dashboardRef}>
          <Suspense fallback={<div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: "#e05638" }}>Loading...</div>}>
            <Dashboard 
              onNavigateProjects={() => handleNavClick(worksRef, "works")}
              onNavigateContact={() => handleNavClick(contactRef, "contact")}
            />
          </Suspense>
        </div>

        <div ref={worksRef}>
          <Suspense fallback={<div style={{ padding: "4rem", textAlign: "center", color: "#e05638" }}>Loading Works...</div>}>
            <Projects />
          </Suspense>
        </div>

        <div ref={experienceRef}>
          <Suspense fallback={<div style={{ padding: "4rem", textAlign: "center", color: "#e05638" }}>Loading Experience...</div>}>
            <Skills />
          </Suspense>
        </div>

        <div ref={contactRef}>
          <Suspense fallback={<div style={{ padding: "4rem", textAlign: "center", color: "#e05638" }}>Loading Contact...</div>}>
            <Contact />
          </Suspense>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        background: "#faf8f2",
        borderTop: "1px solid rgba(20, 36, 44, 0.08)",
        padding: "2.5rem 0",
        color: "#4a5d68",
        fontSize: "0.95rem"
      }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--color-slate-dark)" }}>
            © {new Date().getFullYear()} Junaid Khan. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: "1.5rem", fontSize: "1.2rem" }}>
            <a href="https://github.com/junaidify" target="_blank" rel="noreferrer" style={{ color: "var(--color-slate-dark)" }}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://linkedin.com/in/junaidify-khan" target="_blank" rel="noreferrer" style={{ color: "var(--color-slate-dark)" }}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
