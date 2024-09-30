import { lazy, Suspense, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import "./styles/navbar.css";
import "./App.css";
import resume from ".././public/resume.pdf";

const Dashboard = lazy(() => import("./homepages/Dashboard"));
const Projects = lazy(() => import("./homepages/Projects"));
const Skills = lazy(() => import("./homepages/Skills"));
const Contact = lazy(() => import("./homepages/Contact"));
const Feedback = lazy(() => import("./homepages/Feedback"));

function App() {
  const dashboardRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);

  const handleNavClick = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div id="app_wrapper">
        <nav id="navbar">
          <div className="navbar_logo">Junaid Khan</div>
          <div className="navbar_links">
            <li onClick={() => handleNavClick(dashboardRef)}>Home</li>
            <li onClick={() => handleNavClick(projectsRef)}>Projects</li>
            <li onClick={() => handleNavClick(skillsRef)}>Skills</li>
            <li onClick={() => handleNavClick(contactRef)}>Contact</li>
            <li onClick={() => handleNavClick(feedbackRef)}>Feedback</li>
          </div>
          <div className="navbar_cv" onClick={() => window.open(resume)}>
            CV <FontAwesomeIcon icon={faArrowDown} />
          </div>
        </nav>

        <div ref={dashboardRef}>
          <Suspense fallback={<div>Loading...</div>}>
            <Dashboard />
          </Suspense>
        </div>
        <div ref={projectsRef}>
          <Suspense fallback={<div>Loading...</div>}>
            <Projects />
          </Suspense>
        </div>
        <div ref={skillsRef}>
          <Suspense fallback={<div>Loading...</div>}>
            <Skills />
          </Suspense>
        </div>
        <div ref={contactRef}>
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        </div>
        <div ref={feedbackRef}>
          <Suspense fallback={<div>Loading...</div>}>
            <Feedback />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default App;
