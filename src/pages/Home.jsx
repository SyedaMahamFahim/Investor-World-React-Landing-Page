import React from 'react'
import CallToAction from '../components/CallToAction/CallToAction'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import AboutUs from '../container/AboutUs/AboutUs'
import Blog from '../container/Blog/Blog'
import OurGoals from '../container/OurGoals/OurGoals'
import OurServices from '../container/OurServices/OurServices'
import Testimonials from '../container/Testimonials/Testimonials'

import Workflow from '../container/Workflow/Workflow'
const Home = () => {
  return (
    <>
    <Header/>
    <AboutUs/>
    <OurServices/>
    <OurGoals/>
    <Workflow/>
    <Testimonials/>
    <Blog/>
    <CallToAction/>
    <Footer/>
    </>
  )
}

export default Home