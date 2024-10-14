// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Domains from "./components/Domains";
import DomainStartups from "./components/DomainStartups"; // Corrected filename

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/domains" element={<Domains />} />
          <Route path="/startups/:domain" element={<DomainStartups />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
