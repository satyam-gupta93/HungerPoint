
import React, { useContext, useState } from 'react';
import { StoreContext } from '../context/storeContext';
import axios from 'axios';

const PlaceOrder = () => {
  const { cartTotal,token,food_list,cartItems,url } = useContext(StoreContext);

  const [data,setData] =useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onchangeHandler = (event) =>{
      const name = event.target.name;
      const value = event.target.value;

      setData(data=>({...data,[name]:value}))
  }

  const placeOrder = async (event) =>{
    event.preventDefault();
    // console.log(data);
    let orderItems = [];
    food_list.map((item)=>{
      if(cartItems[item._id]>0){
          let itemInfo = item;
           itemInfo["quantity"] = cartItems[item._id];
           orderItems.push(itemInfo);


      }
    })
   let orderData = {
    address:data,
    items:orderItems,
    amount:cartTotal + 50,

   }
   let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
   if(response.data.succes){
    const {session_url} = response.data;
    window.location.replace(session_url);

   }
   else{
    alert("Error");
    
   }
  }
  return (
    <form onSubmit={placeOrder} className="flex flex-col lg:flex-row justify-between gap-10 p-6 md:p-10 md:px-30 mt-20">
      
      {/* Delivery Information Form */}
      <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-6 space-y-4">
        <p className="text-2xl font-semibold text-gray-800">Delivery Information</p>

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            className="flex-1 border border-gray-300 px-4 py-2 rounded-md text-sm text-gray-600"
            type="text"
            placeholder="First Name"
            name='firstName'
            onChange={onchangeHandler}
            value={data.firstName}
            required
          />
          <input
            className="flex-1 border border-gray-300 px-4 py-2 rounded-md text-sm text-gray-600"
            type="text"
            placeholder="Last Name"
            name='lastName'
            onChange={onchangeHandler}
            value={data.lastName}
            required
          />
        </div>

        <input
          className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm text-gray-600"
          type="email"
          placeholder="Email"
          name='email'
          onChange={onchangeHandler}
            value={data.email}
            required
        />
        <input
          className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm text-gray-600"
          type="text"
          placeholder="Street"
          name='street'
          onChange={onchangeHandler}
          value={data.street}
          required
        />

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            className="flex-1 border border-gray-300 px-4 py-2 rounded-md text-sm text-gray-600"
            type="text"
            placeholder="City"
            name='city'
            onChange={onchangeHandler}
            value={data.city}
            required
          />
          <input
            className="flex-1 border border-gray-300 px-4 py-2 rounded-md text-sm text-gray-600"
            type="text"
            placeholder="State"
            name='city'
            onChange={onchangeHandler}
            value={data.city}
            required
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            className="flex-1 border border-gray-300 px-4 py-2 rounded-md text-sm text-gray-600"
            type="number"
            placeholder="Zip Code"
            name='zipcode'
            onChange={onchangeHandler}
            value={data.zipcode}
            required
          />
          <input
            className="flex-1 border border-gray-300 px-4 py-2 rounded-md text-sm text-gray-600"
            type="text"
            placeholder="Country"
            name='country'
            onChange={onchangeHandler}
            value={data.country}
            required
          />
        </div>

        <input
          className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm text-gray-600"
          type="text"
          placeholder="Phone"
          name='phone'
          onChange={onchangeHandler}
          value={data.phone}
          required
        />
      </div>

      {/* Cart Summary */}
      <div className="w-full lg:w-2/5 bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center">
        <h1 className="text-xl font-semibold text-gray-800 border-b pb-3">Cart Total</h1>

        <div className="mt-4 text-gray-700 space-y-3">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="font-medium">₹{cartTotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Fee</span>
            {cartTotal? <span className="font-medium">₹50</span>: <span className="font-medium">₹0</span>}
           
          </div>
          <hr className="border-gray-300" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            {cartTotal? <span>₹{cartTotal + 50}</span>: <span>₹{cartTotal + 0}</span>}
           
          </div>
        </div>

        <button type='submit' className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md cursor-pointer transition duration-300 font-medium shadow-md">
          Proceed to Payment
        </button>
      </div>
    </form>
  );
};

export default PlaceOrder;
