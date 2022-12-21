import React, { useEffect } from "react";
import "./assets/styles/styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  useEffect(() => {
    document.title = "mongamonga_";
  });
  return (
    <Router>
      <div className="App">
        <Header></Header>{" "}
        <div className="padding-bottom">
          <Routes></Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
