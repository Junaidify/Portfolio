import "../styles/projectandskills.css";
import "../styles/contactandfeedback.css";

const Skills = () => {
  return (
    <div id="experience">
      <div className="container">
        <h2 className="section-title-binjan" style={{ textAlign: "center", marginBottom: "0.4rem" }}>
          Experience & Projects Timeline
        </h2>
        <p className="section-sub-binjan" style={{ textAlign: "center", marginBottom: "3rem" }}>
          Technical mentorship, engineering projects, and academic background
        </p>

        <div className="timeline-container">
          
          {/* Timeline Item 1: Technical Mentor */}
          <div className="timeline-item">
            <div className="timeline-left">
              <div className="timeline-company">Technical Mentor</div>
              <div className="timeline-date">Oct 2024 – Present</div>
            </div>
            <div className="timeline-node node-orange"></div>
            <div className="timeline-right">
              <div className="timeline-role">Technical Mentor</div>
              <p className="timeline-desc">
                Mentoring aspiring software engineers in Full Stack Java, Spring Boot microservices, database design, and Data Structures & Algorithms (DSA). Conducting technical code reviews, mock interviews, and system architecture guidance.
              </p>
            </div>
          </div>

          {/* Timeline Item 2: LearnVault */}
          <div className="timeline-item">
            <div className="timeline-left">
              <div className="timeline-company">LearnVault Platform</div>
              <div className="timeline-date">May 2026 – Jul 2026</div>
            </div>
            <div className="timeline-node node-teal"></div>
            <div className="timeline-right">
              <div className="timeline-role">Developed End-to-End</div>
              <p className="timeline-desc">
                Architected Spring Boot microservices with Spring Security 6, stateless JWT & OAuth 2.0. Integrated Razorpay payment webhooks and built a vector search RAG query engine using LangChain and pgvector.
              </p>
            </div>
          </div>

          {/* Timeline Item 3: VideoClipper AI */}
          <div className="timeline-item">
            <div className="timeline-left">
              <div className="timeline-company">VideoClipper AI</div>
              <div className="timeline-date">Mar 2026 – Apr 2026</div>
            </div>
            <div className="timeline-node node-orange"></div>
            <div className="timeline-right">
              <div className="timeline-role">Developed End-to-End</div>
              <p className="timeline-desc">
                Engineered automated Python media processing pipelines using FFmpeg and OpenAI Whisper for speech-to-text audio transcription, timestamped SRT subtitle burn-in, and dynamic aspect ratio transformations.
              </p>
            </div>
          </div>

          {/* Timeline Item 4: PromptKit */}
          <div className="timeline-item">
            <div className="timeline-left">
              <div className="timeline-company">PromptKit PyPI Package</div>
              <div className="timeline-date">Feb 2026</div>
            </div>
            <div className="timeline-node node-gold"></div>
            <div className="timeline-right">
              <div className="timeline-role">Developed End-to-End</div>
              <p className="timeline-desc">
                Created and published a lightweight LLM text preprocessing toolkit on PyPI for sanitizing prompt inputs and reducing token consumption prior to model tokenization.
              </p>
            </div>
          </div>

          {/* Timeline Item 5: Masai School */}
          <div className="timeline-item">
            <div className="timeline-left">
              <div className="timeline-company">Masai School</div>
              <div className="timeline-date">Completed</div>
            </div>
            <div className="timeline-node node-teal"></div>
            <div className="timeline-right">
              <div className="timeline-role">Full Stack Web Development</div>
              <p className="timeline-desc">
                Completed intensive Full Stack Web Development program. Specialized in Java, Spring Boot 3, RESTful microservices, Data Structures & Algorithms, and modern web application delivery.
              </p>
            </div>
          </div>

          {/* Timeline Item 6: SMU */}
          <div className="timeline-item">
            <div className="timeline-left">
              <div className="timeline-company">Sikkim Manipal University</div>
              <div className="timeline-date">Postgraduate</div>
            </div>
            <div className="timeline-node node-gold"></div>
            <div className="timeline-right">
              <div className="timeline-role">Master of Computer Applications (MCA)</div>
              <p className="timeline-desc">
                Master of Computer Applications (MCA) — Sikkim, India. Specialized in Advanced Software Engineering, Relational Database Architecture, and System Design.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
