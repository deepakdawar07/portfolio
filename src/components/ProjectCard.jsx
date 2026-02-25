import "./Css/ProjectCard.css";

export default function ProjectCard({ icon, num, title, desc, tags, link }) {
  return (
    <div className="pf-project-card pf-rv">
      <div className="pf-project-card__top">
        <div className="pf-project-card__icon">{icon}</div>
        <div className="pf-project-card__num">{num}</div>
      </div>
      <div className="pf-project-card__title">{title}</div>
      <div className="pf-project-card__desc">{desc}</div>
      <div className="pf-project-card__tags">
        {tags.map(t => (
          <span key={t} className="pf-project-card__tag">{t}</span>
        ))}
      </div>
      {link && (
        <a href={link} target="_blank" rel="noreferrer" className="pf-project-card__link">
          View Project →
        </a>
      )}
    </div>
  );
}