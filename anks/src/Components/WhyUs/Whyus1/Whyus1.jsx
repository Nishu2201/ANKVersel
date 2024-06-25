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
      Why Choose ANK Overseas?
          </h1>
      <div className='whyus1-parent'>
        
        <div className='whyus1-left'>
          <h1 className='whyus1-h2'>
          Why <span>ANK Overseas</span> is your trusted bearing partner?
          </h1>
          {/* <p className='whyus1-p'> <span>Bearings of High Quality:</span> Reputable producers produce long-lasting, accurate goods.
Customer Assistance:Exceptional customer service includes dedicated help and specialized
solutions.<br/>
<span>Innovation:</span> Cutting-edge methods for staying ahead of market demands.
<br/>
<span>Environment Friendly:</span> Sustainability refers to a commitment to environmentally friendly
activities and sustainability.
<br/>
<span>Integrity and professionalism:</span> Honest and ethical business operations.<br/>
<span>Collaborative Approach:</span> Strong relationships between customers and supplier
</p> */}
          <p className='whyus1-p'>ANK Overseas sets the industry standard in minimizing friction and reducing machine vibrations.
Our bearings are designed for effortless operation and high performance, ensuring that your
machinery performs effectively and dependably. ANK Overseas is committed to quality and
innovation, resulting in unrivaled durability and precision. Whether you require bearings for
industrial applications or specialist gear, ANK Overseas will provide the highest level of
durability and performance.</p>
        </div>
        <div className='whyus1-right'>
         <img src={bearing} alt="" className='whyus1-pic'/>
        
        </div>
      </div>
    </div>
  );
}

export default Whyus1;
