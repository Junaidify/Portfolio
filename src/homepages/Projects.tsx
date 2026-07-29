import { useState } from "react";
import learnvault from "../images/learnvault.jpg";
import videoclipper from "../images/videoclipper.jpg";
import promptkit from "../images/promptkit.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "../styles/projectandskills.css";

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  cardThemeClass: string;
  image: string;
  tech: string[];
  description: string;
  githubUrl: string;
  liveUrl: string;
  liveLabel: string;
  architectureDetails: string[];
}

const projectsData: ProjectItem[] = [
  {
    id: "learnvault",
    title: "LearnVault Platform",
    subtitle: "AI E-Learning & RAG System",
    cardThemeClass: "card-theme-gold",
    image: learnvault,
    tech: ["Java", "Spring Boot 3", "Spring Security 6", "React", "LangChain", "pgvector", "PostgreSQL", "Razorpay"],
    description: "Architected an end-to-end e-learning platform with secure course delivery, role-based user management (Student/Instructor), and context-aware RAG assistant using LangChain & pgvector.",
    githubUrl: "https://github.com/junaidify/Learn-vault",
    liveUrl: "https://learn-vault-six.vercel.app/",
    liveLabel: "Live Demo",
    architectureDetails: [
      "Backend Architecture: Spring Boot 3 RESTful Microservices with layered Controller-Service-Repository pattern.",
      "Authentication & Security: Stateless JWT token issuance + Google OAuth 2.0 social login, protected endpoint filters with Spring Security 6.",
      "AI & Vector Search: LangChain Java/Python pipelines embedding course transcripts into pgvector column indices for cosine similarity search.",
      "Payment Processing: Event-driven Razorpay webhooks verifying cryptographic signatures for resilient checkout order fulfillment."
    ]
  },
  {
    id: "videoclipper",
    title: "VideoClipper AI",
    subtitle: "Short-Form Video Generator",
    cardThemeClass: "card-theme-teal",
    image: videoclipper,
    tech: ["Python", "Flask", "FFmpeg", "OpenAI Whisper", "Gemini API", "Groq API"],
    description: "Engineered an automated video processing pipeline extracting viral clips from long-form content for YouTube Shorts, Instagram Reels, and TikTok with synced SRT subtitles burned via FFmpeg.",
    githubUrl: "https://github.com/junaidify/video_clipper",
    liveUrl: "https://videoclipper-production.up.railway.app/",
    liveLabel: "Live Deployment",
    architectureDetails: [
      "Media Pipeline: Asynchronous Python audio extraction and clip segment slicing using custom FFmpeg bindings.",
      "Speech-to-Text Engine: Local OpenAI Whisper model execution with automatic API fallback for maximum performance & zero uptime drops.",
      "Subtitling Engine: Generating word-accurate SRT files with custom font styling, color highlights, and hardcoded FFmpeg filter graph burn-in.",
      "Smart Crop: Face detection & center tracking algorithm adjusting dynamic aspect ratios (16:9 to 9:16)."
    ]
  },
  {
    id: "promptkit",
    title: "PromptKit Package",
    subtitle: "LLM Toolkit & PyPI",
    cardThemeClass: "card-theme-mint",
    image: promptkit,
    tech: ["Python", "LLMs", "PyPI Package", "Regex Optimization"],
    description: "Developed a lightweight Python library for sanitizing, noise-stripping, and standardizing prompt inputs prior to LLM tokenization, reducing token consumption and boosting response reliability.",
    githubUrl: "https://github.com/junaidify/promptkit",
    liveUrl: "https://test.pypi.org/project/promptkit/0.1.0/",
    liveLabel: "PyPI Package",
    architectureDetails: [
      "Core Preprocessor: Zero-dependency Python regex pipeline with sub-millisecond execution times.",
      "Token Estimator: Built-in heuristics estimating byte-pair encoding (BPE) token reduction prior to LLM submission.",
      "Distribution: Packaged with setuptools/flit, versioned and deployed on PyPI."
    ]
  }
];

const Projects = () => {
  const [selectedModalProject, setSelectedModalProject] = useState<ProjectItem | null>(null);

  return (
    <div id="works">
      <div className="container">
        
        {/* Header Block */}
        <div className="works-header-flex">
          <div>
            <h2 className="section-title-binjan">My Latest Works</h2>
            <p className="section-sub-binjan" style={{ marginBottom: 0 }}>
              Featured software engineering projects
            </p>
          </div>
          <a href="https://github.com/junaidify" target="_blank" rel="noreferrer" className="terracotta-text">
            Explore More Works →
          </a>
        </div>

        {/* Works Cards Row */}
        <div className="works-grid-carousel">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className={`work-card-binjan ${project.cardThemeClass}`}
              onClick={() => setSelectedModalProject(project)}
            >
              <div>
                <div className="work-card-title">{project.title}</div>
                <div className="work-card-subtitle">{project.subtitle}</div>
              </div>

              {/* White UI Mockup Container */}
              <div className="work-card-mockup">
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Architecture Deep Dive Modal */}
      {selectedModalProject && (
        <div style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(20, 36, 44, 0.75)",
          backdropFilter: "blur(12px)",
          zIndex: 99999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem"
        }}>
          <div style={{
            background: "#ffffff",
            borderRadius: "28px",
            maxWidth: "600px",
            width: "100%",
            padding: "2.25rem",
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)",
            position: "relative"
          }}>
            <button 
              onClick={() => setSelectedModalProject(null)}
              style={{
                position: "absolute",
                top: "1.25rem",
                right: "1.25rem",
                background: "var(--bg-ivory)",
                border: "none",
                color: "var(--color-slate-dark)",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.85rem", fontWeight: 800, color: "var(--color-slate-dark)", marginBottom: "0.25rem" }}>
              {selectedModalProject.title}
            </h3>
            <p style={{ color: "var(--accent-terracotta)", fontWeight: 700, marginBottom: "1.25rem" }}>
              {selectedModalProject.subtitle}
            </p>

            <p style={{ color: "var(--color-slate-muted)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "1.5rem" }}>
              {selectedModalProject.description}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "1.75rem" }}>
              {selectedModalProject.architectureDetails.map((detail, idx) => (
                <div key={idx} style={{
                  background: "var(--bg-ivory)",
                  border: "1px solid rgba(20, 36, 44, 0.08)",
                  padding: "0.85rem 1rem",
                  borderRadius: "12px",
                  fontSize: "0.875rem",
                  color: "var(--color-slate-dark)",
                  lineHeight: "1.5"
                }}>
                  {detail}
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
              <a 
                href={selectedModalProject.liveUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-terracotta" 
                style={{ flex: 1, justifyContent: "center" }}
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} /> {selectedModalProject.liveLabel}
              </a>
              <a 
                href={selectedModalProject.githubUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="pill-outline-nav" 
                style={{ flex: 1, justifyContent: "center", textDecoration: "none", display: "inline-flex", alignItems: "center" }}
              >
                <FontAwesomeIcon icon={faGithub} style={{ marginRight: "0.5rem" }} /> GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
