import React from 'react'
import './Icons.css'
import delivery from '../../../../images/Homepage/about/delivery_.png';
import payment from '../../../../images/Homepage/about/secure-payment.png';
import suport from '../../../../images/Homepage/about/customer-service.png';
const Icons = () => {
  return (
    <div className='Scan3 h-10px'>
    <div className='Scan3Botm'>
      <div className='Downloads Downloads1'>
          <img src={delivery} alt="Scanner-corner" className='scan-pics1'/>
          <h1 className='Scan3-h1'>Worldwide <br/>delivery</h1>
          </div>
          <div className='Downloads'>
      <img src={payment} alt='QR-code' className='scan-pics'/>
      <h1 className='Scan3-h1'>secure payment</h1>
      </div>
      <div className='Downloads'>
      <img src={suport} alt="" className='scan-pics'/>
      <h1 className='Scan3-h1'>24x7 <br/>support's</h1>
      </div>
      </div>
  </div>
  )
}

export default Icons