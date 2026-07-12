import { useNavigate } from "react-router-dom";
import Reveal from "../Reveal.jsx";
import ProjectCard from "../ProjectCard.jsx";
import { PROJECTS } from "../../data/projects.js";

export default function RecentProjects() {
  const navigate = useNavigate();
  const featured = PROJECTS.slice(0, 2);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">
            <i className="fa-solid fa-folder-open"></i> Recent work
          </span>
          <h2>A couple of brands I've recently built for.</h2>
          <p>
            Every project gets the same treatment — understand the brand first, then build something
            that fits it exactly.
          </p>
        </Reveal>
        <div className="project-grid">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 100}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
        <div className="projects-footer">
          <button className="btn btn-ghost" onClick={() => navigate("/portfolio")}>
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
