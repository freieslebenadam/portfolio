import React from 'react'
import '../css/Projects.scss'
import Project from '../components/Project'
import Button from '../components/Button'
import gitMark from '../img/github_mark.svg'
import gitMarkLight from '../img/github_mark_light.svg'
import thumbnailProject1 from '../img/project1_thumbnail.jpg'
import thumbnailProject2 from '../img/project2_thumbnail.jpg'
import thumbnailProject3 from '../img/project3_thumbnail.jpg'

function Projects() {
    return (
        <article id="projects">
            <div className="container">
                <h1>Moje projekty:</h1>
                <p>Lorem ipsum dolor elit. Curabitur sagittis hendrerit ante.</p>
                <section className="projects">
                    <Project img={thumbnailProject1}/>
                    <Project img={thumbnailProject2} />
                    <Project img={thumbnailProject3} />
                </section>
                <section className="github">
                    <p>Jestli Vás zajímá kód za těmito projekty,</p>
                    <Button link="https://github.com/freieslebenadam" target="_blank" icon={gitMark} iconHover={gitMarkLight}>
                        Navštivte můj Github
                    </Button>
                </section>
            </div>
        </article>
    )
}

export default Projects