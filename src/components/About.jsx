import React from 'react'
import profileImg from '../assets/Sahana.png'
import shapeOne from '../assets/shape-1.png'
import shapeTwo from '../assets/shape-2.png'
import './About.css'


const About = () => {
  return (
    <section className='home' id='home'>
        <div className="home__wrapper">
        <div className="home__container container">
            <p className="home__subtitle text-cs">
                Hello, <span>My Name Is</span>
            </p>
            <h1 className="home__title text-cs"><span>Sahana</span></h1>
            <p className="home__job">
                <span className="text-cs">I Am </span><b>Full Stack Developer</b>
            </p>

            <div className="home__img-wrapper">
                <div className="home__banner">
                    <img src={profileImg} alt="" className='home__profile' />
                </div>

            </div>
            <p className="home__text">Experienced Web Developer and an UX Designer with a demonstrated history of working 
            in the marketing and advertising industry. Skilled in Web Design HTML, CSS, Bootstrap, NodeJs, ,Javascript,
             JQuery and MySQL. Upgrading skillset as UX designer.</p>
      

            
        </div>

        <div className="section__deco deco__left">
            <img src={shapeOne} alt="" className="shape" />
        </div>
        </div>

    </section>
  )
}

export default About