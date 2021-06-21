import React from 'react'
import '../css/About.css'
import Skill from '../components/Skill'

function About() {
    return (
        <article id="about">
            <div className="container">
                <section className="about">
                    <h1>Já jsem adam, tady jsou mé znalosti:</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sagittis hendrerit ante. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Facere possimus, omnis volup.</p>
                </section>
                <section className="skills">
                    <div className="skills-section">
                        <Skill 
                            type="Designer"
                            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sagittis hendrerit ante. Nam libero tempore."
                            tech={"UX, UI, Web, Apps, Loga"}
                            tools={["Illustrator", "Photoshop"]}
                        />
                        <Skill middle={true} 
                            type="Front-end Developer"
                            text="Lorem ipsum dolor elit. Curabitur sagittis hendrerit ante. Nam libero tempore. Gendrerit ante."
                            tech={"HTML, CSS, JavaScript, jQuery, React"}
                            tools={["Visual Studio Code", "NPM", "Github"]}
                        />
                        <Skill 
                            type="Back-end Developer"
                            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sagittis hendrerit ante."
                            tech={"PHP, SQL, API"}
                            tools={["Apache", "MySQL", "Visual Studio"]}
                        />
                    </div>
                </section>
            </div>
        </article>
    )
}

export default About