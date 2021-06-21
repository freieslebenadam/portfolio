import React from 'react'
import '../css/Button.css'
import gitMark from '../img/github_mark.svg'

function Button({link, text, icon}) {
    let icn = null

    if (icon !== null) {
        icn = <img width={25} height={25} src={icon} alt="Icon not found" />
    } else {
        icn = ""
    }

    return (
        <div className="special-button">
            <a href={link}>
                {icn}
                <span style={icn!==null?{paddingLeft: 10}:{paddingLeft: 0}}>{text}</span>
            </a>
        </div>
    )
}

Button.defaultProps = {
    icon: null,
    link: "#",
    text: "Default text..."
}

export default Button