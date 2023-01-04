import React from "react";
import "./HamburgerMenu.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
const HamburgerMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div className="ham__menu">
      <div className="wrapper">
        <ul className="ham__menuul">
          <li className="ham__menuli">
            <a
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="ham__menua"
              href="/#about"
            >
              About
            </a>
          </li>
          <li onClick={() => setIsOpen(false)} className="ham__menuli">
            <a className="ham__menua" href="/#contact">
              Contact
            </a>
          </li>

          <li onClick={() => setIsOpen(false)} className="ham__menuli">
            <Link className="ham__menua" to="/airbit">
              Airbit Store
            </Link>
          </li>
          <li onClick={() => setIsOpen(false)} className="ham__menuli">
            <Link className="ham__menua" to="/rf-license">
              Royalty-Free License
            </Link>
          </li>
          <li onClick={() => setIsOpen(false)} className="ham__menuli">
            <Link className="ham__menua" to="/50-license">
              50/50 License
            </Link>
          </li>
        </ul>
        {/* <div className="icon-wrapper-ham">
          <a
            href="https://www.tiktok.com/@mongamonga_?lang=en"
            rel="noreferrer"
            target="_blank"
          >
            <Icon className="icon-social-ham" icon="ic:baseline-tiktok" />
          </a>
          <a
            href="https://www.youtube.com/mongamonga_"
            rel="noreferrer"
            target="_blank"
          >
            <Icon className="icon-social-ham" icon="mingcute:youtube-line" />
          </a>
          <a
            href="https://www.instagram.com/mongamonga_/"
            rel="noreferrer"
            target="_blank"
          >
            <Icon className="icon-social-ham" icon="mdi:instagram" />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default HamburgerMenu;
