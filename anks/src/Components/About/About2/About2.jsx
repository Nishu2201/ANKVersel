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
    <h1 className='vision-head'>Vision</h1>
  <ul>
    <li><span>World's Leading Supplier:</span> Be the top global supplier of high-quality bearings.

</li>
<li>
<span>Drive Innovation:</span> Be the top global supplier of high-quality bearings.</li>
<li>
<span>Foster Sustainability:</span>Encourage environmentally friendly methods and long-term growth.
</li>
<li>
<span>Set Standards:</span>Develop Industry Benchmarks for Reliability and Performance.

</li>
<li>
<span>Form Partnerships:</span>Develop long-term ties with clients and suppliers.

</li>
<li>
<span>Ecor-Friendly Development:</span> Promote environmentally friendly production by implementing
green manufacturing techniques.
</li>
  </ul>
</div>

<div className='vision-box  '>
    <img 
      src={mision} 
      alt="Comprehensive Services" className='mision-pic'
    />
    <h1 className='vision-head'>Mission</h1>
  <ul>
    <li><span>Deliver Quality Bearings:</span> To satisfy the demands of our customers, we provide bearings of
    excellent quality.
</li>
<li>
<span>Customer Service:</span> Provide outstanding service and support.
</li>
<li>
<span>Innovative Solutions:</span>  Create cutting-edge solutions to fulfil market needs.</li>
<li>
<span>Authenticity and Expertise:</span>  Maintain the greatest level of integrity and ethics.

</li>
<li>
<span>Collaborative Work Environment:</span> Create a collaborative and welcoming workplace.
</li>

  </ul>
</div>

</div>
</div>
      </div>
  )
}

export default About2;