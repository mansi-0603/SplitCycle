import Logo from "./Logo";
import "../pages/Auth.css";

const perks = [
  "Rotate who pays each bill automatically",
  "Check in before every subscription renews",
  "Settle up with fewer transfers",
];

const AuthShell = ({ children }) => (
  <div className="auth-page">
    <aside className="auth-aside">
      <Logo className="light" />
      <div>
        <h2>The calmest way to share a home's bills.</h2>
        <ul>
          {perks.map((p) => (
            <li key={p}><span>✓</span>{p}</li>
          ))}
        </ul>
      </div>
      <small>Built for roommates & co-living</small>
    </aside>

    <section className="auth-main">
      <div className="auth-card">{children}</div>
    </section>
  </div>
);

export default AuthShell;
