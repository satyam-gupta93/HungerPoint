import React from 'react'
import { assets } from '../assets/assets'


const Navbar = () => {
  return (
    <div className='flex p-5 px-8 justify-between '> 
      <h1 className="text-4xl font-extrabold tracking-wide italic drop-shadow-sm flex flex-col ">
        <div>
            <span className="text-orange-500">Foodi</span>
            <span className="text-black">Fy</span>
            <span className="text-lg align-top ml-1">🍴</span>
        </div>
        
       
        <span className="block sm:inline text-gray-500 text-base  font-normal align-middle mt-[-3px]">Admin Panel</span>
    </h1>

        <img className='' src={assets.profile_image} alt="" />


    </div>
  )
}

export default Navbar