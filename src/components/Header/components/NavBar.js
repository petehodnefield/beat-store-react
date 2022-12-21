import React from "react";
import "./NavBar.css";
import { Icon } from "@iconify/react";
const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav__ul">
        <li className="nav__li">
          <a href="#about" className="nav__a">
            About
          </a>
        </li>
        <li className="nav__li">
          <a href="#about" className="nav__a">
            Contact
          </a>
        </li>
        <li className="nav__li">
          <a href="#about" className="nav__a">
            <div className="nav__triangle">
              Loops
              <Icon className="triangle-icon" icon="mdi:triangle-small-down" />
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
