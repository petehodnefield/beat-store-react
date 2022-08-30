import React from "react";
import pete from "../../assets/images/pete.jpg";

function About() {
  return (
    <div>
      <div className="img-container">
        <img className="about-img" src={pete}></img>
      </div>
      <h2> Yaya</h2>
    </div>
  );
}

export default About;
