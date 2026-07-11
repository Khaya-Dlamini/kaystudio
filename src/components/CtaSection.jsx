import { useNavigate } from "react-router-dom";
import Reveal from "./Reveal.jsx";

export default function CtaSection() {
  const navigate = useNavigate();
  return (
    <section className="cta-section">
      <div className="container">
        <Reveal className="cta-panel">
          <h2>Let's build something unforgettable.</h2>
          <p>
            Tell me about your brand and what you need — I'll reply with next steps and a realistic
            timeline, no pressure.
          </p>
          <div className="btn-actions">
            <button className="btn btn-gold" onClick={() => navigate("/book-a-project")}>
              <i className="fa-solid fa-bolt"></i> Book a Project
            </button>
            <button className="btn btn-outline" onClick={() => navigate("/portfolio")}>
              See My Work
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
