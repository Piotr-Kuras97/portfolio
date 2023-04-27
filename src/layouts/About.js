import AboutDescription from '../components/AboutDescription'
import AboutImage from '../components/AboutImage'

import '../styles/about.scss'

const About = ({reference}) => {
    return (
        <section className="about" ref={reference}>
            <h2 className='about__title'>01. about me</h2>
            <div className="about__container">
                <AboutDescription />
                <AboutImage />
            </div>
        </section>
    )
}

export default About