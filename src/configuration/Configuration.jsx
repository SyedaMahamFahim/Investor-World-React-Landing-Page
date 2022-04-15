import React from 'react'
import {Routes,Route} from "react-router-dom";
import About from '../pages/About';
import Home from '../pages/Home';
const Configuration = () => {
  return (
    <>
    <Routes>
      <Route  index path="/" element={<Home/>} />
       <Route path="/about" element={<About/>} />
     
    </Routes>
    </>
  )
}

export default Configuration