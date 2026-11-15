import { education } from '../../data/constant';
import EducationCard from '../Cards/EducationCard';
import Reveal from '../Reveal';
import './Education.css';
import '../Timeline/Timeline.css';

const Education = () => (
  <section className="education-section section-container" id="education">
    <Reveal className="section-heading">
      <span className="section-heading__eyebrow" aria-hidden="true">04</span>
      <h2 className="section-heading__title">Education</h2>
      <p className="section-heading__description">
        My education has been a journey of self-discovery and growth. My educational details are as follows.
      </p>
    </Reveal>
    <ol className="timeline timeline--education">
      {education.map((item, index) => (
        <Reveal
          as="li"
          className="timeline__item"
          delay={index * 0.07}
          amount={0.12}
          key={`${item.school}-${index}`}
        >
          <div className="timeline__content">
            <EducationCard education={item} />
          </div>
          <div className="timeline__separator" aria-hidden="true">
            <span className="timeline__dot" />
            {index !== education.length - 1 && <span className="timeline__connector" />}
          </div>
        </Reveal>
      ))}
    </ol>
  </section>
);

export default Education;
