import React from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { Home } from "./Home";
import { Ofertas } from "./Ofertas";
import { AboutUs } from "./AboutUs";

export const Navigation = () => {
  return (
    <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Ofertas' element={<Ofertas/>} />
          <Route path='/AboutUs' element={<AboutUs/>} />
        </Routes>
    </BrowserRouter>
  )
}
