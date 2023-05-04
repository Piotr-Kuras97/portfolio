import ContactElements from "./ContactElements"
import React, { useContext } from 'react'
import PageContext from "../../context/PageContext"

import CV from "../../assets/cv.pdf"

const menuElements = [
    {
        id: 1,
        text: "about"
    },
    {
        id: 2,
        text: "skills"
    },
    {
        id: 3,
        text: "projects"
    },
    {
        id: 4,
        text: "contact"
    }
]

const MenuElements = ({isActive, toggle}) => {
    const classes = isActive ? "menu__list active" : "menu__list"

    const { aboutSection, skillsSection, projectsSection, contactSection, isHidden } = useContext(PageContext)
    const scrollClasses = isHidden ? " menu__list--hidden" : ""

    const goToSection = (text) => { 
        toggle()
        if(text === "about"){
            aboutSection.current.scrollIntoView({ behavior: 'smooth' })
        } else if (text === "skills"){
            skillsSection.current.scrollIntoView({ behavior: 'smooth' })
        } else if ( text === "projects"){
            projectsSection.current.scrollIntoView({ behavior: 'smooth' })
        } else if ( text === "contact"){
            contactSection.current.scrollIntoView({ behavior: 'smooth' })
        }
        else {
            console.log("Zły przycisk")
        }
    }

    const menuLi = menuElements.map(item => (
        <div key={item.id} className="menu__element">
            <div className="menu__number">.0{item.id}</div>
            <div className="menu__item">
                <p className="menu__link" onClick={() => goToSection(item.text)}> // {item.text}</p>
            </div>
        </div>
    ))

    return (
        <div className={classes + scrollClasses}>
            <div className="menu__name">PiotrKuraś <span></span> <span></span></div>
            {menuLi}
            <a href={CV} className="menu__resume" target="_blank" rel="noreferrer">Resume</a>
            <ContactElements />
        </div>
    )
}

export default MenuElements