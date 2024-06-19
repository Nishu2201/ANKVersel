import React from 'react';
import './Home4.css'
import bg  from  '../../../images/Homepage/qualities/bg_.png';
import qualities from '../../../images/Homepage/qualities/high-quality.png';
import customer from '../../../images/Homepage/qualities/customer-service.png';
import integrity from '../../../images/Homepage/qualities/integrity.png';
import salebg1 from '../../../images/Homepage/qualities/qualities_bg1.png';
import salebg2 from '../../../images/Homepage/qualities/qualities_bg2.png';
import salebg3 from '../../../images/Homepage/qualities/qualities_bg3.png';
const Home4 = () => {
  return (
    <div className='home4 bg-center bg-cover relative' style={{backgroundImage: `url(${bg})`}}>
        <h1 className='home4-h1'><span>ANK Bearing</span> optimizes your operations with our robust engineering expertise and experience.</h1>
        <div className='home4-parent'>
        <div className='qualities flex flex-col-3 md:flex-row justify-center items-center '>
<div className='qualities-box   '>
  <div className="approch flex items-center justify-center w-full">
    <img 
      src={qualities} 
      alt="Experience and Expertise" className='qualities-pic'
    />
  </div>
  <h1 className='qualities-h1'>qualities Assurance</h1>
  <p className='qualities-p1'>Ensuring top-notch quality with rigorous standards and testing</p>
</div>

<div className='qualities-box  '>
  <div className="approch flex items-center justify-center w-full">
    <img 
      src={customer} 
      alt="Comprehensive Services" className='qualities-pic'
    />
  </div>
  <h1 className='qualities-h1'>Customer Driven</h1>
  <p className='qualities-p1'>Focused on your needs, delivering exceptional customer experiences.</p>
</div>

<div className='qualities-box '>
  <div className="approch flex items-center justify-center w-full">
    <img 
      src={integrity} 
      alt="Customer-Centric Approach" className='qualities-pic'
    />
  </div>
  <h1 className='qualities-h1'>Integrity Guaranteed</h1>
 <p className='qualities-p1'>Committed to honesty and transparency in all our dealings.</p>
</div>

</div>
<div className='quality flex bg-cover bg-center '  >
<div className='quality-div1   ' style={{ backgroundImage: `url(${salebg1})` }}>
  <h1 className='quality-h1'>Retailers</h1>
  <p className='quality-p'>We offer our product services to retailers along the
     length and breadth of India.</p>
  <button className='Home4-btn rounded-full bg-gradient-to-r from-[#CF100B] to-[#FA373A]'>
        get quote
       </button>
</div>
<div className='quality-div2  ' style={{ backgroundImage: `url(${salebg2})` }}>
  <h1 className='quality-h1'>Our Product Services</h1>
  <p className='quality-p'>We offer our product services to retailers along the
     length and breadth of India.</p>
  <button className='quality-btn rounded-full bg-gradient-to-r from-[#c8c9c9] via-[#f5efef] to-[#f4efef]'>
        get quote
       </button>
</div>
<div className='quality-div3 ' style={{ backgroundImage: `url(${salebg3})` }}>
  <h1 className='quality-h1'>Wholesalers</h1>
  <p className='quality-p'>We offer our product services to retailers along the
     length and breadth of India.</p>
  <button className='Home4-btn rounded-full bg-gradient-to-r from-[#CF100B] to-[#FA373A]'>
        get quote
       </button>
</div>
</div>

        </div>
        
    </div>
    // </div>
  )
}

export default Home4;