import React from 'react'
import NavItem from './NavItem'
import '../css/Header.css'

function Header() {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <div className="logo-wrapper">
                        <div className="logo"></div>
                    </div>
                    <nav>
                        <ul>
                            <NavItem href="#about" text="About me" />
                            <NavItem href="#projects" text="Projects" />
                            <NavItem href="#contact" text="Contact me" special={true} />
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header