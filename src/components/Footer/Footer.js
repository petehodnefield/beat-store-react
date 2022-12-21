import React from "react";
import { Icon } from "@iconify/react";
import "./Footer.css";
import IconSocial from "../IconSocial/IconSocial";
const Footer = () => {
  const currentYear = () => {
    const date = new Date();
    return date.getFullYear();
  };
  return (
    <footer>
      <IconSocial></IconSocial>
      <a className="footer__link">royalty-free license</a>
      <p className="footer__copyright">©{currentYear()} MongaMongaBeats LLC</p>
    </footer>
  );
};

export default Footer;
