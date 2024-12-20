import React from "react";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import NavBar from "./components/NavBar";
import LeftMenu from "./components/LeftMenu";

function App() {
  return (
    <div className="w-full p-4 bg-white rounded shadow" style={{display:'flex'}}>
      <LeftMenu />
      <div>
        <NavBar />
        <Dashboard />
      </div>

    </div>
  );
}

export default App;