import Sidebar from "./components/Sidebar";
import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InputForm from "./components/InputForm";

function App() {
  return (
    <div className="content">
      <Sidebar />
      <InputForm />
    </div>
  );
}

export default App;
