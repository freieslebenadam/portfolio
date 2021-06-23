import React from 'react'
import useHover from '../hooks/useHover'
import Button from './Button'

function Project() {
    const [hover, ref] = useHover()

    return (
        <div ref={ref} className="project-wrapper">
            <div className="project">
                <div className="project-preview">
                </div>
                <div style={hover?{display: "flex"}:{display: "none"}} className="project-info">
                    <div className="overlay"></div>
                    <p>Lorem ipsum dolor elit. Curabitur sagittis hendrerit ante sagittis hendrerit ante. </p>
                    <Button href="#" textColor="white">
                        Visit website
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Project