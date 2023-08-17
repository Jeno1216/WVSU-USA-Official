import React, { createContext, useEffect, useState } from "react" 
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from "./Home"
import NavBar from "./NavBar"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'; // Import the Bootstrap Icons CSS

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
