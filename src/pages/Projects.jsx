import { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import "./Css/Projects.css";

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

export default function Projects() {
  useReveal();

  return (
    <section className="pf-section pf-projects-page">
      <div className="pf-container">

        <div className="pf-rv">
          <div className="pf-section-tag">My Work</div>
          <h1 className="pf-section-title">Selected <em>Projects</em></h1>
          <p className="pf-section-sub">
            A collection of projects I've built while learning and growing as a developer.
          </p>
        </div>

        <div className="pf-projects-page__grid">
          {projects.map((p, i) => (
            <div
              key={i}
              className={p.wide ? "pf-projects-page__wide" : ""}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <ProjectCard {...p} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}