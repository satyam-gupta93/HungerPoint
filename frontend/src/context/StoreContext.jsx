import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { food_list } from '../assets/assets'

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems,setCartItems] = useState({})
    const url = "http://localhost:4000"
    
    let cartTotal = 0;
    food_list.forEach((item) => {
      if (cartItems[item._id]) {
        cartTotal += item.price * cartItems[item._id];
      }
    });
    const addCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    };

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    
    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])
    const contextValue ={
        food_list,
        cartItems,
        setCartItems,
        addCart,
        removeFromCart,
        cartTotal,
        url




    }
    return (
        <StoreContext.Provider value={contextValue} >
            {props.children}
        </StoreContext.Provider>
    )
}


export default StoreContextProvider