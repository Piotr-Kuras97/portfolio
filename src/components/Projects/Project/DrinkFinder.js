import { Link } from "react-router-dom";

import '../../../styles/singleproject.scss'

const DrinkFinder = () => {
    return (
        <div className="project">
            <h4 className="project__title">Drink Finder</h4>

            <div className="project__container">
                <p className="project__description">The first project during which I used a public API to retrieve data. The data is provided from the CocktailDB API. The user can type the name of a drink into a text field, and then all matching items are displayed along with the method of preparation and a list of ingredients needed. The application was written using pure JavaScript with an object-oriented programming approach.</p>

                <div className="project__technology-container">
                    <p className="project__technology">Technologies & tools I used while writing the project: </p>
                    <ul className="project__technology-list">
                        <li className="project__technology-element">HTML</li>
                        <li className="project__technology-element">SCSS</li>
                        <li className="project__technology-element">JavaScript</li>
                        <li className="project__technology-element">API</li>
                    </ul>
                </div>
            </div>

            <div className="project__btn-group">
                <a href="https://piotr-kuras97.github.io/Drink-Finder/" className="project__btn" target="_blank" rel="noreferrer">See live</a>
                <a href="https://github.com/Piotr-Kuras97/Drink-Finder" className="project__btn" target="_blank" rel="noreferrer">Code</a>
            </div>

            <Link to="/" style={{textDecoration:"none"}}><p className="project__back">Back to projects list <i className="fa-solid fa-backward"></i></p></Link>
        </div>
    )
}

export default DrinkFinder