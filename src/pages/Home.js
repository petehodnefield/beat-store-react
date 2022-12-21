import React from "react";
import Gallery from "../components/Gallery";
import ContactForm from "../components/ContactForm";
import ImageSlider from "../components/ImageSlider";
import About from "../components/About";
import { SliderData } from "../components/SliderData";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <ImageSlider slides={SliderData}></ImageSlider>
        <ContactForm></ContactForm>
      </div>
      {/* <div>
        <About></About>
      </div> */}
    </div>
  );
};

export default Home;
