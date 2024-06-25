import React from 'react';
import './Whyus2.css'
import bg from '../../../images/why choose us/secbg2.png';
import chosebg1 from '../../../images/why choose us/1.png';
import chosebg2 from '../../../images/why choose us/2.png';
import chosebg3 from '../../../images/why choose us/3.png';

const boxData = [
  {
    background: chosebg1,
    title: 'Reduce Friction',
    description: `Our bearings are intended to fulfill worldwide friction-reduction requirements, ensuring that your
    machinery runs smoothly and efficiently.`,
    additional: `By minimizing friction, our bearings not just lengthen
    the life of your equipment but also improve its overall performance.`
  },
  {
    background: chosebg2,
    title: 'After-sales Service',
    description: `We understand that our duties do not end with mere sales and purchases.`,
    additional: `In case you need
    any maintenance advice or technical support on how to repair the products, or if you are facing
    any technical hitches, our technical personnel will always be available for consultation, and any
    assistance you may need to ensure the smooth operations of your business.`
  },
  {
    background: chosebg3,
    title: 'Competitive price',
    description: `We recognize the importance of cost-effectiveness in every aspect of operations.`,
    additional: `That's why
    ANK Overseas provides low prices without sacrificing quality. Our bearings offer exceptional
    value for money, which makes them an economical choice for your industrial requirements.`
  }
];

const Whyus2 = () => {
  return (
    <div className='whyus2' style={{ backgroundImage: `url(${bg})` }}>
      {/* <h1 className='whyus2-h1'>Our chose & Mission</h1> */}
      <div className='whyus2-parent'>
        <div className='chose flex flex-col-3 md:flex-row justify-center items-center mx-4 md:mx-9'>
          {boxData.map((box, index) => (
            <div key={index} className='chose-box bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${box.background})` }}>
             <div className='box-text'>
              <h1 className='chose-head'>{box.title}</h1>
              <p className='chose-p'>{box.description}<p className='chose-p2'>{box.additional}</p></p>
              </div>
              <a href='/contactus'>
                <button className='chose-btn rounded-full bg-gradient-to-r from-[#CF100B] to-[#FA373A]'>
                  get quote
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Whyus2;
