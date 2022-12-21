import React from "react";
import "./HamburgerStyle.css";
const Hamburger = ({ isOpen, setIsOpen }) => {
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`ham__wrapper ${!isOpen ? "ham__closed" : "ham__open"}`}
    >
      <div
        className={`ham__line ${!isOpen ? "ham__lineClosed" : "ham__lineOpen"}`}
      ></div>
      <div
        className={`ham__line ${!isOpen ? "ham__lineClosed" : "ham__lineOpen"}`}
      ></div>
      <div
        className={`ham__line ${!isOpen ? "ham__lineClosed" : "ham__lineOpen"}`}
      ></div>
    </div>
  );
};

export default Hamburger;
