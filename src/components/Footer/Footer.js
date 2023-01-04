import React from "react";
import { Icon } from "@iconify/react";
import "./Footer.css";
import IconSocial from "../IconSocial/IconSocial";
import { Link } from "react-router-dom";
import { License } from "../../pages/License/License";
const Footer = () => {
  const currentYear = () => {
    const date = new Date();
    return date.getFullYear();
  };
  return (
    <footer>
      <IconSocial></IconSocial>
      <Link to={"/50-license"} className="footer__link ">
        50/50 license
      </Link>
      <p className="footer__copyright">©{currentYear()} MongaMongaBeats LLC</p>
    </footer>
  );
};

export default Footer;
