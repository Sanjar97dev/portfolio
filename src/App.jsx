import React from 'react'
import Main from './components/Main'
import Hero from './components/Hero'
import Project from './components/Project'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className=' bg-indigo-600'>
      <Main/>
      <Hero/>
      <Project/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App
