import "./Css/SkillCard.css";

export default function SkillCard({ name, icon, level }) {
  return (
    <div className="pf-skill-card">
      {icon && <span className="pf-skill-card__icon">{icon}</span>}
      <div className="pf-skill-card__info">
        <span className="pf-skill-card__name">{name}</span>
        {level && <span className="pf-skill-card__level">{level}</span>}
      </div>
    </div>
  );
}