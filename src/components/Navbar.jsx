import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Css/Navbar.css";

const LINKS = [
  { label: "Home",     to: "/" },
  { label: "About",    to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Resume",   to: "/resume" },
  { label: "Contact",  to: "/contact" },
];

export default function Navbar({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="pf-nav">
      <div className="pf-nav__inner">

        <NavLink to="/" className="pf-nav__logo">
          DD<span style={{ color: "var(--pf-gold)" }}></span>
        </NavLink>

        <ul className="pf-nav__links">
          {LINKS.map(({ label, to }) => (
            <li key={label}>
              <NavLink
                to={to}
                className={({ isActive }) => isActive ? "active" : ""}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="pf-nav__right">
          <button
            className={`pf-toggle${dark ? " pf-toggle--on" : ""}`}
            onClick={() => setDark(d => !d)}
            aria-label="Toggle theme"
          ><span className="pf-toggle__icon pf-toggle__icon--moon">
                <i className="fas fa-moon"></i>
              </span>

              <span className="pf-toggle__icon pf-toggle__icon--sun">
                <i className="fas fa-sun"></i>
              </span>
            <div className="pf-toggle__thumb" />
          </button>

          <button className="pf-nav__hire"
            onClick={() => window.open("https://wa.me/917974304882?text=Hello%20Deepak,%20I%20want%20to%20hire%20you", "_blank")}
          >Hire Me</button>

          <button
            className="pf-nav__hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`pf-nav__mobile${menuOpen ? " open" : ""}`}>
        {LINKS.map(({ label, to }) => (
          <NavLink
            key={label}
            to={to}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}