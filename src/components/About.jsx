import React from 'react'
import profileImg from '../assets/Sahana.png'

import './About.css'

const About = () => {
  return (
    <section className='home' id='home'>
        <div className="home__wrapper">
        <div className="home__container ">
                <img src={profileImg} alt="" className='home__profile' />
                <p className="home__text">Junior Web Developer adopt in all stages 
                of web development. Knowledgeable in user interface, testing, and debugging processes. 
                Equipped with a diverse and promising skill-set. Able to effectively self-manage 
                during independent projects, as well as collaborate in a team setting.</p>
                </div>
            </div>
    </section>
  )
}
export default About