import React from "react";
import Gallery from "../components/Gallery";
import ContactForm from "../components/ContactForm";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../components/SliderData";

const Home = () => {
    return (
        <div className="home-container">
            <ImageSlider slides={SliderData}></ImageSlider>
            <ContactForm></ContactForm>
        </div>
    )
}

export default Home