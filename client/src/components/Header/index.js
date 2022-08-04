import React from 'react'
import smokeableIcon from '../../assets/icons/logo-certified-smokeable.png'

function Header() {
    return(
        <header className="header">
            <h1>mongamonga_</h1>
            <p className='header-text'>Certified Smokeable <span className='header-img-container'><img className='header-img' alt='Hand holding a blunt' src={smokeableIcon} /></span></p>
        </header>
    )
}

export default Header