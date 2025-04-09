import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ExploreMenu from '../components/ExploreMenu'
import FoodDisplay from '../components/FoodDisplay';

import AppDownload from '../components/AppDownload';


const Home = () => {

    const [category,setCategory] = useState("All");
    useEffect(() => {
     
    }, [category]); // Runs whenever `category` changes

  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category}/>
        <AppDownload/>



    </div>
  )
}

export default Home