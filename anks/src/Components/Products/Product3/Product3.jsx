import React from 'react';
import './Product3.css'
import bg  from  '../../../images/products/sec 2/bg.png';
import itembg from '../../../images/products/sec 2/Rectangle.png';
import filing from '../../../images/Homepage/products/1.png';
import angular from '../../../images/Homepage/products/2.png';
import thrust from '../../../images/Homepage/products/3.png';
const Product3 = () => {
  return (
    <div className='Product3 bg-center bg-cover' style={{ backgroundImage: `url(${bg})` }}>
        <div className='Product3-parent'>
        <div className='items3 flex flex-col-3 md:flex-row justify-center items-center mx-4 md:mx-9'>
<div className='items3-box   '>
  <div className="approch flex items-center justify-center w-full">
    <img 
      src={filing} 
      alt="bearings" className='item3-pic'
    />
  </div>
  <h1 className=''>Filling notch bearings</h1>
  <button className='Product3-btn rounded-full bg-gradient-to-r from-[#CF100B] to-[#FA373A]'>
        get quote
       </button>
</div>

<div className='items3-box  '>
  <div className="approch flex items-center justify-center w-full">
    <img 
      src={angular} 
      alt="bearings" className='item3-pic'
    />
  </div>
  <h1 className=''>Angular contact ball bearings</h1>
  <button className='Product3-btn rounded-full bg-gradient-to-r from-[#CF100B] to-[#FA373A]'>
       get quote
       </button>
</div>

<div className='items3-box '>
  <div className="approch flex items-center justify-center w-full">
    <img 
      src={thrust} 
      alt="bearings" className='item3-pic'
    />
  </div>
  <h1 className=''>Thrust ball bearings</h1>
  <button className='Product3-btn rounded-full bg-gradient-to-r from-[#CF100B] to-[#FA373A]'>
        get quote
       </button>
</div>

</div>
<div className='items3-divs flex  bg-center bg-cover bg-no-repeat  ' style={{ backgroundImage: `url(${itembg})` }}>

<div className='items3-div ' >
  <h1 className='items3-divh1'>get quality bearings now!</h1>
  <p className='div-p'>ANK Overseas: Competitive prices, low maintenance. 
  Purchase for reliability and peace of mind.</p>
  <button className='div-btn rounded-full bg-gradient-to-r from-[#c8c9c9] via-[#f5efef] to-[#f4efef]'>
        get quote
       </button>
</div>


</div>
        </div>
        
    </div>
    // </div>
  )
}

export default Product3