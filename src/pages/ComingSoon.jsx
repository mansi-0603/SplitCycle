import { Link } from "react-router-dom";

const ComingSoon = ({ title }) => {
  return (
    <div className="card empty-state">
      <div className="emoji">🚧</div>
      <h2>{title} is on the way</h2>
      <p>We're still building this page. Check back soon.</p>
      <Link to="/dashboard" className="btn btn-primary">Back to overview</Link>
    </div>
  );
};

export default ComingSoon;
