import React from 'react';
import './Contact1.css';
import adres from '../../../images/contact us/address.png';
import mail from '../../../images/contact us/mail.png';
import call from '../../../images/contact us/call.png';
import bg from '../../../images/contact us/bg_.png';
import Navbar1 from '../../Navbar/Navbar1';

const Contact1 = () => {
  return (
    <div className='contact1' style={{ backgroundImage: `url(${bg})` }}>
      <Navbar1/>
      <h1 className='contact-h1'>
           contact us
          </h1>
      <div className='contact-parent'>
        <div className='contact-left flex flex-col-3 md:flex-row justify-center items-center mx-4 md:mx-9'>
<div className='contact2-box  bg-center bg-cover bg-no-repeat ' style={{ backgroundImage: `url(${adres})`}}>
  
  <h1 className='contact2-h1'>Address</h1>
 <p> F-177,2nd floor, Kailash Tower, Phase-8b, 
  Industrial Area,
 Mohali, 140308, India </p>
</div>

<div className='contact2-box  bg-center bg-cover bg-no-repeat ' style={{ backgroundImage: `url(${mail})`}}>  
<h1 className='contact2-h1'>Call us</h1>
  <p>+919895000000</p>
  <p>+919115011111</p>
</div>
<div className='contact2-box  bg-center bg-cover bg-no-repeat ' style={{ backgroundImage: `url(${mail})`}}>  
  <h1 className='contact2-h1'>send mail</h1>
 <p>sales.ankoverseas@gmail.com</p>
 <p>info@ankoverseas.com</p>
</div>


      </div>
      </div>
    </div>
  );
}

export default Contact1;
