import React, { useRef, useState } from "react";
import "./App.css";
import "./styles/style.css";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Button, Text } from "@chakra-ui/react";
import { Skills } from "./components/Skills";
import { Resume } from "./components/Resume";
import { Feedback } from "./components/Feedback";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAffiliatetheme } from "@fortawesome/free-brands-svg-icons";

function App() {
  const [currentColor, setCurrentColor] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const homeRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleNavClick = (
    section: string,
    ref: React.RefObject<HTMLDivElement>
  ) => {
    scrollToRef(ref);
    setActiveSection(section);
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          margin: "0 auto",
          backgroundColor: currentColor ? "white" : "black",
          position: "relative",
        }}
      >
        <nav
          id="navbar"
          style={{
            backgroundColor: currentColor ? "white" : "black",
            position: "sticky",
            left: "10vw",
            top: "0",
          }}
        >
          <Text
            fontSize={{ base: "1.5rem", md: "2rem" }}
            fontWeight={"bold"}
            fontStyle={"italic"}
            color={"white"}
            className="logo_box"
          >
            <span className="logo">J</span>
            <span style={{ color: currentColor ? "black" : "white" }}>
              Junaid
            </span>
            <span className="name_logo">ify</span>
          </Text>

          <div>
            <Text fontWeight={"bold"} color={"red"}>
              <Button
                variant="link"
                onClick={() => handleNavClick("home", homeRef)}
                color={
                  currentColor
                    ? activeSection === "home"
                      ? "red"
                      : "black"
                    : activeSection === "home"
                    ? "red"
                    : "white"
                }
              >
                Home
              </Button>
            </Text>
            <Text fontWeight={"bold"}>
              <Button
                variant="link"
                onClick={() => handleNavClick("portfolio", portfolioRef)}
                color={
                  currentColor
                    ? activeSection === "portfolio"
                      ? "red"
                      : "black"
                    : activeSection === "portfolio"
                    ? "red"
                    : "white"
                }
              >
                Projects
              </Button>
            </Text>
            <Text fontWeight={"bold"}>
              <Button
                variant="link"
                onClick={() => handleNavClick("skills", skillsRef)}
                color={
                  currentColor
                    ? activeSection === "skills"
                      ? "red"
                      : "black"
                    : activeSection === "skills"
                    ? "red"
                    : "white"
                }
              >
                Skills
              </Button>
            </Text>
            <Text fontWeight={"bold"}>
              <Button
                variant="link"
                onClick={() => handleNavClick("resume", resumeRef)}
                color={
                  currentColor
                    ? activeSection === "resume"
                      ? "red"
                      : "black"
                    : activeSection === "resume"
                    ? "red"
                    : "white"
                }
              >
                Resume/Connect
              </Button>
            </Text>
            <Text fontWeight={"bold"} cursor={"pointer"}>
              <Button
                variant="link"
                onClick={() => handleNavClick("feedback", feedbackRef)}
                color={
                  currentColor
                    ? activeSection === "feedback"
                      ? "red"
                      : "black"
                    : activeSection === "feedback"
                    ? "red"
                    : "white"
                }
              >
                Feedback
              </Button>
            </Text>
          </div>
          <Button
            className="theme"
            color={currentColor ? "white" : "black"}
            bg={currentColor ? "black" : "white"}
            onClick={() => setCurrentColor((prev) => !prev)}
          >
            <FontAwesomeIcon icon={faAffiliatetheme} />
          </Button>
        </nav>

        <div ref={homeRef} id="home">
          <Home textColor={currentColor ? "black" : "white"} />
        </div>
        <div ref={portfolioRef} id="portfolio">
          <Projects textColor={currentColor ? "black" : "white"} />
        </div>
        <div ref={skillsRef} id="skills">
          <Skills textColor={currentColor ? "black" : "white"} />
        </div>
        <div ref={resumeRef} id="resume">
          <Resume textColor={currentColor ? "black" : "white"} />
        </div>
        <div ref={feedbackRef} id="feedback">
          <Feedback textColor={currentColor ? "black" : "white"} />
        </div>
      </div>
    </>
  );
}

export default App;
