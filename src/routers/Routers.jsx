import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Testimonial from '../components/Testimonial'
import Home from '../pages/Home'
import Project from '../components/Project'
import Skills from '../components/Skills'
import SkillDetail from '../components/SkillDetail'

const Routers = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path='/project' element={<Project/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/skills/:skillId' element={<SkillDetail/>}/>
      </Routes>
  )
}

export default Routers
