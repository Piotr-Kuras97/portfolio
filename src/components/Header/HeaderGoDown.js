import React, { useContext, useState, useEffect } from 'react'
import PageContext from '../../context/PageContext'

const HeaderGoDown = () => {
    const [isActive, setIsActive] = useState(true)
    const { aboutSection } = useContext(PageContext)

    const handleGoDown = () => {
        aboutSection.current.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 250){
                setIsActive(false)
            } else {
                setIsActive(true)
            }
        })
    })
    
    return (
        <div className={`header__go-down ${!isActive ? "remove" : null}`} ref={aboutSection} onClick={handleGoDown}>
            <i className="fa-solid fa-arrow-down"></i>
        </div>
    )
}

export default HeaderGoDown