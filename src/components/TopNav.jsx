import { NavLink, Link } from "react-router-dom";
import Logo from "./Logo";
import Avatar from "./Avatar";

const links = [
  { to: "/dashboard", label: "Overview" },
  { to: "/groups", label: "Groups" },
  { to: "/subscriptions", label: "Subscriptions" },
  { to: "/expenses", label: "Expenses" },
  { to: "/balances", label: "Balances" },
  { to: "/simulator", label: "Simulator" },
];

const TopNav = () => {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Logo to="/dashboard" />

        <nav className="pill-nav" aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="topbar-actions">
          <button className="icon-btn" aria-label="Notifications">
            🔔<span className="dot" />
          </button>
          <Link to="/settings" aria-label="Settings">
            <Avatar name="A" index={0} />
          </Link>
          <Link to="/" className="logout">Log out</Link>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
