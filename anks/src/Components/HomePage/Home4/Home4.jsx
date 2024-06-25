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
        <h1 className='home4-h1'><span>ANK Bearing</span>  optimizes your operations with robust engineering expertise and extensive
        experience, ensuring that our customers get the best performance out of our products.</h1>
        <div className='home4-parent'>
        <div className='qualities flex flex-col-3 md:flex-row justify-center items-center '>
<div className='qualities-box   '>
  <div className="approch flex items-center justify-center w-full">
    <img 
      src={qualities} 
      alt="Experience and Expertise" className='qualities-pic'
    />
  </div>
  <h1 className='qualities-h1'>quality Assurance</h1>
  <p className='qualities-p1'>At ANK Overseas, quality is our first concern. We use strict quality control and testing processes
to make sure that each bearing meets the highest of standards.</p><p className='qualities-p2'> Our dedication towards quality
assuarance makes our customers rely on our products to provide consistent performance and
dependability in your applications.</p>
</div>


<div className='qualities-box   '>
  <div className="approch flex items-center justify-center w-full">
    <img 
      src={customer} 
      alt="Comprehensive Services" className='qualities-pic'
    />
  </div>
  <h1 className='qualities-h1'>Customer Driven</h1>
  <p className='qualities-p1'>The core part of our business is our clients.</p> <p className='qualities-p2'>In actual fact, our services are tailored and offer the
best customer service as well as custom made solutions which match your unique
requirements.</p>
</div>

<div className='qualities-box   '>
  <div className="approch flex items-center justify-center w-full">
    <img 
      src={integrity} 
      alt="Customer-Centric Approach" className='qualities-pic'
    />
  </div>
  <h1 className='qualities-h1'>Integrity Guaranteed</h1>
 <p className='qualities-p1'>Transparency and honesty are the foundations of our business.We are devoted to conducting
 our business with integrity, so you can rely on us as a bearing provider.</p> <p className='qualities-p2'>Our dedication to quality guarantees that you
obtain items that work consistently and effectively</p>
</div>

</div>
<div className='quality flex bg-cover bg-center '  >
<div className='quality-div1   ' style={{ backgroundImage: `url(${salebg1})` }}>
  <h1 className='quality-h1'>Retailers</h1>
  <p className='quality-p'>Our broad product services guarantee that merchants have access to a diverse choice of
bearings to satisfy their customers' demands. </p> <p className='quality-p2'>We offer assistance and knowledge to help
businesses give the greatest items to their customers.
</p>
     <a href='/contactus'>
      <button className='Home4-btn rounded-full bg-gradient-to-r from-[#CF100B] to-[#FA373A]'>
        get quote
       </button>
       </a>
</div>
<div className='quality-div2  ' style={{ backgroundImage: `url(${salebg2})` }}>
  <h1 className='quality-h1'>Our Product Services</h1>
  <p className='quality-p'>We are proud to expand our range of goods and services to both wholesalers and retailers
throughout India. </p> <p className='quality-p2'>Our goal is to have seamless bearing availability nationwide, regardless of
company size.</p>
     <a href='/contactus'>
     <button className='quality-btn rounded-full bg-gradient-to-r from-[#c8c9c9] via-[#f5efef] to-[#f4efef]'>
        get quote
       </button>
       </a>
</div>
<div className='quality-div3 ' style={{ backgroundImage: `url(${salebg3})` }}>
  <h1 className='quality-h1'>Wholesalers</h1>
  <p className='quality-p'>We provide wholesalers with a wide range of services, including bulk distribution of high-quality
bearings.</p> <p className='quality-p2'>Our dependable supply network guarantees that wholesalers can rely on us for
prompt shipment and constant product quality.
</p>
     <a href='/contactus'>
  <button className='Home4-btn rounded-full bg-gradient-to-r from-[#CF100B] to-[#FA373A]'>
        get quote
       </button></a>
</div>
</div>

        </div>
        
    </div>
    // </div>
  )
}

export default Home4;