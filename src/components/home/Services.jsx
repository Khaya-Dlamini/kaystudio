import Reveal from "../Reveal.jsx";

const STEPS = [
  {
    icon: "fa-compass",
    title: "Map the message",
    body: "We turn your offer, audience, and proof into a clear homepage structure.",
  },
  {
    icon: "fa-palette",
    title: "Design the feeling",
    body: "Color, type, spacing, and interaction choices make the brand instantly recognizable.",
  },
  {
    icon: "fa-rocket",
    title: "Launch the page",
    body: "The final site is arranged for real visitors: responsive, readable, and ready to share.",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">
            <i className="fa-solid fa-layer-group"></i> How it comes together
          </span>
          <h2>From scattered ideas to a site that clicks.</h2>
          <p>
            The process stays focused: clarify what you sell, shape a visual direction, then build the
            page so every section earns its place.
          </p>
        </Reveal>

        <div className="service-grid">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 90} className="service-card">
              <div className="service-num">
                <i className={`fa-solid ${s.icon}`}></i>
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <div className="service-underline"></div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={220} className="services-banner">
          <i className="fa-solid fa-sparkles"></i> No bland templates. No confusing pages. Just a
          website that feels made for your brand.
        </Reveal>
      </div>
    </section>
  );
}
