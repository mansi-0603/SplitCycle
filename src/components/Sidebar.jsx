import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const mainLinks = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/groups", label: "Groups" },
  { to: "/subscriptions", label: "Subscriptions" },
  { to: "/expenses", label: "Expenses" },
  { to: "/balances", label: "Balances" },
  { to: "/simulator", label: "Simulator" },
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Logo className="dashboard-logo" />

      <nav>
        {mainLinks.map((link) => (
          <NavLink key={link.to} to={link.to}>
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <NavLink to="/settings">Settings</NavLink>
        <NavLink to="/">Logout</NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
