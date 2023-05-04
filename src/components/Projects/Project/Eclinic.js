import { Link } from "react-router-dom";

import '../../../styles/singleproject.scss'

const Eclinic = () => {
    return (
        <div className="project">
            <h4 className="project__title">Eclinic</h4>

            <div className="project__container">
                <p className="project__description">Another commercial project, done for a beauty salon. The project is only available in Polish. The structure of the site was built using HTML and SCSS together with BootStrap 5.2. The site, in addition to the homepage, also consists of two sub-pages that present the range of salon services and current prices. The AOS library was used to create animations while scrolling the page. Adapted for mobile device and larger screens.</p>

                <div className="project__technology-container">
                    <p className="project__technology">Technologies & tools I used while writing the project: </p>
                    <ul className="project__technology-list">
                        <li className="project__technology-element">HTML</li>
                        <li className="project__technology-element">SCSS</li>
                        <li className="project__technology-element">JavaScript</li>
                        <li className="project__technology-element">Bootstrap</li>
                        <li className="project__technology-element">FontAwesome</li>
                        <li className="project__technology-element">AoS</li>
                    </ul>
                </div>
            </div>

            <a href="http://eclinicskorosze.pl/" className="project__btn" target="_blank" rel="noreferrer">See live</a>

            <Link to="/" style={{textDecoration:"none"}}><p className="project__back">Back to projects list <i className="fa-solid fa-backward"></i></p></Link>
        </div>
    )
}

export default Eclinic