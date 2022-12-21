import React from "react";
import "./HamburgerStyle.css";
const Hamburger = ({ isOpen, setIsOpen }) => {
  return (
    <div onClick={() => setIsOpen(true)} className="ham__wrapper">
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
