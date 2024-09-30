import { faCopy, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "../styles/contactandfeedback.css";

const Contact = () => {
  return (
    <div id="contact">
      <h1>Connect Me</h1>
      <div className="contact_container">
        <div className="contact_content">
          <div>
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            junaidkhan23785@gmail.com
          </div>
          <button
            onClick={() =>
              navigator.clipboard.writeText("junaidkhan23785@gmail.com")
            }
          >
            <FontAwesomeIcon icon={faCopy} />
          </button>
        </div>

        <div className="contact_social">
          <a href="https://www.linkedin.com/in/junaidify-khan/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} /> Linkedin
          </a>
          <a href="https://github.com/Junaidify" target="_blank">
            <FontAwesomeIcon icon={faGithub} /> Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
