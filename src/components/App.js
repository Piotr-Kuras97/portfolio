import React, { useRef } from 'react'

import Menu from '../layouts/Menu'
import Header from '../layouts/Header'
import MainBackground from './MainBackground'
import About from '../layouts/About'
import GoUp from '../layouts/GoUp'

import '../styles/reset.scss'
import '../styles/variables.scss'
import '../styles/base.scss'
import '../styles/main.scss'
import '../styles/goup.scss'

const App = () => {

  const aboutSection = useRef()

  return (
    <>
      <Menu about={aboutSection}/>
      <Header />
      <main className='main'>
        <MainBackground />
        <About reference={aboutSection}/>
      </main>
    
      <GoUp />
    </>
  );
}

export default App;
