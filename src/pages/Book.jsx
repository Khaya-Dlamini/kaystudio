import { useEffect, useState } from "react";
import Reveal from "../components/Reveal.jsx";
import { PROJECT_TYPES } from "../data/projects.js";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "../lib/supabaseClient.js";

export default function Book() {
  const [projectType, setProjectType] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = "Book a Project — Lihle Websites";
    window.scrollTo({ top: 0 });
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.target;
    const payload = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim() || null,
      project_type: projectType,
      message: form.brand.value.trim(),
    };

    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/send-booking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          apikey: SUPABASE_ANON_KEY,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || `Request failed (${res.status})`);
      }

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      setSubmitted(true);
      form.reset();
      setProjectType(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
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
              {error && (
                <div className="form-note" style={{ background: "#fde8e8", borderColor: "rgba(220,38,38,0.25)", color: "#991b1b" }}>
                  <i className="fa-solid fa-circle-exclamation"></i>
                  <span>{error}</span>
                </div>
              )}
              <form onSubmit={onSubmit}>
                <div className="field">
                  <label htmlFor="name">Full name</label>
                  <input id="name" name="name" type="text" required placeholder="e.g. Thando Nkosi" />
                </div>

                <div className="field">
                  <label htmlFor="email">Email address</label>
                  <input id="email" name="email" type="email" required placeholder="you@yourbrand.com" />
                </div>

                <div className="field">
                  <label htmlFor="phone">
                    Phone / WhatsApp <span className="hint">(optional)</span>
                  </label>
                  <input id="phone" name="phone" type="tel" placeholder="+27 00 000 0000" />
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
                    name="brand"
                    required
                    placeholder="What do you do, who's it for, and what should the site achieve?"
                  ></textarea>
                </div>

                <div className="row-actions">
                  <button type="submit" className="btn btn-gold" disabled={submitting}>
                    {submitting ? (
                      <>
                        <i className="fa-solid fa-spinner fa-spin"></i> Sending...
                      </>
                    ) : (
                      <>
                        <i className="fa-solid fa-paper-plane"></i> Send Project Details
                      </>
                    )}
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
