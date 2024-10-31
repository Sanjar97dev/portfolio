import React from 'react'
import Hero from '../components/Hero'
import Project from '../components/Project'
import Testimonial from '../components/Testimonial'
import Skills from '../components/Skills'

const Home = () => {
  return (
    <div className=' bg-indigo-600'>
      <Hero/>
      <Project/>
      <Skills/>
      <Testimonial/>
    </div>
  )
}

export default Home
