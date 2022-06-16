import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../imagenes/Logo Huud pantone 10267 C.png'

import '../App.css'

export default function Header () {
    const id = ""
    return(
        <header className="encabezado">
            <div className="encabezado-izquierda">
                <div>
                    <a href="/"><img className="logo" src= { Logo } alt="Logotipo"/></a>                  
                </div>
                <nav>                
                    <Link to='/catalogo' className='linea' >Nuestro Catálogo</Link>
                </nav>              
            </div>
            <div className="encabezado-derecha">
                <nav>           
                    <Link to='/login' className='linea' >Iniciar Sesión</Link>
                </nav>
                <nav>
                    <Link to='/registro' className='linea' >Crear Cuenta</Link>
                </nav>
            </div>
      </header> 
    )
}
