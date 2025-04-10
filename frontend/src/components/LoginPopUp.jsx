
import React, { useContext, useState ,useEffect,} from 'react'
import { StoreContext } from '../context/StoreContext'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const LoginPopUp = () => {

    const navigate = useNavigate()
       const url = "http://localhost:4000"

       const {token,setToken} = useContext(StoreContext);
       

    const [currState,setCurrState] = useState('Sign Up')
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""


    })
    
  
    const onChangeHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;


        setData(data=>({...data,[name]:value}))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        console.log(data)
        // const formData = new FormData;

        // formData.append("name",data.name);
        // formData.append("email",data.email);
        // formData.append("password",data.password);
         let newURL = url;
        if(currState==='Login'){
            newURL += '/api/user/login'
        }else{
            newURL += '/api/user/register'
        }

        const response = await axios.post(newURL,data);
        if(response.data.success){
            console.log(response.data.token)
            setToken(response.data.token);
           
            localStorage.setItem("token",response.data.token)
            setData({
                name:"",
                email:"",
                password:""
                
            })
            
        }
       else{
        alert(response.data.message)
       }
    }
    
    useEffect(() => {
        if (token) {
          navigate('/')
        }
      }, [token])
    
  return (
    <div className='mt-10'>
        <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
        <h2 className='text-2xl font-semibold'>{currState==='Sign Up'?"Create Account":"Login"}</h2>
            <p>Please {currState === 'Sign Up' ? 'sign up' : 'log in'} for odering food</p>
            {currState==="Sign Up"?
            <div className='w-full '>
                <p>Full Name</p>
                <input type="text" onChange={onChangeHandler} value={data.name} name='name' className='border border-[#DADADA] rounded w-full p-2 mt-1' required/>
            </div>
            :   null             

            }
             <div className='w-full '>
                <p>Email</p>
                <input onChange={onChangeHandler} name='email' value={data.email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
             </div>
             <div className='w-full '>
                <p>Password</p>
                <input onChange={onChangeHandler} value={data.password} name='password' className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
             </div>
             <button type='submit' className='bg-orange-500 text-white w-full py-2 my-2 rounded-md text-base cursor-pointer'>{currState === 'Sign Up' ? 'Create account' : 'Login'}</button>
            {currState === 'Sign Up'
            ? <p>Already have an account? <span onClick={() => setCurrState('Login')} className='text-orange-600 underline cursor-pointer'>Login here</span></p>
            : <p>Create an new account? <span onClick={() => setCurrState('Sign Up')} className='text-orange-600 underline cursor-pointer'>Click here</span></p>
            }
        </div>
            

        </form>

    </div>
  )
}

export default LoginPopUp