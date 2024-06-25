import React from 'react';
import './Home3.css'
import bg  from  '../../../images/Homepage/products/bg_.png';
import filing from '../../../images/Homepage/products/1.png';
import angular from '../../../images/Homepage/products/2.png';
import thrust from '../../../images/Homepage/products/3.png';
import cylin from '../../../images/Homepage/products/4.png';
import taper from '../../../images/Homepage/products/5.png';
import nedle from '../../../images/Homepage/products/6.png';
const Home3 = () => {
  return (
    <div className='home3 bg-center bg-cover' style={{backgroundImage: `url(${bg})`}}>
        <h1 className='home3-h1'>Our Products</h1>
        <div className='home3-parent'>
        <div className='hmcard flex flex-col-3 md:flex-row justify-center items-center mx-4 md:mx-9'>
<div className='hmcard-box   '>
  <div className="approch flex items-center justify-center w-full">
    <img 
      src={filing} 
      alt="Experience and Expertise" className='hmcard-pic'
    />
  </div>
  <h1 className='hmcard-h1'>Filling notch bearings</h1>
  <p className='hmcard-p1'>These bearings include a filling slot to admit additional balls, resulting in a larger radial load
  capability. Ideal for applications that require excellent performance and durability.</p>
  <a href='/contactus'>
  <button className='home3-btn rounded-full bg-gradient-to-r from-[#CF100B] to-[#FA373A]'>
        get quote
       </button>
       </a>
</div>

<div className='hmcard-box  '>
  <div className="approch flex items-center justify-center w-full">
    <img 
      src={angular} 
      alt="Comprehensive Services" className='hmcard-pic'
    />
  </div>
  <h1 className='hmcard-h1'>Angular contact ball bearings</h1>
  <p className='hmcard-p1'>Engineered for applications requiring high precision and support for combined loads (axial and
radial). These bearings are perfect for high-speed operations and are widely used in machinery
and equipment where precision is key.</p>
  <a href='/contactus'>
  <button className='home3-btn rounded-full bg-gradient-to-r from-[#CF100B] to-[#FA373A]'>
       get quote
       </button></a>
</div>

<div className='hmcard-box '>
  <div className="approch flex items-center justify-center w-full">
    <img 
      src={thrust} 
      alt="Customer-Centric Approach" className='hmcard-pic'
    />
  </div>
  <h1 className='hmcard-h1'>Thrust ball bearings</h1>
  <p className='hmcard-p1'>Specifically designed to handle axial loads with superior stability and performance. Thrust ball
bearings are essential for applications where load carrying capacity and precise alignment are
necessary.</p>
  <a href='/contactus'>
  <button className='home3-btn rounded-full bg-gradient-to-r from-[#CF100B] to-[#FA373A]'>
        get quote
       </button>
       </a>
</div>

</div>
<div className='hmcard flex flex-col-3  justify-center items-center mx-4 md:mx-9'>
{/* <div className='home3-left'> */}
<div className='hmcard-box   '>
  <div className="approch flex items-center justify-center w-full">
    <img 
      src={cylin} 
      alt="Experience and Expertise" className='hmcard-pic'
    />
  </div>
  <h1 className='hmcard-h1'>Cylindrical roller bearings</h1>
  <p className='hmcard-p1'>Known for their high radial load capacity, these bearings are suitable for applications involving
heavy loads and high speeds. Their design allows for a greater contact area between the rollers
and the raceway, ensuring durability and efficiency.</p>
  <a href='/contactus'>
  <button className='home3-btn rounded-full bg-gradient-to-r from-[#CF100B] to-[#FA373A]'>
        get quote
       </button>
       </a>
</div>

<div className='hmcard-box  '>
  <div className="approch flex items-center justify-center w-full">
    <img 
      src={taper} 
      alt="Comprehensive Services" className='hmcard-pic'
    />
  </div>
  <h1 className='hmcard-h1'>Tapper roller bearings</h1>
  <p className='hmcard-p1'>These bearings are specifically designed to withstand both radial and axial loads. The tapered
form improves load distribution, making them excellent for applications that need great load
capacity and resilience.</p>
  <a href='/contactus'>
  <button className='home3-btn rounded-full bg-gradient-to-r from-[#CF100B] to-[#FA373A]'>
        get quote
       </button>
       </a>
</div>

<div className='hmcard-box '>
  <div className="approch flex items-center justify-center w-full">
    <img 
      src={nedle} 
      alt="Customer-Centric Approach" className='hmcard-pic'
    />
  </div>
  <h1 className='hmcard-h1'>Needle roller bearings</h1>
  <p className='hmcard-p1'>Compact and efficient needle roller bearings are designed for applications where space is
limited but a high load capacity is required. Their slender design ensures they can handle high
speeds and loads effectively.</p>
  <a href='/contactus'>
  <button className='home3-btn rounded-full bg-gradient-to-r from-[#CF100B] to-[#FA373A]'>
        get quote
       </button>
       </a>
</div>

</div>
        </div>
        
    </div>
    // </div>
  )
}

export default Home3;