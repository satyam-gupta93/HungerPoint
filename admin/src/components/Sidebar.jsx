import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

    const [active,setActive] = useState("");

    const navigate = useNavigate();
  return (
    <div className='w-[18%] min-w-[200px] max-h-full h-[900px] border-r border-[#a9a9a9] bg-white shadow-md hidden md:block  '>
        <div className='pt-[50px] pl-6 flex flex-col gap-4'>
            <div onClick={()=>{navigate("/add"),setActive("a")}} className={`flex items-center gap-4 border-[#a9a9a9] border-l border-t border-b rounded-l px-2 py-2 cursor-pointer ${active==="a"?'border-orange-400 bg-[#fff0ed] transition-all':"font-medium"} `}>
                <img src={assets.add_icon} alt="" />
                <p>Add Items</p>
            </div>
            <div onClick={()=>{navigate("/list"),setActive("l")}} className={`flex items-center gap-4 border-[#a9a9a9] border-l border-t border-b rounded-l px-2 py-2 cursor-pointer ${active==="l"?'border-orange-400 bg-[#fff0ed] transition-all ':"font-medium"} `}>
                <img src={assets.order_icon} alt="" />
                <p>List Items</p>
            </div>
            <div  onClick={()=>{navigate("/orders"),setActive("o")}} className={`flex items-center gap-4 border-[#a9a9a9] border-l border-t border-b rounded-l px-2 py-2 cursor-pointer ${active==="o"?'border-orange-400 bg-[#fff0ed] transition-all ':"font-medium"} `}>
                <img src={assets.order_icon} alt="" />
                <p>Orders</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
