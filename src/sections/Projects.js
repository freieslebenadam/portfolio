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
                <h1>Ukázka mé práce:</h1>
                <p>Zde je pár projektů jako ukázka mého vývoje webů <br /><span className="small">(pouze kód, design jsem našel <a href="https://dev.to/frontendmentor/16-front-end-projects-with-designs-to-help-improve-your-coding-skills-5ajl">zde</a>)</span>. <br /> Všechny využívají ReactJS a jsou plně responsivní.</p>
                <section className="projects">
                    <Project img={thumbnailProject1} link="https://fylo.adamfr.eu/">
                        <b>React</b> aplikace s využitím funkcionálních komponentů a preprocesoru <b>SASS</b>
                    </Project>
                    <Project img={thumbnailProject2} link="https://bookmark.adamfr.eu/">
                        Jednoduchá multipage aplikace s využitím <b>React Routeru</b>
                    </Project>
                    <Project img={thumbnailProject3} link="https://shortly.adamfr.eu/">
                        Web aplikace používající <b>API</b> na zkracování odkazů a <b>React Context</b>
                    </Project>
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