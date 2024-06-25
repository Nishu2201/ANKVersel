import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import './Whyus2Cpy.css';
import bg from '../../../images/why choose us/secbg2.png';
import pic1 from '../../../images/why choose us/whysec3/industry.png';
import pic2 from '../../../images/why choose us/whysec3/innovative.png';
import pic3 from '../../../images/why choose us/whysec3/durability.png';
import pic4 from '../../../images/why choose us/whysec3/range.png';
import pic5 from '../../../images/why choose us/whysec3/customer.png';
import pic6 from '../../../images/why choose us/whysec3/global.png';
const cardData = [
  {
    image:pic1,
    name: 'Industry-Leading Standards',
    description: 'We stick to the highest levels of standards in the world, so that our bearings can work consistently in various environments.',
   
  },
  {
    image:pic2,
    name: 'Innovative Engineering',
    description: 'Our team of professionals is always innovating to provide you the newest breakthroughs in bearing technology, guaranteeing that you receive the most cost-effective and successful solutions.',
    
  },
  {
    image:pic3,
    name: 'Durability and Precision',
    description: 'Our bearings are designed with meticulous craftsmanship and long-lasting materials, assuring reliable performance even in the harshest circumstances.',
   
  },
  {
    image:pic4,
    name: 'Wide range of applications',
    description: 'Whether you want bearings for big industrial machines, automotive applications, or customized equipment, we have a wide selection of products to fulfill your individual requirements.',
   
  },
  {
    image:pic5,
    name: 'Customer-centric Approach',
    description: 'We prioritize our customers orders and promise to deliver unique solutions with excellent service. We value our customers and always priortize that their needs are fulfilled, and even better their expectations are exceeded.',
   
  },
  {
    image:pic6,
    name: 'Global Reach',
    description: 'We have an expansive distribution network to deliver high-quality bearings globally so you can get our products wherever you are.',
   
  },

];

const Whyus2Cpy = () => {
  useEffect(() => {
    new Swiper('.slide-content', {
      slidesPerView: 3,
      spaceBetween: 25,
      loop: true,
      centerSlide: true,
      fade: true,
      grabCursor: true,
      autoplay: {
        delay: 2000, 
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 3,
        },
      },
    });
  }, []);

  return (
    <div className='slide-parents' style={{ backgroundImage: `url(${bg})` }}>
      <h1 className='slide-h1'>Why ANK Overseas stands out?</h1>
    <div className="slide-container swiper" >
   
      <div className="slide-content">
        <div className="card-wrapper swiper-wrapper">
          {cardData.map((card, index) => (
            <div className="card swiper-slide" key={index}>
              <div className="card-content">
                <div className='card-text'>
                <img src={card.image} alt={card.name} className="card-image" />
                  <h2 className="name">{card.name}</h2>
                  <p className="description">{card.description}</p>
                </div>
                <a href='/contactus'>
                  <button className='chose-btn rounded-full bg-gradient-to-r from-[#CF100B] to-[#FA373A]'>
                    Get Quote
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </div>
    </div>
  );
};

export default Whyus2Cpy;
