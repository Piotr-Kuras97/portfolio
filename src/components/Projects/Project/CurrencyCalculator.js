import { Link } from "react-router-dom";

import '../../../styles/singleproject.scss'

const CurrencyCalculator = () => {
    return (
        <div className="project">
            <h4 className="project__title">Currency Calculator</h4>

            <div className="project__container">
                <p className="project__description">Another project is a currency calculator that will convert PLN into one of 12 available foreign currencies. The site allows the user to type in the amount they would like to calculate, and then the data is presented. The application uses the publicly available API of the National Bank of Poland. A chart is also available for each currency, showing the price change over the last two weeks. The application's logic was written using pure JavaScript together with the ChartJS library.</p>

                <div className="project__technology-container">
                    <p className="project__technology">Technologies & tools I used while writing the project: </p>
                    <ul className="project__technology-list">
                        <li className="project__technology-element">HTML</li>
                        <li className="project__technology-element">SCSS</li>
                        <li className="project__technology-element">JavaScript</li>
                        <li className="project__technology-element">API</li>
                        <li className="project__technology-element">ChartJS</li>
                        <li className="project__technology-element">FontAwesome</li>
                    </ul>
                </div>
            </div>

            <div className="project__btn-group">
                <a href="https://piotr-kuras97.github.io/nbp-currency-exchange-rates/" className="project__btn" target="_blank" rel="noreferrer">See live</a>
                <a href="https://github.com/Piotr-Kuras97/nbp-currency-exchange-rates" className="project__btn" target="_blank" rel="noreferrer">Code</a>
            </div>

            <Link to="/" style={{textDecoration:"none"}}><p className="project__back">Back to projects list <i className="fa-solid fa-backward"></i></p></Link>
        </div>
    )
}

export default CurrencyCalculator