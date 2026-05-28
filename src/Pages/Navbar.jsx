

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
                <a href="#about">SERVICES </a>
                <a href="#visi">WHY US</a>
                <a href="#program">CLIENT</a>
                <a href="#dokumentasi">PROCESS</a>
                <a href="#struktur">CONTACT</a>
            </div>

            <div className="nc-right">
                <a
                    href="https://wa.me/6281115599002"
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
                <a href="#about">SERVICES </a>
                <a href="#visi">WHY US</a>
                <a href="#program">CLIENT</a>
                <a href="#dokumentasi">PROCESS</a>
                <a href="#struktur">CONTACT</a>

                <a
                    href="https://wa.me/6281115599002"
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