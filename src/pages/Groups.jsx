import { useState } from "react";
import Avatar from "../components/Avatar";
import "./Groups.css";

const groups = [
  {
    id: 1, icon: "🏠", name: "Flat 302", description: "Our apartment group",
    subscriptions: 3, monthly: "₹2,840", settled: 80, tone: "violet",
    members: ["Aman", "Rahul", "Neha", "Sara"],
  },
  {
    id: 2, icon: "🎓", name: "College Apartment", description: "College roommates",
    subscriptions: 2, monthly: "₹1,200", settled: 55, tone: "coral",
    members: ["Aman", "Kabir", "Priya"],
  },
];

const Groups = () => {
  const [query, setQuery] = useState("");

  const visible = groups.filter((g) =>
    g.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <>
      <header className="page-head">
        <div>
          <h1>My groups</h1>
          <p>Manage your shared living spaces and roommates.</p>
        </div>

        <div className="head-actions">
          <input
            className="search"
            type="search"
            placeholder="Search groups…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search groups"
          />
          <button className="btn btn-primary">+ New group</button>
        </div>
      </header>

      <section className="groups-grid">
        {visible.map((g) => (
          <article className="group-card" key={g.id}>
            <div className={`group-banner tone-${g.tone}`}>
              <span className="group-icon">{g.icon}</span>
              <button className="more-btn" aria-label="More options">⋯</button>
            </div>

            <div className="group-body">
              <h2>{g.name}</h2>
              <p className="group-description">{g.description}</p>

              <div className="group-stats">
                <div><strong>{g.members.length}</strong><span>Members</span></div>
                <div><strong>{g.subscriptions}</strong><span>Subscriptions</span></div>
                <div><strong>{g.monthly}</strong><span>Monthly</span></div>
              </div>

              <div className="settle">
                <div className="settle-label">
                  <span>Settled up</span>
                  <b>{g.settled}%</b>
                </div>
                <div className="settle-track">
                  <div className="settle-fill" style={{ width: `${g.settled}%` }} />
                </div>
              </div>

              <div className="group-footer">
                <div className="avatar-stack">
                  {g.members.map((m, i) => (
                    <Avatar key={m} name={m} index={i} />
                  ))}
                </div>
                <button className="btn btn-ghost">View group →</button>
              </div>
            </div>
          </article>
        ))}

        {!query && (
          <button className="create-card">
            <span className="create-icon">+</span>
            <strong>Create a new group</strong>
            <small>Start sharing expenses with roommates</small>
          </button>
        )}

        {query && visible.length === 0 && (
          <p className="no-results">No groups match "{query}".</p>
        )}
      </section>
    </>
  );
};

export default Groups;
