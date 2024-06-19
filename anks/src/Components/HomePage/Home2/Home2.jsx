import React from 'react';
import './Home2.css';
import bg  from  '../../../images/Homepage/about/bg_.png';
import bearing from '../../../images/Homepage/about/bearing_.png'
import Icons from './Icons/Icons.jsx';
const Home2 = () => {
  return (
    <div className='home2 bg-center bg-cover' style={{ backgroundImage: `url(${bg})` }}>
        <div className='home2-parent'>
        <div className='home2-lft'>
       <img src={bearing} alt="bearing" className='home2-bearing'/>
        </div>
        <div className='home2-rgt'>
            <h1 className='home2-h1'>About us</h1>
       <p className='home2-p'>At ANK Overseas, we pride ourselves on delivering high-quality bearings to a wide range of industries around the world.
        Sourced from reputable manufacturers, our products are known for their durabilty and precision. We are committed to exceptional customer service and
         building lasting partnerships with our clients.
       </p>
       <a href='/contact'>
       <button className='home2-btn rounded-full bg-gradient-to-r from-[#CF100B] to-[#FA373A] '>
        view more
       </button>
       </a>
        </div>
        </div>
        <Icons/>
    </div>
  )
}

export default Home2;