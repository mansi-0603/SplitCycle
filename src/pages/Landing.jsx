import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import Avatar from "../components/Avatar";
import { APP_NAME } from "../config";
import "./Landing.css";

const steps = [
  { title: "Create a group", text: "Add your flat or roommates in under a minute." },
  { title: "Add what you share", text: "Netflix, Wi-Fi, rent, groceries. Everything in one place." },
  { title: "Let it run itself", text: "Rotation, renewal checks and settlements happen automatically." },
];

const Landing = () => {
  return (
    <div className="landing">
      {/* Navbar */}
      <header className="l-nav">
        <div className="l-container l-nav-inner">
          <Logo />
          <nav className="l-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How it works</a>
          </nav>
          <div className="l-nav-cta">
            <Link to="/login" className="btn btn-ghost">Log in</Link>
            <Link to="/register" className="btn btn-primary">Get started</Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="l-hero">
        <div className="blob blob-a" />
        <div className="blob blob-b" />

        <div className="l-container hero-copy">
          <span className="eyebrow">✦ Built for roommates & co-living</span>
          <h1>
            Shared bills,<br />
            <em>without the awkward texts.</em>
          </h1>
          <p>
            {APP_NAME} keeps every subscription, bill and settlement for your
            flat in one place, and nudges the right person at the right time.
          </p>
          <div className="hero-cta">
            <Link to="/register" className="btn btn-brand btn-lg">Start for free →</Link>
            <a href="#how-it-works" className="btn btn-ghost btn-lg">See how it works</a>
          </div>
        </div>

        {/* Floating product preview */}
        <div className="l-container">
          <div className="preview">
            <div className="preview-main card">
              <div className="pm-top">
                <div>
                  <small>Flat 302 · this month</small>
                  <h3>₹2,840</h3>
                </div>
                <span className="chip chip-mint">● All settled</span>
              </div>

              {[
                ["Netflix", "24 Aug", "₹649", "#e50914"],
                ["Wi-Fi", "27 Aug", "₹899", "#3b82f6"],
                ["Spotify", "30 Aug", "₹199", "#1fb981"],
              ].map(([name, date, amt, color]) => (
                <div className="pm-row" key={name}>
                  <span className="pm-icon" style={{ background: color }}>{name[0]}</span>
                  <div>
                    <strong>{name}</strong>
                    <small>Due {date}</small>
                  </div>
                  <b>{amt}</b>
                </div>
              ))}
            </div>

            <div className="float float-1 card">
              <span className="float-emoji">🔔</span>
              <div>
                <strong>Netflix renews in 4 days</strong>
                <small>Keep or drop yourself?</small>
              </div>
            </div>

            <div className="float float-2 card">
              <Avatar name="Rahul" index={1} />
              <div>
                <strong>Rahul paid ₹649</strong>
                <small>Your turn next month</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features: bento */}
      <section className="l-section" id="features">
        <div className="l-container">
          <div className="l-heading">
            <span className="eyebrow">Features</span>
            <h2>Everything shared living needs.</h2>
          </div>

          <div className="bento">
            <article className="b-card b-rotation">
              <h3>Payment Rotation</h3>
              <p>Rotate who pays each recurring bill, automatically, every month.</p>
              <div className="rot-visual">
                {["Aman", "Rahul", "Neha", "Sara"].map((n, i) => (
                  <div className={`rot-step ${i === 1 ? "now" : ""}`} key={n}>
                    <Avatar name={n} index={i} />
                    <span>{i === 1 ? "Paying now" : n}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="b-card b-pulse">
              <h3>Renewal Pulse</h3>
              <p>Ask everyone before a plan renews whether they still want it.</p>
              <div className="pulse-visual">
                <span className="btn btn-brand">✓ Keep me</span>
                <span className="btn btn-ghost">Drop me</span>
              </div>
            </article>

            <article className="b-card b-debt">
              <div>
                <h3>Debt Nullification</h3>
                <p>Offset what everyone owes across all expenses and cut down on pointless transfers.</p>
              </div>
              <div className="debt-visual">
                <div className="debt-before">
                  <small>Before</small>
                  <strong>5 transfers</strong>
                </div>
                <span className="debt-arrow">→</span>
                <div className="debt-after">
                  <small>After</small>
                  <strong>2 transfers</strong>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="l-section l-alt" id="how-it-works">
        <div className="l-container">
          <div className="l-heading">
            <span className="eyebrow">How it works</span>
            <h2>Up and running in three steps.</h2>
          </div>

          <div className="l-steps">
            {steps.map((s, i) => (
              <div className="l-step" key={s.title}>
                <span className="l-step-num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="l-container">
        <div className="l-cta">
          <h2>Ready to stop chasing people for money?</h2>
          <p>Set up your first group in under a minute.</p>
          <Link to="/register" className="btn btn-white btn-lg">Create free account</Link>
        </div>
      </section>

      <footer className="l-footer l-container">
        <Logo />
        <small>© {new Date().getFullYear()} {APP_NAME}. Made for shared homes.</small>
      </footer>
    </div>
  );
};

export default Landing;
