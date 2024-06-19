import React from 'react';
import './Whyus2.css'
import bg  from  '../../../images/why choose us/secbg2.png';
import chosebg1 from '../../../images/why choose us/1.png';
import chosebg2 from '../../../images/why choose us/2.png';
import chosebg3 from '../../../images/why choose us/3.png';
const Whyus2 = () => {
  return (
    <div className='whyus2' style={{ backgroundImage: `url(${bg})` }}>
      {/* <h1 className='whyus2-h1'>Our chose & Mission</h1> */}
      <div className='whyus2-parent'>
        <div className='chose flex flex-col-3 md:flex-row justify-center items-center mx-4 md:mx-9'>
<div className='chose-box  bg-cover bg-center bg-no-repeat ' style={{ backgroundImage: `url(${chosebg1})` }}>
   
    <h1 className='chose-head'>Reduce Friction</h1>
    <p className='chose-p'>ANK Overseas meet International standards for minimizing friction, 
      ensuring optimal performance.
</p>
<a href='/contact'>
  <button className='chose-btn rounded-full bg-gradient-to-r from-[#CF100B] to-[#FA373A]'>
        get quote
       </button>
       </a>
</div>

<div className='chose-box  bg-cover bg-center bg-no-repeat'  style={{ backgroundImage: `url(${chosebg2})` }}>
   
    <h1 className='chose-head'>After-sales Service</h1>
    <p className='chose-p'>ANK Overseas meet International standards for minimizing friction, 
      ensuring optimal performance.
</p>
<a href='/contact'>
  <button className='chose-btn rounded-full bg-gradient-to-r from-[#CF100B] to-[#FA373A]'>
        get quote
       </button>
       </a>
</div>
<div className='chose-box  bg-cover bg-center bg-no-repeat'  style={{ backgroundImage: `url(${chosebg3})` }}>
    
    <h1 className='chose-head'>Competitive price</h1>
    <p className='chose-p'>ANK Overseas meet International standards for minimizing friction, 
      ensuring optimal performance.
</p>
<a href='/contact'>
  <button className='chose-btn rounded-full bg-gradient-to-r from-[#CF100B] to-[#FA373A]'>
        get quote
       </button>
       </a>
</div>
</div>
</div>
      </div>
  )
}

export default Whyus2;