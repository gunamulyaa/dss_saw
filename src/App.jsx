import Sidebar from "./components/Sidebar";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import InputForm from "./components/InputForm";
import HasilSAW from "./components/hasil";

function App() {
  return (
    <div className="content">
      <Sidebar />
      <Router>
        <Routes>
          <Route path="/" element={<InputForm />} />
          <Route path="/hasil.jsx" element={<HasilSAW />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
