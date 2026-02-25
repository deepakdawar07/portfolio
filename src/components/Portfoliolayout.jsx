import { useState, useEffect } from "react";

const NAV  = ["Home","About","Projects","Experience","Contact"];
const SKILLS = ["React","TypeScript","Tailwind CSS","Next.js","Node.js","Python","Git","Figma","REST APIs","SQL"];
const STATS  = [{n:"3+",l:"Years Coding"},{n:"15+",l:"Projects Built"},{n:"8+",l:"Technologies"},{n:"100%",l:"Dedication"}];
const PROJECTS = [
  {icon:"🚀",num:"01",title:"DevTrack Dashboard",desc:"Full-stack productivity app with real-time task management, GitHub integration, and analytics. Built for developer teams.",tags:["React","Node.js","MongoDB","REST API"],wide:true},
  {icon:"🎨",num:"02",title:"StudySync",desc:"Collaborative study platform with shared notes, live sessions, and smart flashcards for university students.",tags:["React","Firebase","WebRTC"],wide:false},
  {icon:"🌤️",num:"03",title:"WeatherMesh",desc:"Hyper-local weather visualization using canvas mesh gradients and live meteorological data.",tags:["Vanilla JS","Canvas API","OpenWeather"],wide:false},
  {icon:"🛒",num:"04",title:"ShopUI Kit",desc:"Premium e-commerce React component library with 40+ production-ready components and Storybook docs.",tags:["React","Tailwind","Storybook"],wide:false},
];
const EXPERIENCE = [
  {date:"2025 — Present",title:"Frontend Developer Intern",org:"TechStart Pvt. Ltd.",desc:"Building React dashboards and component libraries. Improved load performance by 40% through code splitting."},
  {date:"2024 — 2025",title:"Freelance Web Developer",org:"Self-Employed",desc:"Delivered 8+ client projects — portfolios, landing pages, and small business sites using React and Tailwind."},
  {date:"2023 — Present",title:"BSc Computer Science",org:"University of Technology",desc:"Core modules: Data Structures, Algorithms, Web Technologies, Databases, Software Engineering."},
];
const CONTACTS = [
  {icon:"✉️",label:"Email",value:"deepak@example.com",href:"mailto:deepak@example.com"},
  {icon:"💼",label:"LinkedIn",value:"linkedin.com/in/deepak-dawar",href:"#"},
  {icon:"🐙",label:"GitHub",value:"github.com/deepakdawar",href:"#"},
  {icon:"🐦",label:"Twitter",value:"@deepakdawar",href:"#"},
];

/* ══ REVEAL HOOK ══ */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".pf-rv");
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  useReveal();

  useEffect(() => {
    setDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  return (
    <>
      <style>{CSS}</style>

      {/* ══ PARENT .pf controls ALL theming ══ */}
      <div className={`pf${dark ? "" : " light"}`}>

        {/* Ambient blobs */}
        <div className="pf-blob pf-blob-1" />
        <div className="pf-blob pf-blob-2" />

        <div className="pf-wrap">

          {/* ━━━━━━━━━━━━━━━━━━ NAVBAR ━━━━━━━━━━━━━━━━━━ */}
          <nav className="pf-nav">
            <div className="c">
              <div className="pf-logo">DD<span style={{color:"var(--gold)"}}>.</span></div>

              <ul className="pf-nav-links">
                {NAV.map(n => <li key={n}><a href={`#${n.toLowerCase()}`}>{n}</a></li>)}
              </ul>

              <div className="pf-nav-right">
                <button
                  className={`pf-toggle${dark ? " on" : ""}`}
                  onClick={() => setDark(d => !d)}
                  aria-label="Toggle theme"
                >
                  <span className="pf-toggle-icon moon">🌙</span>
                  <span className="pf-toggle-icon sun">☀️</span>
                  <div className="pf-toggle-thumb" />
                </button>
                <button className="pf-hire">Hire Me</button>
              </div>
            </div>
          </nav>

          {/* ━━━━━━━━━━━━━━━━━━ HERO ━━━━━━━━━━━━━━━━━━━ */}
          <section id="home" style={{minHeight:"calc(100vh - 70px)",display:"flex",alignItems:"center",padding:"5rem 0 4rem",position:"relative"}}>
            <div className="pf-hero-vline" />
            <div className="c" style={{display:"grid",gridTemplateColumns:"1.1fr 0.9fr",gap:"4rem",alignItems:"center",width:"100%"}}>
              {/* Left */}
              <div>
                <div className="pf-badge pf-rv">
                  <span className="pf-badge-dot" />
                  Available for Work
                </div>
                <h1 className="pf-hero-title pf-rv" style={{transitionDelay:"80ms"}}>
                  Hello, I'm<br />
                  <span>Deepak Dawar</span>
                </h1>
                <p className="pf-hero-sub pf-rv" style={{transitionDelay:"160ms"}}>
                  BSc Computer Science student crafting modern, performant web experiences
                  with React and Tailwind CSS. Passionate about clean code &amp; great design.
                </p>
                <div className="pf-hero-btns pf-rv" style={{transitionDelay:"240ms"}}>
                  <a href="#projects" className="pf-btn-p">View Projects →</a>
                  <a href="#contact"  className="pf-btn-s">Contact Me</a>
                </div>
              </div>
              {/* Right card */}
              <div style={{display:"flex",justifyContent:"center"}} className="pf-rv" style2={{transitionDelay:"200ms"}}>
                <div className="pf-hero-card">
                  <div className="pf-hero-ring">
                    <div className="pf-hero-initials">DD</div>
                  </div>
                  <div className="pf-hero-card-name">Deepak Dawar</div>
                  <div className="pf-hero-card-role">Frontend Developer</div>
                  <div className="pf-hero-card-pills">
                    {["React","Tailwind","Node.js"].map(t => <span key={t} className="pf-hero-pill">{t}</span>)}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="pf-divider" />

          {/* ━━━━━━━━━━━━━━━━━━ ABOUT ━━━━━━━━━━━━━━━━━━ */}
          <section id="about" className="pf-sec">
            <div className="c">
              <div className="pf-about-grid">
                <div>
                  <div className="pf-sec-tag pf-rv">About Me</div>
                  <h2 className="pf-sec-title pf-rv" style={{transitionDelay:"60ms"}}>
                    Turning ideas into<br /><em>digital reality</em>
                  </h2>
                  <p className="pf-about-txt pf-rv" style={{transitionDelay:"120ms"}}>
                    I'm a Computer Science student with a deep passion for frontend development.
                    I love building clean, accessible, and visually compelling interfaces that solve real problems.
                  </p>
                  <p className="pf-about-txt pf-rv" style={{transitionDelay:"160ms"}}>
                    When I'm not coding, I'm exploring new design trends, contributing to open source,
                    or learning the latest technologies to keep my skills sharp.
                  </p>
                  <div className="pf-skills pf-rv" style={{transitionDelay:"200ms"}}>
                    {SKILLS.map(s => <span key={s} className="pf-skill">{s}</span>)}
                  </div>
                </div>
                <div className="pf-stats pf-rv" style={{transitionDelay:"100ms"}}>
                  {STATS.map((s,i) => (
                    <div key={i} className="pf-stat">
                      <div className="pf-stat-num">{s.n}</div>
                      <div className="pf-stat-lbl">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="pf-divider" />

          {/* ━━━━━━━━━━━━━━━━━━ PROJECTS ━━━━━━━━━━━━━━━ */}
          <section id="projects" className="pf-sec">
            <div className="c">
              <div className="pf-sec-tag pf-rv">My Work</div>
              <h2 className="pf-sec-title pf-rv" style={{transitionDelay:"60ms"}}>Selected <em>Projects</em></h2>
              <p className="pf-sec-sub pf-rv" style={{transitionDelay:"120ms"}}>
                A collection of projects I've built while learning and working as a developer.
              </p>
              <div className="pf-proj-grid">
                {PROJECTS.map((p,i) => (
                  <div key={i} className={`pf-proj pf-rv${p.wide ? " wide" : ""}`} style={{transitionDelay:`${i*80}ms`}}>
                    <div className="pf-proj-top">
                      <div className="pf-proj-icon">{p.icon}</div>
                      <div className="pf-proj-num">{p.num}</div>
                    </div>
                    <div className="pf-proj-title">{p.title}</div>
                    <div className="pf-proj-desc">{p.desc}</div>
                    <div className="pf-proj-tags">
                      {p.tags.map(t => <span key={t} className="pf-proj-tag">{t}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="pf-divider" />

          {/* ━━━━━━━━━━━━━━━━━━ EXPERIENCE ━━━━━━━━━━━━━ */}
          <section id="experience" className="pf-sec">
            <div className="c">
              <div className="pf-exp-grid">
                <div>
                  <div className="pf-sec-tag pf-rv">Journey</div>
                  <h2 className="pf-sec-title pf-rv" style={{transitionDelay:"60ms"}}>My <em>Experience</em></h2>
                  <p className="pf-sec-sub pf-rv" style={{transitionDelay:"120ms"}}>
                    My professional journey, education and milestones so far.
                  </p>
                </div>
                <div className="pf-timeline pf-rv" style={{transitionDelay:"100ms"}}>
                  {EXPERIENCE.map((e,i) => (
                    <div key={i} className="pf-tl-item">
                      <div className="pf-tl-date">{e.date}</div>
                      <div className="pf-tl-title">{e.title}</div>
                      <div className="pf-tl-org">{e.org}</div>
                      <div className="pf-tl-desc">{e.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="pf-divider" />

          {/* ━━━━━━━━━━━━━━━━━━ CONTACT ━━━━━━━━━━━━━━━━ */}
          <section id="contact" className="pf-sec">
            <div className="c">
              <div className="pf-contact-grid">
                <div className="pf-rv">
                  <div className="pf-sec-tag">Get In Touch</div>
                  <div className="pf-contact-big">
                    Let's<br /><span>Work Together</span>
                  </div>
                  <p className="pf-contact-sub">
                    I'm currently open to freelance projects, internships, and full-time opportunities.
                    Drop a message — I'd love to connect!
                  </p>
                  <a href="mailto:deepak@example.com" className="pf-btn-p" style={{display:"inline-flex"}}>
                    Send Message →
                  </a>
                </div>
                <div className="pf-contact-links pf-rv" style={{transitionDelay:"100ms"}}>
                  {CONTACTS.map(c => (
                    <a key={c.label} href={c.href} className="pf-clink">
                      <div className="pf-clink-icon">{c.icon}</div>
                      <div>
                        <div className="pf-clink-lbl">{c.label}</div>
                        <div className="pf-clink-val">{c.value}</div>
                      </div>
                      <span className="pf-clink-arr">→</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ━━━━━━━━━━━━━━━━━━ FOOTER ━━━━━━━━━━━━━━━━━ */}
          <footer className="pf-footer">
            <div className="c">
              <div className="pf-footer-copy">© 2026 Deepak Dawar — All rights reserved</div>
              <div className="pf-footer-links">
                {NAV.map(n => <a key={n} href={`#${n.toLowerCase()}`}>{n}</a>)}
              </div>
            </div>
          </footer>

        </div>{/* /pf-wrap */}
      </div>{/* /pf ← PARENT CLASS */}
    </>
  );
}