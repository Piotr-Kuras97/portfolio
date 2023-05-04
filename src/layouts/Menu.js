import React, { useState } from 'react'

import Burger from "../components/Menu/Burger"
import MenuElements from '../components/Menu/MenuElements'

import '../styles/menu.scss'

const Menu = () => {
    const [isActive, setIsActive] = useState(false)

    const handleBurgerToggle = () => {
        setIsActive(!isActive)
    }

    return (
        <nav className="menu">
            <Burger toggle={handleBurgerToggle} isActive={isActive}/>
            <MenuElements toggle={handleBurgerToggle} isActive={isActive} />
        </nav>
    )
}

export default Menu