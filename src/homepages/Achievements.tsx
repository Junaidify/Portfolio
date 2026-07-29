import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faAward, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "../styles/contactandfeedback.css";

const Achievements = () => {
  return (
    <div id="achievements">
      <div className="container">
        <div className="section-header">
          <h2 className="gradient-text">Achievements & Education</h2>
          <p>Problem-solving credentials, open-source badges, and academic foundation.</p>
        </div>

        <div className="achievements_grid">
          {/* LeetCode Card */}
          <div className="achievement_card">
            <div className="achievement_icon">
              <FontAwesomeIcon icon={faCode} />
            </div>
            <span className="achievement_tag">Algorithms & DSA</span>
            <h3>LeetCode Problem Solving</h3>
            <p>
              Solved core Data Structures & Algorithms problems across binary trees, dynamic programming, recursion, backtracking, and system design fundamentals.
            </p>
            <a 
              href="https://leetcode.com/u/junaidify" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-secondary"
              style={{ textDecoration: "none", fontSize: "0.85rem", padding: "0.5rem 1rem", marginTop: "auto", alignSelf: "flex-start" }}
            >
              <FontAwesomeIcon icon={faCode} /> View LeetCode Profile
            </a>
          </div>

          {/* Open Source Card */}
          <div className="achievement_card">
            <div className="achievement_icon" style={{ background: "rgba(6, 182, 212, 0.15)", color: "#06b6d4" }}>
              <FontAwesomeIcon icon={faAward} />
            </div>
            <span className="achievement_tag" style={{ color: "#06b6d4" }}>GitHub Badges</span>
            <h3>Open Source & Pull Shark x2</h3>
            <p>
              Earned GitHub <strong>Pull Shark x2</strong> badges. Active contributor to open-source software, modular backend engineering toolkits, and PyPI packages.
            </p>
            <a 
              href="https://github.com/junaidify" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-secondary"
              style={{ textDecoration: "none", fontSize: "0.85rem", padding: "0.5rem 1rem", marginTop: "auto", alignSelf: "flex-start" }}
            >
              <FontAwesomeIcon icon={faGithub} /> View GitHub Contributions
            </a>
          </div>

          {/* Education Card */}
          <div className="achievement_card">
            <div className="achievement_icon" style={{ background: "rgba(16, 185, 129, 0.15)", color: "#10b981" }}>
              <FontAwesomeIcon icon={faGraduationCap} />
            </div>
            <span className="achievement_tag" style={{ color: "#10b981" }}>Postgraduate Degree</span>
            <h3>Master of Computer Applications</h3>
            <p>
              <strong>Master of Computer Applications (MCA)</strong> — Sikkim Manipal University (New Delhi, India). Specialized in Advanced Software Engineering, Database Systems, and System Architecture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
