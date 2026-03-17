import "./Css/Resume.css";

export default function Resume() {
  return (
    <section className="pf-section pf-resume-page">
      <div className="pf-container">

        <div className="pf-resume-page__header">
          <div className="pf-section-tag">Resume</div>
          <h1 className="pf-section-title">My <em>Resume</em></h1>
          <p className="pf-section-sub">
            Download my resume or view it directly below.
          </p>
          <a href="RealResume1.pdf" download className="pf-btn-primary">
            ↓ Download Resume
          </a>
        </div>

        <div className="pf-resume-page__viewer">
          <iframe
            src="RealResume1.pdf"
            title="Resume"
            className="pf-resume-page__iframe"
          />
         
        </div>

      </div>
    </section>
  );
}