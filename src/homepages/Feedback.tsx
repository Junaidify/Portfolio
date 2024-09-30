import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

interface FeedbackProps {
  name: string;
  email: string;
  message: string;
}

const Feedback = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FeedbackProps>({
    name: "",
    email: "",
    message: "",
  });
  const [notification, setNotification] = useState<string[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_hcgy5wp",
          "template_q8qz4sg",
          formRef.current,
          "No6xXW_fvGtGSkypu"
        )
        .then((result: any) => {
          console.log("Email successfully sent:", result.text);
          setForm({
            name: "",
            email: "",
            message: "",
          });
          addNotification("Thank you for your feedback!");
        })
        .catch((error: any) => {
          console.log("Error sending email:", error.text);
        });
    }
  };

  const addNotification = (message: string) => {
    setNotification((prev) => [...prev, message]);

    setTimeout(() => {
      setNotification((prev) =>
        prev.length > 1 ? prev.slice(prev.length - 1) : []
      );
    }, 5000);
  };

  return (
    <div id="feedback">
      <div id="form">
        <h1>Feedback Form</h1>
        <form ref={formRef} onSubmit={sendEmail} className="form_container">
          <div className="form_content">
            <input
              type="text"
              required
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            <label htmlFor="name">Name</label>
          </div>

          <div className="form_content">
            <input
              type="email"
              required
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="form_content">
            <textarea
              name="message"
              required
              id="message"
              cols={50}
              rows={10}
              value={form.message}
              onChange={handleChange}
            ></textarea>
            <label htmlFor="message">Message</label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
      <div style={{ position: "fixed", top: "0", right: "0", zIndex: "9999" }}>
        {notification &&
          notification.map((item, idx) => (
            <div
              style={{
                margin: "5px 0",
                padding: "10px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                fontSize: "1rem",
                borderRadius: "5px",
              }}
              key={idx}
            >
              {item}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Feedback;
