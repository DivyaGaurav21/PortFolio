import { skills } from '../../data/constant';
import Reveal from '../Reveal';
import './Skills.css';

const Skills = () => (
  <section className="skills-section section-container" id="skills">
    <Reveal className="section-heading">
      <span className="section-heading__eyebrow" aria-hidden="true">01</span>
      <h2 className="section-heading__title">Skills</h2>
      <p className="section-heading__description">
        Here are some of my skills on which I have been working on for the past 1.5 years.
      </p>
    </Reveal>
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <Reveal as="article" className="skill-group" delay={index * 0.07} key={skill.title}>
          <div className="skill-group__heading">
            <span className="skill-group__mark" aria-hidden="true" />
            <h3>{skill.title}</h3>
          </div>
          <div className="skill-list">
            {skill.skills.map((item) => (
              <div className="skill-chip" key={item.name}>
                <img src={item.image} alt="" loading="lazy" />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Skills;
