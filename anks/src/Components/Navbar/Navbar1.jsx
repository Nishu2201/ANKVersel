import React, { useState } from 'react';
import'./Navbar.css';
import { FaTimes } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import logo from '../../images/Homepage/home/ank logo2.png';
import { Link } from 'react-router-dom';

const Navbar1 = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const content = (
        <div className='lg:hidden fixed top-0 left-0 w-full h-full transition-transform transform bg-[#000e31] z-40'>
            <div className='flex justify-between items-center p-2 bg-white h-5vh'>
                <Link to='/'>
                    <img src={logo} alt="Company Logo" className=' Camp-logo'/>
                </Link>
                <button onClick={handleClick}>
                    <FaTimes className='text-white text-2xl -pr-30 text-[#000e31]' />
                </button>
            </div>
            <ul className='font-lato text-center text-xl p-4'>
            <li className='z-20 my-4 w-full py-4 border-b-2 border-white  hover:rounded text-[24px]'>
                    <a href='/'>Home</a>
                </li>
                <li className='z-20 my-4 w-full py-4 border-b-2 border-white  hover:rounded text-[24px]'>
                    <a href='/about'>About</a>
                </li>
                <li className='z-20 my-4 py-4 border-b-2 border-white  hover:rounded text-[24px]'>
                    <a href='/products'>Products</a>
                </li>
                <li className='z-20 my-4 py-4 border-b-2 border-white  hover:rounded text-[24px]'>
                    <a href='/whyus'>Why Us?</a>
                </li>
                <li className='z-20 my-4 py-4 border-b-2 border-white  hover:rounded text-[24px]'>
                    <a href='/contact'>Contact</a>
                </li>
            </ul>
        </div>
    );

    return (
        <nav className='z-20'>
            <div className='navbar h-5vh  flex justify-between items-center z-50 text-white  flex-1 '>
                <div className='flex items-center flex-1 my-2 '>
                    <Link to='/'>
                        <img src={logo} alt="Company Logo" className='pl-4 lg:px-6 Camp-logo'/>
                    </Link>
                </div>
                <div className='nav-items hidden lg:flex flex-2 items-center justify-center font-normal pr-28'>
                    <ul className='font-lato font-medium flex gap-2 mt-4 items-center justify-center z-40'>
                    <li>
                            <a href='/' className=''>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href='/about' className=' z-40'>
                                About
                            </a>
                        </li>
                        <li>
                            <a href='/products' className='z-40'>
                                Products
                            </a>
                        </li>
                        <li>
                            <a href='/whyus' className=' z-40'>
                                Why Us?
                            </a>
                        </li>
                        <li>
                            <a href='/contact' className='px-5 text-[18px]  z-40'>
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href='/contact'>
                            <button className='nav-btn ml-2 z-20 bg-[#021032] px-12 py-2 border-solid border-2 text-white rounded-full '>
                               Get Quote
                            </button>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='lg:hidden flex items-center z-40'>
                    {click && content}
                    <button className='transition text-3xl mr-4' onClick={handleClick}>
                        {click ? <FaTimes className='text-3xl font-black' /> : <IoMdMenu className='text-4xl font-black text-[#000e31]' />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar1;
