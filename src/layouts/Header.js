import HeaderBackground from '../components/HeaderBackground'
import HeaderInfo from '../components/HeaderInfo'
import HeaderGoDown from '../components/HeaderGoDown'

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