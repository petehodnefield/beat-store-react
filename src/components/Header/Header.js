import React, { useState } from "react";
import Hamburger from "./components/Hamburger";
import HamburgerMenu from "./components/HamburgerMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <a href="#">
        <h1>mongamonga_</h1>
      </a>
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen}></Hamburger>
      {isOpen ? <HamburgerMenu /> : ""}
    </header>
  );
};

export default Header;
