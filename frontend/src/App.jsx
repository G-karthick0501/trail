import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";

export default function App() {
  const isAuthed = !!localStorage.getItem("token");

  return (
    <BrowserRouter>
      <div style={{ padding: 16, borderBottom: "1px solid #ddd", marginBottom: 16 }}>
        <b>Recruit App</b>{" "}
        <span style={{ marginLeft: 12 }}>
          <Link to="/">Home</Link>{" "}
          {!isAuthed && (
            <>
              | <Link to="/signup">Sign Up</Link> | <Link to="/login">Login</Link>
            </>
          )}
          {isAuthed && (
            <>
              | <Link to="/dashboard">Dashboard</Link>
            </>
          )}
        </span>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* We’ll keep protection logic inside Dashboard itself to stay simple */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
