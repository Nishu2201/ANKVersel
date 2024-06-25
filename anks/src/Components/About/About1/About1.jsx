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
          {/* <h1 className='about-h2'>
            Discover Our Commitment to Excellence and Innovation
          </h1> */}
          <p className='about-p'>"At ANK Overseas, we take pleasure in providing exceptional bearing services to an extensive
variety of industries throughout the world. We have built a reputation for our dependable and
precise products, coming from well-established suppliers. We are devoted to improving
customer service and forging lasting relationships with our patrons."</p>
<p className='about-p2'>"At ANK Overseas, our commitment to excellence and innovation is the core of our operations.
We guarantee that every bearing is chosen from trustworthy suppliers and meets our high
criteria for durability and accuracy. This devotion ensures that our products can survive harsh
circumstances while providing dependable efficiency, keeping your operations operating
smoothly.
"</p>
<a href='/contactus'>
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
