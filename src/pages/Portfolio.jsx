import { useEffect, useState } from "react";
import Reveal from "../components/Reveal.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import CtaSection from "../components/CtaSection.jsx";
import { PROJECTS, CATEGORIES } from "../data/projects.js";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    document.title = "Portfolio — Lihle Websites";
    window.scrollTo({ top: 0 });
  }, []);

  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <>
      <header className="page-header">
        <div className="container">
          <span className="eyebrow">
            <i className="fa-solid fa-briefcase"></i> Portfolio
          </span>
          <h1>Every brand gets its own look.</h1>
          <p>
            A selection of sites I've designed and built — each one shaped around the brand it belongs
            to, not a shared template.
          </p>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="filter-row">
            {CATEGORIES.map((c) => (
              <button key={c} className={`chip ${filter === c ? "active" : ""}`} onClick={() => setFilter(c)}>
                {c}
              </button>
            ))}
          </div>
          <div className="project-grid wide">
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 90}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
