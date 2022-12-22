import React from "react";
import "./HamburgerMenu.css";
import { Icon } from "@iconify/react";
const HamburgerMenu = () => {
  return (
    <div className="ham__menu">
      <ul className="ham__menuul">
        <li className="ham__menuli">
          <a className="ham__menua" href="#">
            About
          </a>
        </li>
        <li className="ham__menuli">
          <a className="ham__menua" href="#">
            Contact
          </a>
        </li>
        <li className="ham__menuli">
          <a className="ham__menua" href="#">
            Loops
          </a>
        </li>
        <li className="ham__menuli">
          <a className="ham__menua" href="#">
            Royalty-Free License
          </a>
        </li>
      </ul>
      <div>
        {" "}
        <a href="https://www.tiktok.com/@mongamonga_?lang=en" target="_blank">
          <Icon className="icon-social-ham" icon="ic:baseline-tiktok" />
        </a>
        <a href="https://www.youtube.com/mongamonga_" target="_blank">
          <Icon className="icon-social-ham" icon="mingcute:youtube-line" />
        </a>
        <a href="https://www.instagram.com/mongamonga_/" target="_blank">
          <Icon className="icon-social-ham" icon="mdi:instagram" />
        </a>
      </div>
    </div>
  );
};

export default HamburgerMenu;
