import { useEffect } from "react";
import SkillCard from "../components/SkillCard";
import "./Css/About.css";

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
const EXPERIENCE = [
  { 
    date: "2026 — Present", 
    title: "Fullstack Developer Intern", 
    org: "Personal Project", 
    desc: "Built enterprise web applications using JSP, Servlets, Spring Boot, Spring MVC, Spring Security, Hibernate, and Microservices. Designed REST APIs and optimized backend performance." 
  },
  { 
    date: "2025 — Present", 
    title: "Hospital Management Project", 
    org: "College / Personal Project", 
    desc: "Developed a hospital management system with React frontend and Spring Framework backend. Integrated Weather API for dynamic hospital info, implemented one-page responsive theme." 
  },
  { 
    date: "2024 — 2025",   
    title: "Expense Manager App",   
    org: "Personal Project",        
    desc: "Built an expense tracker app using React frontend and Firebase backend. Implemented authentication, CRUD operations, and real-time updates." 
  },
  { 
    date: "2024 — 2025",   
    title: "Freelance Web Developer",   
    org: "Self-Employed",        
    desc: "Delivered 15+ projects including dashboards, portfolios, and e-commerce sites using JSP/Servlets, Spring Boot, and relational databases." 
  },
  { 
    date: "2024 — Present", 
    title: "BSc Computer Science",     
    org: "Holker new Science College Indore", 
    desc: "Core modules: Data Structures, Algorithms, Web Technologies, Databases, Software Engineering." 
  },
];

export default function About() {
  useReveal();

  // Full Technical Skills
  const skills = [
    "Java","React" ,"javaScript","JSP / Servlets", "Spring Boot", "Spring MVC", "Spring Security",
    "Hibernate", "Microservices", "REST APIs", "SQL / PostgreSQL", "Git",
    "HTML & CSS", "Bootstrap", "C / C++", "Python (Core + Advanced)",
    "DSA", "Backend Development", "LeetCode 500+ Qs"
  ].map(skill => ({
    name: skill,
    icon: "fas fa-code",
    level: "Advanced"
  }));

  const softSkills = [
    "Imaginative Thinking", "Analytical Problem Solving",
    "Adaptability", "Attention to Detail", "Good Listener",
    "Strong Work Ethic"
  ];

  return (
    <section className="pf-section pf-about-page">
      <div className="pf-container">

        {/* Header */}
        <div className="pf-about-page__header pf-rv">
          <div className="pf-section-tag">About Me</div>
          <h1 className="pf-section-title">
            Turning ideas into <em>digital reality</em>
          </h1>
        </div>

        {/* Bio + Stats */}
        <div className="pf-about-page__grid">
          <div className="pf-rv" style={{ transitionDelay: "80ms" }}>
            <p className="pf-about-page__text">
              I'm a Fullstack Developer with strong expertise in frontend and Java-based backend technologies.
              I build scalable web apps, REST APIs, and enterprise dashboards using JSP, Servlets, Spring Boot, Spring MVC, Spring Security, Hibernate, and Microservices.
            </p>
            <p className="pf-about-page__text">
              When I'm not coding, I contribute to open source, solve challenging problems on LeetCode (500+ questions solved),
              and continuously improve my skills in algorithms, databases, and modern frameworks.
            </p>
          </div>
          <div className="pf-about-page__stats pf-rv" style={{ transitionDelay: "140ms" }}>
            {[
              { n: "1+",  l: "Years Coding" },
              { n: "7+", l: "Projects Built" },
              { n: "12+", l: "Technologies" },
              { n: "490+",l: "LeetCode Qs" },
            ].map((s, i) => (
              <div key={i} className="pf-about-page__stat">
                <div className="pf-about-page__stat-num">{s.n}</div>
                <div className="pf-about-page__stat-lbl">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="pf-divider" style={{ margin: "3rem 0" }} />

        {/* Technical Skills */}
        <div className="pf-rv">
          <div className="pf-section-tag">Skills</div>
          <h2 className="pf-section-title">Technical <em>Skills</em></h2>
        </div>
        <div className="pf-about-page__skills pf-rv" style={{ transitionDelay: "80ms" }}>
          {skills.map(s => <SkillCard key={s.name} name={s.name} icon={s.icon} level={s.level} />)}
        </div>

        {/* Soft Skills */}
        <br />
        <div style={{ marginTop: "2.5rem" }} className="pf-rv" style={{ transitionDelay: "120ms" }}>
          <div className="pf-section-tag">Soft Skills</div>
          <div className="pf-about-page__soft-skills">
            {softSkills.map(s => (
              <span key={s} className="pf-about-page__soft-skill">{s}</span>
            ))}
          </div>
        </div>

        <div className="pf-divider" style={{ margin: "3rem 0" }} />

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