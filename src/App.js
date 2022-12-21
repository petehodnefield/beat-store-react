import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Home from "./pages/Home";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./App.css";
import "./styles.css";
import LoopLicense from "./components/LoopLicense";
import AirbitStore from "./components/AirbitStore";
import FormSubmitted from "./pages/FormSubmitted";
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";
import NoMatch from "./pages/NoMatch";
import FormWholePage from "./pages/FormWholePage";

function App() {
  useEffect(() => {
    document.title = "mongamonga_";
  });
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <div className="padding-bottom">
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/beat-store-react/" element={<Home></Home>} />
            <Route path="loop-license" element={<LoopLicense />} />
            <Route path="airbit" element={<AirbitStore />} />
            <Route path="/thank-you" element={<FormSubmitted />} />
            <Route path="custom-loops" element={<FormWholePage />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>

        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
