import React from 'react'
import '../css/Footer.scss'
import AF_Logo from '../img/AF_Logo.svg'

function Footer() {
    return (
        <footer>
            <div className="container">
                <a className="logo-wrapper" href="#">
                    <img src={AF_Logo} alt="Picture not found" width={60} />
                </a>
                <ul>
                    <li><a href="https://github.com/freieslebenadam" target="_blank"><i className="fab fa-github"></i></a></li>
                    <li><a href="mailto:adam.fre@seznam.cz"><i className="fas fa-envelope"></i></a></li>
                </ul>
                <p>Tento web byl vytvořen mnou <strong>&copy; Adam Freiesleben</strong></p>
                <p>Pomocí JavaScript knihovny <strong>React</strong></p>
            </div>
        </footer>
    )
}

export default Footer