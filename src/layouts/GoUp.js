import React, { useEffect, useState } from 'react'

const GoUp = () => {
    const [active, setActive] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 350){
                setActive(true)
            } else {
                setActive(false)
            }
        })
    }, [])

    const handleGoUpClick = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

    return (
        <div className={`goup ${active ? "active" : null}`} onClick={handleGoUpClick}>
            <i className="fa-solid fa-arrow-up goup__arrow"></i>
        </div>
    )
}

export default GoUp