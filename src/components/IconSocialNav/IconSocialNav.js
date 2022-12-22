import React from "react";
import { Icon } from "@iconify/react";
import "./IconSocialNav.css";
const IconSocialNav = () => {
  return (
    <div className="icon-wrapper-nav">
      <a href="https://www.tiktok.com/@mongamonga_?lang=en" target="_blank">
        <Icon className="icon-social-nav" icon="ic:baseline-tiktok" />
      </a>
      <a href="https://www.youtube.com/mongamonga_" target="_blank">
        <Icon className="icon-social-nav" icon="mingcute:youtube-line" />
      </a>
      <a href="https://www.instagram.com/mongamonga_/" target="_blank">
        <Icon className="icon-social-nav" icon="mdi:instagram" />
      </a>
    </div>
  );
};

export default IconSocialNav;
