import React, { useState } from "react";
import "./NavBar.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const LoopDropdown = ({ isHovered, setIsHovered }) => {
  return (
    <ul onMouseLeave={() => setIsHovered(false)} className="dropdown__ul">
      {" "}
      <Link
        onClick={() => setIsHovered(false)}
        className=" dropdown__a "
        to={"/airbit"}
      >
        <li className="dropdown__li">Airbit Store</li>
      </Link>
      <Link
        onClick={() => setIsHovered(false)}
        className="h5  dropdown__a"
        to={"/license"}
      >
        <li className="dropdown__li">Royalty-Free License</li>{" "}
      </Link>
    </ul>
  );
};

const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);
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
          <p
            onMouseDown={() => setIsHovered(!isHovered)}
            onMouseOver={() => setIsHovered(true)}
            className="nav__a"
          >
            <div className="nav__triangle">
              <span>Loops</span>
              <Icon className="triangle-icon" icon="mdi:triangle-small-down" />
            </div>
          </p>
          {isHovered ? (
            <LoopDropdown
              setIsHovered={setIsHovered}
              isHovered={isHovered}
            ></LoopDropdown>
          ) : (
            ""
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
