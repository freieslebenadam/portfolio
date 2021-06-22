import React from 'react'

function Skill({middle, type, text, tech, tools, icon}) {
    const skillClass = middle ? `skill skill-middle` : "skill"
    const toolsArr = tools.map(tool => <li key={tool}>{tool}</li>)

    return (
        <div className={skillClass}>
            <div className="skill-icon">
                <img src={icon} alt="Obrázek nenalezen" />
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

Skill.defaultProps = {
    icon: null
}

export default Skill