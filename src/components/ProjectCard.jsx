export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-thumb" style={{ background: project.gradient }}>
        <div className="chrome">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="glow"></div>
        {project.image ? (
          <img className="project-image" src={project.image} alt={project.name} />
        ) : (
          <i className={`fa-solid ${project.icon} mark`}></i>
        )}
      </div>
      <div className="project-body">
        <span className="project-cat">{project.category}</span>
        <h3>{project.name}</h3>
        <p>{project.blurb}</p>
        <div className="project-tags">
          {project.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
