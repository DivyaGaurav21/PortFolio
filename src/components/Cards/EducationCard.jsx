import './EducationCard.css';

const EducationCard = ({ education }) => (
  <article className="education-card">
    <div className="education-card__header">
      <img className="education-card__image" src={education.img} alt={education.school} loading="lazy" />
      <div>
        <h3 className="education-card__school">{education.school}</h3>
        <p className="education-card__degree">{education.degree}</p>
        <p className="education-card__date">{education.date}</p>
      </div>
    </div>
    {education.grade && (
      <p className="education-card__grade"><b>Grade: </b>{education.grade}</p>
    )}
    {education.desc && (
      <p className="education-card__description">{education.desc}</p>
    )}
  </article>
);

export default EducationCard;
