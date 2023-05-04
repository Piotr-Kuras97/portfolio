import { Link } from "react-router-dom";

import '../../../styles/singleproject.scss'

const PhorosSerwis = () => {
    return (
        <div className="project">
            <h4 className="project__title">Phoros Serwis</h4>

            <div className="project__container">
                <p className="project__description">One of my first completed commercial projects, which additionally was to practice my layout skills according to the client's needs. The site is available only in Polish. This is a static website of a tire geometry service. It was written using HTML, SCSS preprocessor and pure JavaScript with admixtures of JQuery. Adapted for mobile devices and larger screen resolutions. When creating the site, the BEM class creation methodology was used.</p>

                <div className="project__technology-container">
                    <p className="project__technology">Technologies & tools I used while writing the project: </p>
                    <ul className="project__technology-list">
                        <li className="project__technology-element">HTML</li>
                        <li className="project__technology-element">SCSS</li>
                        <li className="project__technology-element">JavaScript</li>
                        <li className="project__technology-element">JQuery</li>
                        <li className="project__technology-element">FontAwesome</li>
                        <li className="project__technology-element">AoS</li>
                    </ul>
                </div>
            </div>

            <a href="http://phoros-serwis.pl/" className="project__btn" target="_blank" rel="noreferrer">See live</a>

            <Link to="/" style={{textDecoration:"none"}}><p className="project__back">Back to projects list <i className="fa-solid fa-backward"></i></p></Link>
        </div>
    )
}

export default PhorosSerwis