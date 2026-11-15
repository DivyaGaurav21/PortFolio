import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constant';
import Reveal from '../Reveal';
import './Experience.css';
import '../Timeline/Timeline.css';

const Experience = () => (
  <section className="experience-section section-container" id="experience">
    <Reveal className="section-heading">
      <span className="section-heading__eyebrow" aria-hidden="true">02</span>
      <h2 className="section-heading__title">Experience</h2>
      <p className="section-heading__description">
        My work experience as a Frontend Developer and working details in companies and projects.
      </p>
    </Reveal>
    <ol className="timeline timeline--experience">
      {experiences.map((experience, index) => (
        <Reveal
          as="li"
          className="timeline__item"
          delay={index * 0.07}
          amount={0.12}
          key={`${experience.company}-${index}`}
        >
          <div className="timeline__separator" aria-hidden="true">
            <span className="timeline__dot" />
            {index !== experiences.length - 1 && <span className="timeline__connector" />}
          </div>
          <div className="timeline__content">
            <ExperienceCard experience={experience} />
          </div>
        </Reveal>
      ))}
    </ol>
  </section>
);

export default Experience;
