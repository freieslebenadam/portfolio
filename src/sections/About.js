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
                    <p>Jmenuji se Adam a vývoji webových aplikací se věnuji už téměř 6 let. Primárně se věnuji front-end vývoji, ale neznamená to, že nemám znalost i v dalších odvětví. Baví mne stavět aplikace od základu a vymýšlet způsoby, jak svůj kód vylepšovat. Mimo design a webový vývoj mám také zkušenosti s programováním v jazyce C# a se střihem videí.</p>
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
                            tools={["Visual Studio Code", "Webpack", "NPM", "Github"]}
                            icon={frontEndIcon}
                        />
                        <Skill 
                            type="Back-end Developer"
                            text="Baví mě interaktivita napříč weby s použitím databáze, nebo vzdálených API dotazů."
                            tech={"PHP, MySQL, Nette, Symfony"}
                            tools={["Apache", "PHPMyAdmin", "Composer", "PHP Storm"]}
                            icon={backEndIcon}
                        />
                    </div>
                </section>
            </div>
        </article>
    )
}

export default About