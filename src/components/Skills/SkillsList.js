import React, { useEffect } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css';

import htmlIcon from '../../assets/html-icon.svg'
import cssIcon from '../../assets/css-icon.svg'
import jsIcon from '../../assets/javascript-icon.svg'
import bootstrapIcon from '../../assets/bootstrap-icon.svg'
import reactIcon from '../../assets/react-icon.svg'
import gitIcon from '../../assets/git-icon.svg'
import webpackIcon from '../../assets/webpack-icon.svg'
import tsIcon from '../../assets/typescript-icon.svg'
import reduxIcon from '../../assets/redux-icon.svg'

const skillElements = [
    {id: 1, src: htmlIcon, text: "Coding since: 08.2022", delay: 100},
    {id: 2, src: cssIcon, text: "Coding since: 08.2022", delay: 200},
    {id: 3, src: jsIcon, text: "Coding since: 10.2022", delay: 300},
    {id: 6, src: gitIcon, text: "Knowledge since: 10.2022", delay: 400},
    {id: 4, src: bootstrapIcon, text: "Coding since: 11.2022", delay: 500},
    {id: 7, src: webpackIcon, text: "Knowledge since: 01.2023", delay: 600},
    {id: 5, src: reactIcon, text: "Coding since: 03.2023", delay: 700},
    {id: 8, src: tsIcon, text: "Coding since: 04.2023", delay: 800},
    {id: 9, src: reduxIcon, text: "Coding since: 04.2023", delay: 900},
]

const SkillsList = () => {

    const skillList = skillElements.map(skill => (
        <div key={skill.id} className='skills__element' data-aos="zoom-in" data-aos-delay={skill.delay}>
            <img className="skills__image" src={skill.src} alt="coś" />
            <p className='skills__text'>{skill.text}</p>
        </div>
    ))

    useEffect(() => {
        Aos.init({
            once: true
        });
    }, [])

    return (
       <>
        {skillList}
       </>
   )
}

export default SkillsList