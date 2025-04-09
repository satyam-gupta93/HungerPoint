import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className=' px-10 mt-10 pt-12 bg-[#323232] '>
        
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 text-sm '>
        <div>
          <div className='flex flex-row items-center gap-2 mb-2'>
          {/* <h1 className="text-4xl font-extrabold text-orange-500 tracking-wide italic drop-shadow-sm">
                <span className="text-orange-500">Foodi</span><span className="text-black">Fy</span><span className="text-lg align-top ml-1">🍴</span>
                </h1> */}
          <h1 className="text-4xl font-extrabold tracking-wide italic drop-shadow-md">
            <span className="text-orange-500">Foodi</span>
            <span className="text-white">Fy</span>
            <span className="text-orange-400 ml-1 text-lg align-top drop-shadow-sm">🍴</span>
          </h1>
          </div>
          <p className='w-full md:w-2/3  leading-6 mt-4 px-2 text-gray-300'>
            Experience the finest flavors with Gourmet Haven, where culinary excellence meets warm hospitality. Enjoy handcrafted dishes made from the freshest ingredients in an inviting ambiance.
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5 text-white'>ABOUT</p>
          <ul className='flex flex-col gap-2 text-gray-300 '>
            <li>Home</li>
            <li>Our Story</li>
            <li>Menu</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5 text-white'>CONTACT</p>
          <ul className='flex flex-col gap-2 text-gray-300'>
            <li>+91-9876-543210</li>
            <li>contact@foodify.com</li>
            <li>123, Food Street, Culinary City</li>
          </ul>
        </div>
      </div>

      <div>
        <hr className='mt-6 bg-gray-400 text-gray-400'/>
        <p className='py-5 text-sm text-center text-gray-300'>
          &copy; 2025 Satyam Gupta- All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
