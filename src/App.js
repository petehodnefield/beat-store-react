import React, { useEffect } from "react";
import "./assets/styles/styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import ThankYou from "./pages/ThankYou/ThankYou";

function App() {
  useEffect(() => {
    document.title = "mongamonga_";
  });
  return (
    <Router>
      <Header></Header>{" "}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/thank-you" element={<ThankYou></ThankYou>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
