import { skills } from '../../data/constant';
import Reveal from '../Reveal';
import './Skills.css';

const Skills = () => (
  <section className="skills-section section-container" id="skills">
    <Reveal className="section-heading">
      <span className="section-heading__eyebrow" aria-hidden="true">01</span>
      <h2 className="section-heading__title">Skills</h2>
      <p className="section-heading__description">
        Technologies I use across frontend and backend development, APIs, cloud, and testing.
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
                {item.image ? (
                  <img src={item.image} alt="" loading="lazy" />
                ) : (
                  <span className="skill-chip__fallback" aria-hidden="true">
                    {item.name.slice(0, 2).toUpperCase()}
                  </span>
                )}
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
