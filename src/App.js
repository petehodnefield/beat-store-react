import React, { useEffect } from "react";
import "./assets/styles/styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import ThankYou from "./pages/ThankYou/ThankYou";
import Airbit from "./pages/Airbit/Airbit";
import License from "./pages/License/License";
import FiftyFiftyLicense from "./pages/FiftyFiftyLicense/FiftyFiftyLicense";

function App() {
  useEffect(() => {
    document.title = "mongamonga";
  });
  return (
    <Router>
      <Header></Header>{" "}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/thank-you" element={<ThankYou></ThankYou>}></Route>
        <Route path="/airbit" element={<Airbit></Airbit>}></Route>
        <Route path="/rf-license" element={<License></License>}></Route>
        <Route path="/50-license" element={<FiftyFiftyLicense />}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
