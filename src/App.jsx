import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import HeroBanner from './components/HeroBanner/HeroBanner'
import ProductCard from './components/ProductCard/ProductCard'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import { Home } from './pages/Home/Home'
import {BrowserRouter,Routes,Route,useLocation } from 'react-router-dom'
import Login from './pages/Auth/Login'
import SingnUp from './pages/Auth/SignUp'
import SignUp from './pages/Auth/SignUp'
import CorporateGifting from './pages/Corporategifting/CorporateGifting'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import { DynamicTitle } from './components/DynamicTitle/DynamicTitle'
import { CheckOut } from './pages/Checkout/CheckOut'
import Products from './components/Products/Products'
import Profile from './pages/Profile/Profile'
import ProductDetail from './pages/ProductDetails/ProductDetail'
import Cart from './pages/Cart/Cart'
import { Toaster } from "react-hot-toast";


function App() {

  return (
    <>
    <BrowserRouter>
    <DynamicTitle/>
    <Header/>
     <Nav/>
      <Toaster position="top-right" reverseOrder={false} />
     <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/corporate-gifting' element={<CorporateGifting/>}/>
      <Route path='/about-us' element={<About/>}/>
      <Route path='/contact-us' element={<Contact/>}/>
      <Route path='/products/:categoryName/:subCategoryName/:categoryId' element={<Products/>}/>
      <Route path='/product/:productName/:id' element={<ProductDetail/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<CheckOut/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
