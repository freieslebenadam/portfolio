import React from 'react'
import '../css/About.scss'
import Skill from '../components/Skill'
import designIcon from '../img/design.svg'
import frontEndIcon from '../img/frontend.svg'
import backEndIcon from '../img/backend.svg'

function About() {
    return (
        <article id="about">
            <div className="container">
                <section className="about">
                    <h1>Pár slov o mně</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sagittis hendrerit ante. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Facere possimus, omnis volup.</p>
                </section>
                <section className="skills">
                    <div className="skills-section">
                        <Skill 
                            type="Designer"
                            text="Rád designuji svoje weby s pomyšlením na paletu barev a následném kódu aplikace."
                            tech={"UX, UI, Web, Aplikace, Loga"}
                            tools={["Illustrator", "Photoshop"]}
                            icon={designIcon}
                        />
                        <Skill middle={true} 
                            type="Front-end Developer"
                            text="Své weby píšu od základu a rád sleduji, jak se design proměnuje v hotový web."
                            tech={"HTML, CSS, JavaScript, jQuery, React, SASS"}
                            tools={["Visual Studio Code", "NPM", "Github"]}
                            icon={frontEndIcon}
                        />
                        <Skill 
                            type="Back-end Developer"
                            text="Baví mě interaktivita napříč weby s použitím databáze, nebo vzdálených API dotazů."
                            tech={"PHP, SQL, API"}
                            tools={["Apache", "MySQL", "Visual Studio"]}
                            icon={backEndIcon}
                        />
                    </div>
                </section>
            </div>
        </article>
    )
}

export default About