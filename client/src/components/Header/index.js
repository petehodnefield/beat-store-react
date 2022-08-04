import React from 'react'
import smokeableIcon from '../../assets/icons/logo-certified-smokeable.png'
import mongerHoncho from '../../assets/icons/mongerHoncho.png'
import morie from '../../assets/icons/morie.png'

function Header() {
    return(
        <header className="header">
            <h1><a href="#home">mongamonga_</a></h1>
            <p className='header-text'>Certified Smokeable <span className='header-img-container'><img className='header-img' alt='Hand holding a blunt' src={smokeableIcon} /></span></p>
            <img
                src={mongerHoncho}
                alt="A cartoon gorilla"
                className='honcho-icon'
            />
            <img
                src={morie}
                alt="A cartoon gorilla"
                className='morie-icon'
            />
        </header>
    )
}

export default Header