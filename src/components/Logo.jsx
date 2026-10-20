import { Link } from "react-router-dom";
import { BRAND } from "../config";

const Logo = ({ className = "", to = "/" }) => (
  <Link to={to} className={`logo ${className}`}>
    <span className="logo-mark">{BRAND.first[0]}</span>
    <span className="logo-text">
      {BRAND.first}
      <b>{BRAND.second}</b>
    </span>
  </Link>
);

export default Logo;
