import React, { useEffect } from 'react'

import anime from "animejs"

const AboutDescription = () => {

    useEffect(() => {
        const aboutMeSection = document.querySelector('.about');

        const checkScroll = () => {
          const scrollPosition = window.pageYOffset;
          const aboutMePosition = aboutMeSection.offsetTop;
          const aboutMeHeight = aboutMeSection.offsetHeight;
        
          if (scrollPosition > aboutMePosition + (aboutMeHeight / 3)) {
            anime({
              targets: '.about__text',
              translateX: [-300, 0],
              opacity: [0,1],
              duration: 3000,
              delay: anime.stagger(300)
            });
            window.removeEventListener("scroll", checkScroll);
          } 
        }
        window.addEventListener("scroll", checkScroll);
    },[])

    
    return (
        <div className="about__description">
            <p className="about__text">Hello! I'm Piotr Kuraś</p>
            <p className="about__text">I am a beginner Front End Developer. I started my programming adventure in August 2022. Quite quickly, programming turned into my passion. My upcoming goal is to get my first job as a Front End Developer.</p>
            <p className="about__text">Every day I try to improve my competence and keep up with current trends. At the beginning I mastered HTML, CSS and JavaScript. Currently, I'm focusing on learning React, TypeScript and basic Back End.</p>
            <p className="about__text">Privately, I am a quiet person who slowly pursues the goals I set for myself. My interests include, but are not limited to, space exploration in the broadest sense and following events from the professional chess scene.</p>
        </div>
    )
}


export default AboutDescription