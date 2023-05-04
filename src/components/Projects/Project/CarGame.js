import { Link } from "react-router-dom";

import '../../../styles/singleproject.scss'

const CarGame = () => {
    return (
        <div className="project">
            <h4 className="project__title">Car Game</h4>

            <div className="project__container">
                <p className="project__description">Project Car Game is a simple game accessible from a web browser. The user's task is to avoid as many road obstacles that appear as possible. The longer the game time - the faster the car starts moving. To create animations, the GSAP library was helpful. The player can also observe the current score of his game and mute sounds and music. Due to the structure of the project, the game is only available for larger screens, excluding mobile devices. I invite you to check out the game!</p>

                <div className="project__technology-container">
                    <p className="project__technology">Technologies & tools I used while writing the project: </p>
                    <ul className="project__technology-list">
                        <li className="project__technology-element">HTML</li>
                        <li className="project__technology-element">SCSS</li>
                        <li className="project__technology-element">JavaScript</li>
                        <li className="project__technology-element">GSAP</li>
                        <li className="project__technology-element">FontAwesome</li>
                    </ul>
                </div>
            </div>
            <div className="project__btn-group">
                <a href="https://simplecargame.netlify.app/" className="project__btn" target="_blank" rel="noreferrer">See live</a>
                <a href="https://github.com/Piotr-Kuras97/simple-car-game" className="project__btn" target="_blank" rel="noreferrer">Code</a>
            </div>

            <Link to="/" style={{textDecoration:"none"}}><p className="project__back">Back to projects list <i className="fa-solid fa-backward"></i></p></Link>
        </div>
    )
}

export default CarGame