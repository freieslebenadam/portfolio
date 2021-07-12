import React from 'react'
import '../css/Welcome.scss'

function Welcome() {
    return (
        <div className="container">
            <div className="welcome">
                <h1>Designer, Front-end & Back-end Developer</h1>
                <p>Navrhuji a programuji webové aplikace.</p>
                <a href="#about" className="continue-btn">
                    <i className="fas fa-chevron-down"></i>
                </a>
                <div className="temp-svgs"></div>
            </div>
        </div>
    )
}

export default Welcome