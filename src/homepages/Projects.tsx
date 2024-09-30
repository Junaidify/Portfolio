import carbuddy from "../images/carbuddy.png";
import wine from "../images/second.png";
import weather from "../images/whether.png";
import aidex from "../images/aidex.png";

import "../styles/projectandskills.css";

const Projects = () => {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <div className="project_content_container">
        <div className="project_content_box">
          <div className="project_img">
            <img src={carbuddy} alt="" />
          </div>
          <div className="project_content">
            <h2>CarBuddy</h2>
            <p>
              <a href="https://rent-wheels-amber.vercel.app/" target="_blank">
                Live Demo
              </a>
              <a
                href="https://github.com/Junaidify/Carbuddy.git"
                target="_blank"
              >
                Source Code
              </a>
            </p>
          </div>
        </div>
        <div className="project_content_box">
          <div className="project_img">
            <img src={wine} alt="" />
          </div>
          <div className="project_content">
            <h2>Thirsty Wine</h2>
            <p>
              <a
                href="https://pay-pal-pioneers-068.vercel.app/"
                target="_blank"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/Adit704/PayPal-Pioneers_068.git"
                target="_blank"
              >
                Source Code
              </a>
            </p>
          </div>
        </div>
        <div className="project_content_box">
          <div className="project_img">
            <img src={weather} alt="" />
          </div>
          <div className="project_content">
            <h2>Weather App</h2>
            <p>
              <a href="https://open-weather-weld.vercel.app/" target="_blank">
                Live Demo
              </a>
              <a
                href="https://github.com/Junaidify/Open-weather.git"
                target="_blank"
              >
                Source Code
              </a>
            </p>
          </div>
        </div>
        <div className="project_content_box">
          <div className="project_img">
            <img src={aidex} alt="" />
          </div>
          <div className="project_content">
            <h2>WHO</h2>
            <p>
              <a href="https://www.who.int/#" target="_blank">
                Live Demo
              </a>
              <a
                href="https://github.com/Junaidify/cw-web-204.git"
                target="_blank"
              >
                Source Code
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
