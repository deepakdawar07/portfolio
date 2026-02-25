import "./Css/SkillCard.css";

export default function SkillCard({ name }) {
  return (
    <span className="pf-skill-card">{name}</span>
  );
}