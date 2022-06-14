import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../imagenes/Logo Huud pantone 10267 C.png'

import '../App.css'

export default function Header () {
    return(
        <header className="encabezado">
            <div className="encabezado-izquierda">
                <div>
                    <a href="/"><img className="logo" src= { Logo } alt="Logotipo"/></a>                  
                </div>
                <nav className="menu">                
                    <Link to='/catalogo' className='linea' ><h3>Nuestro Catálogo</h3></Link>
                </nav>              
            </div>
            <div className="encabezado-derecha">
                <nav>           
                    <Link to='/login' className='linea' ><h3>Iniciar Sesión</h3></Link>
                </nav>
                <nav>
                    <Link to='/cuenta' className='linea' ><h3>Crear Cuenta</h3></Link>
                </nav>
            </div>
      </header> 
    )
}
