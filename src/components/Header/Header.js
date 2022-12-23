import React, { useState } from "react";
import IconSocialNav from "../IconSocialNav/IconSocialNav";
import Hamburger from "./components/Hamburger";
import HamburgerMenu from "./components/HamburgerMenu";
import NavBar from "./components/NavBar";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header">
      <a className="header__h1" href="/">
        <h1>mongamonga_</h1>
      </a>
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen}></Hamburger>
      {isOpen ? <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} /> : ""}
      <NavBar></NavBar>
      <IconSocialNav></IconSocialNav>
    </header>
  );
};

export default Header;
