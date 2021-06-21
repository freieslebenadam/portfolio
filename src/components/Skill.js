import React from 'react'

function Skill({middle, type, text, tech, tools}) {
    const skillClass = middle ? `skill skill-middle` : "skill"
    const toolsArr = tools.map(tool => (<li>{tool}</li>))
    return (
        <div className={skillClass}>
            <div className="skill-icon debug-gray">
                
            </div>
            <div className="skill-type">
                <h2>{type}</h2>
                <p>{text}</p>
            </div>
            <div className="skill-tech">
                <h3>Technologie:</h3>
                <p>{tech}</p>
            </div>
            <div className="skill-tools">
                <h3>Nástroje:</h3>
                <ul>
                    {toolsArr}
                </ul>
            </div>
        </div>
    )
}

export default Skill