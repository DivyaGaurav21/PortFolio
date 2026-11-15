import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constant';
import Reveal from '../Reveal';
import './Projects.css';

const Projects = ({ setOpenModal }) => {
  return (
    <section className="projects-section section-container" id="projects">
      <Reveal className="section-heading">
        <span className="section-heading__eyebrow" aria-hidden="true">03</span>
        <h2 className="section-heading__title">Projects</h2>
        <p className="section-heading__description">
          I have worked on a wide range of web applications. Here are some of my projects.
        </p>
      </Reveal>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Reveal
            delay={Math.min(index * 0.055, 0.28)}
            amount={0.12}
            key={index}
          >
            <ProjectCard project={project} setOpenModal={setOpenModal} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
