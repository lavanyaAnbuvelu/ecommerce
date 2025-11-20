import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../assets/core/Main'
import Homepage from '../pages/Homepage'
import ContactPage from '../pages/ContactPage'
import AboutPage from '../pages/AboutPage'
import BreadPage from '../pages/BreadPage'
import Test from '../pages/Test'
import Blog from '../pages/Blog'
import OrderPage from '../pages/OrderPage'
import ScrollToTop from '../pages/ScrollToTop'

export default function Routers() {
  return (
   <>
   <BrowserRouter>
   <ScrollToTop />
   <Routes>
    <Route element={<Main/>}>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/contact' element={<ContactPage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/menu' element={<BreadPage/>}/>
    <Route path='/test' element={<Test/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/order' element={<OrderPage/>}/>

    </Route>
   </Routes>
   </BrowserRouter>
   </>
  )
}
