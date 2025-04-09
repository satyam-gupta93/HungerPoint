import React, { useEffect, useRef } from 'react';
import { menu_list } from '../assets/assets';

const ExploreMenu = ({category,setCategory}) => {
  // console.log(category)

  return (
    <div className='rounded-lg px-4 md:px-10 lg:px-14 w-full mt-10  '>
      <h1 className='text-4xl text-center font-bold text-gray-600'>
        Explore <span className='text-orange-600'>Menu</span>
      </h1>
      <p className='px-6 md:px-40 text-center mt-2 text-sm text-gray-500'>
        Savor a delightful selection of appetizers, mains, and desserts crafted with the finest ingredients. From sizzling starters to indulgent sweet treats, we have something for every craving!
      </p>
      
      {/* Scrollable Menu Container */}
      <div 
        id='exploreMenu'
      
        className='flex overflow-x-scroll flex-nowrap w-full  space-x-4 px-12 lg:px-10 mt-2 justify-center pt-4'>
        {menu_list.map((menu, idx) => (
          <div 
            key={idx} 
            onClick={()=>setCategory(prev=>prev===menu.menu_name?"All":menu.menu_name)}
            className="flex-none w-[30%] sm:w-[20%] md:w-[15%] lg:w-[12%] xl:w-[10%] hover:translate-y-[-10px] transition-all duration-500 cursor-pointer  rounded-full  ">
            <div className={`w-full ${category===menu.menu_name?" border-orange-500 border-4 rounded-full  shadow-xl shadow-orange-300  ":""} p-0.75 `}>
              <img  src={menu.menu_image} alt={menu.menu_name} className={`w-full h-auto rounded-lg `}/>
            </div>
            <h1 className='mt-2 text-md text-gray-600 text-center'>{menu.menu_name}</h1>
          </div>
        ))}
        
      </div>
      <hr className="w-3/4 mx-auto my-5 border-gray-300" />

    </div>
  );
};

export default ExploreMenu;
