import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../assets/core/Main'
import Homepage from '../pages/Homepage'
import Contact from '../pages/Contact'
import ContactPage from '../pages/ContactPage'
import AboutPage from '../pages/AboutPage'
import BreadPage from '../pages/BreadPage'

export default function Routers() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route element={<Main/>}>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/c' element={<Contact/>}/>
    <Route path='/contact' element={<ContactPage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/menu' element={<BreadPage/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
   </>
  )
}
