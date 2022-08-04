import React from "react";
import {Link} from 'react-router-dom'
import LoopLicense from "../LoopLicense";



function Footer() {

    const getDate = () => {
        return new Date().toLocaleDateString('en-us', {year: "numeric"})
    }
    return (
        <footer>
         
           <div className="social">
                    <a href="https://www.instagram.com/mongamonga_" target="_blank">
                        <i className="fa-brands fa-instagram icon"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UC-MaHf-WV-C6yu99T61pk7A" target="_blank">
                        <i className="fa-brands fa-youtube icon"></i>

                    </a>
                    <a href="https://www.tiktok.com/@mongamonga_?lang=en" target="_blank">
                        <i className="fa-brands fa-tiktok icon tiktok"></i>
                    </a>
            </div>
            <a className="license-link" href="http://localhost:3000/loop-license">Royalty Free License</a>
            <p className="copyright">©{getDate()} MongaMongaBeats LLC</p>
        </footer>
    )
}

export default Footer