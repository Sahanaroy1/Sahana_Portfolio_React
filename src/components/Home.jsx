import React from 'react'
import homeLogo from '../assets/Home.webp'

import './Home.css'


const Home = () => {
  return (
    <section className='home-section'>
     
      <div>
        <img src={homeLogo} className='mainPage_img'/>
      </div>
    </section>
    
  );
}

export default Home