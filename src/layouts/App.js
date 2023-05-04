import React, { useRef, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import PageContext from '../context/PageContext'

import Menu from './Menu'
import Header from './Header'
import MainBackground from '../components/MainBackground'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import GoUp from './GoUp'
import Footer from './Footer'

import '../styles/reset.scss'
import '../styles/variables.scss'
import '../styles/base.scss'
import '../styles/main.scss'
import '../styles/goup.scss'

const App = () => {

  const [isHidden, setIsHidden] = useState(false);


  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  };

  const aboutSection = useRef()
  const skillsSection = useRef()
  const projectsSection = useRef()
  const contactSection = useRef()

  return (
    <BrowserRouter>
       <div onWheel={handleScroll}>
      <PageContext.Provider 
        value={{aboutSection, skillsSection, projectsSection, contactSection, isHidden}}
      >

        <Menu about={aboutSection}/>
        <Header />
        <main className='main'>
          <MainBackground />
          <About reference={aboutSection}/>
          <Skills reference={skillsSection}/>
          <Projects reference={projectsSection}/>
          <Contact reference={contactSection}/>
        </main>
      
        <GoUp />
        <Footer />
      </PageContext.Provider>
    </div>
    </BrowserRouter>
  );
}

export default App;
