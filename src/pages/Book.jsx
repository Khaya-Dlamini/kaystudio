import { useEffect, useState } from "react";
import Reveal from "../components/Reveal.jsx";
import { PROJECT_TYPES } from "../data/projects.js";
import { submitInquiry } from "../lib/inquiry.js";

export default function Book() {
  const [projectType, setProjectType] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    brand: ""
  });

  useEffect(() => {
    document.title = "Book a Project — Lihle Websites";
    window.scrollTo({ top: 0 });
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      await submitInquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        project_type: projectType,
        brand: formData.brand
      });

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      setErrorMessage(error.message || "Something went wrong while sending your inquiry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <>
      <header className="page-header light">
        <div className="container">
          <span className="eyebrow">
            Book a Project
          </span>
          <h1>Tell me about your brand.</h1>
          <p>Fill this in and I'll get back to you within a couple of days with next steps and a realistic timeline.</p>
        </div>
      </header>

      <section className="booking-section">
        <div className="container form-wrap">
          {submitted ? (
            <Reveal className="form-card success-card in">
              <div className="success-icon">
                <i className="fa-solid fa-check"></i>
              </div>
              <h3>Thanks — got it!</h3>
              <p>Your project details have landed in my inbox. I'll be in touch soon to talk through the next steps.</p>
              <button className="btn btn-dark" onClick={() => setSubmitted(false)}>
                Send Another
              </button>
            </Reveal>
          ) : (
            <div className="form-card">
              <form onSubmit={onSubmit}>
                <div className="field">
                  <label htmlFor="name">Full name</label>
                  <input id="name" type="text" required placeholder="e.g. Thando Nkosi" value={formData.name} onChange={handleChange} />
                </div>

                <div className="field">
                  <label htmlFor="email">Email address</label>
                  <input id="email" type="email" required placeholder="you@yourbrand.com" value={formData.email} onChange={handleChange} />
                </div>

                <div className="field">
                  <label htmlFor="phone">
                    Phone / WhatsApp <span className="hint">(optional)</span>
                  </label>
                  <input id="phone" type="tel" placeholder="+27 00 000 0000" value={formData.phone} onChange={handleChange} />
                </div>

                <div className="field">
                  <label>What kind of site do you need?</label>
                  <div className="option-grid">
                    {PROJECT_TYPES.map((pt) => (
                      <button
                        type="button"
                        key={pt.id}
                        className={`option-btn ${projectType === pt.id ? "selected" : ""}`}
                        onClick={() => setProjectType(pt.id)}
                      >
                        <i className={`fa-solid ${pt.icon}`}></i> {pt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="brand">Tell me about your brand</label>
                  <textarea
                    id="brand"
                    required
                    placeholder="What do you do, who's it for, and what should the site achieve?"
                    value={formData.brand}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {errorMessage ? <p className="form-error">{errorMessage}</p> : null}

                <div className="row-actions">
                  <button type="submit" className="btn btn-gold" disabled={isSubmitting}>
                    <i className="fa-solid fa-paper-plane"></i> {isSubmitting ? "Sending..." : "Send Project Details"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      <div style={{ height: 60 }}></div>
    </>
  );
}
