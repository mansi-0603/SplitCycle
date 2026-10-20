import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";
import "./AppLayout.css";

const AppLayout = () => {
  return (
    <div className="app-shell">
      <TopNav />
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
