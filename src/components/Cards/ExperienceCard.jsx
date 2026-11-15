import './ExperienceCard.css';

const ExperienceCard = ({ experience }) => (
  <article className="experience-card">
    <div className="experience-card__header">
      {experience.img ? (
        <img className="experience-card__image" src={experience.img} alt={experience.company} loading="lazy" />
      ) : (
        <span className="experience-card__image experience-card__image--placeholder" aria-hidden="true">
          {experience.company.slice(0, 1)}
        </span>
      )}
      <div className="experience-card__identity">
        <h3 className="experience-card__role">{experience.role}</h3>
        <p className="experience-card__company">{experience.company}</p>
        <p className="experience-card__date">{experience.date}</p>
      </div>
    </div>
    {experience?.desc && (
      <p className="experience-card__description">{experience.desc}</p>
    )}
    {experience?.skills && (
      <div className="experience-card__skills">
        <b>Skills Used:</b>
        <div className="experience-card__skill-list">
          {experience.skills.map((skill, index) => (
            <span className="experience-card__skill" key={`${skill}-${index}`}>• {skill}</span>
          ))}
        </div>
      </div>
    )}
  </article>
);

export default ExperienceCard;
