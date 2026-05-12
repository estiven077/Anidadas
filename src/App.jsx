//import React from 'react'
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home"
import Productos from "./pages/Productos"
import Contact from "./pages/Contact"
import Male from "./pages/Male"
import Female from "./pages/Female"
const App = () => {
  return (
    <>

      <Header />
      <Navbar />
      <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/productos' element={<Productos/>}/>
      <Route path='/male' element={<Male/>}/>
      <Route path='/female' element={<Female/>}/>
      <Route path="/contact" element={<Contact/>}/>
        
      </Routes>

      <Footer />



    </>
  )
}

export default App
