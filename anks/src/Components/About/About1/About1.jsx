import React from 'react';
import './About1.css';
import pic1 from '../../../images/about us/sec 1/bearing.png';
import bg from '../../../images/about us/sec 1/bg.png';
import Navbar1 from '../../Navbar/Navbar1';

const About1 = () => {
  return (
    <div className='about1' style={{ backgroundImage: `url(${bg})` }}>
      <Navbar1/>
      <h1 className='about-h1'>
           About us
          </h1>
      <div className='about-parent'>
        
        <div className='about-left'>
          <h1 className='about-h2'>
            Discover Our Commitment to Excellence and Innovation
          </h1>
          <p className='about-p'>"At ANK Overseas, we pride ourselves on delivering 
high-quality bearings to a wide range of industries around 
the world. Sourced from reputable manufacturers, our 
products are known for their durability and precision. We 
are committed to exceptional customer service and building 
lasting partnerships with our clients."</p>
          <a href='/contact'>
          <button className='about-btn rounded-full bg-gradient-to-r from-[#CF100B] to-[#FA373A] '>Get Quote</button>
          </a>
        </div>
        <div className='about-right'>
         <img src={pic1} alt="" className='about1-pic'/>
        
        </div>
      </div>
    </div>
  );
}

export default About1;
