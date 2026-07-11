import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";

export default function Contact() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Contact — Lihle Websites";
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <header className="page-header light">
        <div className="container">
          <span className="eyebrow">
            <i className="fa-solid fa-comments"></i> Contact
          </span>
          <h1>Let's talk about your website.</h1>
          <p>Have a question before you commit to a project? Reach out directly, or jump straight to booking below.</p>
        </div>
      </header>

      <section>
        <div className="container contact-grid">
          <Reveal className="contact-card">
            <div className="contact-item">
              <div className="icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:hello@lihlewebsites.co.za">hello@lihlewebsites.co.za</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon">
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              <div>
                <h4>WhatsApp</h4>
                <a href="tel:+27000000000">+27 00 000 0000</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <h4>Based in</h4>
                <p>Johannesburg, South Africa — working with clients everywhere</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="contact-cta-card">
            <h3>Ready to start your project?</h3>
            <p>
              The quickest way to get things moving is the project form — a few details about your
              brand and what you need, and I'll take it from there.
            </p>
            <button className="btn btn-gold" onClick={() => navigate("/book-a-project")}>
              <i className="fa-solid fa-bolt"></i> Book a Project
            </button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
