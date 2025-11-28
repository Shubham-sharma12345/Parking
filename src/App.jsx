import React from 'react'
import Navbar from './Navbar'
import Banner from './Pages/Banner'
import Home from './Pages/Home'
import Top from './Top'
import StepsSection from './Pages/StepSection'
import Cards from './Pages/Cards'
import Pricing from './Pages/Pricing'
import Testimonials from './Pages/Testimonials'
import Footer from './Pages/Footer'

const App = () => {
  return (
    <div>
    <Top/>
  <Navbar/>
  <Banner/>
  <Home/>
  <StepsSection/>
  <Cards/>
  <Pricing/>
  <Testimonials/>
  <Footer/>
    </div>
  )
}

export default App
