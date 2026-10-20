import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthShell from "../components/AuthShell";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const [showPw, setShowPw] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password.length < 8) return setError("Password must be at least 8 characters.");
    if (form.password !== form.confirm) return setError("Passwords don't match.");
    // TODO: replace with a real API call
    navigate("/dashboard");
  };

  return (
    <AuthShell>
      <h1>Create your account</h1>
      <p className="auth-subtitle">Start managing your shared finances.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" type="text" placeholder="Enter your name"
            value={form.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@example.com"
            value={form.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="input-wrap">
            <input id="password" name="password" type={showPw ? "text" : "password"}
              placeholder="At least 8 characters"
              value={form.password} onChange={handleChange} required />
            <button type="button" className="toggle-pw" onClick={() => setShowPw((s) => !s)}>
              {showPw ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="confirm">Confirm password</label>
          <input id="confirm" name="confirm" type={showPw ? "text" : "password"}
            placeholder="Repeat your password"
            value={form.confirm} onChange={handleChange} required />
        </div>

        {error && <p className="form-error">{error}</p>}

        <button className="btn btn-brand btn-lg auth-btn" type="submit">Create account</button>
      </form>

      <p className="auth-footer">
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </AuthShell>
  );
};

export default Register;
