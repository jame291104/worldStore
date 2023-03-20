import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'

export const Header = () => {
  return (
    <div className='encabezado'>
       <div className="logo">
            <img src="./img/logo1.png" alt="logo"/>
        </div>
        <nav>
            <ul className="links">
                <li><Link className="text-decoration-none text-light" to='/'>Inicio</Link></li>
                <li><Link className="text-decoration-none text-light" to='/Ofertas'>Ofertas</Link></li>
                <li><Link className="text-decoration-none text-light" to='/AboutUs'>Nosotros</Link></li>
            </ul>
        </nav>
        
        
        
    </div>
  )
}
