import React from 'react'
import useHover from '../hooks/useHover'
import Button from './Button'

function Project({img, children}) {
    const [hover, ref] = useHover()

    return (
        <div ref={ref} className="project-wrapper">
            <div className="project">
                <div style={{backgroundImage: `url(${img})`}} className="project-preview">
                </div>
                <div style={hover?{display: "flex"}:{display: "none"}} className="project-info">
                    <div className="overlay"></div>
                    <p>{children}</p>
                    <Button href="#" textColor="white">
                        Navštívit web
                    </Button>
                </div>
            </div>
        </div>
    )
}

Project.defaultProps = {
    img: "http://placekitten.com/700/600",
    text: "..."
}

export default Project