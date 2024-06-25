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
            <span>ANK Overseas</span> 
          </h1>
          <p className='home-p'>"Your Trusted Source for
          Quality Bearings in India"</p>
          <a href='/products'>
          <button className='home-btn rounded-full bg-gradient-to-r from-[#CF100B] to-[#FA373A] '>View More</button>
          </a>
        </div>
        <div className='home-right'>
        <a href="https://web.whatsapp.com" >
    <img src={whatsp} alt="WhatsApp" className='home-icons'/>
</a>
<a href="sms:+1234567890" > 
    <img src={masage} alt="Message" className='home-icons'/>
</a>
<a href="mailto:example@example.com" > 
    <img src={mail} alt="Email" className='home-icons'/>
</a>
        </div>
      </div>
    </div>
  );
}

export default Home1;
