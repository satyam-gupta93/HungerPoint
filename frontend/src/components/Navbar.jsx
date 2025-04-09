// import React, { useEffect, useState } from 'react'
// import {assets} from '../assets/assets.js'
// import { NavLink} from 'react-router-dom'

// const Navbar = () => {
//     const [showMobileMenu,setMobileMenu] = useState(false)
//     useEffect(()=>{
//         if(showMobileMenu){
//             document.body.style.overflow = 'hidden'
//         }else{
//             document.body.style.overflow = 'auto'
//        }
//        return()=>{
//             document.body.style.overflow = 'auto'
//        }
//     },[showMobileMenu])
//   return (
//     <div className=' '>
//         <div className='flex container mx-auto justify-between items-center py-5 px-6 md:px-4  bg-transparent border-b border-orange-400' >
//             <img src={assets.logo} alt="" />
//             <ul className=' hidden md:flex gap-7 items-start'>
//                <NavLink to='/'>
//                       < li className='cursor-pointer hover:text-gray-400'>Home</li>
//                       <hr className='border-none outline-none h-0.5 bg-orange-400 w-3/5 m-auto hidden' />
//                </NavLink>
                
//                 <li  className='cursor-pointer hover:text-gray-400'>Menu</li>
//                 <li  className='cursor-pointer hover:text-gray-400'>Mobile-app</li>
//                 <li className='cursor-pointer hover:text-gray-400'>Contact Us</li>
//             </ul>
            
//             <div className='flex gap-8 items-center justify-center'>
//                 <img src={assets.search_icon} alt="" />
//                 <div className='relative '>
//                   <img src={assets.basket_icon} alt="" />
//                   <div className='absolute min-w-[10px] min-h-[10px] bg-orange-500  rounded-full top-[-8px] right-[-8px] '></div>
//                 </div>
//                 <button className='bg-transparent text-[16px] text-[#49557e] border-2 border-orange-600 px-4 py-1 rounded-3xl hover:bg-[#fff4f2] transition-all  '>Sign In</button>
//             </div>
//             <img src={assets.menu_icon} onClick={()=>{
//                 setMobileMenu(true)
//             }} className='md:hidden w-7 cursor-pointer  ' alt="" />
//         </div>
//         {/* For mobile view */}
//         <div className={`md:hidden ${showMobileMenu?'fixed w-full'  :"h-0 w-0"} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
//             <div className='flex justify-end p-6 cursor-pointer'>
//             <img src={assets.cross_icon} alt="" onClick={()=>{setMobileMenu(false)}} className='w-6' />
//             </div>
           
//             <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium '>
//                 <a href="#Header" onClick={()=>{setMobileMenu(false)}} className='px-4 py-2 rounded-full inline-block'>Home</a>
//                 <a href="#" onClick={()=>{setMobileMenu(false)}} className='px-4 py-2 rounded-full inline-block'>About</a>
//                 <a href="#Header" onClick={()=>{setMobileMenu(false)}} className='px-4 py-2 rounded-full inline-block'>Projects</a>
//                 <a href="#Header" onClick={()=>{setMobileMenu(false)}} className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
//             </ul>
//         </div>
//     </div>
//   )
// }

// export default Navbar


// import React, { useEffect, useState } from 'react';
// import { assets } from '../assets/assets.js';
// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//     const [showMobileMenu, setMobileMenu] = useState(false);

//     useEffect(() => {
//         document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';
//         return () => { document.body.style.overflow = 'auto'; };
//     }, [showMobileMenu]);

//     return (
//         <nav className="bg-white shadow-md fixed w-full z-50 top-0">
//             <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-10">
//                 <NavLink to="/">
//                     <img src={assets.logo} alt="Logo" className="w-32" />
                  
//                 </NavLink>
                // <ul className="hidden md:flex gap-6 text-lg font-medium">
                //     <NavLink to="/" className="hover:text-orange-500 transition duration-300">Home
                //     <hr className='border-none outline-none h-0.5 bg-orange-400 w-3/5 m-auto hidden' />
                //     </NavLink>
                //     <NavLink to="/menu" className="hover:text-orange-500 transition duration-300">Menu
                //     <hr className='border-none outline-none h-0.5 bg-orange-400 w-3/5 m-auto hidden' />
                //     </NavLink>
                //     <NavLink to="/app" className="hover:text-orange-500 transition duration-300">Mobile App
                //     <hr className='border-none outline-none h-0.5 bg-orange-400 w-3/5 m-auto hidden' />
                //     </NavLink>
                //     <NavLink to="/contact" className="hover:text-orange-500 transition duration-300">Contact Us</NavLink>
                // </ul>
//                 <div className="flex items-center gap-6">
//                     <img src={assets.search_icon} alt="Search" className="w-6 cursor-pointer" />
//                     <div className="relative cursor-pointer">
//                         <img src={assets.basket_icon} alt="Cart" className="w-6" />
//                         <div className="absolute bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full -top-2 -right-2">3</div>
//                     </div>
//                     <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition">Sign In</button>
//                     <img src={assets.menu_icon} alt="Menu" onClick={() => setMobileMenu(true)} className="md:hidden w-7 cursor-pointer" />
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             <div className={`fixed inset-0 bg-white transform ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 z-50 md:hidden`}> 
//                 <div className="flex justify-end p-6">
//                     <img src={assets.cross_icon} alt="Close" onClick={() => setMobileMenu(false)} className="w-6 cursor-pointer" />
//                 </div>
                // <ul className="flex flex-col items-center gap-6 text-xl font-medium mt-10">
                //     <NavLink to="/" onClick={() => setMobileMenu(false)} className="hover:text-orange-500">Home</NavLink>
                //     <NavLink to="/menu" onClick={() => setMobileMenu(false)} className="hover:text-orange-500">Menu</NavLink>
                //     <NavLink to="/app" onClick={() => setMobileMenu(false)} className="hover:text-orange-500">Mobile App</NavLink>
                //     <NavLink to="/contact" onClick={() => setMobileMenu(false)} className="hover:text-orange-500">Contact Us</NavLink>
                // </ul>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;



import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets.js';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {
    const [showMobileMenu, setMobileMenu] = useState(false);
    const navigate = useNavigate()
    useEffect(() => {
        document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';
        return () => { document.body.style.overflow = 'auto'; };
    }, [showMobileMenu]);

    return (
        <nav className="bg-white shadow-md fixed w-full z-50 top-0">
            <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-10">
                <NavLink to="/">
              
                <h1 className="text-4xl font-extrabold text-orange-500 tracking-wide italic drop-shadow-sm">
                <span className="text-orange-500">Foodi</span><span className="text-black">Fy</span><span className="text-lg align-top ml-1">🍴</span>
                </h1>

                    {/* <img src={assets.logo} alt="Logo" className="w-28 md:w-32" /> */}
                </NavLink>
                <ul className="hidden md:flex gap-6 text-lg font-medium">
                    <NavLink to="/" className="hover:text-orange-500 transition duration-300">Home
                    <hr className='border-none outline-none h-0.5 bg-orange-400 w-3/5 m-auto hidden' />
                    </NavLink>
                    <NavLink to="/menu" className="hover:text-orange-500 transition duration-300">Menu
                    <hr className='border-none outline-none h-0.5 bg-orange-400 w-3/5 m-auto hidden' />
                    </NavLink>
                    <NavLink to="/mobile" className="hover:text-orange-500 transition duration-300">Mobile App
                    <hr className='border-none outline-none h-0.5 bg-orange-400 w-3/5 m-auto hidden' />
                    </NavLink>
                    <NavLink to="/contact" className="hover:text-orange-500 transition duration-300">Contact Us</NavLink>
                </ul>
                <div className="flex items-center gap-4 md:gap-6">
                    <img src={assets.search_icon} alt="Search" className="w-6 cursor-pointer" />
                    <div className="relative cursor-pointer">
                        <img onClick={()=>navigate("/cart")} src={assets.basket_icon} alt="Cart" className="w-6" />
                        <div className="absolute bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full -top-2 -right-2">3</div>
                    </div>
                    <button onClick={()=>{navigate("/login")}} className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition">Sign In</button>
                    <img src={assets.menu_icon} alt="Menu" onClick={() => setMobileMenu(true)} className="md:hidden w-7 cursor-pointer" />
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-white transform ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 z-50 md:hidden flex flex-col items-center pt-16`}> 
                <div className="absolute top-5 right-6">
                    <img src={assets.cross_icon} alt="Close" onClick={() => setMobileMenu(false)} className="w-6 cursor-pointer" />
                </div>
                <ul className="flex flex-col items-center gap-6 text-xl font-medium w-full">
                    {['Home', 'Menu', 'Mobile App', 'Contact Us'].map((item, index) => (
                        <NavLink key={index} to={`/${item.toLowerCase().replace(' ', '')}`} onClick={() => setMobileMenu(false)}
                            className="hover:text-orange-500 text-gray-800 w-full text-center py-3 border-b border-gray-300">
                            {item}
                        </NavLink>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;