

import React, { useState } from 'react'
import '../Style/Navbar.css'
import logoImg from '../Assets/lumera-logo.png'

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className='navbar-container'>

            <div className="nc-left">
                <div className="nc-logo">
                    <img src={logoImg} alt="" />
                </div>
            </div>

            {/* Desktop Menu */}
            <div className="nc-center">
                <a href="#services">SERVICES </a>
                <a href="#why">WHY US</a>
                <a href="#client">CLIENT</a>
                <a href="#process">PROCESS</a>
                <a href="#footer">CONTACT</a>
            </div>

            <div className="nc-right">
                <a
                    href="https://api.whatsapp.com/send?phone=6590846600&text=Hello%20Lumera%20Global,%20I%20would%20like%20to%20inquire%20about%20your%20apparel%20sourcing%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button>REQUEST QUOTATION</button>
                </a>
            </div>

            {/* Burger Button */}
            <div
                className={`burger-menu ${menuOpen ? 'active' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${menuOpen ? 'show' : ''}`}>
                <a href="#services">SERVICES </a>
                <a href="#why">WHY US</a>
                <a href="#client">CLIENT</a>
                <a href="#process">PROCESS</a>
                <a href="#footer">CONTACT</a>

                <a
                    href="https://api.whatsapp.com/send?phone=6590846600&text=Hello%20Lumera%20Global,%20I%20would%20like%20to%20inquire%20about%20your%20apparel%20sourcing%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button>REQUEST QUOTATION</button>
                </a>
            </div>

        </div>
    )
}

export default Navbar

// Hello Lumera Global, I would like to inquire about your apparel sourcing services.
