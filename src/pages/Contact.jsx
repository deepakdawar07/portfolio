import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Css/Contact.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".pf-rv");
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const CONTACTS = [
  { icon: "fas fa-envelope", label: "Email", value: "dawardeepak2512@gmail.com" },
  { icon: "fab fa-linkedin", label: "LinkedIn", value: "linkedin.com/in/deepak-dawar", href: "https://www.linkedin.com/in/deepak-dawar/" },
  { icon: "fab fa-github", label: "GitHub", value: "github.com/deepakdawar", href: "https://github.com/deepakdawar07" },
  { icon: "fas fa-code", label: "LeetCode", value: "LeetCode/deepakdawar", href: "https://leetcode.com/u/dawardeepak2512/" },
];

export default function Contact() {
  useReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();

    emailjs.send(
      "service_ziynf3n",
      "template_a7ldm0f",
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      "qoHzO8aeSloPQyxIw"
    ).then(
      () => {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      },
      (err) => {
        console.error("FAILED...", err);
        alert("Oops! Something went wrong. Try again later.");
      }
    );
  };
  return (
    <section className="pf-section pf-contact-page">
      <div className="pf-container">
        <div className="pf-rv">
          <div className="pf-section-tag">Get In Touch</div>
          <h1 className="pf-section-title">Let's <em>Work Together</em></h1>
          <p className="pf-section-sub">
            I'm open to freelance projects, internships, and full-time opportunities.
            Drop a message — I'd love to connect!
          </p>
        </div>

        <div className="pf-contact-page__grid">

          {/* Contact Links */}
          <div className="pf-contact-page__links pf-rv" style={{ transitionDelay: "80ms" }}>
            {CONTACTS.map(c => (
              <a key={c.label} href={c.href} className="pf-contact-page__link" target="_blank" rel="noreferrer">
                <div className="pf-contact-page__link-icon"><i className={c.icon}></i></div>
                <div>
                  <div className="pf-contact-page__link-lbl">{c.label}</div>
                  <div className="pf-contact-page__link-val">{c.value}</div>
                </div>
                <span className="pf-contact-page__link-arr">→</span>
              </a>
            ))}
          </div>

          {/* Form */}
          <div className="pf-contact-page__form-wrap pf-rv" style={{ transitionDelay: "140ms" }}>
            {sent ? (
              <div className="pf-contact-page__success">
                <span>✅</span>
                <p>Message sent! I'll get back to you soon.</p>
              </div>
            ) : (
              <form className="pf-contact-page__form" onSubmit={handleSubmit}>
                <div className="pf-contact-page__field">
                  <label>Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="pf-contact-page__field">
                  <label>Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="pf-contact-page__field">
                  <label>Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="pf-btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Send Message →
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}