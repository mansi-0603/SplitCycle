import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthShell from "../components/AuthShell";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const [showPw, setShowPw] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: replace with a real API call
    navigate("/dashboard");
  };

  return (
    <AuthShell>
      <h1>Welcome back</h1>
      <p className="auth-subtitle">Sign in to manage your shared finances.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email" name="email" type="email"
            placeholder="you@example.com"
            value={form.email} onChange={handleChange} required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="input-wrap">
            <input
              id="password" name="password"
              type={showPw ? "text" : "password"}
              placeholder="Enter your password"
              value={form.password} onChange={handleChange} required
            />
            <button type="button" className="toggle-pw" onClick={() => setShowPw((s) => !s)}>
              {showPw ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div className="form-options">
          <label>
            <input name="remember" type="checkbox" checked={form.remember} onChange={handleChange} />
            Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>

        <button className="btn btn-brand btn-lg auth-btn" type="submit">Sign in</button>
      </form>

      <p className="auth-footer">
        New here? <Link to="/register">Create an account</Link>
      </p>
    </AuthShell>
  );
};

export default Login;
