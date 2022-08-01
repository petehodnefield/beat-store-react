import React from "react";
import youtube from '../../assets/icons/logo-youtube.svg'
import instagram from '../../assets/icons/logo-instagram.svg'
import tiktok from '../../assets/icons/logo-tiktok.svg'

function Footer() {
    return (
        <footer>
            <h2 className="section-header">Footer</h2>
            <ul className="icon-list">
                <a href="https://www.instagram.com/mongamonga_" target="_blank">
                    <img
                        src={instagram}
                        class="icon filter-icon"
                        alt="Instagram logo"
                    />
                </a>
                <a href="https://www.youtube.com/channel/UC-MaHf-WV-C6yu99T61pk7A" target="_blank">
                    <img
                        src={youtube}
                        class="icon filter-icon"
                        alt="YouTube logo"
                    />
                </a>
                <a href="https://www.tiktok.com/@mongamonga_?lang=en" target="_blank">
                    <img
                        src={tiktok}
                        class="icon filter-icon"
                        alt="TikTok logo"
                    />
                </a>
            </ul>
        </footer>
    )
}

export default Footer