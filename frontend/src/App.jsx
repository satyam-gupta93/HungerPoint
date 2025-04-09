import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import LoginPopUp from './components/LoginPopUp'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import MobileApp from './pages/MobileApp'


const App = () => {

    const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    <div className=''>
      {/* {showLogin ? <LoginPopUp/> : <></>} */}
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/login' element={<LoginPopUp/>}/> 
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>}/> 
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/mobile' element={<MobileApp/>}/> 
      </Routes>
    </div>
    <Footer/>
    </>
    
  )
}

export default App