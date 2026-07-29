import "../styles/dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faJava, faPython, faReact, faDocker, faGitAlt 
} from "@fortawesome/free-brands-svg-icons";
import { 
  faDatabase, faServer, faBrain, faShieldAlt, faMicrochip, faCreditCard, faVideo, faLock, faCheckCircle 
} from "@fortawesome/free-solid-svg-icons";

interface DashboardProps {
  onNavigateProjects?: () => void;
  onNavigateContact?: () => void;
}

const techStackCardsV2 = [
  {
    badge: "Backend Microservices",
    name: "Spring Boot 3 & Java",
    icon: faServer,
    iconColor: "#6db33f",
    specs: ["Java 17 / 21", "RESTful APIs", "Microservices"],
    desc: "Enterprise Java framework for building high-throughput microservices, REST APIs, and Spring Security 6 authentication."
  },
  {
    badge: "AI Architecture",
    name: "LangChain & RAG Pipelines",
    icon: faBrain,
    iconColor: "#e05638",
    specs: ["RAG Engine", "Vector Embeddings", "Context Aware"],
    desc: "Context-aware Retrieval-Augmented Generation (RAG) pipelines integrating vector embeddings for student query resolution."
  },
  {
    badge: "Database & Vector Stores",
    name: "PostgreSQL & MongoDB",
    icon: faDatabase,
    iconColor: "#336791",
    specs: ["PostgreSQL", "pgvector", "MongoDB NoSQL"],
    desc: "Relational database schema optimization with Spring Data JPA indexing, pgvector vector search, and MongoDB document stores."
  },
  {
    badge: "Payment Integration",
    name: "Razorpay Gateway & Webhooks",
    icon: faCreditCard,
    iconColor: "#0c2340",
    specs: ["Razorpay SDK", "Event Webhooks", "SHA256 Signatures"],
    desc: "Event-driven Razorpay payment gateway integration verifying cryptographic signatures for course checkout fulfillment."
  },
  {
    badge: "AI Media Pipelines",
    name: "Python & OpenAI Whisper",
    icon: faPython,
    iconColor: "#3776ab",
    specs: ["Flask API", "FFmpeg Engine", "STT Subtitles"],
    desc: "Automated media processing pipelines, OpenAI Whisper audio transcription, PyPI package development, and Flask services."
  },
  {
    badge: "Security & Auth",
    name: "Spring Security 6 & OAuth",
    icon: faShieldAlt,
    iconColor: "#2a7b72",
    specs: ["Stateless JWT", "Google OAuth 2.0", "Granular RBAC"],
    desc: "Stateless JWT token issuance, Google OAuth 2.0 social login, protected endpoint filters, and Role-Based Access Control (RBAC)."
  },
  {
    badge: "Frontend & Web",
    name: "React.js & Redux",
    icon: faReact,
    iconColor: "#61dafb",
    specs: ["React 18", "Redux State", "Responsive UI"],
    desc: "Dynamic, component-driven user interfaces integrated with Redux state management and responsive styling."
  },
  {
    badge: "DevOps & Cloud",
    name: "Docker & PyPI Packages",
    icon: faDocker,
    iconColor: "#2496ed",
    specs: ["Docker Deploy", "PyPI Package", "Git & GitHub"],
    desc: "Containerization of Java microservices, Python backends, and AI dependencies alongside PyPI package distribution."
  }
];

const Dashboard: React.FC<DashboardProps> = ({ onNavigateContact }) => {
  return (
    <div id="dashboard_wrapper">
      <div className="container">
        
        {/* Blockaid-Style Hero Text Header */}
        <div className="hero-header-block">
          <div className="hero-tag-pill">ECOSYSTEM & INTEGRATIONS</div>
          <p className="hero-main-sub">
            Architecting scalable Java Spring Boot 3 RESTful microservices, optimized PostgreSQL database schemas with pgvector vector stores, and context-aware LangChain RAG pipelines.
          </p>
        </div>

        {/* Blockaid Orbital Technology Stage with Hover Tooltips */}
        <div className="orbital-stage-wrapper">
          
          {/* Radial Warm Glow Behind Processor Core */}
          <div className="orbital-center-glow"></div>

          {/* SVG Concentric Elliptical Orbit Rings */}
          <svg className="orbital-svg-rings" viewBox="0 0 950 520" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Inner Ellipse */}
            <ellipse cx="475" cy="260" rx="200" ry="110" stroke="#14242c" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="6 6" />
            {/* Middle Ellipse */}
            <ellipse cx="475" cy="260" rx="340" ry="180" stroke="#14242c" strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="6 6" />
            {/* Outer Ellipse */}
            <ellipse cx="475" cy="260" rx="440" ry="230" stroke="#14242c" strokeOpacity="0.15" strokeWidth="1.5" strokeDasharray="6 6" />
            
            {/* Faint PCB Circuit Trace Lines */}
            <path d="M 50 120 L 150 120 L 180 150" stroke="#14242c" strokeOpacity="0.12" strokeWidth="1.5" />
            <circle cx="50" cy="120" r="3" fill="#14242c" fillOpacity="0.2" />
            
            <path d="M 900 120 L 800 120 L 770 150" stroke="#14242c" strokeOpacity="0.12" strokeWidth="1.5" />
            <circle cx="900" cy="120" r="3" fill="#14242c" fillOpacity="0.2" />

            <path d="M 50 400 L 150 400 L 180 370" stroke="#14242c" strokeOpacity="0.12" strokeWidth="1.5" />
            <circle cx="50" cy="400" r="3" fill="#14242c" fillOpacity="0.2" />

            <path d="M 900 400 L 800 400 L 770 370" stroke="#14242c" strokeOpacity="0.12" strokeWidth="1.5" />
            <circle cx="900" cy="400" r="3" fill="#14242c" fillOpacity="0.2" />
          </svg>

          {/* Central Processor Microchip */}
          <div className="center-core-chip" onClick={onNavigateContact} title="Junaid Khan SDE Core">
            <FontAwesomeIcon icon={faMicrochip} style={{ fontSize: "1.8rem", color: "var(--accent-terracotta)", marginBottom: "0.2rem" }} />
            <div className="chip-logo-text">JK</div>
            <div className="chip-sub-text">SDE CORE</div>
          </div>

          {/* Inner Orbit Tech Nodes with Project Usage Tooltips */}
          <div className="orbit-node node-pos-inner-1">
            <FontAwesomeIcon icon={faJava} style={{ color: "#e05638" }} />
            <div className="orbit-node-tooltip">
              <div className="orbit-node-tooltip-title">Java 17 / 21</div>
              Used in LearnVault to architect high-throughput backend microservices and RESTful APIs.
            </div>
          </div>

          <div className="orbit-node node-pos-inner-2">
            <FontAwesomeIcon icon={faServer} style={{ color: "#6db33f" }} />
            <div className="orbit-node-tooltip">
              <div className="orbit-node-tooltip-title">Spring Boot 3</div>
              Core framework powering LearnVault's layered Controller-Service-Repository architecture.
            </div>
          </div>

          <div className="orbit-node node-pos-inner-3">
            <FontAwesomeIcon icon={faShieldAlt} style={{ color: "#2a7b72" }} />
            <div className="orbit-node-tooltip">
              <div className="orbit-node-tooltip-title">Spring Security 6</div>
              Secured LearnVault endpoints with stateless JWT filters and Google OAuth 2.0 login.
            </div>
          </div>

          <div className="orbit-node node-pos-inner-4">
            <FontAwesomeIcon icon={faLock} style={{ color: "#f59e0b" }} />
            <div className="orbit-node-tooltip">
              <div className="orbit-node-tooltip-title">JWT & OAuth 2.0</div>
              Implemented stateless user authentication and role-based access control (Student/Instructor).
            </div>
          </div>

          {/* Middle Orbit Tech Nodes with Project Usage Tooltips */}
          <div className="orbit-node node-pos-mid-1">
            <FontAwesomeIcon icon={faDatabase} style={{ color: "#336791" }} />
            <div className="orbit-node-tooltip">
              <div className="orbit-node-tooltip-title">PostgreSQL & MongoDB</div>
              Relational data persistence in LearnVault and NoSQL document storage.
            </div>
          </div>

          <div className="orbit-node node-pos-mid-2">
            <FontAwesomeIcon icon={faBrain} style={{ color: "#e05638" }} />
            <div className="orbit-node-tooltip">
              <div className="orbit-node-tooltip-title">LangChain RAG</div>
              Built context-aware AI assistant in LearnVault for cosine similarity search over course transcripts.
            </div>
          </div>

          <div className="orbit-node node-pos-mid-3">
            <FontAwesomeIcon icon={faDatabase} style={{ color: "#2a7b72" }} />
            <div className="orbit-node-tooltip">
              <div className="orbit-node-tooltip-title">pgvector</div>
              Vector database store in PostgreSQL embedding course transcripts for AI retrieval.
            </div>
          </div>

          <div className="orbit-node node-pos-mid-4">
            <FontAwesomeIcon icon={faBrain} style={{ color: "#10b981" }} />
            <div className="orbit-node-tooltip">
              <div className="orbit-node-tooltip-title">OpenAI Whisper</div>
              STT speech engine in VideoClipper generating word-accurate timestamped SRT subtitles.
            </div>
          </div>

          {/* Outer Orbit Tech Nodes with Project Usage Tooltips */}
          <div className="orbit-node node-pos-outer-1">
            <FontAwesomeIcon icon={faPython} style={{ color: "#3776ab" }} />
            <div className="orbit-node-tooltip">
              <div className="orbit-node-tooltip-title">Python & Flask</div>
              Built VideoClipper media pipeline backend and created PromptKit PyPI package.
            </div>
          </div>

          <div className="orbit-node node-pos-outer-2">
            <FontAwesomeIcon icon={faReact} style={{ color: "#61dafb" }} />
            <div className="orbit-node-tooltip">
              <div className="orbit-node-tooltip-title">React.js</div>
              Designed component-driven web UI interfaces for LearnVault platform and VideoClipper.
            </div>
          </div>

          <div className="orbit-node node-pos-outer-3">
            <FontAwesomeIcon icon={faDocker} style={{ color: "#2496ed" }} />
            <div className="orbit-node-tooltip">
              <div className="orbit-node-tooltip-title">Docker</div>
              Containerized Spring Boot microservices and Python AI modules for deployment.
            </div>
          </div>

          <div className="orbit-node node-pos-outer-4">
            <FontAwesomeIcon icon={faCreditCard} style={{ color: "#0c2340" }} />
            <div className="orbit-node-tooltip">
              <div className="orbit-node-tooltip-title">Razorpay Webhooks</div>
              Integrated payment gateway webhooks verifying cryptographic signatures for course checkout.
            </div>
          </div>

          <div className="orbit-node node-pos-outer-5">
            <FontAwesomeIcon icon={faVideo} style={{ color: "#007800" }} />
            <div className="orbit-node-tooltip">
              <div className="orbit-node-tooltip-title">FFmpeg</div>
              Asynchronous video processing in VideoClipper for clip slicing & burning SRT subtitles.
            </div>
          </div>

          {/* Git Icon (Aligned precisely on outer ring) */}
          <div className="orbit-node node-pos-outer-6">
            <FontAwesomeIcon icon={faGitAlt} style={{ color: "#f05032" }} />
            <div className="orbit-node-tooltip">
              <div className="orbit-node-tooltip-title">Git & GitHub</div>
              Managed repositories, CI/CD code reviews, and earned GitHub Pull Shark badges.
            </div>
          </div>

          {/* Dotted Connector Annotation Labels */}
          <div className="orbit-annotation-label annot-pos-1">
            <div className="annot-dot"></div>
            <span>Core Microservices</span>
          </div>

          <div className="orbit-annotation-label annot-pos-2">
            <div className="annot-dot"></div>
            <span>AI & Vector Data</span>
          </div>

          <div className="orbit-annotation-label annot-pos-3">
            <div className="annot-dot"></div>
            <span>Ecosystem Tools</span>
          </div>

        </div>

      </div>

      {/* Dedicated Core Technical Stack Section (4 Cards Per Row Grid) */}
      <div className="tech-stack-section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
            <h2 className="section-title-binjan">Core Technical Stack</h2>
            <p className="section-sub-binjan" style={{ marginBottom: 0 }}>
              Enterprise frameworks, AI vector pipelines, databases, and payment integration
            </p>
          </div>

          {/* 4-Column Grid for 4 cards in one row */}
          <div className="tech-stack-grid-4col">
            {techStackCardsV2.map((card, idx) => (
              <div key={idx} className="tech-card-binjan-v2">
                
                {/* Header */}
                <div className="tech-card-top-header">
                  <span className="tech-card-badge-pill">{card.badge}</span>
                  <FontAwesomeIcon icon={card.icon} className="tech-card-big-icon" style={{ color: card.iconColor }} />
                </div>

                {/* Body Content */}
                <div className="tech-card-body-v2">
                  <div className="tech-card-title-v2">{card.name}</div>
                  
                  {/* Key Specs Strip */}
                  <div className="tech-card-specs-strip">
                    {card.specs.map((spec, sIdx) => (
                      <span key={sIdx} className="spec-item">
                        <FontAwesomeIcon icon={faCheckCircle} style={{ color: "var(--accent-terracotta)", fontSize: "0.7rem" }} />
                        {spec}
                      </span>
                    ))}
                  </div>

                  <p className="tech-card-desc-v2">{card.desc}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
