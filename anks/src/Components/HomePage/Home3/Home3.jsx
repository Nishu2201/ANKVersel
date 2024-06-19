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
  <a href='/contact'>
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
  <a href='/contact'>
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
  <a href='/contact'>
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
  <a href='/contact'>
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
  <a href='/contact'>
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
  <a href='/contact'>
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