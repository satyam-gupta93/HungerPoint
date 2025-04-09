
import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify';

const Add = () => {
    
    const url = "http://localhost:4000";
    const [image,setImage] = useState(false);
    const [data,setData] = useState({
        name:"",
        description:'',
        price:'',
        category:'Salad'

    })
    const onChangeHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value
        setData(data=>({...data,[name]:value}))
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        console.log(data); // Make sure 'data' is defined
        console.log(URL.createObjectURL(image));
        const formData = new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))
        formData.append("category",data.category)
        formData.append("image",image)
        const response = await axios.post(`${url}/api/food/add`,formData);
        if(response.data.success){
            setData({
                name:"",
                description:'',
                price:'',
                category:'Salad',
               
        
            });
            setImage(false)
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
        }else{
           toast.error(response.data.message)
        }
        
      }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4 w-full ">
      <form onSubmit={submitHandler} className="w-full max-w-2xl  bg-white p-8 rounded-2xl shadow-lg space-y-6 mb-10">
        <div>
          <p className="text-lg font-semibold mb-2">Upload Image</p>
          <label htmlFor="image" className="block cursor-pointer">
            <div className="w-full h-48 border-2 border-dashed border-gray-300 rounded-lg flex justify-center items-center hover:border-orange-400 transition">
              <img src={image?URL.createObjectURL(image):assets.upload_area} alt="Upload" className="h-16 opacity-50" />
            </div>
          </label>
          <input  onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required />
        </div>

        <div>
          <p className="text-lg font-semibold mb-2">Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <p className="text-lg font-semibold mb-2">Product Description</p>
          <textarea
           onChange={onChangeHandler}
           value={data.description}
            name="description"
            rows="4"
            placeholder="Write content here..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <p className="text-lg font-semibold mb-2">Product Category</p>
            <select
             onChange={onChangeHandler}
             value={data.category}
              name="category"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desert">Desert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          <div>
            <p className="text-lg font-semibold mb-2">Product Price</p>
            <input
             onChange={onChangeHandler}
             value={data.price}
              type="number"
              name="price"
              placeholder="₹16"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
        </div>

        <div className="text-center">
          <button
            
            type="submit"
            className="bg-orange-400 text-white px-10 py-2 rounded-full hover:bg-orange-500 transition duration-200 shadow-md"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  )
}

export default Add
