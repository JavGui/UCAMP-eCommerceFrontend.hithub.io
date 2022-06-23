import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../context/UserContext'
import Logo from '../imagenes/Logo Huud pantone 10267 C.png'

import '../App.css'

export default function Header () {
    const userCtx = useContext(UserContext)
    const { authStatus } = userCtx
    const CarCtx = useContext(UserContext)
    const { carrito } = CarCtx

    if (authStatus ) {
        console.log('carrito: ', carrito)
    } 
        

    return(
        <header className="encabezado">
            <div className="encabezado-izquierda">
                <div>
                    <Link to="/"><img className="logo" src= { Logo } alt="Logotipo"/></Link>                  
                </div>
                <nav>                
                    <Link to='/catalogo' className='linea' >Nuestro Catálogo</Link>
                </nav>              
            </div>
            <div className="encabezado-derecha">
                <nav>           
                    { authStatus ? <a href="/" className='linea' >Cerrar Sesión</a> : <Link to='/login' className='linea' >Iniciar Sesión</Link>}
                </nav>
                <nav>
                { authStatus ? <Link to='/profile' className='linea' >Perfil Usuario</Link> : <Link to='/registro' className='linea' >Crear Cuenta</Link>}
                </nav>
                <nav>
                    <Link to='/carrito' className='linea' >Carrito</Link>
                </nav>
            </div>
      </header> 
    )
}
