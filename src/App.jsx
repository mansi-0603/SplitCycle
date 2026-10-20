import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Groups from "./pages/Groups";
import ComingSoon from "./pages/ComingSoon";

const comingSoon = [
  { path: "subscriptions", title: "Subscriptions" },
  { path: "expenses", title: "Expenses" },
  { path: "balances", title: "Balances" },
  { path: "simulator", title: "Simulator" },
  { path: "settings", title: "Settings" },
];

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Pages that share the sidebar layout */}
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/groups" element={<Groups />} />
          {comingSoon.map(({ path, title }) => (
            <Route key={path} path={`/${path}`} element={<ComingSoon title={title} />} />
          ))}
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
