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
                    <h1>Jmenuji se Adam, těší mě</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sagittis hendrerit ante. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Facere possimus, omnis volup.</p>
                </section>
                <section className="skills">
                    <div className="skills-section">
                        <Skill 
                            type="Designer"
                            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sagittis hendrerit ante. Nam libero tempore."
                            tech={"UX, UI, Web, Apps, Loga"}
                            tools={["Illustrator", "Photoshop"]}
                            icon={designIcon}
                        />
                        <Skill middle={true} 
                            type="Front-end Developer"
                            text="Lorem ipsum dolor elit. Curabitur sagittis hendrerit ante. Nam libero tempore. Gendrerit ante."
                            tech={"HTML, CSS, JavaScript, jQuery, React, SASS"}
                            tools={["Visual Studio Code", "NPM", "Github"]}
                            icon={frontEndIcon}
                        />
                        <Skill 
                            type="Back-end Developer"
                            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sagittis hendrerit ante."
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