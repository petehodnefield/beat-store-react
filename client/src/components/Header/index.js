import React from 'react'
import smokeableIcon from '../../assets/icons/logo-certified-smokeable.png'
import mongerHoncho from '../../assets/icons/mongerHoncho.png'
import morie from '../../assets/icons/morie.png'
import {Link} from 'react-router-dom'

function Header() {
    return(
        <header className="header">
            <Link className='header-h1' to='/'>
                <h1>mongamonga_</h1>
            </Link>
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