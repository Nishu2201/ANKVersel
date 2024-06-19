import React from 'react';
import './About2.css'
import bg  from  '../../../images/about us/sec 2/bg.png';
import vision from '../../../images/about us/sec 2/vision.png';
import mision from '../../../images/about us/sec 2/mission.png';
const About2 = () => {
  return (
    <div className='about1' style={{ backgroundImage: `url(${bg})` }}>
      <h1 className='about2-h1'>Our Vision & Mission</h1>
      <div className='about2-parent'>
        <div className='vision flex flex-col-3 md:flex-row justify-center items-center mx-4 md:mx-9'>
<div className='vision-box   '>
    <img 
      src={vision} 
      alt="Experience and Expertise" className='vision-pic'
    />
    <h1 className='vision-head'>Vission</h1>
  <ul>
    <li>Be the world's leading supplier of high
quality bearings.
</li>
<li>
Drive innovation in the bearing industry.
</li>
<li>
Foster sustainable practices and growth.
</li>
<li>
Set industry standards for reliability and 
performance.
</li>
<li>
Build lasting partnerships with clients 
and suppliers.
</li>
<li>
Promote eco-friendly manufacturing 
processes.</li>
  </ul>
</div>

<div className='vision-box  '>
    <img 
      src={mision} 
      alt="Comprehensive Services" className='vision-pic'
    />
    <h1 className='vision-head'>Mission</h1>
  <ul>
    <li>Deliver exceptional quality bearings to 
    meet customer needs.
</li>
<li>
Provide unparalleled customer service 
and support.</li>
<li>
Innovate with cutting-edge solutions to 
adapt to market needs.</li>
<li>
Uphold the highest standards of integrity 
and professionalism.
</li>
<li>
Create a collaborative and inclusive work 
environment.
</li>

  </ul>
</div>

</div>
</div>
      </div>
  )
}

export default About2;