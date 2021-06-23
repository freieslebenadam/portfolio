import React from 'react'
import '../css/Footer.scss'

function Footer() {
    return (
        <footer>
            <div className="container">
                {/* logo? */}
                <ul>
                    <li><a href="https://github.com/freieslebenadam" target="_blank">Github</a></li>
                    <li><a href="mailto:adam.fre@seznam.cz">Email</a></li>
                </ul>
                <p>Tento web byl vytvořen mnou <strong>&copy; Adam Freiesleben</strong></p>
                <p>Pomocí JavaScript knihovny <strong>React</strong></p>
            </div>
        </footer>
    )
}

export default Footer