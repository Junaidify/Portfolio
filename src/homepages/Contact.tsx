import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "../styles/contactandfeedback.css";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_hcgy5wp",
          "template_q8qz4sg",
          formRef.current,
          "No6xXW_fvGtGSkypu"
        )
        .then(() => {
          setLoading(false);
          setForm({ name: "", email: "", message: "" });
          setToastMsg("Thank you! Your message has been sent successfully.");
          setTimeout(() => setToastMsg(null), 4000);
        })
        .catch((error: any) => {
          setLoading(false);
          console.error("Error sending email:", error);
          setToastMsg("Failed to send message. Please try again or reach out via LinkedIn/GitHub.");
          setTimeout(() => setToastMsg(null), 4000);
        });
    }
  };

  return (
    <div id="contact">
      <div className="container">
        
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h2 className="section-title-binjan">Let's Work Together</h2>
          <p className="section-sub-binjan">
            Have a software project, job opportunity, or inquiry? Send me a message below.
          </p>
        </div>

        <div className="contact-card-binjan">
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="form-group-binjan">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                required
                id="name"
                name="name"
                placeholder="Jane Doe"
                value={form.name}
                onChange={handleChange}
                className="form-control-binjan"
              />
            </div>

            <div className="form-group-binjan">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                required
                id="email"
                name="email"
                placeholder="jane@example.com"
                value={form.email}
                onChange={handleChange}
                className="form-control-binjan"
              />
            </div>

            <div className="form-group-binjan">
              <label htmlFor="message">Your Message</label>
              <textarea
                name="message"
                required
                id="message"
                placeholder="Hi Junaid, I'd like to discuss an SDE opportunity..."
                value={form.message}
                onChange={handleChange}
                className="form-control-binjan"
              ></textarea>
            </div>

            <button type="submit" className="btn-terracotta" style={{ width: "100%", justifyContent: "center" }} disabled={loading}>
              <FontAwesomeIcon icon={faPaperPlane} /> {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "2rem", borderTop: "1px solid rgba(20, 36, 44, 0.08)", paddingTop: "1.5rem" }}>
            <a href="https://github.com/junaidify" target="_blank" rel="noreferrer" className="terracotta-text" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
            <a href="https://linkedin.com/in/junaidify-khan" target="_blank" rel="noreferrer" className="terracotta-text" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </div>
        </div>

      </div>

      {toastMsg && (
        <div style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          background: "var(--accent-terracotta)",
          color: "#ffffff",
          padding: "0.85rem 1.5rem",
          borderRadius: "var(--radius-md)",
          fontWeight: 700,
          fontSize: "0.9rem",
          zIndex: 9999,
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)"
        }}>
          <FontAwesomeIcon icon={faCheck} style={{ marginRight: "0.5rem" }} />
          {toastMsg}
        </div>
      )}
    </div>
  );
};

export default Contact;
