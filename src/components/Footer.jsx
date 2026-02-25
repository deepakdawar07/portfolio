import { Link } from "react-router-dom";
import "./Css/Footer.css";

const LINKS = ["Home","About","Projects","Resume","Contact"];

export default function Footer() {
  return (
    <footer className="pf-footer">
      <div className="pf-footer__inner">
        <span className="pf-footer__copy">
          © 2026 Deepak Dawar — All rights reserved
        </span>
        <div className="pf-footer__links">
          {LINKS.map(l => (
            <Link key={l} to={l === "Home" ? "/" : `/${l.toLowerCase()}`}>
              {l}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}