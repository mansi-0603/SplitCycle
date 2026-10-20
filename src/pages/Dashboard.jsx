import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";
import "./Dashboard.css";

const stats = [
  { label: "Active groups", value: "2", icon: "🏠" },
  { label: "Monthly spending", value: "₹2,840", icon: "💸" },
  { label: "Payments due", value: "3", icon: "🗓️" },
];

const spending = [
  { month: "Mar", amount: 2100 },
  { month: "Apr", amount: 2400 },
  { month: "May", amount: 2300 },
  { month: "Jun", amount: 2650 },
  { month: "Jul", amount: 2700 },
  { month: "Aug", amount: 2840 },
];

const payments = [
  { name: "Netflix", due: "in 4 days", payer: "Rahul pays", amount: "₹649", color: "#e50914" },
  { name: "Wi-Fi", due: "in 7 days", payer: "You pay", amount: "₹899", color: "#3b82f6" },
  { name: "Spotify", due: "in 10 days", payer: "Aman pays", amount: "₹199", color: "#1fb981" },
];

const rotation = [
  { name: "Aman", state: "done" },
  { name: "Rahul", state: "current" },
  { name: "Neha", state: "" },
  { name: "Sara", state: "" },
];

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
};

const Dashboard = () => {
  // null = not answered yet, "keep" | "drop" = the user's answer
  const [renewalAnswer, setRenewalAnswer] = useState(null);
  const max = Math.max(...spending.map((s) => s.amount));

  return (
    <>
      <header className="page-head">
        <div>
          <h1>{getGreeting()} 👋</h1>
          <p>Here's what's happening with your shared finances.</p>
        </div>
        <button className="btn btn-primary">+ Add expense</button>
      </header>

      <div className="dash-grid">
        {/* Balance hero */}
        <section className="balance-card">
          <small>Your net balance</small>
          <h2>+₹350</h2>
          <p>You're owed money this month</p>

          <div className="balance-split">
            <div>
              <span>You're owed</span>
              <strong>₹1,100</strong>
            </div>
            <div>
              <span>You owe</span>
              <strong>₹750</strong>
            </div>
          </div>

          <Link to="/balances" className="btn btn-white">Settle up →</Link>
        </section>

        {/* Stats */}
        <section className="stats">
          {stats.map((s) => (
            <div className="card stat" key={s.label}>
              <span className="stat-icon">{s.icon}</span>
              <div>
                <strong>{s.value}</strong>
                <small>{s.label}</small>
              </div>
            </div>
          ))}
        </section>

        {/* Spending chart */}
        <section className="card chart-card">
          <div className="card-head">
            <div>
              <h3>Spending</h3>
              <p>Shared subscriptions, last 6 months</p>
            </div>
            <span className="chip chip-brand">↑ 6% vs last month</span>
          </div>

          <div className="bars">
            {spending.map((s, i) => (
              <div className="bar-col" key={s.month}>
                <span className="bar-value">₹{s.amount.toLocaleString("en-IN")}</span>
                <div
                  className={`bar ${i === spending.length - 1 ? "latest" : ""}`}
                  style={{ height: `${(s.amount / max) * 100}%` }}
                />
                <small>{s.month}</small>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming payments */}
        <section className="card payments-card">
          <div className="card-head">
            <div>
              <h3>Upcoming payments</h3>
              <p>Your next shared bills</p>
            </div>
            <Link to="/subscriptions" className="link">View all</Link>
          </div>

          {payments.map((p) => (
            <div className="pay-row" key={p.name}>
              <span className="pay-icon" style={{ background: p.color }}>{p.name[0]}</span>
              <div className="pay-info">
                <strong>{p.name}</strong>
                <small>{p.payer}</small>
              </div>
              <div className="pay-right">
                <b>{p.amount}</b>
                <small>{p.due}</small>
              </div>
            </div>
          ))}
        </section>

        {/* Rotation */}
        <section className="card rotation-card">
          <div className="card-head">
            <div>
              <h3>Payment rotation</h3>
              <p>Flat 302 · Netflix</p>
            </div>
            <span className="chip chip-mint">Active</span>
          </div>

          <div className="rot-track">
            {rotation.map((m, i) => (
              <Fragment key={m.name}>
                {i > 0 && <span className={`rot-line ${rotation[i - 1].state ? "filled" : ""}`} />}
                <div className={`rot-node ${m.state}`}>
                  <Avatar name={m.name} index={i} />
                  <small>{m.state === "current" ? "Paying" : m.name}</small>
                </div>
              </Fragment>
            ))}
          </div>

          <p className="next-payer">Next month it's <strong>your turn</strong>.</p>
        </section>

        {/* Renewal pulse */}
        <section className="renewal-banner">
          <div>
            <span className="renewal-label">RENEWAL PULSE</span>
            <h3>Netflix renews in 4 days</h3>
            <p>Tell your group if you want to keep using it next month.</p>
          </div>

          {renewalAnswer ? (
            <p className="renewal-confirm">
              {renewalAnswer === "keep" ? "✓ You're staying on Netflix." : "You've dropped out of Netflix."}
              <button onClick={() => setRenewalAnswer(null)}>Change</button>
            </p>
          ) : (
            <div className="renewal-actions">
              <button className="btn btn-white" onClick={() => setRenewalAnswer("keep")}>✓ Keep me</button>
              <button className="btn renewal-drop" onClick={() => setRenewalAnswer("drop")}>Drop me</button>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default Dashboard;
