import React, { useState } from 'react'

import Burger from "../components/Burger"
import MenuElements from '../components/MenuElements'

import '../styles/menu.scss'

const Menu = ({about}) => {
    const [isActive, setIsActive] = useState(false)

    const handleBurgerToggle = () => {
        setIsActive(!isActive)
    }

    return (
        <nav className="menu">
            <Burger toggle={handleBurgerToggle} isActive={isActive}/>
            <MenuElements isActive={isActive} about={about}/>
        </nav>
    )
}

export default Menu