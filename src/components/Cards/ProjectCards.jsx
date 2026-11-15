import './ProjectCards.css';

const ProjectCards = ({ project, setOpenModal }) => (
  <button
    className="project-card"
    type="button"
    aria-label={`View details for ${project.title}`}
    onClick={() => setOpenModal({ state: true, project })}
  >
    <span className={`project-card__media${project.image ? '' : ' project-card__media--placeholder'}`}>
      {project.image ? (
        <img src={project.image} alt="" loading="lazy" />
      ) : (
        <span className="project-card__placeholder-title" aria-hidden="true">{project.title}</span>
      )}
      <span className="project-card__media-action" aria-hidden="true">↗</span>
    </span>
    <span className="project-card__body">
      <span className="project-card__tags">
        {project.tags?.map((tag) => (
          <span className="project-card__tag" key={tag}>{tag}</span>
        ))}
      </span>
      <span className="project-card__title-row">
        <span className="project-card__title">{project.title}</span>
        <span className="project-card__arrow" aria-hidden="true">↗</span>
      </span>
      {project.date && <span className="project-card__date">{project.date}</span>}
      <span className="project-card__description">{project.description}</span>
    </span>
  </button>
);

export default ProjectCards;
