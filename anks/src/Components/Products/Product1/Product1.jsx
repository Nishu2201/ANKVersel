import React from 'react';
import './Product1.css'
import Navbar from '../../Navbar/Navbar1.jsx';
import bg  from  '../../../images/products/sec 1/bg.png';
import filing from '../../../images/Homepage/products/1.png';
import angular from '../../../images/Homepage/products/2.png';
import thrust from '../../../images/Homepage/products/3.png';
import cylin from '../../../images/Homepage/products/4.png';
import taper from '../../../images/Homepage/products/5.png';
import nedle from '../../../images/Homepage/products/6.png';
import Product2 from '../Product2/Product2.jsx';

const Product1 = () => {
  return (
    <div className='Product1 bg-center bg-cover' style={{ backgroundImage: `url(${bg})` }}>
        <Navbar/>
        <h1  className='Product1-h1'>Diverse product range</h1>
        {/* <div className='product1-parent'>
          <h1 className='item-h1'> Bearings</h1>
        <div className='items flex flex-col-3 md:flex-row justify-center items-center mx-4 md:mx-9'>
<div className='item-box   '>
  <div className="approch flex items-center justify-center w-full">
    <img 
      src={filing} 
      alt="Experience and Expertise" 
    />
  </div>
  <h1 className=''>Filling notch bearings</h1>
  <button className='product1-btn rounded-full bg-gradient-to-r from-[#CF100B] to-[#FA373A]'>
        get quote
       </button>
</div>

<div className='item-box  '>
  <div className="approch flex items-center justify-center w-full">
    <img 
      src={angular} 
      alt="Comprehensive Services" 
    />
  </div>
  <h1 className=''>Angular contact ball bearings</h1>
  <button className='product1-btn rounded-full bg-gradient-to-r from-[#CF100B] to-[#FA373A]'>
       get quote
       </button>
</div>

<div className='item-box '>
  <div className="approch flex items-center justify-center w-full">
    <img 
      src={thrust} 
      alt="Customer-Centric Approach" 
    />
  </div>
  <h1 className=''>Thrust ball bearings</h1>
  <button className='product1-btn rounded-full bg-gradient-to-r from-[#CF100B] to-[#FA373A]'>
        get quote
       </button>
</div>

</div>

        </div> */}
        <Product2/>
    </div>
    
  )
}

export default Product1