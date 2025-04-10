

import React, { useContext, useEffect, useState } from 'react';

import { assets } from '../assets/assets';
import FoodItem from './FoodItem';
import { StoreContext } from '../context/StoreContext';


const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
    

  // Filter food items based on the selected category
  const filteredFoodList = category === "All" ? food_list : food_list.filter(item => item.category === category);
 

  return (
    <div className='rounded md:px-10 lg:px-30 w-full  pb-4 p-6 lg:p-1'>
      <h2 className='text-3xl font-bold text-gray-700 mb-4 text-center md:text-left'>
        Top Dishes
      </h2>

      {/* Display Food Items */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 '>
        {filteredFoodList.map((item,indx) => (
        <FoodItem item={item} indx={indx} category={category} />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
