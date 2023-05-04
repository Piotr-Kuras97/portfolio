import { Link } from "react-router-dom";

import '../../../styles/singleproject.scss'

const WeatherApp = () => {
    return (
        <div className="project">
            <h4 className="project__title">Weather App</h4>

            <div className="project__container">
                <p className="project__description">This project is an application that allows you to check the current weather virtually anywhere on earth. The site uses the OpenWeather API. When you enter the site, the user's current location is downloaded and based on that, the weather for the downloaded location is displayed. You can then enter the locale of your choice in a text box to check the weather. The application logic is written in pure JavaScript. </p>

                <div className="project__technology-container">
                    <p className="project__technology">Technologies & tools I used while writing the project: </p>
                    <ul className="project__technology-list">
                        <li className="project__technology-element">HTML</li>
                        <li className="project__technology-element">SCSS</li>
                        <li className="project__technology-element">JavaScript</li>
                        <li className="project__technology-element">API</li>
                        <li className="project__technology-element">FontAwesome</li>
                    </ul>
                </div>
            </div>

            <div className="project__btn-group">
                <a href="https://piotr-kuras97.github.io/weather-app/" className="project__btn" target="_blank" rel="noreferrer">See live</a>
                <a href="https://github.com/Piotr-Kuras97/weather-app" className="project__btn">Code</a>
            </div>

            <Link to="/" style={{textDecoration:"none"}}><p className="project__back">Back to projects list <i className="fa-solid fa-backward"></i></p></Link>
        </div>
    )
}

export default WeatherApp