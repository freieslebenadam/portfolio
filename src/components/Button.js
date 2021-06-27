import React from 'react'
import '../css/Button.scss'
import useHover from '../hooks/useHover'

function Button({link, target, icon, iconHover, textColor, children}) {
    const [hover, ref] = useHover()
    let icn = null
    let icnHover = null

    if (icon !== null) {
        icn = <img width={25} height={25} src={icon} alt="Icon not found" />
    } else {
        icn = ""
    }

    if (iconHover !== null) {
        icnHover = <img width={25} height={25} src={iconHover} alt="Icon not found" />
    } else {
        icnHover = icn
    }

    return (
        <div ref={ref} className="special-button">
            <a href={link} target={target}>
                {hover?icnHover:icn}
                <span className={textColor === "white" ? "white-text" : ""} 
                      style={icn!==null?{paddingLeft: 10}:{paddingLeft: 0}}
                >{children}</span>
            </a>
        </div>
    )
}

Button.defaultProps = {
    link: "#",
    icon: null,
    iconHover: null,
    link: "#",
    textColor: "default",
    target: "_self"
}

export default Button