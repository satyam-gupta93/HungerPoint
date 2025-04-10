


// import React, { useContext } from "react";
// import { assets } from "../assets/assets";
// import { StoreContext } from "../context/StoreContext";


// const FoodItem = ({ item }) => {
//   const { cartItems, addCart, removeFromCart } = useContext(StoreContext);

//   return (
//     <div className="rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white cursor-pointer max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
//       {/* Image Section */}
//       <div className="w-full h-60 rounded-t-lg relative">
//         <img
//           src={item.image}
//           alt={item.name}
//           className="w-full h-full object-cover rounded-t-lg"
//         />

//         {/* Add / Remove Cart Buttons - Positioned at Image Bottom Right */}
//         <div className="absolute bottom-2 right-2">
//           {!cartItems[item._id] ? (
//             <img
//               src={assets.add_icon_white}
//               alt="Add"
//               onClick={() => addCart(item._id)}
//               className="w-10 cursor-pointer bg-white bg-opacity-50 p-2 rounded-full"
//             />
//           ) : (
//             <div className="flex gap-2 items-center p-2 bg-white bg-opacity-50 rounded-full">
//               <img
//                 src={assets.remove_icon_red}
//                 alt="Remove"
//                 onClick={() => removeFromCart(item._id)}
//                 className="w-6"
//               />
//               <p className=" text-sm md:text-base">
//                 {cartItems[item._id]}
//               </p>
//               <img
//                 src={assets.add_icon_green}
//                 alt="Add"
//                 onClick={() => addCart(item._id)}
//                 className="w-6"
//               />
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="p-4 sm:p-5">
//         <div className="flex justify-between items-center">
//           <h3 className="text-base sm:text-lg font-bold text-gray-800">
//             {item.name}
//           </h3>
//           <img src={assets.rating_starts} alt="Rating" className="h-4" />
//         </div>
//         <p className="text-gray-500 text-xs sm:text-sm">{item.description}</p>
//         <p className="text-orange-600 font-bold mt-2 text-lg sm:text-xl">
//           ₹{item.price}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default FoodItem;



import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ item }) => {
  const { cartItems, addCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white cursor-pointer max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto flex flex-col justify-between">
      {/* Image Section */}
      <div className="w-full h-60 rounded-t-lg relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover rounded-t-lg"
        />

        {/* Add / Remove Cart Buttons */}
        <div className="absolute bottom-2 right-2">
          {!cartItems[item._id] ? (
            <img
              src={assets.add_icon_white}
              alt="Add"
              onClick={() => addCart(item._id)}
              className="w-10 cursor-pointer bg-white bg-opacity-50 p-2 rounded-full"
            />
          ) : (
            <div className="flex gap-2 items-center p-2 bg-white bg-opacity-50 rounded-full">
              <img
                src={assets.remove_icon_red}
                alt="Remove"
                onClick={() => removeFromCart(item._id)}
                className="w-6"
              />
              <p className="text-sm md:text-base">{cartItems[item._id]}</p>
              <img
                src={assets.add_icon_green}
                alt="Add"
                onClick={() => addCart(item._id)}
                className="w-6"
              />
            </div>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-5 flex flex-col justify-between h-full">
        <div className="flex justify-between items-center">
          <h3 className="text-base sm:text-lg font-bold text-gray-800">
            {item.name}
          </h3>
          <img src={assets.rating_starts} alt="Rating" className="h-4" />
        </div>
        <p className="text-gray-500 text-xs sm:text-sm min-h-[48px]">
          {item.description}
        </p>
        <p className="text-orange-600 font-bold mt-2 text-lg sm:text-xl">
          ₹{item.price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
