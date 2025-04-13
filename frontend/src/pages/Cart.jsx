


import React, { useContext } from "react";

import { assets } from "../assets/assets";
import { NavLink, useNavigate } from 'react-router-dom';
import { StoreContext } from "../context/StoreContext";

const Cart = () => {
  const { cartItems, food_list, removeFromCart,cartTotal } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="p-6 md:p-12 lg:p-24 mt-10">
      <div className="w-full overflow-x-auto">
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-6 text-gray-600 font-semibold text-center py-2 border-b border-gray-300">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        {/* Table Body */}
        {food_list
          .filter((item) => cartItems[item._id]) // Only show items in the cart
          .map((item, indx) => (
            <div
              key={indx}
              className="grid grid-cols-2 md:grid-cols-6 text-black items-center text-center py-3 border-b border-gray-300 gap-4 md:gap-0"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 md:w-12 mx-auto rounded-md shadow-md"
              />
              <p className="text-sm md:text-base">{item.name}</p>
              <p className="text-sm md:text-base">₹{item.price}</p>
              <p className="border-2 w-12 md:w-7 text-sm md:text-base rounded-md mx-auto py-1">{cartItems[item._id]}</p>
              <p className="text-sm md:text-base font-medium">₹{item.price * cartItems[item._id]}</p>
              <img
                src={assets.cross_icon}
                alt="Remove"
                className="h-5 md:h-4 mx-auto cursor-pointer hover:scale-110 transition-transform"
                onClick={() => removeFromCart(item._id)}
              />
            </div>
          ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="w-full md:w-2/5 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-700 border-b pb-2">Cart Summary</h1>
          <div className="mt-4 text-gray-600 text-md">
            <div className="flex justify-between pb-2">
              <p>Subtotal</p>
              <p className="font-medium">₹{cartTotal}</p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between py-2">
              <p>Delivery Fee</p>
              {cartTotal? <p className="font-medium">₹50</p>: <p className="font-medium">₹0</p>}
              {/* <p className="font-medium">₹50</p> */}
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between font-bold text-lg py-2">
              <p>Total</p>
              {cartTotal? <p>₹{cartTotal + 50}</p>: <p>₹{cartTotal +0}</p>}
              {/* <p>₹{cartTotal + 50}</p> */}
            </div>
            {/* <button onClick={()=>navigate("/order")} className={  `mt-4 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300 text-lg font-medium shadow-md  `}>
              Proceed to Checkout
            </button> */}
            <button
              onClick={() => navigate("/order")}
            
              className={`mt-4 w-full text-white py-2 rounded-md transition duration-300 text-lg font-medium shadow-md 
                ${cartTotal === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-600 cursor-pointer"}
              `}
            >
              Proceed to Checkout
            </button>

          </div>
        </div>

        {/* Promo Code Section */}
        <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md">
          <p className="text-md text-gray-600 font-medium">Have a promo code?</p>
          <form className="mt-3 flex items-center">
            <input
              type="text"
              placeholder="Enter promo code"
              className="w-full px-3 py-2 border rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className={`ml-3 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300 `}
            >
              Apply
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cart;
