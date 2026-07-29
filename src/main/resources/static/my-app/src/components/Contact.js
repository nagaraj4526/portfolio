import { useState } from "react";

const contactInfo = [
  {
    icon: "📧",
    label: "EMAIL",
    value: "nagarajan4526@gmail.com",
    link: "mailto:nagarajan4526@gmail.com",
  },
  {
    icon: "📱",
    label: "PHONE",
    value: "+91 9345909141",
    link: "tel:+919345909141",
  },
  {
    icon: "📍",
    label: "LOCATION",
    value: "Pudukottai, Tamil Nadu",
    link: "https://maps.google.com/?q=Pudukottai,Tamil Nadu",
  },
  {
    icon: "💼",
    label: "ROLE",
    value: "Java Full Stack Developer",
    link: "#",
  },
];
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", msg: "Please fill all required fields!" });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus({ type: "success", msg: "✅ Message sent successfully! I'll get back to you soon." });
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Server error");
      }
    } catch {
      setStatus({ type: "error", msg: "⚠️ Could not connect to server. Please try email directly." });
    }
    setLoading(false);
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section id="contact">
      <p className="section-label">{"// 05 — LET'S CONNECT"}</p>
      <h2 className="section-title">Get In <span>Touch</span></h2>
      <div className="divider" />
      <div className="contact-wrapper">
        <div className="contact-info">
          <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1rem" }}>
            I'm actively looking for Full Stack Developer opportunities. Whether you have a
            project, a job opportunity, or just want to connect — my inbox is always open!
          </p>
		  {contactInfo.map((c, i) => (
		    <a
		      key={i}
		      href={c.link}
		      className="contact-item"
		      target={c.link.startsWith("http") ? "_blank" : "_self"}
		      rel="noopener noreferrer"
		    >
		      <div className="contact-icon">{c.icon}</div>
		      <div>
		        <div className="contact-label">{c.label}</div>
		        <div className="contact-value">{c.value}</div>
		      </div>
		    </a>
		  ))}        </div>

        <div className="contact-form">
          <div className="form-group">
            <label>NAME *</label>
            <input
              name="name" placeholder="Your Name"
              value={form.name} onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>EMAIL *</label>
            <input
              name="email" type="email" placeholder="your@email.com"
              value={form.email} onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>SUBJECT</label>
            <input
              name="subject" placeholder="Job Opportunity / Project"
              value={form.subject} onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>MESSAGE *</label>
            <textarea
              name="message" rows={5} placeholder="Your message..."
              value={form.message} onChange={handleChange}
            />
          </div>
          {status && (
            <div className={`form-status ${status.type}`}>{status.msg}</div>
          )}
          <button
            className="btn-primary"
            onClick={handleSubmit}
            disabled={loading}
            style={{ width: "100%", fontSize: "0.85rem" }}
          >
            {loading ? "SENDING..." : "SEND MESSAGE →"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;