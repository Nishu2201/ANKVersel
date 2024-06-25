import React from 'react';
import './Home2.css';
import bg  from  '../../../images/Homepage/about/bg_.png';
import bearing from '../../../images/Homepage/about/bearing_.png'
import Icons from './Icons/Icons.jsx';
const Home2 = () => {
  return (
    <div className='home2 bg-center bg-cover' style={{ backgroundImage: `url(${bg})` }}>
        <div className='home2-parent'>
        <div className='home2-lft'>
       <img src={bearing} alt="bearing" className='home2-bearing'/>
        </div>
        <div className='home2-rgt'>
            <h1 className='home2-h1'>About us</h1>
       <p className='home2-p'>ANK Overseas has established itself as a leading supplier of high-quality bearings to a wide
range of sectors throughout the world. With a firm dedication to excellence, we acquire our
bearings from renowned suppliers known for precision engineering and endurance. Our vast
product line meets a wide range of industrial purposes, guaranteeing deliveryof the best solution
for your each requirement.
       </p>
       <p className='home2-p'>At ANK Overseas we are proud of our customer centric approach, integrity and honesty all of
which ensures that you will always be served excellently. We are here to lend you a helping
hand to find the appropriate bearing as we believe in providing excellent customer satisfaction;
as a result, you can reach out to us at any time. Our dedication goes beyond than just supplying
products; we believe in fostering relationships that last generations.
       </p>
       <a href='/about'>
       <button className='home2-btn rounded-full bg-gradient-to-r from-[#CF100B] to-[#FA373A] '>
        view more
       </button>
       </a>
        </div>
        </div>
        <Icons/>
    </div>
  )
}

export default Home2;