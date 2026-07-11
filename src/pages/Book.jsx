import { useEffect, useState } from "react";
import Reveal from "../components/Reveal.jsx";
import { PROJECT_TYPES, TIMELINES } from "../data/projects.js";

export default function Book() {
  const [projectType, setProjectType] = useState(null);
  const [timeline, setTimeline] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Book a Project — Lihle Websites";
    window.scrollTo({ top: 0 });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="page-header">
        <div className="container">
          <span className="eyebrow">
            <i className="fa-solid fa-bolt"></i> Book a Project
          </span>
          <h1>Tell me about your brand.</h1>
          <p>Fill this in and I'll get back to you within a couple of days with next steps and a realistic timeline.</p>
        </div>
      </header>

      <section>
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
              <div className="form-note">
                <i className="fa-solid fa-circle-info"></i>
                <span>
                  This form covers everything I need to get started — no online store options here,
                  since Lihle Websites doesn't build e-commerce sites.
                </span>
              </div>

              <form onSubmit={onSubmit}>
                <div className="field">
                  <label htmlFor="name">Full name</label>
                  <input id="name" type="text" required placeholder="e.g. Thando Nkosi" />
                </div>

                <div className="field">
                  <label htmlFor="email">Email address</label>
                  <input id="email" type="email" required placeholder="you@yourbrand.com" />
                </div>

                <div className="field">
                  <label htmlFor="phone">
                    Phone / WhatsApp <span className="hint">(optional)</span>
                  </label>
                  <input id="phone" type="tel" placeholder="+27 00 000 0000" />
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
                  <label>What's your timeline?</label>
                  <div className="option-grid">
                    {TIMELINES.map((t) => (
                      <button
                        type="button"
                        key={t.id}
                        className={`option-btn ${timeline === t.id ? "selected" : ""}`}
                        onClick={() => setTimeline(t.id)}
                      >
                        <i className="fa-solid fa-calendar"></i> {t.label}
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
                  ></textarea>
                </div>

                <div className="row-actions">
                  <button type="submit" className="btn btn-gold">
                    <i className="fa-solid fa-paper-plane"></i> Send Project Details
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
