import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Css/Home.css";

const STATS = [
  { n: "3+",  l: "Years Coding" },
  { n: "15+", l: "Projects Built" },
  { n: "8+",  l: "Technologies" },
  { n: "100%",l: "Dedication" },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".pf-rv");
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { 
          e.target.classList.add("in"); 
          obs.unobserve(e.target); 
        }
      });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function Home() {
  useReveal();

  const skills = [
    "Java","DSA","Spring","MicroService","SpringBoot","SpringSecurity","RestAPI", "MVC","Hibernate","JavaScript", "React", "Bootstrap",
    "SQL","PLSQL", "Git", "HTML & CSS","c/c++",
    "python"
  ];

  return (
    <>
      <section className="pf-home">
        <div className="pf-home__vline" />
        <div className="pf-container">
          <div className="pf-home__grid">


            <div>
              <div className="pf-home__badge pf-rv">
                <span className="pf-home__badge-dot" />
                Available for Work
              </div>

              <h1 className="pf-home__title pf-rv" style={{ transitionDelay: "80ms" }}>
                Hello, I'm<br />
                <span>Deepak Dawar</span>
              </h1>

              <p className="pf-home__sub pf-rv" style={{ transitionDelay: "160ms" }}>
                BSc Computer Science student crafting modern, performant web experiences
                as a Fullstack Developer. Passionate about clean code &amp; scalable design.
              </p>

              <div className="pf-home__btns pf-rv" style={{ transitionDelay: "240ms" }}>
                <Link to="/projects" className="pf-btn-primary">View Projects →</Link>
                <Link to="/contact"  className="pf-btn-secondary">Contact Me</Link>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="pf-home__card pf-rv" style={{ transitionDelay: "200ms" }}>
                <div className="pf-home__ring">
                  <div className="pf-home__initials">DD</div>
                </div>
                <div className="pf-home__card-name">Deepak Dawar</div>
                <div className="pf-home__card-role">Fullstack Developer</div>
                <div className="pf-home__card-pills">
                  {skills.map(skill => (
                    <span key={skill} className="pf-home__pill">{skill}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          <div className="pf-home__stats">
            {STATS.map((s, i) => (
              <div key={i} className="pf-rv" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="pf-home__stat-num">{s.n}</div>
                <div className="pf-home__stat-lbl">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}