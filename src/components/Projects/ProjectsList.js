import { Link } from "react-router-dom"
import React, {useContext} from "react"
import PageContext from "../../context/PageContext"


import phorosSerwis from '../../assets/phoros-serwis.png'
import carGame from '../../assets/car-game.png'
import currencyCalculator from '../../assets/currency-calculator.png'
import weatherApp from '../../assets/weather-app.png'
import eclinic from '../../assets/eclinic.png'
import drinkFinder from '../../assets/drink-finder.png'

const projectsArray = [
    {id:0, title: "Phoros Serwis", path: "/phoros-serwis", src: phorosSerwis, type: "Commercial project", delay: 100},
    {id:1, title: "Car Game", path: "/car-game", src: carGame, type: "Personal project", delay: 200},
    {id:2, title: "Currency Calculator", path: "/currency-calculator", src: currencyCalculator ,type: "Personal project", delay: 300},
    {id:3, title: "Weather App", path: "/weather-app", src: weatherApp, type: "Personal project", delay: 400},
    {id:4, title: "Eclinic", path: "/eclinic", src: eclinic, type: "Commercial project", delay: 500},
    {id:5, title: "Drink Finder", path: "/drink-finder", src: drinkFinder, type: "Personal project", delay: 600},
]

const ProjectsList = () => {
    const { projectsSection } = useContext(PageContext)

    const handleClick = () => {
        projectsSection.current.scrollIntoView({ behavior: 'smooth' })
    }

    const projectElement = projectsArray.map(project => (
        <Link to={project.path} style={{textDecoration: "none"}} key={project.id} onClick={handleClick} data-aos="zoom-in" data-aos-delay={project.delay}>
            <div className="projects__element">
                <div className="projects__image-container">
                    <img className="projects__image" src={project.src} alt="cos" />
                </div>
                <div className="projects__info">
                    <h6 className="projects__subtitle">{project.title}</h6>
                    <div className="projects__details">
                        <p className="projects__type">{project.type}</p>
                        <p className="projects__show-more">Show details</p>
                    </div>
                </div>
            </div>
        </Link>
    ))

    return (
        <div className="projects__container">
           {projectElement}
        </div>
    )
}

export default ProjectsList