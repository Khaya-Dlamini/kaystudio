import Reveal from "../Reveal.jsx";
import khaya from "../../assets/khaya.jpg";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <Reveal className="about-photo-wrap">
          <div className="about-photo-shape"></div>
          <div className="about-photo">
            <img src={khaya} alt="Khaya, founder of Lihle Websites, holding a flute" />
          </div>
          <div className="fun-fact-chip">
            <div className="icon">
              <i className="fa-solid fa-music"></i>
            </div>
            <div>
              <strong>Fun fact</strong>
              <span>I play violin & flute </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="about-copy">
          <span className="eyebrow">
            <i className="fa-solid fa-user"></i> About me
          </span>
          <h2>Hey, I'm Khaya.</h2>
          <span className="about-role">Vibe coder & front-end developer, based in Johannesburg, South Africa</span>
          <p>
            I started Lihle Websites because too many small businesses settle for templates that look
            like everyone else. Your brand deserves better — and that's what I deliver.
          </p>
          <p>
            I work closely with each client to understand their vision, then build a website that
            feels uniquely theirs. No cookie-cutter designs, no confusing jargon — just clean work that
            gets results. And when I'm not behind the keyboard, you'll find me making music.
          </p>

          <div className="about-pillars">
            <div className="about-pillar">
              <div className="icon">
                <i className="fa-solid fa-compass"></i>
              </div>
              <p>Every project starts with understanding your brand — not a template.</p>
            </div>
            <div className="about-pillar">
              <div className="icon">
                <i className="fa-solid fa-gauge-high"></i>
              </div>
              <p>Clean code and fast load times, on every device.</p>
            </div>
            <div className="about-pillar">
              <div className="icon">
                <i className="fa-solid fa-handshake"></i>
              </div>
              <p>You're involved at every step — no surprises at launch.</p>
            </div>
          </div>

          <div className="stat-row">
            <div className="stat-card">
              <strong>5+</strong>
              <span>Projects</span>
            </div>
            <div className="stat-card">
              <strong>3+</strong>
              <span>Years Experience</span>
            </div>
            <div className="stat-card">
              <strong>98.5%</strong>
              <span>Client Satisfaction</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
