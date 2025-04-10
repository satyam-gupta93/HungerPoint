import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
// import { food_list } from '../assets/assets'

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems,setCartItems] = useState({})
    const url = "http://localhost:4000"
    const [token,setToken] = useState("")
    const [food_list,setFoodList] = useState([])



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
    
    const fetchFoodList = async() =>{
        const response = await axios.get(`${url}/api/food/list`);
        setFoodList(response.data.data)
    }
    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])

    useEffect(()=>{
        
        async function loadData() {
            await fetchFoodList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"))
            }
        }
        loadData();
    })

    const contextValue ={
        food_list,
        cartItems,
        setCartItems,
        addCart,
        removeFromCart,
        cartTotal,
        url,
        token,
        setToken




    }
    return (
        <StoreContext.Provider value={contextValue} >
            {props.children}
        </StoreContext.Provider>
    )
}


export default StoreContextProvider