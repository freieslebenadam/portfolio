import React, {useState} from 'react'
import AFLogo from '../img/AF_Logo.svg'
import '../css/Navbar.scss'
import Button from './Button'

function Navbar() {
    const [toggleBurger, setToggleBurger] = useState(false)
    const isActive = toggleBurger ? "is-active" : ""
    const burgerIcon = toggleBurger ? "times" : "bars"

    return (
        <nav className="navbar is-transparent">
            <div className="container">
                <div className="navbar-brand">
                    <a href="#" className="navbar-item">
                        <img src={AFLogo} alt="Obrázek nenalezen" height="42" />
                    </a> 
                    <a className={`navbar-burger ${isActive}`} role="button" onClick={() => setToggleBurger(prev => !prev)}>
                        <i className={`navbar-burger-icon fa fa-${burgerIcon}`}></i>
                    </a>
                </div>
                <div className={`navbar-menu ${isActive}`}>
                    <div className="navbar-links">
                        <a href="#about" className="navbar-item">About me</a>
                        <a href="#projects" className="navbar-item">Projects</a>
                        <div className="navbar-item">
                            <Button link="#contact">
                                Contact
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar