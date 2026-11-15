import { CloseRounded } from '@mui/icons-material';
import { Modal } from '@mui/material';
import './ProjectDetails.css';

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  const closeModal = () => setOpenModal({ state: false, project: null });

  return (
    <Modal
      className="project-modal"
      open
      onClose={closeModal}
      aria-labelledby="project-details-title"
    >
      <div className="project-modal__viewport">
        <article className="project-dialog">
          <button className="project-dialog__close" type="button" onClick={closeModal} aria-label="Close project details">
            <CloseRounded />
          </button>
          <img className="project-dialog__image" src={project?.image} alt={project?.title || ''} />
          <div className="project-dialog__body">
            <h2 className="project-dialog__title" id="project-details-title">{project?.title}</h2>
            <p className="project-dialog__date">{project?.date}</p>
            <div className="project-dialog__tags">
              {project?.tags.map((tag) => (
                <span className="project-dialog__tag" key={tag}>{tag}</span>
              ))}
            </div>
            <p className="project-dialog__description">{project?.description}</p>
            <div className="project-dialog__actions">
              <a className="button button--secondary" href={project?.github} target="_blank" rel="noreferrer">
                View Code
                <span aria-hidden="true">↗</span>
              </a>
              <a className="button button--primary" href={project?.webapp} target="_blank" rel="noreferrer">
                View Live App
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </Modal>
  );
};

export default ProjectDetails;
