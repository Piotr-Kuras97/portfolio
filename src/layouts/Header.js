import HeaderBackground from '../components/Header/HeaderBackground'
import HeaderInfo from '../components/Header/HeaderInfo'
import HeaderGoDown from '../components/Header/HeaderGoDown'

import '../styles/header.scss'

const Header = () => {
    return (
        <header className='header'>
            <HeaderBackground />
            <HeaderInfo />
            <HeaderGoDown />
        </header>
    )
}

export default Header