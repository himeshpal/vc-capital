// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Domains from "./components/Domains";
import DomainStartups from "./components/DomainStartups"; // Corrected filename
import StartupRegistration from "./components/Startup";
import MainRegistration from "./components/Main";
import InvestorRegistration from "./components/Investor";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainRegistration />} />
          <Route path="/investor" element={<InvestorRegistration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/startup" element={<StartupRegistration />} />
          <Route path="/domains" element={<Domains />} />
          <Route path="/startups/:domain" element={<DomainStartups />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
