import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import CreatePoll from "./components/CreatePoll";
import RegisterVote from "./components/RegisterVote";
import ViewResult from "./components/ViewResult";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Public Poll</h1>
        <nav className="app-nav">
          <Link to="/">Create Poll</Link>
          <Link to="/register-vote">Register Vote</Link>
          <Link to="/view-result">View Results</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<CreatePoll />} />
          <Route path="/register-vote" element={<RegisterVote />} />
          <Route path="/view-result" element={<ViewResult />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
