import { useEffect } from "react";
import SkillCard from "../components/SkillCard";
import skills from "../data/skills";
import "./Css/About.css";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".pf-rv");
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const EXPERIENCE = [
  { date: "2025 — Present", title: "Frontend Developer Intern", org: "TechStart Pvt. Ltd.", desc: "Building React dashboards and component libraries. Improved load performance by 40% through code splitting." },
  { date: "2024 — 2025",   title: "Freelance Web Developer",   org: "Self-Employed",        desc: "Delivered 8+ client projects — portfolios, landing pages, and small business sites using React and Tailwind." },
  { date: "2023 — Present", title: "BSc Computer Science",     org: "University of Technology", desc: "Core modules: Data Structures, Algorithms, Web Technologies, Databases, Software Engineering." },
];

export default function About() {
  useReveal();

  return (
    <section className="pf-section pf-about-page">
      <div className="pf-container">

        {/* Header */}
        <div className="pf-about-page__header pf-rv">
          <div className="pf-section-tag">About Me</div>
          <h1 className="pf-section-title">
            Turning ideas into<br /><em>digital reality</em>
          </h1>
        </div>

        {/* Bio + Skills */}
        <div className="pf-about-page__grid">
          <div className="pf-rv" style={{ transitionDelay: "80ms" }}>
            <p className="pf-about-page__text">
              I'm a Computer Science student with a deep passion for frontend development.
              I love building clean, accessible, and visually compelling interfaces that solve real problems.
            </p>
            <p className="pf-about-page__text">
              When I'm not coding, I'm exploring new design trends, contributing to open source,
              or learning the latest technologies to keep my skills sharp.
            </p>
            <div className="pf-about-page__skills">
              {skills.map(s => <SkillCard key={s} name={s} />)}
            </div>
          </div>

          {/* Stats */}
          <div className="pf-about-page__stats pf-rv" style={{ transitionDelay: "140ms" }}>
            {[
              { n: "3+",  l: "Years Coding" },
              { n: "15+", l: "Projects Built" },
              { n: "8+",  l: "Technologies" },
              { n: "100%",l: "Dedication" },
            ].map((s, i) => (
              <div key={i} className="pf-about-page__stat">
                <div className="pf-about-page__stat-num">{s.n}</div>
                <div className="pf-about-page__stat-lbl">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="pf-divider" style={{ margin: "4rem 0" }} />

        {/* Timeline */}
        <div className="pf-rv">
          <div className="pf-section-tag">Journey</div>
          <h2 className="pf-section-title">My <em>Experience</em></h2>
        </div>
        <div className="pf-about-page__timeline pf-rv" style={{ transitionDelay: "80ms" }}>
          {EXPERIENCE.map((e, i) => (
            <div key={i} className="pf-about-page__tl-item">
              <div className="pf-about-page__tl-date">{e.date}</div>
              <div className="pf-about-page__tl-title">{e.title}</div>
              <div className="pf-about-page__tl-org">{e.org}</div>
              <div className="pf-about-page__tl-desc">{e.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}