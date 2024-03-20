import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
  
    
    </Routes>
    </BrowserRouter>
     
    
    </>
  )
}

export default App