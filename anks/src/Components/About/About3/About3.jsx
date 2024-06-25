import React from 'react';
import './About3.css';
import bg  from  '../../../images/Homepage/qualities/bg_.png';
import bearing from '../../../images/why choose us/sec1-bearing.png'
const About3 = () => {
  return (
    <div className='about3' style={{ backgroundImage: `url(${bg})` }}>

      <h1 className='about3-h1'>
      Why Choose <span>ANK Overseas</span>
          </h1>
      <div className='about3-parent'>
        <div className='left1'>
          <p className='about3-p2'>
          When you choose ANK Overseas, you collaborate with a firm that values quality, fresh ideas,
and customer satisfaction, in that order. We ensure that our bearings are all made by reputable
companies and thus, they are long lasting and accurate. We are committed to offering you the
best and therefore, we develop long term relationships based on many years of experience and
professional advice. 
          </p></div>
          <div className='about3-left'>
          <div className='left2'>
          <p className='about3-p'> <span>Bearings of High Quality:</span> Reputable producers produce long-lasting, accurate goods.</p>
<p className='about3-p'> <span>Customer Assistance:</span> Exceptional customer service includes dedicated help and specialized
solutions.</p>
<p className='about3-p'> <span>Innovation:</span> Cutting-edge methods for staying ahead of market demands.</p>
<p className='about3-p'> <span>Integrity and professionalism:</span> Honest and ethical business operations.</p>
<p className='about3-p'> <span>Collaborative Approach:</span>  Strong relationships between customers and suppliers.</p>
</div>
<div className='about3-right'>
         <img src={bearing} alt="" className='about3-pic'/>
        
        </div>
</div>
       
      </div>
    </div>
  );
}

export default About3;
