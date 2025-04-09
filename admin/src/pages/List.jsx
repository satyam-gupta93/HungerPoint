


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const List = () => {
  const url = 'http://localhost:4000';
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error('Failed to fetch food list.');
      }
    } catch (error) {
      toast.error('Server Error');
      console.error(error);
    }
  };
 
  const removeFoodHandler = async (id)=>{
      
        const response = await axios.post(`${url}/api/food/remove`,{id:id});
        if(response.data.success){
            toast.success(response.data.message,{
                            style: {
                                background: '#fff7ed', // light orange background (Tailwind's orange-50)
                                border: '1px solid #fb923c', // Tailwind's orange-400
                                color: '#fb923c', // text color
                                padding: '12px 16px',
                                borderRadius: '8px',
                                fontWeight: '500',
                              },
                              iconTheme: {
                                primary: '#fb923c',
                                secondary: '#fff7ed',
                              },
                        })
            fetchList();
        }
        else{
            toast.error("Error")
        }
  }

  useEffect(() => {
    fetchList();
  }, [list]);

  return (
    <div className="p-4 md:p-8 w-full">
      <p className="text-xl md:text-2xl font-bold text-gray-700 mb-4">All Food Items</p>
      
      <div className="hidden md:grid grid-cols-5 gap-4 p-4 border-b font-semibold text-gray-600">
        <p>Food</p>
        <p>Name</p>
        <p>Category</p>
        <p>Price</p>
        <p>Action</p>
      </div>

      <div className="space-y-4 mt-4">
        {list.map((item, indx) => (
          <div
            key={indx}  
            className="grid grid-cols-1 md:grid-cols-5 items-center gap-4 p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-200"
          >
            <div className="w-full h-28 md:h-20 overflow-hidden flex items-center justify-center">
              <img src={item.image} alt={item.name} className="object-cover h-full w-full rounded-md" />
            </div>
            <p className="text-gray-800 font-medium">{item.name}</p>
            <p className="text-gray-600">{item.category}</p>
            <p className="text-green-600 font-semibold">₹{item.price}</p>
        
            <p onClick={()=>removeFoodHandler(item._id)} className="text-red-500 font-semibold hover:text-red-700 transition cursor-pointer ">Delete</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
