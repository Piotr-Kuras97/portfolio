import ProjectsRouter from '../components/Projects/ProjectsRouter'

import '../styles/projects.scss'

const Projects = ({reference}) => {
    return (
        <section className="projects" ref={reference}>
            <h2 className="projects__title">03. projects</h2>
            <ProjectsRouter />

            <p className="projects__more">To see more of my projects - <a href="https://github.com/Piotr-Kuras97" target="_blank" rel="noreferrer">visit my GitHub profile</a></p>
        </section>
    )
}

export default Projects