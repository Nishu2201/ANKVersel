import React from 'react';
import './Home1.css';
import whatsp from '../../../images/Homepage/home/whatsapp.png';
import masage from '../../../images/Homepage/home/message.png';
import mail from '../../../images/Homepage/home/mail.png';
import bg from '../../../images/Homepage/home/bg.png';
import Navbar1 from '../../Navbar/Navbar1';

const Home1 = () => {
  return (
    <div className='home1' style={{ backgroundImage: `url(${bg})` }}>
      <Navbar1/>
      <div className='home-parent'>
        <div className='home-left'>
          <h1 className='home-h1'>
            Proudly selling <span>quality bearings</span> in India
          </h1>
          <p className='home-p'>"Your Trusted Source for Precision Bearings"</p>
          <button className='home-btn rounded-full bg-gradient-to-r from-[#CF100B] to-[#FA373A] '>View More</button>
        </div>
        <div className='home-right'>
         <img src={whatsp} alt="" className='home-icons'/>
         <img src={masage} alt="" className='home-icons'/>
         <img src={mail} alt="" className='home-icons'/>
        </div>
      </div>
    </div>
  );
}

export default Home1;
