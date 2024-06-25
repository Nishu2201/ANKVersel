import React from 'react';
import './Product4.css';
import bg  from  '../../../images/Homepage/qualities/bg_.png';
import bearing from '../../../images/why choose us/sec1-bearing.png'
const Product4 = () => {
  return (
    <div className='product4' style={{ backgroundImage: `url(${bg})` }}>

      <h1 className='product4-h1'>
      Why <span>ANK Overseas</span> is Your Trusted Bearing Partner?
          </h1>
      <div className='product4-parent'>
        
        <div className='product4-left'>
          <h1 className='product4-h2'>
          Key Benefits of Choosing ANK Overseas
          </h1>
          <p className='product4-p'> <span>Optimized Performance:</span> Our bearings are intended to fulfill worldwide friction-reduction requirements, ensuring that your
machinery runs smoothly and efficiently. By minimizing friction, our bearings not just lengthen
the life of your equipment but also improve its overall performance.</p>
<p className='product4-p'> <span>Comprehensive Support:</span> We understand that our duties do not ends with a mere sales and purchase. In case you need
any maintenance advice or technical support on how to repair the products, or if you are facing
any technical hitches , our technical personnel will always be available for consultation, and any
assistance you may need to ensure the smooth operations of your business.
</p>
<p className='product4-p'> <span>Value for Money:</span> We recognize the importance of cost-effectiveness in every aspect of operations. That's why
ANK Overseas provides low prices without sacrificing quality. Our bearings offer exceptional
value for money, which makes them an economical choice for your industrial requirements.</p>
          {/* <p className='product4-p'>ANK Overseas set the industry standard in minimizing 
friction and reducing machine vibrations. Our bearings 
are engineered for smooth operation and exceptional 
performance, ensuring your machinery runs efficiently 
and reliably. With a commitment to quality and innovation, 
ANK Overseas provide unparalleled durability and precision.
Whether you need bearings for industrial applications or 
specialized machinery, trust ANK Overseas to deliver the 
best in reliability and functionality.</p> */}
        </div>
        <div className='product4-right'>
         <img src={bearing} alt="" className='product4-pic'/>
        
        </div>
      </div>
    </div>
  );
}

export default Product4;
