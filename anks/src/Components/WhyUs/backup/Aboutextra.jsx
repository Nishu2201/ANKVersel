import React from 'react';
import './About2.css'
import bg  from  '../../../images/Homepage/about/bg_.png';
import bearing from '../../../images/Homepage/about/'
const About2 = () => {
  return (
    <div className='about2 bg-center bg-cover' style={{ backgroundImage: `url(${bg})` }}>
        <div className='about2-parent'>
        <div className='about2-left'>
        <h1 className='about2-h1'>About us</h1>
       <p className='about2-p'>At ANK Overseas, we pride ourselves on delivering high-quality bearings to a wide range of industries around the world.
        Sourced from reputable manufacturers, our products are known for their durabilty and precision. We are committed to exceptional customer service and
         building lasting partnerships with our clients.
       </p>
       <button className='about2-btn rounded-full bg-gradient-to-r from-[#CF100B] to-[#FA373A]'>
        view more
       </button>
       
        </div>
        
        <div className='about2-rght'>
        <img src={bearing} alt="bearing" className='bearing'/>
        </div>
        </div>
   
    </div>
  )
}

export default About2