import React from "react";
import "./HamburgerMenu.css";
const HamburgerMenu = () => {
  return (
    <div className="ham__menu">
      <ul className="ham__menuul">
        <li className="ham__menuli">
          <a className="ham__menua" href="#">
            Home
          </a>
        </li>
        <li className="ham__menuli">
          <a className="ham__menua" href="#">
            About
          </a>
        </li>
        <li className="ham__menuli">
          <a className="ham__menua" href="#">
            contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
