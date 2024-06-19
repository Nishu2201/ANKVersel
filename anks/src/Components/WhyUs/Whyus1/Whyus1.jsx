import React from 'react';
import './Whyus1.css';
import bg from '../../../images/why choose us/bg.png';
import bearing from '../../../images/why choose us/sec1-bearing.png'
import Navbar1 from '../../Navbar/Navbar1';

const Whyus1 = () => {
  return (
    <div className='whyus1' style={{ backgroundImage: `url(${bg})` }}>
      <Navbar1/>
      <h1 className='whyus1-h1'>
           why choose us ?
          </h1>
      <div className='whyus1-parent'>
        
        <div className='whyus1-left'>
          <h1 className='whyus1-h2'>
          Why <span>ANK Overseas</span> is your trusted bearing partner?
          </h1>
          <p className='whyus1-p'>ANK Overseas set the industry standard in minimizing 
friction and reducing machine vibrations. Our bearings 
are engineered for smooth operation and exceptional 
performance, ensuring your machinery runs efficiently 
and reliably. With a commitment to quality and innovation, 
ANK Overseas provide unparalleled durability and precision.
Whether you need bearings for industrial applications or 
specialized machinery, trust ANK Overseas to deliver the 
best in reliability and functionality.</p>
        </div>
        <div className='whyus1-right'>
         <img src={bearing} alt="" className='whyus1-pic'/>
        
        </div>
      </div>
    </div>
  );
}

export default Whyus1;
