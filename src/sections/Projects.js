import React from 'react'
import '../css/Projects.css'
import Project from '../components/Project'
import Button from '../components/Button'
import gitMark from '../img/github_mark.svg'
import gitMarkLight from '../img/github_mark_light.svg'

function Projects() {
    return (
        <article id="projects">
            <div className="container">
                <h1>Moje projekty:</h1>
                <p>Lorem ipsum dolor elit. Curabitur sagittis hendrerit ante.</p>
                <section className="projects">
                    <Project />
                    <Project />
                    <Project />
                </section>
                <section className="github">
                    <p>Jestli Vás zajímá kód za těmito projekty,</p>
                    <Button link="#" text="Navštivte můj Github" icon={gitMark} iconHover={gitMarkLight} />
                </section>
            </div>
        </article>
    )
}

export default Projects