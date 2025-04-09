// import React, { useContext } from 'react'
// import { StoreContext } from '../context/storeContext'

// const PlaceOrder = () => {

//    const {cartTotal}  = useContext(StoreContext);
//   return (
//     <div className='p-20 px-30 mt-20 flex justify-between '>
      
//       <form action="" className='w-4/10  flex gap-4 flex-col  p-10'>
//         <p className='text-3xl font-semibold'>Delivery Information</p>
//         <div className='flex justify-between mt-6 '>
//           <input className='border px-2 py-1 rounded-sm text-gray-500 text-sm border-gray-400 '  type="text"  placeholder='First Name'/>
//           <input  className='border px-2 py-1 rounded-sm text-gray-500 text-sm border-gray-400 ' type="text" placeholder='Last name ' />
         
//         </div>
//         <input  className='border px-2 py-1 rounded-sm text-gray-500 text-sm border-gray-400 ' type="email" placeholder='Email' />
//         <input  className='border px-2 py-1 rounded-sm text-gray-500 text-sm border-gray-400 ' type="text" placeholder='Street' />
//         <div  className='flex justify-between '>
//           <input  className='border px-2 py-1 rounded-sm text-gray-500 text-sm border-gray-400 ' type="text" placeholder='City' />
//           <input  className='border px-2 py-1 rounded-sm text-gray-500 text-sm border-gray-400 ' type="text" placeholder='State' />
//         </div>
//         <div  className='flex justify-between '>
//           <input  className='border px-2 py-1 rounded-sm text-gray-500 text-sm border-gray-400 ' type="number"  placeholder='Zip code'/>
//           <input  className='border px-2 py-1 rounded-sm text-gray-500 text-sm border-gray-400 ' type="text" placeholder='Country' />
//         </div>
//         <input  className='border px-2 py-1 rounded-sm text-gray-500 text-sm border-gray-400 ' type="text" placeholder='Phone' />
       
//       </form>
      
//       <div className="w-full md:w-2/5 bg-white p-6 rounded-lg shadow-md">
//           <h1 className="text-xl md:text-2xl font-semibold text-gray-700 border-b pb-2">Cart Total</h1>
//           <div className="mt-4 text-gray-600 text-md">
//             <div className="flex justify-between pb-2">
//               <p>Subtotal</p>
//               <p className="font-medium">₹{cartTotal}</p>
//             </div>
//             <hr className="border-gray-300" />
//             <div className="flex justify-between py-2">
//               <p>Delivery Fee</p>
//               <p className="font-medium">₹50</p>
//             </div>
//             <hr className="border-gray-300" />
//             <div className="flex justify-between font-bold text-lg py-2">
//               <p>Total</p>
//               <p>₹{cartTotal + 50}</p>
//             </div>
//             <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 cursor-pointer transition duration-300 text-lg font-medium shadow-md">
//               Proceed to Paymemt
//             </button>
//           </div>
//         </div>

//     </div>
//   )
// }

// export default PlaceOrder



import React, { useContext } from 'react';
import { StoreContext } from '../context/storeContext';

const PlaceOrder = () => {
  const { cartTotal } = useContext(StoreContext);

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-10 p-6 md:p-10 md:px-30 mt-20">
      
      {/* Delivery Information Form */}
      <form className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-6 space-y-4">
        <p className="text-2xl font-semibold text-gray-800">Delivery Information</p>

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            className="flex-1 border border-gray-300 px-4 py-2 rounded-md text-sm text-gray-600"
            type="text"
            placeholder="First Name"
          />
          <input
            className="flex-1 border border-gray-300 px-4 py-2 rounded-md text-sm text-gray-600"
            type="text"
            placeholder="Last Name"
          />
        </div>

        <input
          className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm text-gray-600"
          type="email"
          placeholder="Email"
        />
        <input
          className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm text-gray-600"
          type="text"
          placeholder="Street"
        />

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            className="flex-1 border border-gray-300 px-4 py-2 rounded-md text-sm text-gray-600"
            type="text"
            placeholder="City"
          />
          <input
            className="flex-1 border border-gray-300 px-4 py-2 rounded-md text-sm text-gray-600"
            type="text"
            placeholder="State"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            className="flex-1 border border-gray-300 px-4 py-2 rounded-md text-sm text-gray-600"
            type="number"
            placeholder="Zip Code"
          />
          <input
            className="flex-1 border border-gray-300 px-4 py-2 rounded-md text-sm text-gray-600"
            type="text"
            placeholder="Country"
          />
        </div>

        <input
          className="w-full border border-gray-300 px-4 py-2 rounded-md text-sm text-gray-600"
          type="text"
          placeholder="Phone"
        />
      </form>

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

        <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md cursor-pointer transition duration-300 font-medium shadow-md">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
