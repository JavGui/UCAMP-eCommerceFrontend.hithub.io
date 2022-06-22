import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/UserContext'
import '../../AppPer.css'

export default function Profile() {
  const userCtx = useContext(UserContext)
  const { users } = userCtx

  console.log('users: ', users)


  return(
    <div>
      <h1>Perfil del Usuario</h1>      
      <div className="Perfil">
        <div className="informacion">
          <div className="usuario">
              <label>Usuario</label>
              <p className="nombre">jguinea</p>
          </div>
          <div className="email">
              <label>Email</label>
              <p className="correo">javier@dom.com</p>
          </div>
          <div className="password">
              <label>Password</label>
              <p className="clave">**********</p>
          </div>
        </div>
        <div className="botones">
            <Link to='/' className="botonRegresaInicio">Regresa a Inicio</Link>
        </div>
      </div>
    </div>  
  )
}
