import "../styles/navbar.css";
import myImg from "../images/myimg.png";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import backgroundImg from "../images/background_img.jpg";

const Dashboard = () => {
  return (
    <div id="dashboard_wrapper">
      <div id="dashboard">
        <div className="intro">
          <div>Hi,</div>
          <div> I'm Junaid Khan</div>
          <div>Full Stack Web Developer</div>
          <div>
            A dedicated Full Stack Web Developer with expertise in front-end and
            back-end technologies, including React, Redux, Node.js, Express, and
            MongoDB. Proficient in developing responsive, user-friendly
            applications, with a focus on clean code, performance, and security.
            Skilled in collaborating with cross-functional teams to deliver
            projects from concept to deployment.
          </div>
          <div className="intro_links">
            <a href="https://github.com/Junaidify" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/junaidify-khan/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />{" "}
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=junaidkhan23785@gmail.com"
              target="_blank"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
        <div className="myimg">
          <div>
            <img src={myImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
