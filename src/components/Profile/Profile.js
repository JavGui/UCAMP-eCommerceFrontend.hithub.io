import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/UserContext'
import '../../AppPer.css'

export default function Profile() {
  const userCtx = useContext(UserContext)
  const { users } = userCtx

  return(
    <div>
      <h1 className='titulo'>Perfil del Usuario</h1>      
      <div className="Perfil">
        <div className="informacion">
          <div className="usuario">
              <label>Usuario</label>
              <p className="nombre">{users[0].nombre}</p>
          </div>
          <div className="email">
              <label>Email</label>
              <p className="correo">{users[0].email}</p>
          </div>
          <div className="compras">
              <label className='etiqueta'>Última compra</label>
              <p className="clave">22/junio/2022</p>
          </div>
        </div>
        <div className='container'>
          <div className="row botonera">
            <div className='col-12'>
              <Link to='/' type='button' className="btn btn-primary botonRegresaInicio">Regresa a Inicio</Link>
            </div>
          </div>
        </div>
      </div>
    </div>  
  )
}
